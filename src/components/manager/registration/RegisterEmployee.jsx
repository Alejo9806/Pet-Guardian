import React,{useState} from 'react';
import { makeStyles,Container,Grid, Checkbox,FormControlLabel,TextField,CssBaseline,Button,Avatar,Typography,MenuItem,Select,FormControl,InputLabel,CircularProgress} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Alert} from '@material-ui/lab';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { RegisterEmployeeAction } from '../../../redux/actions/RegisterAction';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link:{
    textDecoration:'none',
    color:'blue',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));


function RegisterEmployee(props) {

    const { registerState,register} = props;
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(valid.firstName === false && valid.lastName === false && valid.password === false && valid.email === false && valid.confirmPassword === false && user.terms === true){
            setValidForm(true);
            const newUser = {
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                password:user.password,
                rol:user.rol
            }
            register(newUser,history);
        } else {
            setValidForm(false)
        }
    }

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const nameInput = e.target.name;
        setUser({
            ...user,
            [nameInput]: value
        })
    }
    const regularExpression = {
        user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        firstName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const errors= {
        user: 'Letras, numeros, guion y guion_bajo',
        firstName: 'Letras y espacios, pueden llevar acentos',
        lastName: 'Letras y espacios, pueden llevar acentos.',
        password: 'Su contraseña debe contener al menos una letra mayuscula y un numero y un minimo de 8 caracteres',
        email: 'Debe ser un correo',
    }
    const validation = (name) =>{
        if(user.firstName.length > 0){
            if(name === 'firstName'){
                if(regularExpression.firstName.test(user[name])){
                    valid[name]=false;
                    leyend[name] ='';
                }else{
                    valid[name]=true
                    leyend[name] =errors.firstName;
                }
            }
        }
        if(user.lastName.length > 0){
            if(name === 'lastName'){
                if(regularExpression.lastName.test(user[name])){
                    valid[name]=false;
                    leyend[name] ='';
                }else{
                    valid[name]=true
                    leyend[name] =errors.lastName;
                }
            }
        }
        if(user.email.length > 0){
            if(name === 'email'){
                if(regularExpression.email.test(user[name])){
                    valid[name]=false;
                    leyend[name] ='';
                }else{
                    valid[name]=true
                    leyend[name] =errors.email;
                }
            }
        }
        if(user.password.length > 0){
            if(name === 'password'){
                if(regularExpression.password.test(user[name])){
                    valid[name]=false;
                    leyend[name] ='';
                }else{
                    valid[name]=true
                    leyend[name] =errors.password;
                }
            }
        }
    } 



    const validatePassword=(e)=>{
        if(user.password.length > 0){
            if(user.password !== user.confirmPassword){
                setValid({
                    ...valid,
                    [e.target.name]: true
                })
                setleyend({
                    ...leyend,
                    [e.target.name]: 'Las contraseñas no coinciden'
                })
            }else{
                setValid({
                    ...valid,
                    [e.target.name]: false
                })
                setleyend({
                    ...leyend,
                    [e.target.name]: ''
                })
            }
        }
    }

    const classes = useStyles();
    const [user,setUser] = useState({password:'',email:'',firstName:'',lastName:'',confirmPassword:'',terms:false,rol:""})
    const [valid,setValid] =useState({password:false,firstName:false, lastName:false,email:false,confirmPassword:false})
    const [leyend,setleyend] =useState({password:'',email:'',firstName:'',lastName:'',confirmPassword:''})
    const [validForm,setValidForm] = useState(null)
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={user.firstName}
                    onChange={handleChange}
                    onBlur={validation('firstName')}
                    error={valid.firstName}
                    helperText={leyend.firstName}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    type="text"
                    name="lastName"
                    autoComplete="lname"
                    onChange={handleChange}
                    onBlur={validation('lastName')}
                    error={valid.lastName}
                    helperText={leyend.lastName}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={validation('email')}
                    error={valid.email}
                    helperText={leyend.email}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    onBlur={validation('password')}
                    error={valid.password}
                    helperText={leyend.password}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirmar contraseña"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    onChange={handleChange}
                    onBlur={validatePassword}
                    onKeyUp={validatePassword}
                    error={valid.confirmPassword}
                    helperText={leyend.confirmPassword}
                />
                
                </Grid>
                <Grid>
                <FormControl variant="outlined" className={classes.formControl} >
                    <InputLabel id="demo-simple-select-outlined-label" >Rol</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    fullWidth
                    required
                    value={user.rol}
                    onChange={handleChange}
                    label="Rol"
                    name="rol"
                    >
                    <MenuItem value="USER">USER</MenuItem>
                    <MenuItem value="ADMIN">ADMIN</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Acepto terminos y condiciones."
                    name='terms'
                    checked={user.terms}
                    onChange={handleChange}
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
               {registerState.isLoading === false ? "Registrar empleado" :<CircularProgress color="secondary"/>}
            </Button>
            {registerState.errMess === true && <Alert severity="error">Ocurrio un errror no se pudo realizar el registro</Alert>}
            {validForm === false && <Alert severity="error">Debes aceptar los terminos y condiciones para registrarte</Alert>}
            {registerState.errMes === false && <Alert severity="success">Te has registrado correctamente</Alert>}
            <Grid container justifyContent="flex-end">
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
        registerState:state.register,

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        register:(user,history) => {
            dispatch(RegisterEmployeeAction(user,history)) //manda la informacion del formulario al metodo hecho en redux donde utlizamos axios, utlizando dispatch se manda los datos
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(RegisterEmployee);