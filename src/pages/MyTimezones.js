import React from 'react'
import Clock from '../components/Clock'

export default function MyTimezones(props) {
    return (
        <div>
            {props.timezones.map(tz => {
                return(
                    <div>
                        <h2>{tz.value}</h2>
                        <Clock timezone={tz} />
                    </div>  
                )
            })}
        </div>
    )
}
