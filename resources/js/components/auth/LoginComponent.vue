<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card text-center">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <p class="invalid-feedback" v-if="errorMessage" role="alert">
                            {{errorMessage}}
                        </p>
                        <form @submit.prevent="login">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <input v-model="user.email" type="email" class="form-control"
                                               name="email" placeholder="Your Email">
                                    </div>

                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">

                                <div class="col-md-10">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon2">
                                                <i class="fa fa-lock" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <input id="password" v-model="user.password" type="password"
                                               class="form-control"
                                               name="password" placeholder="Password" required>
                                    </div>
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row mb-0 justify-content-center">
                                <div class="col-md-10">
                                    <button type="submit" class="btn btn-primary w-100">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <div class="d-flex justify-content-between">
                                        <router-link class="btn btn-link pl-0" to="/forgot">
                                            <small>Forgot your password?</small>
                                        </router-link>
                                        <router-link class="btn btn-link pr-0" to="/register">
                                            <small>Create account</small>
                                        </router-link>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginComponent",
        data() {
            return {
                errorMessage: "",
                user: {
                    email: "",
                    password: "",
                }
            }
        },
        methods: {
            login: function () {
                this.$store.dispatch('auth/login', this.user)
                    .then(
                        () => {
                            this.$router.push('/posts')
                        })
                    .catch(
                        (error) => {
                            this.errorMessage = error.data.message;
                            this.user.email = '';
                            this.user.password = '';
                        }
                    )
            }
        }
    }
</script>

<style>

</style>
