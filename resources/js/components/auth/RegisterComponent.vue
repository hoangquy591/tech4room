<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card text-center">
                    <div class="card-header">Register</div>

                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <input id="name" v-model="user.name" type="text" class="form-control" name="name"
                                           placeholder="Your name" required>
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input id="email" v-model="user.email" type="email" class="form-control"
                                                   placeholder="Your email address" name="email" required>
                                            <span class="invalid-feedback" role="alert"><strong></strong></span>
                                        </div>
                                        <div class="col-md-6">
                                            <input v-model="user.uname" type="text" class="form-control" name="uname"
                                                   placeholder="Username" required>
                                            <span class="invalid-feedback" role="alert"><strong></strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <input id="password" v-model="user.password" type="password" class="form-control"
                                           name="password"
                                           placeholder="Password" required>
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <input id="password_confirmation" v-model="user.password_confirmation"
                                           type="password" class="form-control"
                                           name="password_confirmation"
                                           placeholder="Confirm your password" required>
                                </div>
                            </div>

                            <div class="form-group row mb-0 justify-content-center">
                                <div class="col-md-10">
                                    <button type="submit" class="btn btn-primary w-100">
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <div class="d-flex">
                                        <router-link class="btn btn-link pl-0" to="/login">
                                            <small>Have an account to login. Try login.</small>
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
        name: "RegisterComponent",
        data() {
            return {
                user: {
                    name: "",
                    uname: "",
                    email: "",
                    password: "",
                    password_confirmation: ""
                }
            }
        },
        methods: {
            register: function () {
                this.$store.dispatch('auth/register', this.user).then(() => this.$router.push('/login')).catch(err => console.log(err));
            }
        },
    }
</script>

<style scoped>

</style>
