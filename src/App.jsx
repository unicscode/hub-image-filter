import { Box, Container, Grid } from "@mui/material";
import { createContext, useState } from "react";
import CustomFilter from "./components/CustomFilter";
import FilterTabs from "./components/FilterTabs";
import ImageField from "./components/ImageField";
import InstaFitler from "./components/InstaFitler";
import CustomValuesViewer from "./components/CustomValuesViewer";

export const FilterContext = createContext();
function App() {
  const [tabFilter, setTabFilter] = useState("instaFilter");
  const [filterClass, setFilterClass] = useState("");
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });
  const [preloaded, setPreloaded] = useState("");

  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter,
    preloaded,
    setPreloaded,
  };

  return (
    <FilterContext.Provider value={value}>
      <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1>Hub Image Filter</h1>
        </Box>
        <Grid container spacing={10}>
          <ImageField />
          <Grid item xs={12} md={5}>
            <FilterTabs />
            {tabFilter === "instaFilter" ? <InstaFitler /> : <CustomFilter />}
            {tabFilter !== "instaFilter" && <CustomValuesViewer />}
          </Grid>
        </Grid>
      </Container>
    </FilterContext.Provider>
  );
}

export default App;
