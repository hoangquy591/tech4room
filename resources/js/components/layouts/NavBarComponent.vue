<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                {{ app_name }}
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <router-link class="nav-item" to="/posts" tag="li" active-class="active" exact>
                        <a class="nav-link">Posts</a>
                    </router-link>
                    <router-link class="nav-item" to="/questions" tag="li" active-class="active">
                        <a class="nav-link">Questions</a>
                    </router-link>
                    <router-link class="nav-item" to="/discussions" tag="li" active-class="active">
                        <a class="nav-link">Discussions</a>
                    </router-link>
                    <router-link class="nav-item" to="/example" tag="li" active-class="active">
                        <a class="nav-link">Example</a>
                    </router-link>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>

                <ul class="navbar-nav ml-auto" v-if="!isLogged">
                    <router-link class="nav-item" to="/login" tag="li">
                        <a class="nav-link">Login/Register</a>
                    </router-link>
                </ul>
                <ul class="navbar-nav ml-auto align-items-center" v-else>
                    <li class="nav-item">
                        <div class="dropdown">
                            <a class="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right pt-0 py-0">
                                <router-link class="dropdown-item" to="/" tag="a">
                                    <div class="row">
                                        <i class="fa fa-pencil-square-o col-md-2 pl-0" aria-hidden="true"></i>
                                        <span class="">Write post</span>
                                    </div>
                                </router-link>
                                <router-link class="dropdown-item" to="/" tag="a">
                                    <div class="row">
                                        <i class="fa fa-list col-md-2 pl-0" aria-hidden="true"></i>
                                        <span class="">New series</span>
                                    </div>
                                </router-link>
                                <router-link class="dropdown-item" to="/" tag="a">
                                    <div class="row">
                                        <i class="fa fa-question-circle-o col-md-2 pl-0" aria-hidden="true"></i>
                                        <span class="">Ask question</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown">
                                <img class="rounded-circle avatar--md" src="../../../assets/default-avatar-img.jpg" alt="">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right pt-0 py-0 border-0">
                                <div class="card">
                                    <div class="card-header d-flex">
                                        <img class="rounded-circle mr-1" src="../../../assets/default-avatar-img.jpg" alt="">
                                        <div>
                                            <span class="text-primary">{{loggedUser.name}}</span>
                                            <p class="mb-2">@{{loggedUser.uname}}</p>
                                            <button class="btn btn-primary p-0 pl-3 pr-3">Edit</button>
                                        </div>
                                    </div>
                                    <router-link class="dropdown-item" to="/" tag="a">
                                        <div class="row">
                                            <i class="fa fa-user col-md-2 pl-0" aria-hidden="true"></i>
                                            <span class="">Profile</span>
                                        </div>
                                    </router-link>
                                    <router-link class="dropdown-item" to="/" tag="a">
                                        <div class="row">
                                            <i class="fa fa-file-text-o col-md-2 pl-0" aria-hidden="true"></i>
                                            <span class="">My Contents</span>
                                        </div>
                                    </router-link>
                                    <div class="dropdown-divider m-0"></div>
                                    <a class="dropdown-item" @click.prevent="logout">
                                        <div class="row">
                                            <i class="fa fa-sign-out col-md-2 pl-0" aria-hidden="true"></i>
                                            <span class="">Logout</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link" @click.prevent="logout">Logout</a>-->
<!--                    </li>-->
                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "NavBarComponent",
        data() {
            return {
                app_name: process.env.MIX_APP_NAME,
            }
        },
        methods: {
            logout: function () {
                this.$store.dispatch('auth/logout').then((response) => {
                    this.$router.push('/').catch(()=>{})
                });
            }
        },
        computed: {
            ...mapGetters({
                isLogged : 'auth/isLogged',
                loggedUser : 'auth/loggedUser'
            })
        }
    }
</script>

<style scoped>
    a.nav-link, a.dropdown-item {
        cursor: pointer;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    a.nav-link:active, :hover, :focus {
        outline: none;
    }
    a.dropdown-item:hover {
        background-color: #b0dae4;
    }
    .dropdown-toggle::after {
        content: none;
    }
    .avatar--md {
        width: 37px;
        height: 37px;
        cursor: pointer
    }
    .fa {
        text-align: center;
        color: #999;
        font-size: 1.4rem;
    }
    div.dropdown-menu.dropdown-menu-right {
        min-width: 250px;
    }
    div.card-header > img {
        width: 40%;
        height: 40%;
    }
</style>
