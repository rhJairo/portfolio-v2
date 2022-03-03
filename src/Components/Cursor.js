import React from "react";

function Cursor(){
    const delay =  18

    const endX = React.useRef(window.innerWidth / 2)
    const endY = React.useRef(window.innerHeight / 2)
    const _x = React.useRef(0)
    const _y = React.useRef(0)
    const requestRef = React.useRef(null)

    const dot = React.useRef()
    const dotOutline = React.useRef()

    const mouseMoveEvent = e =>{
        endX.current = e.pageX
        endY.current = e.pageY

        dot.current.style.top = endY.current + 'px'
        dot.current.style.left = endX.current + 'px'
    }

    const animateDotOutline = () =>{
        _x.current += (endX.current - _x.current) / delay
        _y.current += (endY.current - _y.current) / delay

        dotOutline.current.style.top = _y.current + 'px'
        dotOutline.current.style.left = _x.current + 'px'

        requestRef.current = requestAnimationFrame(animateDotOutline)
    }

    React.useEffect(()=>{
        document.addEventListener('mousemove',mouseMoveEvent)
        animateDotOutline()
        return function cleanup() {
            document.removeEventListener('mousemove',mouseMoveEvent)
        }
    })

    return(
        <>
            <div ref={dotOutline} className='cursor-dot-outline'></div>
            <div ref={dot} className='cursor-dot'></div>
        </>
    )
}

export default Cursor