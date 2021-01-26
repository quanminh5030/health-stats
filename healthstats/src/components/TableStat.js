import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
    table: {
        width: 650,
    },
});

function TableStat(props) {
    const classes = useStyles();
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(props.stats);
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Weight</TableCell>
                        <TableCell>Waist</TableCell>
                        <TableCell>kCal</TableCell>
                        <TableCell>Slept</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((data, index) => (
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
    )
}


export default TableStat;