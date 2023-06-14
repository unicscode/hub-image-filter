import { Box, Tab, Tabs } from "@mui/material";
import { useContext, useState } from "react";
import { FilterContext } from "../App";

const FilterTabs = () => {
  const { tabFilter, setTabFilter, setFilterClass } = useContext(FilterContext);

  const handleChange = (e, newValue) => {
    setTabFilter(newValue);
    if (newValue === "customFilter") {
      setFilterClass("");
    }
  };

  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Tabs
        value={tabFilter}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab value="instaFilter" label="Instagram Filter" />
        <Tab value="customFilter" label="Custom Filter" />
      </Tabs>
    </Box>
  );
};

export default FilterTabs;
