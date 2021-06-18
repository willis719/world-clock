import React, { useEffect, useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import AnalogClock from 'analog-clock-react'
import Clock from '../components/Clock';
import { Button } from 'react-bootstrap';


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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form style={{ width: '75%', height: '25%' }} onSubmit={handleSubmit}>
                    <h2>{timezone.value}</h2>
                    <TimezoneSelect value={timezone} onChange={setTimeZone} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ marginTop: '1%' }} type='submit' disabled={tzExists}>Add</Button>
                    </div>
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
                <Clock timezone={timezone} />
            </div>
        </div>
    )
}
