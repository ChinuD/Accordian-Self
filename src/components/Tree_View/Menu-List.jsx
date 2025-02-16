import { useState } from "react"
import MenuItem from "./Menu-Item"
import './styles.css'

export default function MenuList({list=[]}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    
    return (
    <ul className="menu-list-container">
        {
            list && list.length ? 
                list.map(listItem => <MenuItem item={listItem}/>)
            : null
        }
    </ul>)
}