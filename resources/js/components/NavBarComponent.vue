<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
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

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <router-link class="nav-item" to="/login" tag="li">
                        <a class="nav-link">Login</a>
                    </router-link>
                    <router-link class="nav-item" to="/register" tag="li">
                        <a class="nav-link">Register</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBarComponent",
        data() {
            return {
                app_name: process.env.MIX_APP_NAME,
            }
        }
    }
</script>

<style scoped>
    a:active {
        outline: none;
    }
</style>
