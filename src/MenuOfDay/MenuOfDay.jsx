import {Wrapper} from './style';
import breakfast from './breakfast.png';
import Image from '../Image/Image';
import MenuList from './MenuList'

function MenuOfDay(){

    const menu = [{recipeName:'Garlic Bread' , price:'24.00'}]

    const menuType = [
        {
        type:'Breakfast',
        src :breakfast,
        },
        {
            type:'SnackDinner',
            src :breakfast,
        },
        {
            type:'Lunch',
            src :breakfast,
        },

]

    return(
        <Wrapper>
            <div className='header'>
                <div>Menu of the day</div>
                <div className='dateWrapper'>2019-05-2021</div>
            </div>
            <MenuList/>
            <div className='imageWrapper'>
            {menuType.map((type , id)=>{
                return (
                    <div key = {id} className='foodTypeWrapper'>
                         <Image src = {type.src} imageHeight = '60px' imageWidth='60px' ></Image>
                         <p className = 'foodTypeText'>{type.type}</p>
                    </div>
                   
                    
                )

            })}
            </div>
        </Wrapper>
    )

}

export default MenuOfDay