import {createMuiTheme} from '@material-ui/core/styles';
// Create a theme instance.
const primary = '#13395d'
const secondary = '#dbabc8'
const light = '#fff'
const dark = '#000'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
    },
    header : {
        navbar :  {
            backgroundColor: primary,
            boxShadow : 'none',
        },
        img : {
            height : '40px'
        },
        offline : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between',
            width : '280px'
        },
        input : {
                borderRadius: '7px',
                border: 'none',
                padding : '9px 12px',
                width : '500px'
        }
    },
    input : function (options){
        let style = {
            borderRadius: '7px',
            border: 'none',
        }
        if(options.includes('header')) {
            style['padding'] = '9px 12px'
            style['width'] = '500px'
        }
        return style
    },
    button : function (options){
        let style = {
            padding: '10px 20px',
            borderRadius: '7px',
            cursor: 'pointer',
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            transition : '300ms',
            '&:hover' : {
                transform: 'translate(-2px,-3px)',
                boxShadow: '0px 15px 20px rgba(0,0,0, 0.4)',
            }
        }
        if(options.includes('classic')) {
            style['backgroundColor '] = light
            style['color'] = primary
            style['&:hover']['backgroundColor'] = secondary
            style['&:hover']['color'] = light
        }
        return style
    },

});

export default theme;