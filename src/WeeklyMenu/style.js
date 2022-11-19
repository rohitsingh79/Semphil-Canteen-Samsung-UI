import styled from 'styled-components';

const MenuWrapper = styled.div`
display:flex;
flex-direction:column;
`;

const MenuList = styled.div`
width:100%;
height:100%;
background:#454545;
.menuText{
    color:white;
    display:flex;
    align-self:start;
    margin-bottom:10px;
    padding-top:16px;
    padding-left:16px;
}
`;

const GridItems = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
.menuListItem {
    height:120px;
    width:100px;
    border-radius:20px;
    z-index:1;
    background:blue;
    margin:5px;
    display:flex;
    align-self:center;
    justify-content:center;
    align-items:flex-end;

}
`;

const TextMenu = styled.div`
margin-bottom:30px;
font-size:12px;
margin-right:8px;
margin-left:8px;
color:#ffffff;
`;

const MenuCard = styled.div`
height:120px;
width:100px;
border-radius:25px;
z-index:1;
background:${props => props.color};
margin:5px;
display:flex;
align-self:center;
justify-content:center;
align-items:flex-end;
`;

const SuggestionWrapper = styled.div`
width:100%;
height:100%;
border:1px solid black;
background:black;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.suggestionText{
    margin-left:8px;
    margin-right:8px;
    margin-bottom:8px;
    color:white;
}
`;

export const ImageWrapper = styled.div`
height:50%;
width:20%;
`;

const MenuOfDayWrapper = styled.div`
height:100%;
width:100%;
background:red;
border:1px solid black;
padding:16px;
box-sizing:border-box;
.text{
    color:white;
    font-size:12px;
    display:flex;
    justify-content:space-between;
}
.date{
    border:1px solid #ffffff;
    padding:5px;
    border-radius:45%;
}
.menuDish{
    color:#ffffff;
}
`;

export {MenuList ,GridItems,TextMenu , MenuCard , MenuWrapper ,SuggestionWrapper , MenuOfDayWrapper};