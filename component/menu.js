import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
const style = theme => ({
	menu : {
		width : '400px',
		textAlign : 'right',
		border : `1px solid ${theme.palette.secondary.main}`
	},
	nested : {
		paddingLeft : '100px',

	}
})
class Menu extends React.Component {
  	handleClick = () => {
 	   console.log('ok')
  	};
	render () {
		let classes = this.props.classes
		return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.menu}
    >
      <ListItem button>
        <ListItemText primary="Catégories" />
      </ListItem>
       <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="adlpour Lui " />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="adlpour Elle " />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="adlpour les petits " />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="adlpour tous " />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Tags" />
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Tag 1" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Tag 1" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Tag 1" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Tag 1" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Tag 1" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
	}
}
export default withStyles(style)(Menu)