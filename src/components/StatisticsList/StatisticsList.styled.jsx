import styled from '@emotion/styled';

export const StatList = styled.ul`
display: flex;
align-items: center;
gap: 10px;
padding: 0;
margin: 0;
list-style: none;
background-color: #d5dcde;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;

export const Label = styled.span`
margin-bottom: 5px;
font-weight: 600;
font-size: 13px;
color: grey;
`;

export const Percentage = styled.span`
font-weight: 600;
font-size: 20px;
color: grey;
`;
