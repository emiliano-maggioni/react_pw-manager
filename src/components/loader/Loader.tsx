import { CircularProgress } from "@mui/material";
import LoaderStyled from "./LoaderStyled";

const Loader = () => {
 
  return (
    <LoaderStyled  data-testid="loader">
        <CircularProgress />
    </LoaderStyled>
  );
}

export default Loader;
