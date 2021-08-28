import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PetsIcon from '@material-ui/icons/Pets';
import {NavLink,Link, useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import { LogOutAuthAction } from '../../redux/actions/AuthAction';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navlink:{
    textDecoration:'none',
    color:'#fff'
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Manager =()=> {
  return(
      <div>
        <Link className="navLink" to="/sign-up" >
            <StyledMenuItem>      
                <ListItemIcon>
                  <SendIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Registrar empleado" style={{ color: '#3D3A39' }}/>          
            </StyledMenuItem>
        </Link>
        <Link className="navLink" to="/employee-management">
            <StyledMenuItem>      
                <ListItemIcon>
                  <EmojiPeopleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Admiinistrar empleados" style={{ color: '#3D3A39' }}/>          
            </StyledMenuItem>
        </Link>
      </div>
  );
};

const Veterinarian =()=>{
  return(
    <div>
      <Link className="navLink" to="/pets-assigned" >
            <StyledMenuItem>    
                <ListItemIcon>
                  <PetsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Chandas asignadas" style={{ color: '#3D3A39' }}/>        
            </StyledMenuItem>
      </Link>
    </div>
  );
};

const Financial = () =>{
  return(
    <div>
      <Link className="navLink" to="/">
          <StyledMenuItem >
            <ListItemIcon>
              <InboxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Financias" style={{ color: '#3D3A39' }}/>
          </StyledMenuItem>
      </Link>
    </div>
  );
};

const NavBar = (props)=> {
  const {auth,logout} =props;
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      {/* Barra de navegacion */}
      <div className={classes.root}  >
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
               <NavLink className={classes.navlink} to="/home">SaveUr Chanda </NavLink>  
            </Typography>
             {auth.isLoggedIn === true && <Typography variant="h6" className={classes.title}>Hello {auth.user.email}</Typography>}
             {auth.isLoggedIn === false && <NavLink className={classes.navlink} to="/sign-in"><Button color="inherit">Login</Button></NavLink>}
             {auth.isLoggedIn === true && <Button className={classes.navlink} color="inherit" onClick={()=>{logout(history);}}>Log out</Button>}
          </Toolbar>
          
        </AppBar>
      </div>

      {/* Menu */}
        <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
         {auth.isLoggedIn === true && auth.user.roles[0] === "ADMIN" ? <Manager/>:null}
         {auth.isLoggedIn === true && auth.user.roles[0] === "USER" ? <Veterinarian />:null}
         {auth.isLoggedIn === true && auth.user.roles[0] === "FINANCIAL" ? <Financial />:null}
        </StyledMenu>
    </div>
  );
}

const mapStatetoProps = (state) =>{
  return{
    auth:state.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      logout:(history) => {
          dispatch(LogOutAuthAction(history)) //manda el historial para que cuando de logout cambie de vista 
      }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps) (NavBar);