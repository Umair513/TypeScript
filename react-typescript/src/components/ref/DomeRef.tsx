import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const DomeRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomeRef
