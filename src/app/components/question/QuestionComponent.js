import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup
} from '@mui/material';
import React from 'react';
import './Question.style.scss';

// Function to question inside our app
const QuestionComponent = ({
    questions,
    handleNext,
    handleBack,
    handleAnswerOptionClick,
    isDisplayResponse
}) => (
    <div>
        <Grid container spacing={2} className='questionBox'>
            {questions.map((question, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Paper className='content-paper-question'>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>{question.questionText}</FormLabel>
                            <RadioGroup
                                aria-label='question'
                                name={`radio-buttons-group-question-${index}`}>
                                {question?.answerOptions?.map((answer, indexAnswser) => (
                                    <FormControlLabel
                                        className={
                                            isDisplayResponse
                                                ? answer.isCorrect
                                                    ? 'success-response-quiz'
                                                    : 'error-response-quiz'
                                                : ''
                                        }
                                        key={`radio-question-${indexAnswser}`}
                                        value={answer.answerText}
                                        disabled={isDisplayResponse ? 'disabled' : ''}
                                        control={
                                            <Radio
                                                color={
                                                    isDisplayResponse
                                                        ? answer.isCorrect
                                                            ? 'success'
                                                            : 'error'
                                                        : 'primary'
                                                }
                                            />
                                        }
                                        label={answer.answerText}
                                        onClick={() =>
                                            handleAnswerOptionClick(answer.isCorrect, index)
                                        }
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
            ))}
        </Grid>

        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Button variant='text' size='medium' color='inherit' onClick={handleBack} sx={{mr: 1}}>
                Etape précédente
            </Button>
            <Box sx={{flex: '1 1 auto'}} />
            <Button onClick={handleNext} size='medium' color='primary' variant='text'>
                {isDisplayResponse ? 'Voir le score.' : 'Voir les réponses du quiz.'}
            </Button>
        </Box>
    </div>
);

export default QuestionComponent;
