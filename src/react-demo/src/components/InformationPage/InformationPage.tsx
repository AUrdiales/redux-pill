import React from "react";

import Content from './Content/Content';
import storeLiterals from './Store/literals.json'
import actionsLiterals from './Actions/literals.json'
import reducerLiterals from './Reducers/literals.json'

const storeClassMd = require('./Store/Class.md');
const storeHooksMd = require('./Store/Hooks.md');
const actionsClassMd = require('./Actions/Class.md');
const actionsHooksMd = require('./Actions/Hooks.md');
const reducerClassMd = require('./Reducers/Class.md');
const reducerHooksMd = require('./Reducers/Hooks.md');

interface InformationPage {
  currentStep: "actions" | "store" | "reducers";
}

const InformationPage = (props: InformationPage) => {
  if (props.currentStep === "store") {
    return <Content literals={storeLiterals} snippets={{ classMd: storeClassMd, hooksMd: storeHooksMd }} />;
  } else if (props.currentStep === "actions") {
    return <Content literals={actionsLiterals} snippets={{ classMd: actionsClassMd, hooksMd: actionsHooksMd }} />;
  } else if (props.currentStep === "reducers") {
    return <Content literals={reducerLiterals} snippets={{ classMd: reducerClassMd, hooksMd: reducerHooksMd }} />;
  }
  return null;
};

export default InformationPage;
