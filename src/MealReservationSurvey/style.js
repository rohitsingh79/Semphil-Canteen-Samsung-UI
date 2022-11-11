import styled from 'styled-components';

export const MealReservationWrapper = styled.div`
height:100%;
width::100%;
display:flex;
flex-direction:column;
`;

export const BookMealWrapper = styled.div`
height:50%;
width:100%;
border:1px solid red;
margin-bottom:24px;
display:flex;
flex-direction:column;
background:orange;

.reservationText{
    font-weight:700;
    color:white;
    font-size:20px;
    align-self:center;
    margin-top:10px;
    
}
`;

export const SurveyWrapper = styled.div`
height:45%;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
border:1px solid brown;
.cAMHNb{
    gap:0;
}
.canvas_chart{
    margin-block:0!important;
    height:220px! important;
    width:220px! important;
}
`;

export const Button = styled.button`
color:orange;
font-size:16px;
background:#ffffff;
font-weight:700;
width:50%;
padding:10px;
border-radius:10px;
align-self:center;
margin-top:-10px;
`;