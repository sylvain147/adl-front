import React, { useState, useEffect } from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import gql from 'graphql-tag';

import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from "@material-ui/core/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Box} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
    uri: 'http://35.181.43.159:4000',
});
function registerModal(){
    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);
    const [open, setOpen] = useState(false);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [username, setUsername] = useState(null);
    const validateUser = async () => {
        console.log('ici')
        let values = `mutation createUser {
                    createUser(userInput : {
                    firstname : "${firstname}"
                    lastname : "${lastname}"
                    username : "${username}"
                    email : "${mail}"
                    password : "${password}"
                }){
                    firstname
                } 
            }`
        console.log(values)
        const user = await client.mutate({
            mutation : gql` ${values}`
        })
        console.log(user)
    }
    return (
        <div style={{display: 'inline-block'}}>

            <div onClick={() => setOpen(true)}>
                Créer un compte
            </div>
            <Dialog open={open}  aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText>
                        Créer un nouveau compte
                    </DialogContentText>
                    <TextField
                        onChange={(event)=>setMail(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Adresse email"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={(event)=>setFirstname(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="firstname"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={(event)=>setLastname(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="lastname"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={(event)=>setUsername(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="username"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={(event)=>setPassword(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="password"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={validateUser} color="primary">
                        Créer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default  (registerModal);