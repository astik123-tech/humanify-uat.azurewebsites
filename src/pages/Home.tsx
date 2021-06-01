import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme)=> ({
  heading:{
    textAlign:'center',
    color:'#fff',
    fontFamily:'time roman'
  },
}));
const Home = () => {
  const classes = useStyles();
    return (
      <div>
        <h2 className={classes.heading}>Welcome, Tommy steele </h2>
      </div>
    );
  };
  
  export default Home;
  