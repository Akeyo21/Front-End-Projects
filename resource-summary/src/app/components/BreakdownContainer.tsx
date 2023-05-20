import 'react';
import Grid from '@mui/material/Grid';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import Summary from './Summary';
import ContinueButton from './ContinueButton';
import SummaryHeader from './SummaryHeader';

const BreakdownContainer = () => {
  return (
    <Grid item xs={12} md={6} p={4}>
      <SummaryHeader />

      <Summary
        text="Reaction"
        Icon={BoltOutlinedIcon}
        color="secondary"
        summaryAmount={80}
      />
      <Summary
        text="Memory"
        Icon={PsychologyOutlinedIcon}
        color="primary"
        summaryAmount={92}
      />
      <Summary
        text="Verbal"
        Icon={TextsmsOutlinedIcon}
        color="error"
        summaryAmount={61}
      />
      <Summary
        text="Visual"
        Icon={VisibilityOutlinedIcon}
        color="warning"
        summaryAmount={72}
      />

      <ContinueButton />
    </Grid>
  );
};

export default BreakdownContainer;
