import styled from 'styled-components';

const MainWrapper = styled.div`
display:flex;
width:100%;
height:100%;
justify-content:center;
align-items:center;

.seperator{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    box-sizing:border-box;
}
`;

const Wrapper = styled.div`
display:grid;
grid-template-columns:30% 30% 30% 30%;
grid-template-rows:120%;
gap:40px;
margin-top:220px;
`;

export {MainWrapper , Wrapper};