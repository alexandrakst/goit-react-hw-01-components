import PropTypes from 'prop-types';
import { Container, Description, Stats, Labels } from "./Profile.styled"

export default function Profile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <Container>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <Labels>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </Labels>
        <Labels>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </Labels>
        <Labels>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </Labels>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
