// import PropTypes from 'prop-types';
// import css from './Profile.module.css'

import {
  Item,
  Description,
  Avatar,
  Name,
  TagLocal,
  Stats,
  StateList,
  Span,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <Item>
      <Description>
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <TagLocal>{tag}</TagLocal>
        <TagLocal>{location}</TagLocal>
      </Description>

      <Stats>
        <StateList>
          <Span>Followers</Span>
          <Span>{followers}</Span>
        </StateList>
        <StateList>
          <Span>Views</Span>
          <Span>{views}</Span>
        </StateList>
        <StateList>
          <Span>Likes</Span>
          <Span>{likes}</Span>
        </StateList>
      </Stats>
    </Item>
  );
};

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }),
//   };
