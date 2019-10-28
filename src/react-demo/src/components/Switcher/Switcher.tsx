import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { AppHooks } from "../AppHooks/AppHooks";
import { AppClass } from "../AppClass/AppClass";

export function Switcher() {
  const [component, setComponent] = useState("Hooks");
  const onChangeComponent = (component: string) => {
    return () => {
      setComponent(component);
    };
  };
  return (
    <>
      <Button onClick={onChangeComponent("Hooks")}>Hooks</Button>
      <Button onClick={onChangeComponent("Class")}>Class</Button>
      {component === "Hooks" && <AppHooks />}
      {component === "Class" && <AppClass />}
    </>
  );
}
