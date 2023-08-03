import { FC, useState } from "react"
// import QJPPoliceIcon from "../../assets/qjpPolice.png"
import Camera from "../../assets/camera.png"
import Setting from "../../assets/setting.png"
import MurrayPortrait from "../../assets/MurrayPortrait.jpg"
import NongMei from "../../assets/nongMei.jpg"
import YueJiQi from "../../assets/yueJiQi.jpg"
import XiaoBoTe from "../../assets/xiaoBoTe.jpg"
import TeLeiYang from "../../assets/teLeiYang.jpg"

interface Portrait {
    id: string
    img: string
}

const Search: FC = () => {
    const portraits: Portrait[] = [
        {
            id: "000",
            img: MurrayPortrait
        },
        {
            id: "001",
            img: NongMei
        },
        {
            id: "002",
            img: YueJiQi
        },
        {
            id: "003",
            img: XiaoBoTe
        },
        {
            id: "004",
            img: TeLeiYang
        }
    ]

    const [showUpload, setShowUpload] = useState(false)

    async function submit() {}

    return (
        <>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3">
                <div className="w-[628px] h-[124px] absolute left-1/2 -translate-x-1/2 flex flex-col justify-center gap-y-[40px] text-center">
                    <div className="flex flex-col gap-y-[8px] items-center">
                        {/* <img src={QJPPoliceIcon} alt="" width={100} /> */}
                        <div className="text-4xl text-[#233783] font-semibold">NBA PlayerHub</div>
                    </div>
                    <div className="relative">
                        <form onSubmit={submit} className="flex items-center">
                            <div className="border-[1px] border-[#233783] border-inherit h-12 w-[500px] px-2 rounded-tl rounded-bl flex items-center gap-x-2 cursor-pointer">
                                <input className="w-[440px] h-8 focus:outline-none" />
                                <img src={Camera} alt="" width={20} height={20} onClick={() => setShowUpload(!showUpload)} />
                                <img src={Setting} alt="" width={20} height={20} />
                            </div>
                            <input type="submit" value="开始检索" className="bg-[#233783] text-white text-base h-12 w-32 cursor-pointer rounded-tr rounded-br" />
                        </form>
                    </div>
                </div>
                {showUpload && (
                    <div className="w-[628px] h-[342px] p-[14px] absolute top-[190px] left-1/2 -translate-x-1/2 rounded shadow-lg shadow-tl shadow-tr shadow-br shadow-bl shadow-grey flex flex-col gap-y-[16px] items-center">
                        <div className="border-[1px] border-[#686868ae] text-[#000] border-dashed rounded cursor-pointer w-[600px] h-[142px] flex justify-center items-center">拖拽图片到这里</div>
                        <div className="border-[1px] border-[#686868ae] border-dashed rounded cursor-pointer w-[600px] h-[156px] p-[13px] grid grid-cols-5 gap-x-[6px]justify-center items-center">
                            {portraits.map(portrait => {
                                return (
                                    <div key={portrait.id}>
                                        <img src={portrait.img} alt="" width={110} className="h-[130px] border-[1px] border-[#000]" />
                                    </div>
                                )
                            })}
                        </div>
                        <input type="button" value="选择文件" className="bg-[#233783] w-[90px] text-[#fff] p-[6px] rounded cursor-pointer" />
                    </div>
                )}
            </div>
        </>
    )
}

export default Search
