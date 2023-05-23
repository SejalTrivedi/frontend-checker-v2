import React from 'react';
import axios from 'axios';
import { number } from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { Checkbox } from '../../atoms/CheckBox/CheckBox';

export class ChargeList extends React.Component {
  state = {
    chargeList: [],
    candidateId: number,
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/charges?candidateId=${this.state.candidateId}`
      )
      .then((res) => {
        const chargeList = res.data;
        this.setState({ chargeList });
      });
  }

  render() {
    return (
      <Grid>
        {this.state.chargeList.map((chargeName) => {
          return (
            <Grid item>
              <div>
                <Checkbox></Checkbox>
              </div>
              <div>
                <Typography>{chargeName}</Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
