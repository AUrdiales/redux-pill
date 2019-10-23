import React from "react";
import Store from "./Store/Store";
import Actions from "./Actions/Actions";
import Reducers from "./Reducers/Reducers";

const InformationPage = (props: any) => {
  if (props.currentStep === "store") {
    return <Store />;
  } else if (props.currentStep === "actions") {
    return <Actions />;
  } else if (props.currentStep === "reducers") {
    return <Reducers />;
  }
  return null;
};

export default InformationPage;
