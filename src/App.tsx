import { FC } from "react"
import Gallery, { CardProps } from "./components/Gallery"

const App: FC = () => {
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
    return <Gallery cards={cards}/>
}

export default App
