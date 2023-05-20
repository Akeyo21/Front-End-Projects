import 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {backgroundColorMap} from '../utils';


type props ={
  text: string
  Icon: any
  color: string
  summaryAmount:number
}
const Summary = ({text, Icon, color, summaryAmount}:props) => {
  return (
    <Box
      p={2}
      my={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: backgroundColorMap[color],
        borderRadius: '10px',
      }}>
      <Box sx={{display: 'flex'}}>
        <Icon color={color}/>
        <Typography color={color} ml={1} sx={{fontWeight: 600}}>
          {text}
        </Typography>
      </Box>

      <Box sx={{display: 'flex', fontWeight: 800}}>
        <Typography sx={{fontWeight: 800}}>{summaryAmount}</Typography>

        <Typography sx={{fontWeight: 800, opacity: 0.3}}>/ 100</Typography>
      </Box>
    </Box>
  );
};

export default Summary
