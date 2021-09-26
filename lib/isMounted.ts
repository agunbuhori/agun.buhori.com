import { useEffect, useState } from "react"

const isMounted = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted
}

export default isMounted