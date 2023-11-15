import { FriendsItem } from './FriendsItem';

import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const friend = friends.map(({id, avatar, name, isOnline})=> (
    <FriendsItem
      key={id}
      avatar={avatar}
      name={name}
      isOnline={isOnline}
    />
  ));
  return <ul className={styles.friendList}>{friend}</ul>;
};
