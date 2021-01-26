import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';


function AddStats(props) {
    const [open, setOpen] = useState(false);
    const [stat, setStat] = useState({
        date: '',
        weight: '',
        waist: '',
        kCal: '',
        slept: ''
    })

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const inputChanged = event => {
        setStat({ ...stat, [event.target.name]: event.target.value })
    }

    const handleSave = () => 

    {

        if (true) {
            props.addData(stat);
        }else{
            console.log("Incorrect information")
        }

        setStat({
            date: '',
            weight: '',
            waist: '',
            kCal: '',
            slept: ''
        })
        handleClose();
    }

    return (
        <div>
            <IconButton color="primary" aria-label="add customer" component="span" onClick={handleClickOpen}>
                Add Data
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Statistics</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        name="date"
                        value={stat.date}
                        onChange={inputChanged}
                        margin="dense"
                        label="Date"
                        fullWidth
                    />
                    <TextField
                        name="weight"
                        value={stat.weight}
                        onChange={inputChanged}
                        margin="dense"
                        label="Weight(kg)"
                        fullWidth
                    />
                    <TextField
                        name="waist"
                        value={stat.waist}
                        onChange={inputChanged}
                        margin="dense"
                        label="Waist(cm)"
                        fullWidth
                    />
                    <TextField
                        name="kCal"
                        value={stat.kCal}
                        onChange={inputChanged}
                        margin="dense"
                        label="Energy spent(kCal)"
                        fullWidth
                    />
                    <TextField
                        name="slept"
                        value={stat.slept}
                        onChange={inputChanged}
                        margin="dense"
                        label="Slept"
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default AddStats;