import React,{ useState }  from 'react';
import{ makeStyles,Container,Typography, Grid,Checkbox,FormControlLabel,TextField,CssBaseline,Button,Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom'

  
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
  
export default function SignIn() {

    const handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(body));
        alert('Current State is: ' + JSON.stringify(body));
        event.preventDefault();
    }
    
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setBoyd({
            ...body,
            [e.target.name]: value
        })
    }
    
    const [body,setBoyd] = useState({email:'',password:'',remember:false})
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
            <FormControlLabel
                control={<Checkbox  
                    name="remember"
                    checked={body.remember}
                    onChange={handleChange} color="primary" />}
                label="Remember me"
               
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                <Link to="/sign-up" variant="body2" className={classes.link}>
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link to="/sign-up" variant="body2" className={classes.link}>
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
    );
}
