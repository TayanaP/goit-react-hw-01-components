import PropTypes from 'prop-types';
import { StatList, StatItem, Label, Percentage } from 'components/StatisticsList/StatisticsList.styled';

export function StatisticsList({ stats }) {
    return (
<StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <Label>{label}</Label>
          <Percentage>{`${percentage}%`}</Percentage>
        </StatItem>
      ))}
    </StatList>
);
}

StatisticsList.protoTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };