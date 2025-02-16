import { useState } from "react"
import MenuList from "./Menu-List"
import './styles.css'
import {FaMinus,FaPlug} from 'react-icons/fa'

export default function MenuItem({item}){
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren, [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
        })
    }

    console.log(displayCurrentChildren)

    return (
    <li className="menu-list-container">
        <div style={{display: 'flex', gap:'20px'}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children ? 
                <span onClick={()=>handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? '-' : '+'
                    }
                </span> : null
            }
        </div>

        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList list={item.children}/>
            :null
        }
    </li>)


}