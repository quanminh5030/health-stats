import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
    table: {
        width: 650,
    },
});

function UserProfile(props) {
    const classes = useStyles();
    const [infos, setInfos] = useState({});

    useEffect(() => {
        setInfos(props.info);
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Height</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Max BPM</TableCell>
                        <TableCell>Weight Goal</TableCell>
                        <TableCell>Waist Goal</TableCell>
                        <TableCell>Date Goal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{infos.name}</TableCell>
                        <TableCell>{infos.height}</TableCell>
                        <TableCell>{moment(infos.dob).format('DD.MM.yyyy')}</TableCell>
                        <TableCell>{infos.maxBpm}</TableCell>
                        <TableCell>{infos.weightGoal}</TableCell>
                        <TableCell>{infos.waistGoal}</TableCell>
                        <TableCell>{moment(infos.dateGoal).format('DD.MM.yyyy')}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default UserProfile;