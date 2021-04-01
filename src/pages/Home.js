import React, { useEffect, useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import AnalogClock from 'analog-clock-react'


export default function Home() {
    const [timezone, setTimeZone] = useState('');
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0})
    
    /**
     * 
     * @param {Event} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // display our clock
        
    }


    useEffect(() => {
        // function to update clock
        const updateClock = () => {
            // get a time string for the current timezone
            // this is built into javascript
          const timeString = new Date().toLocaleString('en-US', {
            timeZone: timezone.value, // timezone value comes from 
          });
          const dateTime = new Date(timeString);
          setTime({
              hours: dateTime.getHours(),
              minutes: dateTime.getMinutes(),
              seconds: dateTime.getSeconds(),
          });
        };
    
        // set up an interval and store the reference in a variable
        const interval = setInterval(() => {
            // update the clock
          updateClock();
        }, 1000);
        // by returning a function, this is run on clean
        return () => {
            // clean the interval
          clearInterval(interval);
        };
      }, [timezone]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TimezoneSelect value={timezone} onChange={setTimeZone} /> 
                <button type='submit'>Set</button>
            </form> 
            { timezone && (
                <AnalogClock useCustomTime {...time}/>
            )}
        </div>
    )
}
