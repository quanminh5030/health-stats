import { Button, Container, Dialog, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import AddStats from './components/AddStats';
import TableStat from './components/TableStat';
import UserProfile from './components/UserProfile';
import moment from 'moment';

const useStyles = makeStyles({
  table: {
    width: 650,
  },
});

function App() {
  const classes = useStyles();

  const personalInfo = {
    name: "Mike", height: 175, dob: new Date(1989, 0, 31),
    maxBpm: 188, weightGoal: 85.0, waistGoal: 95.5, dateGoal: new Date(2021, 6, 1)
  };

  const [stats, setStats] = useState([
    { date: new Date(2021, 0, 25), weight: 96.4, waist: 106.5, kCal: 0, slept: true, },
    { date: new Date(2021, 0, 27), weight: 97.2, waist: 105.0, kCal: 512, },
    { date: new Date(2021, 1, 1), weight: 99.1, waist: 108.0, kCal: 1150, slept: false, },
    { date: new Date(2021, 1, 2), weight: 99.0, waist: 107.5, slept: true, },
    { date: new Date(2021, 1, 4), kCal: 666 },
    { date: new Date(2021, 1, 5), weight: 99.0, waist: 107.5, slept: false, },
  ]);

  const addData = newStat => {
    setStats([...stats, newStat]);
  }

  return (
    <Container style={{ margin: 25 }}>
      <UserProfile info={personalInfo} />
      <Typography variant="h4" align="left">Statistic</Typography>

      <AddStats addData={addData} />
      {/* <TableStat stats={stats} /> */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Weight(kg)</TableCell>
              <TableCell>Waist(cm)</TableCell>
              <TableCell>Energy spent(kCal)</TableCell>
              <TableCell>Slept</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{moment(data.date).format('DD.MM.yyyy')}</TableCell>
                <TableCell>{data.weight}</TableCell>
                <TableCell>{data.waist}</TableCell>
                <TableCell>{data.kCal}</TableCell>
                <TableCell>{data.slept ? 'Good' : 'Bad'}</TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
