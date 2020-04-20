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


    const styles = theme => ({
        navbar: {
            backgroundColor: '#fff'
            
        },
        img : {
            height : '40px'
        },
        input : {
            color : theme.palette.secondary.main,
            borderColor : theme.palette.secondary.main + '!important',
            borderWidth : '1px'
        },
        navLink : {
            textDecoration : 'none !important',
            color : theme.palette.primary.main,
            "&:hover" : {
                color : theme.palette.secondary.main

            }
        }
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
                return  <div><LoginModal id="login"/> / <RegisterModal /></div>
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
                                             <Typography>
                                                | adlpoureux
                                             </Typography>
                                        </Box>
                                    </Link>
                                    <form noValidate autoComplete="off" style={{width : '40%'}}>
                                        <TextField 
                                        style={{width : '100%'}}
                                        className={style.input}
                                        size="small"
                                        color="secondary"
                                        placeholder='Rechercher'  
                                         InputProps={{
                                            startAdornment: (
                                                 <InputAdornment position="start">
                                                     <SearchIcon />
                                                 </InputAdornment>
                                            ),
                                            className : style.input
                                        
                                        }}

                                        />
                                    </form>
                                    <Box display="flex"  justifyContent="flex-end" alignItems="center"> 
                                        {this.getUserStatus()}
                                    </Box>
                                </Box>

                            </Toolbar>
                        </AppBar>
                    <div id={"userContainer"} style={style.userContainer}>
                        {this.getUser()}
                    </div>
                    </React.Fragment>

                    )
            }
        }
        header.contextType = UserContext;
        export default withStyles(styles)(header)
