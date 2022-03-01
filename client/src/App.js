import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Search } from "./components/search";
import dayjs from "dayjs";
const useStyles = makeStyles({
  // ...
});

const App = () => {
  const classes = useStyles();
  const [cityCode, setCityCode] = useState(null);
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Search setCityCode={setCityCode} />
    </Container>
  );
};
export { App }


