import { OnlineStatus, Item } from '../FriendList/FriendList.styled'

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <Item key={id}>
      <OnlineStatus isActive>{isOnline}</OnlineStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}
