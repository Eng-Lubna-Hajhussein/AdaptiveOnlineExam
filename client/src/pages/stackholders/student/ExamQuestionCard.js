import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ExamQuestionCard({question,index,dir}) {

  return (
    <Card dir={dir} sx={{ minWidth: 875 }}>
      <CardContent>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{index}) {question?.questionText}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label={question?.incorrectChoice1} />
        <FormControlLabel value="2" control={<Radio />} label={question?.incorrectChoice2} />
        <FormControlLabel value="3" control={<Radio />} label={question?.incorrectChoice3} />
        <FormControlLabel value="4" control={<Radio />} label={question?.correctChoice} />
      </RadioGroup>
    </FormControl>
        
      </CardContent>
    </Card>
  );
}