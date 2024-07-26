
import styled from 'styled-components';

// Styled Components
const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 79px;
  margin-top:105px;
`;

const OptionButton = styled.button`
  width: 146px;
  height: 44px;
  border-radius: 100px;
  border: ${(props) => (props.active ?  '4px solid #FF7DE2':'0px solid' )};

  text-align: center;
  background-color: ${(props) => (props.active ? '#FFC803' : '#9D968C')};
  color: ${(props) => (props.active ? '#242321' : '#F5F5F5')};
  font-family: "PT-Bold";
  font-size: 30px;
  font-style: normal;
cursor: pointer;

  font-weight: 700;
  transition: border 0.1s ,background-color 0.5s ,color 0.5s;
`;

// Option Component
const Option = ({ date, setDate, weather, setWeather, always, setAlways }) => {
  return (
    <OptionWrapper>
      <OptionButton active={date} onClick={() => setDate(!date)}>날짜</OptionButton>
      <OptionButton active={weather} onClick={() => setWeather(!weather)}>날씨</OptionButton>
      <OptionButton active={always} onClick={() => setAlways(!always)}>항상</OptionButton>
    </OptionWrapper>
  );
};

export default Option;
