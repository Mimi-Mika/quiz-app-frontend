import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup
} from '@mui/material';
import React from 'react';
import './SelectQuiz.style.scss';

const SelectQuizComponent = ({quizList, handleNext, setSelectionQuiz, quizSelect}) => (
    <div className='quiz-board' align='center'>
        <FormControl component='fieldset'>
            <FormLabel component='legend'>
                Sélectionner un quiz parmis la liste suivante :
            </FormLabel>
            <RadioGroup
                aria-label='quiz'
                value={quizSelect}
                name='radio-buttons-group-quiz-list'
                onChange={setSelectionQuiz}>
                {quizList.map((quiz) => (
                    <FormControlLabel
                        key={`radio-quiz-${quiz}`}
                        value={quiz}
                        control={<Radio />}
                        label={quiz}
                    />
                ))}
            </RadioGroup>
        </FormControl>
        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Box sx={{flex: '2 1 auto'}} />
            <Button
                onClick={handleNext}
                color={quizSelect ? 'primary' : 'inherit'}
                disabled={!quizSelect}
                variant='text'
                size='medium'>
                Etape suivante
            </Button>
        </Box>
    </div>
);

export default SelectQuizComponent;
