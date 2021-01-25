import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler'
import { Scheduler, MonthView, Appointments, AppointmentTooltip, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui'
import styled from 'styled-components'

//Styled Components
const TitleForm = styled.h1`
color: #fff;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
letter-spacing: 1px;
text-align: center;
text-transform: uppercase; 
`

const Schedule = () => {

    const [data, setData] = useState([])
    const currentDate = '2021-01-22'
    
    //Add new appointment
    const commitChanges = ({ added }) => {
        setData([...data, added])
    }

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

    return ( 
        <Container style={{ marginTop: '150px' }}>
            <TitleForm data-testid="title">Calendar 2021.01</TitleForm>
                 <Paper elevation={3}>
                     <Scheduler data={data} >
                         <ViewState currentDate={currentDate} />
                         <EditingState onCommitChanges={commitChanges} />
                         <MonthView />
                         <Appointments appointmentComponent={appointment}/>
                         <AppointmentTooltip showCloseButton showOpenButton />
                         <AppointmentForm messages={messages}/>
                     </Scheduler>
                 </Paper>
        </Container>
     )
}

export default Schedule