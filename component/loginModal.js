import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fetch from "isomorphic-unfetch";
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
const style = theme =>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#EF476F",
        padding: '50px 10px',
        width: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border:'none',
    },
    input: {
        marginLeft: '10px',
        marginRight: '10px',
    },
    validate: {
        textAlign: 'center',
        width: '100%',
    },
    form: {
        display:  'none'
    },
    progress: {
        display: 'none',
        width: '300px'
    },
    connectButtons : {
        color: `rgb(239, 53, 233)`,
        backgroundColor: `#fff`,
        cursor: `pointer`,
        display: `inline-block`,
        border: `1px solid #fff`,
        padding: `10px 20px`,
        transition: `200ms`,
        boxShadow: `0px 0px 17px -11px rgba(0,0,0,1)`
    },
    button : theme.button(['classic'])
});

class loginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            hideForm: false,
            error: false,
            open: false
        }
    }

    saveToken = (token) => {
        localStorage.setItem('idToken', token)
    };
    changeUsername = (event) => {
        this.setState({username: event.target.value})
    };

    changePassword = (event) => {
        this.setState({password: event.target.value})
    };

    handleOpen = () => {
        this.setState({open: true})
    };

    handleClose = () => {
        this.setState({open: false})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({hideForm: true});
        let req = {
            method : 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(process.env.REACT_API + '/login',req)
            .then(response => {
                    if (response.status === 401) {
                        this.setState({
                            error: true,
                            hideForm: false
                        });
                        return null;
                    }
                    return response.json()
                }
            )
            .then(data => {
                if(data!== null) {
                    this.saveToken(data.token);
                    window.location.reload();
                }
            });
    };

    render() {
        let style = this.props.classes
        console.log(style)


        return (
            <div style={style.connectButtons} style={{display: 'inline-block'}}>
                <div className={style.button}>Se connecter</div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={style.modal}
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <Box style={style.paper}>
                            <LinearProgress style={style.progress}/>
                            <form onSubmit={this.handleSubmit} style={style.form}>
                                <Box display="flex"
                                flexDirection="column">
                                </Box>
                                <Box p={3} mt={3}>
                                <Button type="submit" variant="contained" color='secondary'
                                        style={style.validate}> Valider</Button>
                                </Box>
                            </form>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default withStyles(style) (loginModal);