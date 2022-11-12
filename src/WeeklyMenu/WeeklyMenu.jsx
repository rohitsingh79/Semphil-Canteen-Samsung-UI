import {MenuList , GridItems , TextMenu , MenuCard ,MenuWrapper,} from './style' ;
import Suggestion from './Suggestion';
import HOC from '../HOC/HOC';

function WeeklyMenu(){

    const Menus = [{menuType:'Local Menu' , color:'blue'},
    {menuType:'Korean Menu' , color:'orange'},
    {menuType:'Special Menu' , color:'purple'},
    {menuType:'Healthy Menu',color:'yellow'}
  ] 

  return (
    <>
    <MenuList>
      <div className='menuText'>Weekly Menu List</div>
    <GridItems> 
     {Menus.map((menu , index)=>{

       return ( <MenuCard key = {index} color = {menu.color}><TextMenu>{menu.menuType}</TextMenu></MenuCard>)

     })}
    </GridItems>
     </MenuList>
 </>
  )


}

export default WeeklyMenu = HOC(75 , WeeklyMenu , Suggestion);
