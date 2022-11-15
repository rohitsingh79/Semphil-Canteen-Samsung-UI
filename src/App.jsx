import './App.css';
import { MainWrapper , GridWrapper } from './style';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';
import MenuList from './MenuOfDay/MenuList';
import AccountBalanceList from './AccountBalanceFav/AccountBalance';


function App() {
  const height = window.innerHeight;
  return (
   <MainWrapper height = {height}>
      <GridWrapper>
      <WeeklyMenu/>
      <MenuList/>
      <AccountBalanceList/>
     </GridWrapper>
   </MainWrapper>
  );
}

export default App;
