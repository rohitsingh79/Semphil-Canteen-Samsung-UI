import {SuggestionWrapper , ImageWrapper} from './style';
import Bulb from './Bulb.svg';

function Suggestion() {
  return (
    <SuggestionWrapper>
      <ImageWrapper>
        <img src = {Bulb} style = {{height:'100%' , width:'100%'}} alt = 'suggestions'></img>
      </ImageWrapper>
        <div className='suggestionText'>Do have a query or Suggestion?</div>
        </SuggestionWrapper>
   
  );
}

export default Suggestion;