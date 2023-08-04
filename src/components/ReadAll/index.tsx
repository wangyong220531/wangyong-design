import { FC } from "react"

export interface ReadAllProps {
    title: string
    content: string
}

const ReadAll: FC<ReadAllProps> = props => {
    const { title, content } = props
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-[14px]">
            <div className="w-[500px] h-[800px] border-[4px] border-gray rounded-xl flex flex-col justify-center items-center overflow-y-scroll scrollbar-hide">
                <div className="text-[#000] text-[30px] font-black">{title}</div>
                <div className="break-all">{content}</div>
            </div>
            <div className="flex gap-x-[10px] justify-between">
                <label className="text-[12px] text-[#000] flex gap-x-[4px] items-center">
                    <input type="checkbox" />
                    我已阅读，已同意上述条款！
                </label>
                <input type="submit" value="确认" className="py-[2px] px-[20px] text-[#fff] bg-blue-600 rounded"></input>
            </div>
        </div>
    )
}

export default ReadAll
