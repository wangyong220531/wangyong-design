import { FC, useEffect, useState } from "react"
import Styles from "./index.module.less"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

export interface LoginFormProps {
    title: string
}

const LoginForm: FC<LoginFormProps> = props => {
    const { title } = props
    const [captchaTimeout, setCaptchaTimeout] = useState(0)

    useEffect(() => {
        if (captchaTimeout === 0) return
        const timer = setTimeout(() => {
            setCaptchaTimeout(t => t - 1)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [captchaTimeout])

    async function queryCaptcha() {
        setCaptchaTimeout(60)
    }

    const submit = () => {}

    return (
        <div className={c("main")}>
            <div className={c("title")}>{title}</div>
            <form onSubmit={submit} className={c("form")}>
                <div className={c("username-wrapper")}>
                    <input autoComplete="false" placeholder="请输入用户名" required className={c("username-input")} />
                </div>
                <div className={c("captcha-wrapper")}>
                    <input autoComplete="false" placeholder="请输入验证码" required />
                    <button type="button" onClick={queryCaptcha}>
                        {captchaTimeout === 0 ? "获取验证码" : `${captchaTimeout}s后重新获取`}
                    </button>
                </div>
                <button type="submit" className={c("login-btn")}>
                    登录
                </button>
            </form>
        </div>
    )
}

export default LoginForm
