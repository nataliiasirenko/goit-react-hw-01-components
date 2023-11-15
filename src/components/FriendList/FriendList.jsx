import { FriendsItem } from './FriendsItem';

import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const friend = friends.map(item => (
    <FriendsItem
      key={item.id}
      avatar={item.avatar}
      name={item.name}
      isOnline={item.isOnline}
    />
  ));
  return <ul className={styles.friendList}>{friend}</ul>;
};
