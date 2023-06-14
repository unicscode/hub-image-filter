import { useContext } from "react";

import { FilterContext } from "../App";

function CustomValuesViewer() {
  const { customFilter } = useContext(FilterContext);
  return <pre>{JSON.stringify(customFilter, null, 2)}</pre>;
}

export default CustomValuesViewer;
