import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  margin: 0 auto;
  max-width: 250px;
  padding: 20px 0 0;
  text-align: center;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const Description = styled.div`
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #443f3f;
`;

export const UserEmail = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  color: grey;

`;

export const Location = styled.p`
font-weight: 600;
color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #d5dcde;

`;

export const StateItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
`;

export const Label = styled.span`
font-weight: 600;
color: grey;
`;

export const Quantity = styled.span`
font-weight: 800;
color: #443f3f;
`;
