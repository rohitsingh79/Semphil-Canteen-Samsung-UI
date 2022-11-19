import styled from 'styled-components';
import Settings from './Settings.svg';
import Flag from './Flag.svg';
import Power from './Power.svg';
import LogoImage from './LogoImage.svg';
import Passport from './Passport.jpg'
import Utility from './Utility.svg'

const HeaderWrapper = styled.div`
width:100%;
height:12%;
@media screen and (min-device-width: 501px) and (max-device-width: 1200px) { 
  height:5%;
}
@media screen and (max-width: 500px) {
  height:5%;
}

padding-left:32px;
padding-right:32px;
padding-top:16px;
@media screen and (max-width: 500px) {
  padding-top:12px;
}
display:flex;
justify-content:space-between;
box-sizing:border-box;

.logoSemphilText{
  font-size:26px;
  font-weight:bold;
  @media screen and (min-device-width: 501px) and (max-device-width: 1200px) { 
    font-size:20px;
  }
  @media screen and (max-width: 500px) {
    font-size:14px;
  }
}
.logoCanteenText{
  font-size:24px;
  @media screen and (min-device-width: 501px) and (max-device-width: 1200px) { 
    font-size:18px;
  }
  @media screen and (max-width: 500px) {
    font-size:12px;
  }
}
`;

const AccountDetailWrapper = styled.div`
width:50%;
height:60%;
display:flex;
justify-content:space-between;
`;

const LogoWrapper = styled.div`
height:100%;
width:30%;
display:flex;
.logoImg{
    width:35%;
    height:100%;
}
.canteenHeading{
    color:indigo;
    align-self:center;
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
    @media screen and (min-device-width: 501px) and (max-device-width: 1200px) { 
      font-size:10px;
    }
    @media screen and (max-width: 500px) {
      font-size:6px;
    }
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
@media screen and (min-device-width: 501px) and (max-device-width: 1200px) { 
  padding:4px;
}
@media screen and (max-width: 500px) {
  padding:1px;
}

`;

function Header() {
  return (
    <HeaderWrapper>
        <LogoWrapper>
        <div className= 'logoImg'>
        <img src = {LogoImage} style = {{height:'100%' , width:'100%'}}/>
        </div>
        <div className = 'canteenHeading'>
         <span className='logoSemphilText'>SEMPHIL</span> 
         <div className='logoCanteenText'>CANTEEN</div> 
        </div>
        </LogoWrapper>
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
        <img src = {Utility} style = {{height:'100%' , width:'100%'}}/>
        </AccountOption> 
        <AccountOption>
        <img src = {Power} style = {{height:'100%' , width:'100%'}}/>    
        </AccountOption> 
       </AccountDetailWrapper>
     </HeaderWrapper>
  );
}

export default Header;
