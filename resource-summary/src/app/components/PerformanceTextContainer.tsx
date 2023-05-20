import  Grid  from "@mui/material/Grid";
import { mainBackground, white } from "../utils";
import ComparisonText from "./ComparisonText";
import GreatText from "./GreatText";
import OverallPerfomanceText from "./OverallPerfomanceText";
import ResultText from "./ResultText";

const PerformanceTextContainer = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      p={7}
      sx={{
        background: mainBackground,
        borderRadius: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        color: white,
        textAlign: 'center',
      }}>
      <ResultText />
      <OverallPerfomanceText />

      <GreatText />

      <ComparisonText />
    </Grid>
  );
};

export default PerformanceTextContainer;
