import React from 'react';
import PropTypes from 'prop-types';
import { EventDiv, Name, Location, Description, Link } from './event.css';

const Event = ({ name, time, location, description, files }) => (
  <EventDiv>
    <figure>
      <Name>{name}</Name>
      <Location>{time}{location ?  ` - ${location}` : null}</Location>
      <figcaption>
        <Description>{description}</Description>
        {files ? files.map(file => <Link href={file.path} key={file.name}>{file.name}</Link>) : null}
      </figcaption>
    </figure>
  </EventDiv>
);

Event.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.string,
  files: PropTypes.arrayOf(PropTypes.object),
};

export default Event;
