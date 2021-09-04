import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { fetchCountries } from "./components/api/Api";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AreaChart from "../src/components/areaChart.js/AreaChart"

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "50px auto",
    width: "50%"
  },
}));

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("turkey");

  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };
    fetchCountriesData();
  }, []);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid>
          <FormControl className={classes.formControl}>
            <Select
              value={country}
              onChange={event => setCountry(event.target.value)}
            >
              {
                countries.map(country => (
                  <MenuItem value={country.Slug}>{country.Country}</MenuItem>
                ))
              }
            </Select>
          </FormControl> 
          <Grid item xs={12}>
            <Paper>
              <AreaChart country={country}/>
            </Paper>
              
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
