import PropTypes from 'prop-types';

// console.log(data);

export default function Statistics({ stats }) {
  //console.log(stats);
  return (
    <section className="statistics">
      <ul className="stat-list">
        {stats.map(statsItem => (
          <li key={statsItem.id} className="item">
            <span className="label">{statsItem.label}</span>
            <span className="percentage">{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
