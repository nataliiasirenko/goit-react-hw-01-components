 import {Section,
  Header,
  Statlist,
  Item,
  Span} from './Statistics.styled'

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


export const Statistics = ({title, stats =[]}) =>{
return (   
     <Section >
      {title && (
  <Header>{title}</Header>
        )}
<Statlist>
    {stats.map(({id,label,percentage})=>( 
    <Item
    key={id}
    style={{
      backgroundColor: getRandomHexColor(),
      color: getRandomHexColor(),
    }}
    >
    <Span>{label}</Span>
    <Span>{percentage} %</Span>
  </Item>
))}
 
</Statlist>
</Section>)
};

