import styled from '@emotion/styled';

export const Section = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 20px 0 0;
  text-align: center;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const Title = styled.div`
margin-bottom: 30px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: #443f3f;
`;

export const StatList = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding: 0;
margin: 0;
list-style: none;
background-color: #d5dcde;
`;

export const StatListItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;

export const Label = styled.div`
margin-bottom: 5px;
font-weight: 600;
font-size: 13px;
color: grey;
`;

export const Percentage = styled.div`
font-weight: 600;
font-size: 20px;
color: grey;
`;
