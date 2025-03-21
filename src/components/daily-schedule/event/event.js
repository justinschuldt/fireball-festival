import React from 'react';
import PropTypes from 'prop-types';
import { EventFigure, Time, Name, Description, Files, Link } from './event.css';

const Event = ({ name, time, location, description, files }) => (
  <EventFigure>
    <Time>{time}</Time>
    <Name>{name}{location ? ` - ${location}` : null}
      {description ? <Description>{description}</Description> : null}
      {files && (
        <Files>
          <ul style={{ listStyle: 'none', padding: '0.4rem' }}>
            {files.map(file => (
              <li key={file.name}>
                <Link target='_blank' href={file.path}>{file.name}</Link>
              </li>
            ))}
          </ul>
        </Files>
      )}
    </Name>
  </EventFigure>
);

Event.propTypes = {
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
};

export default Event;
