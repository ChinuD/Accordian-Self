import MenuList from "./Menu-List"

export default function MenuItem({item}){

    return (
    <li className="menu-list-container">
        <div style={{display: 'flex', gap:'20px'}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children ? <span onClick={()=>handleToggleChildren()}>+</span> : null
            }
        </div>

        {
            item && item.children && item.children.length > 0 ?
                <MenuList list={item.children}/>
            :null
        }
    </li>)


}