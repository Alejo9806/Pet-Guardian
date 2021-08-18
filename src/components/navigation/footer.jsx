import React from 'react'
import { makeStyles,Container,Grid,Box } from '@material-ui/core'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    link:{
        textDecoration:'none',
        color:'white',
    },
    footer:{
        marginTop:'50px'
    }
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Box px={{xs:3,sm:10}} py={{xs:5,sm:10}} bgcolor="info.main" color="primary.contrastText">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >Account</Box>
                            <Box>
                                <Link to="/sign-in" className={classes.link}>Cuenta</Link>
                            </Box>
                            <Box>
                                <Link to="/sign-in" className={classes.link}>Ingresar</Link>
                            </Box>
                            <Box>
                                <Link to="/sign-up"className={classes.link} >Registrarse</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link to="/sign-in" className={classes.link}>Contact</Link>
                            </Box>
                            <Box>
                                <Link to="/sign-in" className={classes.link} >Sign In</Link>
                            </Box>
                            <Box>
                                <Link to="/sign-up" className={classes.link}>Sign Up</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} className={classes.link}>Help</Box>
                            <Box>
                                <Link to="/sign-in" className={classes.link}>Contact</Link>
                            </Box>
                            <Box>
                                <Link to="/sign-in" className={classes.link}>Sign In</Link>
                            </Box>
                            <Box>
                                <Link to="/sign-up" className={classes.link}>Sign Up</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer
