import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Grid, Button } from "@material-ui/core";
import { increment, decrement, reset } from "../../actions/counter.actions";

const buttonStyle = { margin: 10 };
class AppClassInternal extends Component<any> {
  render() {
    return (
      <Grid container style={{ margin: 10 }} direction="column">
        <Grid item>
          <Typography variant="body1">Welcome to Redux with Classes</Typography>
          <Typography variant="body1">{this.props.counter}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.increment}
            style={buttonStyle}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.decrement}
            style={buttonStyle}
          >
            Decrement
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.reset}
            style={buttonStyle}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
});

export const AppClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppClassInternal);
