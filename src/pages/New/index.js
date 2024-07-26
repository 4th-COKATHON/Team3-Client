import { Background, BaseContainer, Star1, Star2} from './style.js';
import {useState} from 'react';

import { ReactComponent as Star1Icon } from "../../assets/New/Star1.svg";
import { ReactComponent as Star2Icon } from "../../assets/New/Star2.svg";

import Option from '../../components/New/Option.js';
import Confirm from '../../components/New/Confirm.js';
import {DateMain,WeatherMain,AlwaysMain} from '../../components/New/MainContent.js';
import SubContent from '../../components/New/SubContent.js';



const New = () => {

    const [date,setDate]=useState(true);
    const [weather,setWeather]=useState(false);
    const [always,setAlways]=useState(false);

    const handleDateClick = () => {
        setDate(!date);
        setWeather(false);
        setAlways(false);
      };
    
      const handleWeatherClick = () => {
        setDate(false);
        setWeather(!weather);
        setAlways(false);
      };
    
      const handleAlwaysClick = () => {
        setDate(false);
        setWeather(false);
        setAlways(!always);
      };
    return (
        <BaseContainer>
        <Background/>
        <Star1>
            <Star1Icon/>
        </Star1>
           <Star2>
            <Star2Icon/>
           </Star2>
        
            <Option 
                date={date}
                setDate={handleDateClick}
                weather={weather}
                setWeather={handleWeatherClick}
                always={always}
                setAlways={handleAlwaysClick}
            />
            
          {date && (<DateMain/>)}
          {weather&&(<WeatherMain/>) }
          {always && (<AlwaysMain/>)}
            <SubContent/>
            <Confirm/>
        </BaseContainer>
    );
};

export default New;

