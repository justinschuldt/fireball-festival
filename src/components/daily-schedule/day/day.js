import React from 'react';
import PropTypes from 'prop-types';
import { Title, Date } from './day.css';
import Event from '../event'

const Day = ({ title, date, events }) => (
    <figure>
        <Title>{title}</Title>
        <Date>{date}</Date>
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