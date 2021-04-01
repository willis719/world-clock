import React, { useEffect, useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import AnalogClock from 'analog-clock-react'
import Clock from '../components/Clock';


export default function Home(props) {
    const [timezone, setTimeZone] = useState('');
    
    
    /**
     * 
     * @param {Event} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTimezones([...props.timezones, timezone]);
    }



      const tzExists = props.timezones.find((tz) => {
          return tz.value === timezone.value
      })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TimezoneSelect value={timezone} onChange={setTimeZone} /> 
                <button type='submit' disabled={tzExists}>Add</button>
            </form> 
            <Clock timezone={timezone} />
        </div>
    )
}
