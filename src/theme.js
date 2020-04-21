import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    button : function (bgColor = "#fff",color = "#13395d",bgColorHover ='#dbabc8', colorHover='#fff',border=null) {
        return ({
            backgroundColor : bgColor ?? "#fff",
            color : color ?? "#13395d",
            padding : '10px 20px',
            borderRadius : '7px',
            cursor : 'pointer',
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            border : border,
            transition : '300ms',
            '&:hover' : {
                transform: 'translate(-2px,-3px)',
                boxShadow: '0px 15px 20px rgba(0,0,0, 0.4)',
                backgroundColor : bgColorHover ?? '#dbabc8',
                color : colorHover ?? '#fff'
            }
            })
    },
    input : function(padding ='9px 12px', width="500px") {
        return({
            borderRadius: '7px',
            border: 'none',
            padding : padding,
            width : width
        })

    },
    palette: {
        primary: {
            main: '#13395d',
        },
        secondary: {
            main: '#dbabc8',
        },
    },
});

export default theme;