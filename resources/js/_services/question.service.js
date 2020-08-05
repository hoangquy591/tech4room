import axios from 'axios';

const AUTH_URL = 'http://tech4room.test:8080/api/question/';

export const QuestionService = {
    all,
    create
};

function all(record, page) {
    return axios.get(
        AUTH_URL + 'all',
        {
            record,
            page,
        }
    )
}

function create(question) {
    return axios.post(
        AUTH_URL + 'create',
        {
            title: question.title,
            body: question.body,
            author: question.author
        }
    )
}

