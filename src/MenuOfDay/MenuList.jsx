
// displays the menu list
import styled from 'styled-components';
import HOC from '../HOC/HOC';
import breakfast from './breakfast.png';

 const MenuWrapper = styled.div`
  height:100%;
  width:100%;
  background: linear-gradient(#E52B50, #FF5F1F);
  box-sizing: border-box;
  padding: 32px;
  position: relative;
  .MenuFlex {
    display: flex;
    margin-bottom: 5%;
  }
  .flex1 {
    flex: 0.1;
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
`;

const MenuTypeWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
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
  height: 80%;
  border-radius: 10%;
`;

const TextDiv = styled.div`
  color: black;
  font-size: 14px;
  align-self: center;
  margin-top: 10px;
`;

function MenuList(){

    const menuList = [
        {
          name: "Noodels",
          price: 10
        },
        {
          name: "Vegetables",
          price: 10
        },
        {
          name: "Fruits",
          price: 10
        },
        {
          name: "Vegetables",
          price: 10
        },
        {
          name: "Fruits",
          price: 10
        },
        {
          name: "Vegetables",
          price: 10
        },
        {
          name: "Fruits",
          price: 10
        }
      ];

    return(
       <MenuWrapper>
           <MenuBackground></MenuBackground>
           <BoxContent>
           {menuList.map((item) => {
        return (
          <div className="MenuFlex">
            <div className="flex1">{item.name}</div>
            <div className="flex2" />
            <div className="flex3">{item.price}</div>
          </div>
        );
      })}
            </BoxContent>
            <BoxContent>
     <MenuTypeWrapper>
        <ImgTextWrapper>
          <ImgDiv>
          <img src = {breakfast}
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
          <img src = {breakfast}
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
          <img src = {breakfast}
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