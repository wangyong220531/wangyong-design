import { forwardRef, useEffect, useState } from "react"
import { Button, Input } from "antd"

export interface SubmitData {
    name: string
}

interface QueryProps {
    onSubmit: (data: SubmitData) => void
    onReset: () => void
}

export interface QueryInstance {
    reset: () => void
}

const Query = forwardRef<QueryInstance, QueryProps>((props, ref) => {
    const { onSubmit, onReset } = props
    const [name, setName] = useState("")

    useEffect(() => {
        if (!ref) return
        const obj: QueryInstance = { reset }
        if (typeof ref === "function") {
            ref(obj)
        } else {
            ref.current = obj
        }
    }, [])

    function submit() {
        onSubmit({
            name
        })
    }

    function setDefault() {
        reset()
        onReset()
    }

    function reset() {
        setName("")
    }

    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] flex gap-x-[10px]">
            <Input value={name} onChange={e => setName(e.target.value)} />
            <Button onClick={submit}>检索</Button>
            <Button onClick={setDefault}>重置</Button>
        </div>
    )
})

export default Query
