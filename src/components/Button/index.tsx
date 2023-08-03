import { FC } from "react"
import Styles from "./index.module.less"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

export interface BtnProps {
    text: string
}

const Button: FC<BtnProps> = props => {
    const { text } = props
    return <div className={c("button")}>{text}</div>
}

export default Button
