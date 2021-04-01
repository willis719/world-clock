import React from 'react'
import Clock from '../components/Clock'

export default function MyTimezones(props) {

    const removeTimezone = (timezone) => {
        props.setTimezones(props.timezones.filter((tz => {
            return timezone.value !== tz.value
        }))
        )
    }

    return (
        <div>
            {props.timezones.map(tz => {
                return(
                    <div>
                        <h2>{tz.value}</h2>
                        <Clock timezone={tz} />
                        <button onClick={() => removeTimezone(tz)}>Remove</button>
                    </div>  
                )
            })}
        </div>
    )
}
