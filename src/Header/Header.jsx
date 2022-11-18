import styled from 'styled-components';
import Settings from './Settings.svg';
import Flag from './Flag.svg';
import Power from './Power.svg';
import LogoImage from './LogoImage.svg';
import Passport from './Passport.jpg'

const HeaderWrapper = styled.div`
position:absolute;
width:100%;
height:100px;
padding-left:3%;
padding-right:3%;
padding-top:2%;
top:2px;
left:0;
display:flex;
justify-content:space-between;
box-sizing:border-box;
border:1px solid brown;
`;

const AccountDetailWrapper = styled.div`
width:40%;
height:60%;
display:flex;
justify-content:space-between;
`;

const Logo = styled.div`
width:20%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
.logoImg{
    width:10%;
    height:100%;
}
`;

const AccountSettings = styled.div`
display:flex;
width:60%;
height:100%;
justify-content:space-between;
background:#fff;
box-shadow:0px 0px 56px -8px rgb(0 0 0 / 17%);
.nameText{
    align-self:center;
    color:grey;
}
.flexImage{
    height:100%;;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:2%;
}
`;

const AccountOption = styled.div`
width:10%;
height:100%;
background:#fff;
box-shadow:0px 0px 56px -8px rgb(0 0 0 / 17%);
border-radius:5%;
box-sizing:border-box;
padding:8px;
`;

function Header() {
  return (
    <HeaderWrapper>
       <Logo>
           <div className='logoImg'> 
               
               <img src = {LogoImage} style = {{height:'100%' , width:'100%'}}/>
           </div>
           <div>Hello</div>
        </Logo>
       <AccountDetailWrapper>
         <AccountSettings>
           <div className = 'border'>
               <img src = {Passport} style = {{height:'100%' , width:'100%'}}></img>
           </div>
           <div className='nameText'>Rohit Pratap Singh</div>
           <div className='flexImage'>
               <img src = {Settings} style = {{height:'80%' , width:'80%'}}/>
           </div>
         </AccountSettings> 
         <AccountOption>
         <img src = {Flag} style = {{height:'100%' , width:'100%'}}/>
           </AccountOption>  
        <AccountOption>
        </AccountOption> 
        <AccountOption>
        <img src = {Power} style = {{height:'100%' , width:'100%'}}/>    
        </AccountOption> 
       </AccountDetailWrapper>
     </HeaderWrapper>
  );
}

export default Header;
