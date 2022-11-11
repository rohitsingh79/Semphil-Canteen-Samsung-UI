import { BookMealWrapper, SurveyWrapper, MealReservationWrapper, Button } from './style';
import foodImage from './foodImage.jpg';
import PieChart from 'react-pie-graph-chart';

function MealReservationSurvey() {
    return (
        <MealReservationWrapper>
            <BookMealWrapper>
                <img src={foodImage} style={{ height: '75%', width: '100%' }}></img>
                <Button>Book Now</Button>
                <div className='reservationText'>Meal Reservation</div>
            </BookMealWrapper>
            <SurveyWrapper>
                <div style = {{
                    'font-size':'14px' , 
                    'font-weight':'bold' , 
                    'color':'white',
                    'margin-left':'16px',
                    'box-sizing':'border-box',
                    'margin-top':'16px'
                    }}>Survey</div>
                <PieChart className = 'cAMHNb canvas_chart'
                data={[
                    {
                        type: "noodles",
                        value: 23,
                        color: "#E97D30"
                    },
                    {
                        type: "soup",
                        value: 65,
                        color: "#62B170"
                    },
                    {
                        type: "chicken",
                        value: 40,
                        color: "#F1AF13"
                    },
                    {
                        type: "whey protien",
                        value: 45,
                        color: "#4BA2DA"
                    }
                ]}/>
            </SurveyWrapper>


        </MealReservationWrapper>
    )

}

export default MealReservationSurvey;