import React,{ useState }  from 'react';
import{ makeStyles,Container,Typography, Grid,TextField,CssBaseline,Button,Avatar ,CircularProgress} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import { LoginAuthAction } from '../../redux/actions/AuthAction';


  
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    link:{
        textDecoration:'none',
        color:'blue',
    }
}));
  
function Login(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Current State is: ' + JSON.stringify(body));
        login(body,history);
    }
    
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setBoyd({
            ...body,
            [e.target.name]: value
        })
    }
    
    const {auth,login} = props;
    const [body,setBoyd] = useState({email:'',password:''})
    const history = useHistory();
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <form className={classes.form}  onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                value={body.email}
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={body.password}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {auth.isLoading === true ?<CircularProgress color="secondary"/> : "Ingresar"}
            </Button>
            <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
    );
}


const mapStatetoProps = (state) =>{
    return{
      auth:state.auth
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
        login:(user,history) => {
            dispatch(LoginAuthAction(user,history)) //manda el usuario y el historial para que cuando se valide el usuario cambie de vista 
        }
    }
  }
  
export default connect(mapStatetoProps,mapDispatchToProps)(Login)