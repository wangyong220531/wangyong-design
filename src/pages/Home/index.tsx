import { FC, useRef } from "react"
import Query, { QueryInstance, SubmitData } from "../../components/Query"
import axios from "axios"
import { Button } from "antd"

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const queryRef = useRef<QueryInstance>(null)

    async function submitQuery(data: SubmitData) {
        const { name = "" } = data
        const result = await axios.post(
            "http://192.168.1.106/",
            {
                name
            },
            {
                headers: {
                    "content-type": "application/json"
                }
            }
        )
        console.log(result)
    }

    function resetQuery() {
        submitQuery({ name: "" })
        queryRef.current?.reset()
    }

    return (
        <div className="p-[40px]">
            <Query
                ref={queryRef}
                onSubmit={submitQuery}
                onReset={() =>
                    submitQuery({
                        name: ""
                    })
                }
            />
            <Button className="absolute bottom-[20px] right-[20px]" onClick={resetQuery}>
                重置检索
            </Button>
        </div>
    )
}

export default Home
