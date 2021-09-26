import { useEffect, useRef } from "react"

export default function isMounted(): { current: boolean } {
    const componentIsMounted = useRef(true)
    useEffect(() => {
      return () => { componentIsMounted.current = false }
    }, [])
    return componentIsMounted
  }