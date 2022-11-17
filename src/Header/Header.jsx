import styled from 'styled-components';

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
`;

const AccountDetailWrapper = styled.div`
width:40%;
height:60%;
display:flex;
justify-content:space-between;
`;

const Logo = styled.div`
border:1px solid yellow;
width:20%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`;

const AccountSettings = styled.div`
display:flex;
width:60%;
height:100%;
justify-content:space-between;
background:#fff;
box-shadow:0px 0px 56px -8px rgb(0 0 0 / 17%);
.border{
  border:1px solid red;
}
.nameText{
    align-self:center;
    color:grey;
}
`;

const AccountOption = styled.div`
width:10%;
height:100%;
background:#fff;
box-shadow:0px 0px 56px -8px rgb(0 0 0 / 17%);
border-radius:5%;
`;

function Header() {
  return (
    <HeaderWrapper>
       <Logo>hello</Logo>
       <AccountDetailWrapper>
         <AccountSettings>
           <div className = 'border'>Image</div>
           <div className='nameText'>Syed Mohiddin Hussainy</div>
           <div className = 'border'>Settings</div>
         </AccountSettings> 
         <AccountOption/>
        <AccountOption/> 
        <AccountOption/> 
       </AccountDetailWrapper>
     </HeaderWrapper>
  );
}

export default Header;
