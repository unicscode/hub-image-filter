import { Box, Slider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../App";

const SliderField = ({ slide }) => {
  const { customFilter, setCustomFilter } = useContext(FilterContext);
  const { label, defaultValue, field } = slide;
  const [value, setValue] = useState(customFilter[field]);

  useEffect(() => {
    setCustomFilter({ ...customFilter, [field]: value });
  }, [value]);

  const handleSliderValue = (e) => setValue(e.target.value);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Box sx={{ minWidth: "6rem" }}>{label}</Box>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        value={customFilter[field]}
        onChange={handleSliderValue}
        max={200}
      />
    </Box>
  );
};

export default SliderField;
