import React from 'react';
import PropTypes from 'prop-types';
import { DayDiv, Title, Date } from './day.css';
import Event from '../event'

const Day = ({ title, date, events }) => (
    <>
        <DayDiv>
            <Title>{title}</Title>
            <Date>{date}</Date>
        </DayDiv>
        <>
            {events.map(event => <Event {...event} key={event.name} />)}
        </>
    </>
);

Day.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            location: PropTypes.string,
            description: PropTypes.string,
            files: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    path: PropTypes.string.isRequired,
                })
            ),
        })
    ).isRequired,
};

export default Day;
