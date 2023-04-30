import styled from '@emotion/styled';

export const FriendItem= styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  :not(:last-child) {
  margin-bottom: 10px
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  background-color: #448048
  border-radius: 50%;


`;

export const Avatar = styled.img`

`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
