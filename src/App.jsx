import './App.css';
import { MainWrapper , GridWrapper } from './style';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';
import MenuList from './MenuOfDay/MenuList';
import MealReservation from './MealReservationSurvey/MealReservation';
import AccountBalanceList from './AccountBalanceFav/AccountBalance';
import Header from './Header/Header';


function App() {
  const height = window.innerHeight;
  return (
   <MainWrapper height = {height}>
     <Header/>
      <GridWrapper>
      <WeeklyMenu/>
      <MenuList/>
      <MealReservation/>
      <AccountBalanceList/>
     </GridWrapper>
   </MainWrapper>
  );
}

export default App;
