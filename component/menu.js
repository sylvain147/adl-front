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
		width : '100%',
		display : 'flex',
		justifyContent : 'center',
		flexWrap : 'wrap',
	},
	link : {
		paddingLeft : '20px',
		textAlign : 'center',
		borderLeft : '1px solid #ffd9f6',
		paddingight : '20px',
		height : '100%',
		color : 'rgb(239, 53, 233)',
		textAlign: 'center',
		padding : '7px 20px',
		fontStyle : 'italic',
		borderBottom : '1px solid #ffd9f6',


	},
	selected : {
		paddingLeft : '20px',
		textAlign : 'center',
		paddingight : '20px',
		height : '100%',
		backgroundColor : '#ffd9f6',
		color : '#000',

		textAlign: 'center',
		padding : '7px 20px',
		fontStyle : 'italic'
	},
	title : {
		color : theme.palette.primary.main,
		fontWeight : 'bold'
	}
})
class Menu extends React.Component {
  	handleClick = () => {
 	   console.log('ok')
  	};
	render () {
		let classes = this.props.classes
		return (
			<div className={classes.menu}>
			<span className={classes.selected}>Accueil</span>
			<span className={classes.link}>Pour Lui</span>
			<span className={classes.link}>Pour Elle</span>
			<span className={classes.link}>Pour les enfants</span>
			<span className={classes.link}>Pour tous</span>
			</div>
			);
	}
}
export default withStyles(style)(Menu)