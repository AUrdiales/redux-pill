import React from "react";

const ExercisesPage = (props: any) => {
  if (props.currentStep === "store") {
    return <p>store ex</p>;
  } else if (props.currentStep === "actions") {
    return <p>actions ex</p>;
  } else if (props.currentStep === "reducers") {
    return <p>reducers ex</p>;
  }

  return null;
};

export default ExercisesPage;
