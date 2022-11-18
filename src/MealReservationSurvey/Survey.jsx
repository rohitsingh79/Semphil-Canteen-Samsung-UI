import styled from "styled-components";

const SurveyWrapper = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
position:relative;
background:#fff;
  box-shadow:0px 0px 56px -8px rgb(0 0 0 / 17%);
  padding-left:8px;
  padding-right:8px;
  box-sizing:border-box;
`;

const SurveyHeader = styled.div`
position:absolute;
top:5%;
color:black;
opacity:0.5;
left:10%;
font-size:20px;
`;

const PieChartWrapper = styled.div`
height:68%;
width:65%;
display:flex;
justify-content:center;
align-items:center;
position: relative;
`;

const PieChartValues = styled.div`
height:50%;
width:33%;
display:flex;
justify-content:space-between;
flex-direction:column;
margin-left:5%;
`;

const Anchovies = styled.div`
  height: 65%;
  width: 60%;
  border-radius: 50%;
  position:absolute;
  left:2%;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#318CE7;
  color:white;
  font-weight:bold;
  font-size:32px;
`;
const Sausages = styled.div`
  height: 25%;
  width: 25%;
  border-radius: 50%;
  position:absolute;
  top:20%;
  left:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1;
  background:#FF8C00;
  color:white;
  font-size:14px;
  opacity:0.8;
`;
const ArtichokeHearts = styled.div`
  height: 42%;
  width: 40%;
  border-radius: 50%;
  position:absolute;
  top:32%;
  left:63%;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1;
  background:#32CD32;
  color:white;
  font-size:14px;
  opacity:0.6;
`;

const Others = styled.div`
  height: 28%;
  width: 28%;
  border-radius: 50%;
  border: 1px solid black;
  position:absolute;
  top:60%;
  left:40%;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1;
  color:white;
  background:black;
  font-size:18px;
  opacity:0.5;
`;

function Survey() {
    return (
        <SurveyWrapper>
        <SurveyHeader>
          Survey
        </SurveyHeader>
        <PieChartWrapper>
          <Anchovies>
            57%
          </Anchovies>
          <Sausages>
            13%
          </Sausages>
          <ArtichokeHearts>
            12%
          </ArtichokeHearts>
          <Others>17%</Others>
        </PieChartWrapper>
        
        <PieChartValues>
          <div style = {{color:'#318CE7'}}>Anchovies</div>
          <div style = {{color:'#FF8C00'}}>Sausages</div>
          <div style = {{color:'#32CD32'}}>Articho hearts</div>
          <div style = {{color:'black' , opacity:'0.5'}}>Others</div>
        </PieChartValues>  
      </SurveyWrapper>

    )

}

export default Survey;