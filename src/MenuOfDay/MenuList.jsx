
// displays the menu list
import styled from 'styled-components';
import HOC from '../HOC/HOC';
import BreakFast from './BreakFast.jpg';
import Lunch from './Lunch.jpg';
import Snack from './Snack.jpg';

 const MenuWrapper = styled.div`
  height:100%;
  width:100%;
  background: linear-gradient(#E52B50, #F28C28);
  box-sizing: border-box;
  padding: 24px;
  position: relative;
  .MenuFlex {
    display: flex;
    margin-bottom: 5%;
  }
  .flex1 {
    position: relative;
    top: 5px;
    color: white;
    z-index:999;
  }
  .flex2 {
    border-bottom: 3px dotted white;
    flex: 1;
    z-index:999;
  }
  .flex3 {
    position: relative;
    top: 5px;
    color: white
  }
`;

 const MenuBackground = styled.div`
  height: 45%;
  width: 60%;
  background: #E32636;
  border-bottom-right-radius: 25%;
  position: absolute;
  top:0;
  left: 0;
  z-index: 23;
  z-index:1;
`;


const BoxContent =  styled.div`
height:50%;
width:100%;
.spacingTop{
  margin-top:15%;
}
`;

const MenuTypeWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top:10%;
`;

const ImgTextWrapper = styled.div`
  margin-top:20%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const ImgDiv = styled.div`
  height: 50%;
  border-radius: 10%;
`;

const TextDiv = styled.div`
  color: white;
  font-size: 14px;
  align-self: center;
  margin-top: 12px;
  font-weight:bold;
  opacity:0.5;

`;

const HeadingWrapper = styled.div`
position:absolute;
display:flex;
width:100%;
justify-content:space-between;
top:2%;
left:0;
z-index:999;
.headingText{
  color:white;
  margin-left:24px;
}
.date{
  border:1px solid white;
  margin-right:10px;
  border-radius:5px;
  box-sizing:border-box;
  padding-left:10px;
  padding-right:10px;
  font-size:14px;
  color:white;
}
`;

function MenuList(){

    const menuList = [
        {
          name: "Chicken adobo",
          price: '35.00'
        },
        {
          name: "Ginataang langka",
          price: '20.00/10.00'
        },
        {
          name: "Miswa patola",
          price: '20.00/10.00'
        },
        {
          name: "upo & kalabasa",
          price: '20.00/10.00'
        },
        {
          name: "Spciy lumpiang shangai",
          price: '25.00'
        },
        {
          name: "Buko Salad",
          price: '25.00'
        },
        {
          name: "Pork menudo",
          price: '35.00'
        },

        {
          name: "Adobong isda",
          price: '35.00'
        },
        {
          name: "Tortang dulong",
          price: '35.00'
        },

      ];

    return(
       <MenuWrapper>
         <HeadingWrapper>
           <div className='headingText'>Menu of the day</div>
           <div className='date'>2019-05-21</div>
         </HeadingWrapper>
           <MenuBackground></MenuBackground>
           <BoxContent>
             <div className='spacingTop'>
           {menuList.map((item) => {
        return (
          <div className="MenuFlex">
            <div className="flex1">{item.name}</div>
            <div className="flex2" />
            <div className="flex3">{item.price}</div>
          </div>
        );
      })}
      </div>
            </BoxContent>
            <BoxContent>
     <MenuTypeWrapper>
        <ImgTextWrapper>
          <ImgDiv>
          <img src = {BreakFast}
          style = {{height:'100%',
        width:'100%',
        'border-radius':'10%'
        }}
          />
          </ImgDiv>
          <TextDiv>Breakfast</TextDiv>
        </ImgTextWrapper>
        <ImgTextWrapper>
          <ImgDiv>
          <img src = {Snack}
          style = {{height:'100%',
        width:'100%',
        'border-radius':'10%'
        }}
          />
          </ImgDiv>
          <TextDiv>Snacks</TextDiv>
        </ImgTextWrapper>
        <ImgTextWrapper>
          <ImgDiv>
          <img src = {Lunch}
          style = {{height:'100%',
        width:'100%',
        'border-radius':'10%'
        }}
          />
          </ImgDiv>
          <TextDiv>Lunch</TextDiv>
        </ImgTextWrapper>
        
      </MenuTypeWrapper>

     </BoxContent>
       </MenuWrapper>
    )

}

export default MenuList = HOC(100 ,MenuList , false );