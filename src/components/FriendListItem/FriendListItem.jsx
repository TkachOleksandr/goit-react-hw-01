import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name} from './Friendlist.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>  
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
    <Status isOnline={isOnline}>{isOnline ? "Online" : "Offline"}</Status>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
