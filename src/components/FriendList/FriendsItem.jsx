import styles from './FriendsItem.module.css';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  const isActive = isOnline
    ? `${styles.status} ${styles.active}`
    : `${styles.status}`;
  return (
    <li className={styles.item}>
      <span className={isActive}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
