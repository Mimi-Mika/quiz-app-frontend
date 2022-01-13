import axios from 'axios';
import env from '../environment/Environment';

class QuizService {
    getUrl = (path) => new URL(`${env.quizApi.url}${path}`).toString();

    header = () => ({
        headers: {
            'Content-Type': 'application/json'
        }
    });

    getResponse = (axiosResquest) =>
        axiosResquest()
            .then((response) => response)
            .catch((e) => console.error('Error getResponse:', JSON.stringify(e)));

    quizGet = (path) => {
        const url = this.getUrl(path);
        return this.getResponse(() => axios.get(url, this.header())).catch((e) =>
            console.error('error response endpoint:', JSON.stringify(e))
        );
    };
}
export default QuizService;
