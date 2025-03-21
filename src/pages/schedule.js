import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import DailySchedule from 'components/daily-schedule';
import Head from 'components/head';

const Schedule = ({ data }) => {
  return (
    <Layout>
      <Head pageTitle={data.scheduleJson.title} />
      <DailySchedule days={data.scheduleJson.dailySchedule} />
    </Layout>
  );
};

Schedule.propTypes = {
  data: PropTypes.shape({
    scheduleJson: PropTypes.shape({
      title: PropTypes.string.isRequired,
      dailySchedule: PropTypes.arrayOf(
        PropTypes.shape({
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
          ),
        })
      ),
    }),
  }), // .isRequired,
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
