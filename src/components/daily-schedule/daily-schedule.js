import React from 'react';
import PropTypes from 'prop-types';
import Day from 'components/daily-schedule/day';
import { Container } from './daily-schedule.css';

const DailySchedule = ({ days }) => (
  <Container>
    {days.map(day => (
      <Day {...day} key={day.date} />
    ))}
  </Container>
);

DailySchedule.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DailySchedule;
