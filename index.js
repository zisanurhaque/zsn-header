import { useState } from "react"

export const Header = (props) => {

    return(
        <div className="package_header" style={{background: props.bg}}>
            {props.children}
        </div>
    )
}

export const Menu = (props) => {

    const [toggle, setToggle] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        if(toggle === false){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }

    return(
        <>
        
        <div className={toggle === false ? "package_menu" : "package_menu mobile"}>
            {props.children}
        </div>

        <button className="bars" onClick={(e) => handleClick(e)}>
            <hr></hr>
            <hr></hr>
            <hr></hr>
        </button>
        
        </>
    )
}

export const Brand = (props) => {

    return(
        <div className="package_brand">
            {props.children}
        </div>
    )
}