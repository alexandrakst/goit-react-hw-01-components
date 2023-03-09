import PropTypes from 'prop-types';
import { Body, Container, Head } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Container>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td> {type} </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </Body>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  })),
}
