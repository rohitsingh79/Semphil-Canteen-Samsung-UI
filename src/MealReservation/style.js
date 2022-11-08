import styled from 'styled-components';

export const BookMealWrapper = styled.div`
height:50%;
width:100%;
border:1px solid black;
margin-bottom:24px;

.wrapper{
    display:flex;
    flex-direction:column;
}

.MealReservation{
    display:flex;
    justify-content:center;
    align-items:center;
    background:orange;
    height:25%;
    border:1px dotted yellow;
}
.MealReservationText{
    color:white;
    font-weight:700;
}
`

export const Button = styled.button`
border-radius:10px;
color:orange;
background:#ffffff;
font-weight:700;
margin:auto auto;
`;