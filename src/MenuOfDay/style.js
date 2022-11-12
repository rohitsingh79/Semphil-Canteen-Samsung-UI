import styled from "styled-components";

const Wrapper = styled.div`
height:100%;
width:100%;
background:linear-gradient(red ,orange);
padding:8px;
box-sizing:border-box;

.header{
    display:flex;
    justify-content:space-between;
    margin-top:10px;
}
.dateWrapper{
    border:1px solid blue;
}

.imageWrapper{
display:flex;
justify-content:space-around;


.foodTypeWrapper{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.foodTypeText{
    margin:0;
    color:white;
    font-size:10px;
    align-self:center;
}
}
`;

const MenuListWrapper = styled.div`
height:100%;
width:100%;
background:linear-gradient(pink , red , orange);
`

export {Wrapper ,MenuListWrapper};