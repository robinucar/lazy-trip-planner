import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Search } from "./Search";
import { DateFilters } from "./DateFilters";
import dayjs from "dayjs";
const useStyles = makeStyles({
  // ...
});
const App = () => {
  const classes = useStyles();
  const [cityCode, setCityCode] = useState(null);
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Search setCityCode={setCityCode} />
      <DateFilters
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        setCheckInDate={setCheckInDate}
        setCheckOutDate={setCheckOutDate}
      />
    </Container>
  );
};
export { App };
