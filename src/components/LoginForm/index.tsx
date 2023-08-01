import { FC } from "react"
import Styles from "./index.module.less"
import { Button, Form, Input } from "antd"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

const LoginForm: FC = () => {
    const handleSubmit = e => {
         e.preventDefault()
        // 提交登录逻辑
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                用户名:
                <input type="text" name="username" />
            </label>

            <label>
                密码:
                <input type="password" name="password" />
            </label>
            <button type="submit">登录</button>
        </form>
    )
}

export default LoginForm
