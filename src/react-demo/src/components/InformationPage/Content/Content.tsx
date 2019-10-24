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

interface Props {
    literals: {
        primaryText: string;
        secondaryText: string,
        features: string[];
        snippets: string;
    };
    snippets: {
        classMd: any;
        hooksMd: any
    };

}
const Actions = (props: Props) => {
    const [classMd, setClassMd] = useState("");
    const [hooksMd, setHooksMd] = useState("");

    useEffect(() => {
        fetch(props.snippets.classMd).then(response =>
            response.text().then(text => setClassMd(text))
        );
        fetch(props.snippets.hooksMd).then(response =>
            response.text().then(text => setHooksMd(text))
        );
    }, [props.snippets.classMd, props.snippets.hooksMd]);

    return (
        <Grid container direction="column">
            <Grid item xl>
                <Typography variant="body1">{props.literals.primaryText}</Typography>
            </Grid>
            <Grid item xl>
                <Typography variant="body1">{props.literals.secondaryText}</Typography>
            </Grid>
            <List component="ul" dir="column">
                {props.literals.features.map((feature, index) => (
                    <ListItem key={`feature-${index}`}>
                        <ListItemText>{feature}</ListItemText>
                    </ListItem>
                ))}
            </List>
            <Grid item xl>
                <Typography variant="body1">{props.literals.snippets}</Typography>
            </Grid>
            <Grid container>
                <Grid item md style={{ color: "white" }}>
                    <AceEditor
                        style={{ width: "90%" }}
                        placeholder="Loading content..."
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
                        placeholder="Loading content...reo"
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
    );
};

export default Actions;
