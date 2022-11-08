import {Wrapper , MenuListWrapper} from './style';

function MenuList(){

    const menuList = [{recipeName:'Garlic Bread' , price:'24.00'}]

    return(
        <MenuListWrapper>
            {menuList.map((menu)=>{
                return (
                    <div>{menu.recipeName} {menu.price}</div>
                )
            })}
        </MenuListWrapper>
    )

}

export default MenuList