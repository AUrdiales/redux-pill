import React, { useState, ChangeEvent } from "react";
import { makeStyles, createStyles, Tabs, Tab } from "@material-ui/core";
import { useSelector } from "react-redux";
import InformationPage from "../InformationPage/InformationPage";
import ExercisesPage from "../ExercisesPage/ExercisesPage";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      margin: "1rem",
      flexDirection: "column",
      backgroundColor: "#eff0f1"
    }
  })
);

const Main = () => {
  const classes = useStyles({});
  const { currentRoute } = useSelector((state: any) => state.routes);
  const [currentStep, setCurrentStep] = useState<any>("actions");
  console.log(currentRoute);
  const handleChange = (event: ChangeEvent<{}>, step: string) => {
    setCurrentStep(step);
  };
  return (
    <div className={classes.root}>
      <Tabs value={currentStep} onChange={handleChange}>
        <Tab value="actions" label="actions" />
        <Tab value="reducers" label="reducers" />
        <Tab value="store" label="store" />
      </Tabs>

      {currentRoute === "information" && (
        <InformationPage currentStep={currentStep} />
      )}
      {currentRoute === "exercises" && (
        <ExercisesPage currentStep={currentStep} />
      )}
    </div>
  );
};

export default Main;
