import { FC } from "react"
import Card from "./components/Card"
import JamalMurray from "./assets/JamalMurray.webp"

const App: FC = () => {
    return (
        <>
            <Card id={"001"} name={"Jamal Murray"} imgUrl={JamalMurray} haveVehicle={true} />
        </>
    )
}

export default App
