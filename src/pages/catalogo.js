
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import data from '../data';

import logo from '../assets/images/LogoDivas.png';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © Todos os direitos reservados '}
      {new Date().getFullYear()}
      {'.'}
      <br/>Desenvolvido por:{' '}  
      <Link color="inherit" href="">
        Fernando Carelle
      </Link>{' '}
      
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    /* backgroundImage: `url(${bg})`, */ 
    color: '#fff',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(1),
     
    display: 'flex', 
    maxHeight: '400px',
    maxWidth: '100%',
    height: 'auto',
    width: 'auto',
    
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    width: '100%',
    
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  
  },
  cardContent: {
    flexGrow: 1,
  },
  logo: {
    width: "200px",
    paddingTop: theme.spacing(3),
  },
  main: {
    background: '#fff',
  },
  
  footer: {
    background: '#fff',
    padding: theme.spacing(6),
    boxShadow: '0px -2px 7px 0px #999',
  },
}));



const cards = data;

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ background: '#fff', alignContent: 'center', display: 'flex', alignItems: 'center', height: '150px' }}>
        <Toolbar>
          <img src={logo}  alt="logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
=
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Catálogo
            </Typography>

      
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
=
          <Grid container spacing={4} >
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                    height="140px"
                    
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                      {card.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6" className={classes.price}>
                      <br/>
                      {card.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
=
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        <img src={logo}  alt="logo" style={{ width: '100px' }} />
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          
        </Typography>
        <Copyright />
      </footer>
=
    </React.Fragment>
  );
}