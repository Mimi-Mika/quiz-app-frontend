const local = {
    env: 'local',
    quizApi: {
        hostname: 'localhost',
        port: 3000,
        get url() {
            return `http://${this.hostname}:${this.port}/`;
        }
    }
};
export default local;
