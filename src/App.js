import './App.css';
import { MainWrapper , Wrapper } from './style';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';
function App() {
  return (
   <MainWrapper>
     <Wrapper>
     <WeeklyMenu/>
      <div style = {{background:'black'}}>hello2</div>
      <div style = {{background:'red'}}>hello3</div>
      <div style = {{background:'orange'}}>hello4</div>
     </Wrapper>
   </MainWrapper>
  );
}

export default App;
