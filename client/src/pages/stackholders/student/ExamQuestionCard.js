import * as React from "react";
import {
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@basetoolkit/ui";

export default function ExamQuestionCard({ question, index, dir }) {
  return (
    <Card dir={dir} sx={{ minWidth: 875 }}>
      <CardContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {index}) {question?.questionText}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={question?.incorrectChoice1}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={question?.incorrectChoice2}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={question?.incorrectChoice3}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label={question?.correctChoice}
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
