import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ExamQuestionCard({question,dir}) {

  return (
    <Card dir={dir} sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container justifyContent={"center"}>
            <Grid item xs="12">
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {question.questionText}
        </Typography>
            </Grid>
            <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="red" gutterBottom>
         a){question.incorrectChoice1}
        </Typography>      
            </Grid>
            <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="red" gutterBottom>
         b){question.incorrectChoice2}
        </Typography>      
            </Grid>
            <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="red" gutterBottom>
         c){question.incorrectChoice3}
        </Typography>      
            </Grid>
            <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="green" gutterBottom>
          d){question.correctChoice}
        </Typography>      
            </Grid>
        </Grid>
        
      </CardContent>
      <CardActions>
        <Button size="large" fullWidth variant='outlined' color='error'>حذف</Button>
      </CardActions>
    </Card>
  );
}