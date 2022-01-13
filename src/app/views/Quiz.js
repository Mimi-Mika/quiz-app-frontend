import {Container, Paper, Step, StepLabel, Stepper, Typography} from '@mui/material';
import React, {Component} from 'react';
import QuestionComponent from '../components/question/QuestionComponent';
import ResultComponent from '../components/result/ResultComponent';
import SelectQuizComponent from '../components/selectQuiz/SelectQuizComponent';
import QuizService from '../services/QuizService';
import '../style/Quiz.style.scss';

class Quiz extends Component {
    quizApiService;

    constructor() {
        super();
        this.state = {
            activeStep: 0,
            steps: [
                'Selectionner un quiz',
                'Répondre aux questions du quiz',
                'Réponses aux questions du quiz',
                'Résultats du quiz'
            ],
            quizList: [],
            quizSelect: undefined,
            questions: [],
            score: 0,
            previousIndexQuestion: undefined,
            previousResponseQuestion: undefined
        };
    }

    async componentDidMount() {
        this.quizApiService = new QuizService();
        const quizList = await this.quizApiService.quizGet('quiz/list');
        this.setState({quizList: quizList?.data || []});
    }

    setActiveStep = (valueStep) => {
        this.setState({activeStep: valueStep});
    };

    handleNext = async () => {
        if (this.state.activeStep === 0) {
            // Récupération des la liste des question
            const valueQuizSelect = this.state.quizSelect.toLowerCase();
            const questionsList = await this.quizApiService.quizGet(`quiz/${valueQuizSelect}`);
            this.setState({questions: questionsList?.data || []});
        }
        this.setActiveStep(this.state.activeStep + 1);
    };

    handleBack = () => {
        this.setActiveStep(this.state.activeStep - 1);
    };

    handleReset = () => {
        this.setState({
            score: 0
        });
        this.setActiveStep(0);
    };

    setSelectionQuiz = (event, value) => {
        this.setState({quizSelect: value});
    };

    handleAnswerOptionClick = (isCorrect, indexQuestion) => {
        const {previousResponseQuestion, previousIndexQuestion, score} = this.state;
        let scoreUpdate = score;
        if (previousIndexQuestion && indexQuestion === previousIndexQuestion)
            scoreUpdate = previousResponseQuestion
                ? isCorrect || indexQuestion === 0
                    ? scoreUpdate
                    : scoreUpdate - 1
                : isCorrect
                ? scoreUpdate + 1
                : indexQuestion === 0
                ? scoreUpdate
                : scoreUpdate - 1;
        else scoreUpdate = isCorrect ? scoreUpdate + 1 : scoreUpdate;
        this.setState({
            previousResponseQuestion: isCorrect,
            previousIndexQuestion: indexQuestion,
            score: scoreUpdate
        });
    };

    render() {
        return (
            <Container fixed className='container-quiz'>
                <Stepper activeStep={this.state.activeStep} className='stepper'>
                    {this.state.steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={`key-${label}-${index}`} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {this.state.activeStep === 0 ? (
                    <Paper className='papper-stepper'>
                        {this.state.quizList.length > 0 ? (
                            <SelectQuizComponent
                                quizList={this.state.quizList}
                                handleNext={this.handleNext}
                                setSelectionQuiz={this.setSelectionQuiz}
                                quizSelect={this.state.quizSelect}
                            />
                        ) : (
                            <span>Aucun quiz n&apos;a été trouvé !</span>
                        )}
                    </Paper>
                ) : this.state.activeStep === 1 || this.state.activeStep === 2 ? (
                    <Paper className='papper-stepper'>
                        {this.state.questions.length > 0 ? (
                            <QuestionComponent
                                questions={this.state.questions}
                                handleNext={this.handleNext}
                                handleBack={this.handleBack}
                                handleAnswerOptionClick={this.handleAnswerOptionClick}
                                isDisplayResponse={this.state.activeStep === 2}
                            />
                        ) : (
                            <span>Aucune question n&apos;a été trouvé !</span>
                        )}
                    </Paper>
                ) : this.state.activeStep === 3 ? (
                    <Paper className='papper-stepper'>
                        <Typography sx={{mt: 2, mb: 1}}>
                            <ResultComponent
                                score={this.state.score}
                                playAgain={this.handleReset}
                                numberOfQuestions={this.state.questions?.length}
                            />
                        </Typography>
                    </Paper>
                ) : null}
            </Container>
        );
    }
}
export default Quiz;
