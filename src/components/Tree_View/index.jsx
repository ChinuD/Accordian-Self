import MenuList from "./Menu-List"

export default function TreeView({menus=[]}){


    return (
    <div className="tree-view-container">
        <MenuList list={menus}/>
    </div>
    )


}