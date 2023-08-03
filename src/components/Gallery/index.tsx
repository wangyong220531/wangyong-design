import { FC, useEffect, useState } from "react"

export interface CardProps {
    id?: string
    text: string
}

const Card: FC<CardProps> = props => {
    const { text } = props
    return <div className="w-[100px] h-[160px] bg-black text-[#fff] flex justify-center items-center">{text}</div>
}

const Gallery: FC = () => {
    const cards: CardProps[] = [
        {
            id: "000",
            text: "A"
        },
        {
            id: "001",
            text: "B"
        },
        {
            id: "002",
            text: "C"
        },
        {
            id: "003",
            text: "D"
        },
        {
            id: "004",
            text: "E"
        },
        {
            id: "005",
            text: "F"
        },
        {
            id: "006",
            text: "G"
        },
        {
            id: "007",
            text: "H"
        },
        {
            id: "008",
            text: "I"
        },
        {
            id: "009",
            text: "J"
        },
        {
            id: "010",
            text: "K"
        },
        {
            id: "011",
            text: "L"
        },
        {
            id: "012",
            text: "M"
        },
        {
            id: "013",
            text: "N"
        },
        {
            id: "014",
            text: "O"
        },
        {
            id: "015",
            text: "P"
        },
        {
            id: "016",
            text: "Q"
        },
        {
            id: "017",
            text: "R"
        },
        {
            id: "018",
            text: "S"
        },
        {
            id: "019",
            text: "T"
        },
        {
            id: "020",
            text: "U"
        },
        {
            id: "021",
            text: "V"
        },
        {
            id: "022",
            text: "W"
        },
        {
            id: "023",
            text: "X"
        },
        {
            id: "024",
            text: "Y"
        },
        {
            id: "025",
            text: "Z"
        }
    ]

    const [isSpecial, setIsSpecial] = useState(false)

    useEffect(() => {
        const handleResize = () => {
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
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="p-[40px]">
            <div id="box" className="bg-blue-400 flex flex-wrap gap-[10px]" style={isSpecial ? { justifyContent: "space-between" } : {}}>
                {cards.map(card => {
                    return <Card key={card.id} text={card.text} />
                })}
            </div>
        </div>
    )
}

export default Gallery
