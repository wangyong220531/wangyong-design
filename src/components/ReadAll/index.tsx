import { FC } from "react"

export interface ReadAllProps {
    title: string
    content: string
}

const ReadAll: FC<ReadAllProps> = props => {
    const { title, content } = props
    return (
        <div className="w-[500px] h-[800px] border-[10px] border-orange-200 rounded-xl">
            <div className="">{title}</div>
            <div className="">{content}</div>
        </div>
    )
}

export default ReadAll
