import PropTypes from 'prop-types';
import { Container, List, ListItems } from './Statistics.styled'

export default function Statistics({ title, stats }) {
  return ( 
    <Container>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(statsItem => (
          <ListItems key={statsItem.id}>
            <span className="label">{statsItem.label}</span>
            <span className="percentage">{statsItem.percentage}%</span>
          </ListItems>
        ))}
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
