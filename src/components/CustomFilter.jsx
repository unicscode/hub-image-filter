import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import SliderField from "./SliderField";
import { preloadedFilters } from "./preloadFilters";
import { useContext } from "react";
import { FilterContext } from "../App";

const CustomFilter = () => {
  const { preloaded, setPreloaded, setCustomFilter } =
    useContext(FilterContext);
  const slider = [
    { label: "Contrast", defaultValue: 100, field: "contrast" },
    { label: "Brightness", defaultValue: 100, field: "brightness" },
    { label: "Saturation", defaultValue: 100, field: "saturate" },
    { label: "Sepia", defaultValue: 0, field: "sepia" },
    { label: "Gray Scale", defaultValue: 0, field: "gray" },
  ];

  function handlePreloaded(e) {
    if (e.target.value) {
      setPreloaded(e.target.value);

      const selected = preloadedFilters.find(
        (fi) => fi.label === e.target.value
      );
      if (selected) {
        const { value } = selected;
        setCustomFilter({
          contrast: value.contrast * 100,
          brightness: value.brightness * 100,
          saturate: value.saturate * 100,
          sepia: value.sepia * 100,
          gray: value.gray * 100,
        });
      }
    }
  }

  return (
    <>
      <Alert severity="warning" sx={{ marginBottom: "20px" }}>
        preloader filters cannot copy all of the properties of the base filters,
        but constitute a basis for the creation of new filters
      </Alert>
      <Box sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel>Preload a Filter</InputLabel>
          <Select
            onChange={handlePreloaded}
            value={preloaded}
            label="Preloaded Filter"
          >
            {preloadedFilters.map((filter) => (
              <MenuItem value={filter.label} key={filter.label}>
                {filter.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginTop: "2rem" }}>
        {slider.map((slide) => (
          <SliderField slide={slide} key={slide.field} />
        ))}
      </Box>
    </>
  );
};

export default CustomFilter;
