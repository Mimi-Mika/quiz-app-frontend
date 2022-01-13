import {Box, Button} from '@mui/material';
import React from 'react';
import './Result.style.scss';

const ResultComponent = ({score, playAgain, numberOfQuestions}) => {
    const percent = (score * numberOfQuestions) / 100;
    return (
        <div className='score-board'>
            <div className='score' align='center'>
                <span>
                    Votre score :{' '}
                    <b
                        className={
                            percent < 50
                                ? 'percent-bad'
                                : percent > 50
                                ? 'percent-good'
                                : 'percent-medium'
                        }>
                        {score}/{numberOfQuestions}
                    </b>
                </span>
                <br />
                <span>
                    Taux de réussite :{' '}
                    <b
                        className={
                            percent < 50
                                ? 'percent-bad'
                                : percent > 50
                                ? 'percent-good'
                                : 'percent-medium'
                        }>
                        {percent} %
                    </b>
                </span>
            </div>
            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                <Box sx={{flex: '1 1 auto'}} />
                <Button color='primary' variant='text' size='medium' onClick={playAgain}>
                    Rejouer
                </Button>
            </Box>
        </div>
    );
};

export default ResultComponent;
