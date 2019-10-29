import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "../../actions/counter.actions";

const buttonStyle = { margin: 10 };
export function AppHooks() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const incrementAction = () => dispatch(increment());
  const decrementAction = () => dispatch(decrement());
  const resetAction = () => dispatch(reset());
  return (
    <Grid container style={{ margin: 10 }} direction="column">
      <Grid item>
        <Typography variant="body1">Welcome to Redux with Hooks</Typography>
        <Typography variant="body1">{counter}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={incrementAction}
          style={buttonStyle}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={decrementAction}
          style={buttonStyle}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={resetAction}
          style={buttonStyle}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}
