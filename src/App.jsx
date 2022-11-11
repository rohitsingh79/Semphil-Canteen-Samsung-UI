import './App.css';
import { MainWrapper , GridWrapper} from './style';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';
import MenuOfDay from './MenuOfDay/MenuOfDay';
import MealReservationSurvey from './MealReservationSurvey/MealReservationSurvey';
import MealSurvey from './MealReservationSurvey/MealReservationSurvey';
import Image from '../src/Image/Image';

function App() {
  return (
   <MainWrapper>
     <GridWrapper>
       <WeeklyMenu/>
       <MenuOfDay/>
      <MealReservationSurvey/>
      <MenuOfDay/>
     </GridWrapper>
   </MainWrapper>
  );
}

export default App;
