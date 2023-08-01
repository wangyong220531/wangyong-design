import { FC } from "react"
import Styles from "./index.module.less"
import Vehicle from "../../assets/Vehicle.png"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

export interface CardProps {
    id: string
    name: string
    imgUrl: string
    haveVehicle: boolean
}

const Card: FC<CardProps> = props => {
    const { imgUrl, name, haveVehicle } = props
    return (
        <div className={c("card")}>
            {haveVehicle && (
                <div className={c("tag")}>
                    <img src={Vehicle} width={16} />
                </div>
            )}
            <img className={c("portrait")} src={imgUrl} alt="" />
            <div className={c("info-box")}>
                <div className={c("name")}>{name}</div>
            </div>
        </div>
    )
}

export default Card
