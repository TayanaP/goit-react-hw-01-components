
import PropTypes from 'prop-types';
import { Avatar, FriendItem, Status, UserName } from './FriendListItem.styled';

export function FriendListItem({ avatar, isOnline, name }) {
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};