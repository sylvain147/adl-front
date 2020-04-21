import React from 'react';
import {withStyles} from '@material-ui/core/styles';
const style = theme => ({
	menu : {
		width : '100%',
		display : 'flex',
		justifyContent : 'center',
		flexWrap : 'wrap',
	},
	link : {
		height : '100%',
		color : '#fff',
		backgroundColor: theme.palette.primary.main,
		textAlign: 'center',
		width : '20%',
		padding : '10px 0px',
		fontStyle : 'italic',
		cursor : 'pointer',
		transition : 'padding 200ms',
		'&:hover' : {
			backgroundColor : theme.palette.secondary.main
		}
	},
	selected : {
		paddingLeft : '20px',
		textAlign : 'center',
		paddingRight : '20px',
		color : theme.palette.primary.main,
		width : '20%',
		height : '100%',
		backgroundColor : '#FFF',
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