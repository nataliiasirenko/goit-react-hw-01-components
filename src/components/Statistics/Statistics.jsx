import { Section, Header, Statlist, Item, Span } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Header>{title}</Header>

      <Statlist>
        {stats.map(stat => (
          <Item
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
              color: getRandomHexColor(),
            }}
          >
            <Span>{stat.label}</Span>
            <Span>{stat.percentage} %</Span>
          </Item>
        ))}
      </Statlist>
    </Section>
  );
};
