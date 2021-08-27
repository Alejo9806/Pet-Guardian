import React from 'react'
import { makeStyles,Container,Grid,Box } from '@material-ui/core'
import {Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    link:{
        textDecoration:'none',
        color:'black',
        "&:hover":{
            textDecoration:"underline"
        }
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        },
    },
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="/home">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  };

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

const Footer = () => {
    const classes = useStyles();
    return (
        //Footer 
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                        {footer.title}
                        </Typography>
                        <ul>
                        {footer.description.map((item) => (
                            <li key={item}>
                            <Link to="/sign-in" variant="subtitle1" color="textSecondary" className={classes.link}>
                                {item}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
                </Container>
            </React.Fragment>
        // End footer
    );
}

export default Footer
