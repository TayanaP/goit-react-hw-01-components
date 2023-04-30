import PropTypes from 'prop-types';
import { Table, THead, Th, Tr, Td } from '../TransactionHistory/TransactionHistory.styled';

export function TransactionHistory ({items}) {
return (
<Table>
  <THead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </THead>

  <tbody>
    {items.map(({id, type, amount, currency}) => 
      <Tr key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>)}
  </tbody>
</Table>
)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ),
  };

