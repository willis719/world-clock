import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Clock from '../components/Clock'

export default function MyTimezones(props) {

    const removeTimezone = (timezone) => {
        props.setTimezones(props.timezones.filter((tz => {
            return timezone.value !== tz.value
        }))
        )
    }

    return (
        <Container fluid>
            <h2 style={{display: 'flex', justifyContent: 'center'}}>My Timezones</h2>
            <Row md={3} sm={12}>
                {props.timezones.map(tz => {
                    return (
                        <Col style={{marginTop: '5%', display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <h2 style={{display: 'flex', justifyContent: 'center'}}>{tz.value}</h2>
                                <Clock timezone={tz} />
                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '5%'}}>
                                    <button style={{ marginBottom: '5%'}} onClick={() => removeTimezone(tz)}>Remove</button>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
