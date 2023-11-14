import styled from 'styled-components';



// function getRandomHexColor() {
//     return Math.floor(Math.random() * 16777215)
//   .toString(16)
//   .padStart(6, "0");
// };


export const Item = styled.div`
  text-align: center;

  width: 300px;

  padding: 20px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  box-sizing: content-box;
  border-radius: 8px;
  background: #483D8B;

  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  font-size: 35px;
  color: #483D8B;
`;

export const TagLocal = styled.p`
  font-size: 25px;
  color:#483D8B;
`;

export const Stats = styled.ul`
  font-size: larger;
  font-style: bold;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffff;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StateList = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Span = styled.span`
font-size: 20px;
color: #483D8B;
`;