import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import DailySchedule from 'components/daily-schedule'
import Head from 'components/head';

const Schedule = ({ data }) => {

console.log(data.scheduleJson)
  return(
  <Layout>
    <Head pageTitle={data.scheduleJson.title} />
    <DailySchedule days={data.scheduleJson.dailySchedule} />
  </Layout>
  )
}

Schedule.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Schedule;

export const query = graphql`
  query ScheduleQuery {
    scheduleJson {
      title
      dailySchedule {
        title
        date
        events {
          name
          time
          location
          description
          files {
            name
            path
          }
        }
      }
    }
  }
`;
