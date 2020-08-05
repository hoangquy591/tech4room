import ExampleComponent from "../components/ExampleComponent";
import PostsComponent from "../components/posts/PostsComponent";
import QuestionsComponent from "../components/questions/QuestionsComponent";
import DiscussionsComponent from "../components/DiscussionsComponent";
import LoginComponent from "../components/auth/LoginComponent";
import QuestionCreate from "../components/questions/QuestionCreate";
import RegisterComponent from "../components/auth/RegisterComponent";
import ForgotPasswordComponent from "../components/ForgotPasswordComponent";
import QuestionDetails from "../components/questions/QuestionDetails";
import QuestionList from "../components/questions/QuestionList";

export const routes = [
    {
        path: '/',
        redirect: '/posts'
    },
    {
        path: '/posts',
        component: PostsComponent
    },
    {
        path: '/questions',
        component: QuestionsComponent,
        children: [
            {
                path: '',
                component: QuestionList
            },
            {
                path: 'ask',
                name: 'questions.ask',
                component: QuestionCreate
            }
        ]
    },
    {
        path: '/q',
        name: 'qdetail',
        component: QuestionDetails
    },
    {
        path: '/discussions',
        component: DiscussionsComponent
    },
    {
        path: '/example',
        component: ExampleComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/register',
        component: RegisterComponent
    },
    {
        path: '/forgot',
        component: ForgotPasswordComponent
    },
];
