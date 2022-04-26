import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import { Container} from 'react-bootstrap';

const calendar = ({handleDateChange}) => {
  return (
    <Container>
    <section style={{height:'400px'}} className="ApopintMentTop">
            <div >
            <h1>Appointment Form</h1>
             <hr />
             <p className='date'>Choose a Date</p>
                <Calendar className="calendar"
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>

        </section>
        </Container>
  );
};

export default calendar
