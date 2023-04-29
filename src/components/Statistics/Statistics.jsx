import PropTypes from 'prop-types';
import { Section, Title, StatList, StatListItem, Label, Percentage } from './Statistics.styled';

export default function Statistics ({ title, stats}){
    return (
<Section>
{title && <Title>{title}</Title>}
<StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatListItem key={id}>
          <Label>{label}</Label>
          <Percentage>{`${percentage}%`}</Percentage>
        </StatListItem>
      ))}
    </StatList>
</Section>
);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };