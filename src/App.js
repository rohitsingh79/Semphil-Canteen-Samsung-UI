import './App.css';
import { MainWrapper , Wrapper } from './style';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';
import MenuOfDay from './MenuOfDay/MenuOfDay';
import BookMeal from './MealReservation/BookMeal';
import MealSurvey from './MealSurvey/MealSurvey';

function App() {
  return (
   <MainWrapper>
     <Wrapper>
     <WeeklyMenu/>
     <MenuOfDay></MenuOfDay>
     <div className='seperator'>
      <BookMeal></BookMeal>
      <MealSurvey></MealSurvey>
      </div>
     </Wrapper>
   </MainWrapper>
  );
}

export default App;
