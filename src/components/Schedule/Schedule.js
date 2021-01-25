import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler'
import { Scheduler, MonthView, Appointments, AppointmentTooltip, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui'
import styled from 'styled-components'

//Change messages on the AppointmentForm
const messages = {
    moreInformationLabel: '',
    detailsLabel: 'Add an appointment',
    titleLabel: ''
}

//Customize the appearance for Appointments
const appointment = ({...restProps}) => (
    <Appointments.Appointment {...restProps}
        style={{ backgroundColor: '#3f51b5', borderRadius: '8px' }} />
)

//Styled Components
const TitleForm = styled.h1`
color: #fff;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
letter-spacing: 1px;
text-align: center;
text-transform: uppercase; 
`

export default class Schedule extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            currentDate: '2021-01-22'
        }
    }

    //Add new appointment
    commitChanges = ({added}) => {
        this.setState(({ data }) => {
            if (added) {
                const addNew = data.length > 0 ? data + 1 : 0
                data = [...data, {addNew, ...added}]
            }
            return { data }
        })
    }

    render() {
        const { currentDate, data } = this.state

        return (
            <Container style={{ marginTop: '150px' }}>
                <TitleForm>Calendar 2021.01</TitleForm>
                <Paper elevation={3}>
                    <Scheduler data={data} >
                        <ViewState currentDate={currentDate} />
                        <EditingState onCommitChanges={this.commitChanges} />
                        <MonthView />
                        <Appointments appointmentComponent={appointment}/>
                        <AppointmentTooltip showCloseButton showOpenButton />
                        <AppointmentForm messages={messages} /> 
                    </Scheduler>
                </Paper>
            </Container>
        )
    }
}
