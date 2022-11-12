import './App.css';
import { MainWrapper , GridWrapper } from './style';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';
import MenuOfDay from './MenuOfDay/MenuOfDay';

function App() {
  const height = window.innerHeight;
  return (
   <MainWrapper height = {height}>
      <GridWrapper>
      <WeeklyMenu/>
      <MenuOfDay></MenuOfDay>
     </GridWrapper>
   </MainWrapper>
  );
}

export default App;
