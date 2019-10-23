import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";

import literals from "./literals.json";

const classMarkdown = require("./Classes.md");
const hooksMarkdown = require("./Hooks.md");

const Store = () => {
  const [classMd, setClassMd] = useState("");
  const [hooksMd, setHooksMd] = useState("");

  useEffect(() => {
    fetch(classMarkdown).then(response =>
      response.text().then(text => setClassMd(text))
    );
    fetch(hooksMarkdown).then(response =>
      response.text().then(text => setHooksMd(text))
    );
  }, []);
  return (
    <section>
      <Grid container direction="column">
        <Grid item xl>
          <Typography variant="body1">{literals.primaryText}</Typography>
        </Grid>
        <Grid item xl>
          <Typography variant="body1">{literals.secondaryText}</Typography>
        </Grid>
        <Grid item xl>
          <List component="ul" aria-label="store responsibilities" dir="column">
            {literals.features.map((feature, index) => (
              <ListItem key={`feature-${index}`}>
                <ListItemText>{feature}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid container>
          <Grid item md style={{ color: "white" }}>
            <AceEditor
              style={{ width: "90%" }}
              placeholder="Placeholder Text"
              mode="typescript"
              theme="monokai"
              name="hooks"
              onChange={newValue => setHooksMd(newValue)}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={false}
              value={hooksMd}
              readOnly
            />
          </Grid>
          <Grid item md>
            <AceEditor
              style={{ width: "90%" }}
              placeholder="Placeholder Text"
              mode="typescript"
              theme="monokai"
              name="classes"
              onChange={newValue => setClassMd(newValue)}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={false}
              value={classMd}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Store;
