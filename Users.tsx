import React from "react";
import * as faker from "faker";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import {IconButton} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: "wrap",
      alignContent: "flex-start",
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),

    },
    cardGrid: {
      display: 'flex',
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 350,
      minWidth: 350,
    },
    image: {
      width: 70,
      height: 70,
    },
    textRight:
      {
        textAlign: 'right'
      },

    textLeft:
      {
        textAlign: 'left'
      },
    a: {
      textDecoration: 'none'
    },
  }),
);

faker.seed(111);

const users = new Array(8).fill(0).map(_ => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    leftTasks: faker.random.number(20),
    completedTasks: faker.random.number(20),
    blockingTasks: faker.random.number(20),
    avatar: faker.image.cats(),
});

export const Users = () => {

  const classes = useStyles();

  const userElements = users.map(user => {

    return (
      <div className={classes.root}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <Avatar alt={user.firstName} src={user.avatar} className={classes.large}/>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h5" component="h6">
                      {user.firstName}&nbsp;{user.lastName}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      {user.jobTitle}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton aria-label="display more actions" edge="end" color="default">
                    <MoreIcon/>
                  </IconButton>

                </Grid>

              </Grid>
            </Grid>

          </Paper>
          <a href="https://www.polymer-project.org" className={classes.a}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className={classes.textLeft}>
                    <p> Left tasks</p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.textRight}>
                    <p> {user.leftTasks}</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </a>
          <a href="https://www.polymer-project.org" className={classes.a}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className={classes.textLeft}>
                    <p> Completed tasks</p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.textRight}>
                    <p> {user.completedTasks}</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </a>

          <a href="https://www.polymer-project.org" className={classes.a}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className={classes.textLeft}>
                    <p> Blocking tasks </p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.textRight}>
                    <p> {user.blockingTasks}</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </a>


        </Grid>

      </div>

    )
  });

  return <div>
    <div className={classes.root}>
    {userElements}
  </div>

    <div className={classes.root}>
      <div className={classes.root}>
        <Grid item xs={12} md={4}>
          <a href="https://www.polymer-project.org" className={classes.a}>
          <Paper className={classes.paper}>
            <AddCircleOutlineTwoToneIcon />
          </Paper>
            </a>
        </Grid>
      </div>
    </div>
  </div>

};