import Suggestion from './Suggestion';
import HOC from '../HOC/HOC';
import styled from 'styled-components';

const WeeklyMenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #000000;
  box-sizing: border-box;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 48px;
  padding-bottom: 48px;
  position:relative;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  box-sizing: border-box;
`;

const GridChild = styled.div`
  flex: 45%;
  height: 50%;
  border-radius: 5%;
  margin: 5px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const MenuText = styled.div`
  color: white;
  font-size: 18px;
  position: absolute;
  top: 15px;
  font-weight: bold;
  font-family: sans-serif;
`;

const ListText = styled.div`
color:white;
font-size:12px;
font-weight: bold;
`

function WeeklyMenu(){

  return (
    <WeeklyMenuWrapper>
    <MenuText>Weekly Menu list</MenuText>
    <GridWrapper>
      <GridChild
        style={{ background: "linear-gradient(to top right, orange, red)" }}
      >
       <ListText>Local Menu</ListText>
      </GridChild>  

      <GridChild
        style={{ background: "linear-gradient(to top right, blue, purple)" }}
      >
         <ListText>Korean Menu</ListText>
      </GridChild>
      <GridChild
        style={{
          background: "linear-gradient(to top right, #5D3FD3, #BF40BF)"
        }}
      > <ListText>Special Menu</ListText></GridChild>
      <GridChild
        style={{
          background: "linear-gradient(to top right, #AA336A, orange)"
        }}
      >
         <ListText>Healthy Menu</ListText>
      </GridChild>
    </GridWrapper>
  </WeeklyMenuWrapper>
  )


}

export default WeeklyMenu = HOC(75 , WeeklyMenu , Suggestion);
