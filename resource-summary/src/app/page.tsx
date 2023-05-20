'use client';

import 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ThemeProvider} from '@emotion/react';
import { theme} from './utils';
import BreakdownContainer from './components/BreakdownContainer';
import PerformanceTextContainer from './components/PerformanceTextContainer';
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
        }}>
        <Grid
          container
          sx={{
            width: '60%',
            borderRadius: '20px',
            boxShadow: 3,
          }}>
          <PerformanceTextContainer/>

          <BreakdownContainer/>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
