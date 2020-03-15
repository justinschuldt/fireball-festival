import React from 'react';
import PropTypes from 'prop-types';
import { DayDiv, Title, Date } from './day.css';
import Event from '../event'

const Day = ({ title, date, events }) => (
    <figure>
        <DayDiv>
            <Title>{title}</Title>
            <Date>{date}</Date>
        </DayDiv>
        <figcaption>
            {events.map(event => <Event {...event} key={event.name} />)}
        </figcaption>
        </figure>
);

Day.PropTypes = {
    title: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
    events: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default Day;