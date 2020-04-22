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
    import {UserContext} from "./UserContext";
    import TextField from '@material-ui/core/TextField';
    import InputAdornment from '@material-ui/core/InputAdornment';
    import SearchIcon from '@material-ui/icons/Search';
    import Button from '@material-ui/core/Button';



    const styles = theme => ({
        button : theme.button(['classic']),
        navbar : theme.header.navbar,
        img : theme.header.img,
        offline : theme.header.offline,
        input : theme.input(['header']),

    });
    class header extends React.Component {
        showUser() {
            document.getElementById('userContainer').style.width = '500px'
        }
        getUserStatus() {

            if (this.context.user !== null) {
                return <span onClick={this.showUser} id="showUser">
                <AccountCircleIcon style={{cursor: 'pointer'}}/></span>
            }


            return <div id={"userContainer"} className={this.props.classes.offline}> <LoginModal id="login"/>  <RegisterModal /></div>
            }
            getUser() {
                if (this.context.user != null) {
                    return <User user={this.context.user.user} container={"userContainer"}/>
                }
                return null;
            }

            render() {
                let style = this.props.classes

                return (
                    <React.Fragment>
                        <AppBar className={style.navbar} position="sticky">
                            <Toolbar>
                                <Box display="flex" justifyContent="space-between" style={{width: '100%'}} alignItems="center">
                                    <Link href="/" className={style.navLink}>
                                        <Box display="flex"  justifyContent="flex-start" alignItems="center">
                                            <Typography>
                                                <img className={style.img} src="/logo.jpg" alt="logo"/>
                                             </Typography>
                                        </Box>
                                    </Link>
                                    <input type="text" className={style.input} placeholder={"Rechercher"}/>
                                    <Box display="flex"  justifyContent="flex-end" alignItems="center">
                                        {this.getUserStatus()}
                                    </Box>
                                </Box>

                            </Toolbar>
                        </AppBar>
                    <div>
                        {this.getUser()}
                    </div>
                    </React.Fragment>

                    )
            }
        }
        header.contextType = UserContext;
        export default withStyles(styles)(header)
