import './App.css';
import { MainWrapper , GridWrapper } from './style';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';
import MenuList from './MenuOfDay/MenuList';


function App() {
  const height = window.innerHeight;
  return (
   <MainWrapper height = {height}>
      <GridWrapper>
      <WeeklyMenu/>
      <MenuList/>
     </GridWrapper>
   </MainWrapper>
  );
}

export default App;
