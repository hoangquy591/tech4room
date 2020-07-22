import ExampleComponent from "../components/ExampleComponent";
import PostsComponent from "../components/PostsComponent";
import QuestionsComponent from "../components/QuestionsComponent";
import DiscussionsComponent from "../components/DiscussionsComponent";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import ForgotPasswordComponent from "../components/ForgotPasswordComponent";

export const routes = [
    { path: '/', redirect: '/posts'},
    { path: '/posts', component: PostsComponent},
    { path: '/questions', component: QuestionsComponent},
    { path: '/discussions', component: DiscussionsComponent},
    { path: '/example', component: ExampleComponent},
    { path: '/login', component: LoginComponent},
    { path: '/register', component: RegisterComponent},
    { path: '/forgot', component: ForgotPasswordComponent},
];
