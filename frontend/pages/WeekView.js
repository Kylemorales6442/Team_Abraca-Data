import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'darkgrey',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const tiers = [
{
  title:'Monday Breakfast'
},
{
  title:'Monday Lunch'
},
{
  title:'Monday Dinner'
},
{
  title:'Tuesday Breakfast'
},
{
  title:'Tuesday Lunch'
},
{
  title:'Tuesday Dinner'
},
{
  title:'Wednesday Breakfast'
},
{
  title:'Wednesday Lunch'
},
{
  title:'Wednesday Dinner'
},
{
  title:'Thursday Breakfast'
},
{
  title:'Thursday Lunch'
},
{
  title:'Thursday Dinner'
},
{
  title:'Friday Breakfast'
},
{
  title:'Friday Lunch'
},
{
  title:'Friday Dinner'
},
{
  title:'Saturday Breakfast'
},
{
  title:'Saturday Lunch'
},
{
  title:'Saturday Dinner'
},
{
  title:'Sunday Breakfast'
},
{
  title:'Sunday Lunch'
},
{
  title:'Sunday Dinner'
},
];

function childWindUp() {
  if (document.getElementById("para").style.display=="none") {
    document.getElementById("para").style.display="block"; 
  }
  else {
    document.getElementById("para").style.display="none"; 
  }
  if (document.getElementById("childWindow").style.display=="none") {
    document.getElementById("childWindow").style.display="block"; 
  }
  else {
    document.getElementById("childWindow").style.display="none"; 
  }
}

function childWindDown() {
  (document.getElementById("childWindow").style.display="none")
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link href="/homePage" color="primary" variant="outlined" className={classes.link}>
            <Button color="primary" variant="outlined">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container id="para" maxWidth="sm">
            <Typography  component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Week View
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome to the Week View! Now that we have your meals for the week created, 
              you can come here to look over them and click on them to edit or look at 
              their recipes!
            </Typography>
          </Container>
        </div>
        <Container id="childWindow" cmaxWidth="md">
          <Paper elevation={3}>
            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              Recipe Here!
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
              Nutrition: Egg
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
              Ingredients: Egg
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
              Recipe: Crack egg, consume egg
            </Typography>
          </Paper>
        </Container>
        <Container id="cardid" className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <ButtonBase onClick={event => { childWindUp() }}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Meal
                      </Typography>
                      <Typography>
                        A meal will be described here with its entree and side dishes.
                      </Typography>
                    </CardContent>
                  </ButtonBase>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}