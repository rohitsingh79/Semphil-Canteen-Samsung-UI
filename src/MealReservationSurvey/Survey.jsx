import { SurveyWrapper } from './style';
import PieChart from 'react-pie-graph-chart';

function Survey() {
    return (
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

    )

}

export default Survey;