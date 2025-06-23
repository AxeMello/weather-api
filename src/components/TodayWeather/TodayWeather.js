import { Grid } from '@mui/material';
import React from 'react';
import AirConditions from './AirConditions/AirConditions';
import Details from './Details/Details';

const TodayWeather = ({ data, forecastList }) => {
  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
      <Details data={data} />
      <AirConditions data={data} />
    </Grid>
  );
};

export default TodayWeather;
