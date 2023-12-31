import { FC, useEffect, useState } from "react"

export interface CardProps {
    id?: string
    text: string
}

const Card: FC<CardProps> = props => {
    const { text } = props
    return <div className="w-[100px] h-[160px] bg-blue-700 text-[#fff] flex justify-center items-center">{text}</div>
}

export interface GalleryProps {
    cards: CardProps[]
}

const Gallery: FC<GalleryProps> = props => {
    const { cards } = props
    const [isSpecial, setIsSpecial] = useState(false)

    useEffect(() => {
        const el = document.getElementById("box")
        if (el) {
            const x = Math.floor(parseFloat(getComputedStyle(el).width))
            el.style.width = `${x}`
            if ((x + 10) % 110 !== 0) {
                setIsSpecial(true)
            } else {
                setIsSpecial(false)
            }
        }
    }, [])

    return (
        <div className="p-[40px]">
            <div id="box" className="bg-blue-100 flex flex-wrap gap-[10px]" style={isSpecial ? { justifyContent: "space-between" } : {}}>
                {cards.map(card => {
                    return <Card key={card.id} text={card.text} />
                })}
            </div>
        </div>
    )
}

export default Gallery
