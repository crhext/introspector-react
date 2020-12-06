import React from 'react';
import StreakCard from './StatCards/StreakCard';
import { Grid } from "@material-ui/core";


class Stats extends React.Component {

	render() {
		return (
      <Grid  container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <StreakCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <StreakCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <StreakCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <StreakCard />
          </Grid>
      </Grid>

            


		);
	};
}

export default Stats;




