import reservation from './reservation.jpg';
import Survey from './Survey';
import HOC from '../HOC/HOC';
import styled from "styled-components";

const ReservationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
`;

const ImgButtonWrapper = styled.div`
  height: 70%;
  width: 100%;
  background-image: url(${reservation});
  background-size: cover;
`;

const MealReservationTextBtn = styled.div`
  position:relative;  
  display: flex;
  height: 35%;
  width: 100%;
  box-sizing:border-box;
  justify-content:center;
  flex-direction:column;
  background:linear-gradient(to right, #F28C28 , #FF5F1F);
  .reservationText{
    align-self:center;
    font-weight:bold;
    transform: translateY(-0.5rem);
    color:white;
    font-size:20px;
    z-index:1002;
  }
  .colouredSection{
    position:absolute;
    top:0;
      height:70%;
      width:55%;
      border-bottom-right-radius: 35%;
      background:#FF5F1F;
  }
`;


const Button = styled.button`
width:50%;
height:40%;
align-self:center;
border:1px solid white;
transform: translateY(-2rem);
border-radius:10px;
color:#FF4500;
font-size:14px;
background:#fff;
box-shadow:0px 0px 56px -8px rgb(0 0 0 / 17%);
z-index:999;
`;


function MealReservation() {
    return (
        <ReservationWrapper>
          <ImgButtonWrapper>
          </ImgButtonWrapper>
          
          <MealReservationTextBtn>
          <Button>Book Now</Button>
            <div className = 'reservationText'>Meal Reservation</div>
            <div className = 'colouredSection'></div>
          </MealReservationTextBtn>
        </ReservationWrapper>
      );

}

export default MealReservation = HOC(55 , MealReservation , Survey) ;