import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '20px',
    },
    title: {
        color:'#404040',
        borderBottom: '1px solid #a8a8a8',
        'text-transform': 'uppercase',
        'font-weight': 300,
        'font-size': '25px',
        margin: '0 0 20px 0',
        padding: '0 0 20px 0',
        'font-family': "'Oswald', sans-serif",
        width: '100%',
    },
    paper: {
        fontSize: '20px',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default useStyles;