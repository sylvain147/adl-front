import Link from '../src/Link';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import User from './user'
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal";
const useStyles = makeStyles(theme => ({
    button: theme.button(['classic']),
    navbar: theme.header.navbar,
    img: theme.header.img,
    offline: theme.header.offline,
    input: theme.input(['header']),
}));
function header() {
    const style = useStyles();

    function showUser() {
        document.getElementById('userContainer').style.width = '500px'
    }

    function getUserStatus() {

        if (null !== null) {
            return <span onClick={this.showUser} id="showUser">
                <AccountCircleIcon style={{cursor: 'pointer'}}/></span>
        }


        return <div id={"userContainer"} className={style.offline}><LoginModal id="login"/>
            <RegisterModal/></div>
    }

    function getUser() {
        if (null != null) {
            return <User user={this.context.user.user} container={"userContainer"}/>
        }
        return null;
    }

    return (
        <React.Fragment>
            <AppBar className={style.navbar} position="sticky">
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" style={{width: '100%'}}
                         alignItems="center">
                        <Link href="/" className={style.navLink}>
                            <Box display="flex" justifyContent="flex-start" alignItems="center">
                                <Typography>
                                    <img className={style.img} src="/logo.jpg" alt="logo"/>
                                </Typography>
                            </Box>
                        </Link>
                        <input type="text" className={style.input} placeholder={"Rechercher"}/>
                        <Box display="flex" justifyContent="flex-end" alignItems="center">
                            {getUserStatus()}
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
            <div>
                {getUser()}
            </div>
        </React.Fragment>

    )
}
export default header
