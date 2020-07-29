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
                                    <div class="input-group" :class="{invalid: $v.user.email.$anyError}">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <input @blur="$v.user.email.$touch()"
                                               v-model="user.email"
                                               class="form-control"
                                               name="email" placeholder="Your Email">
                                    </div>
                                    <div v-if="$v.user.email.$error" class="invalid-feedback text-right">
                                        <span v-if="!$v.user.email.email" role="alert">Please provide a valid email address
                                        </span>
                                        <span v-if="!$v.user.email.required" role="alert">This field must not be empty
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <div class="input-group" :class="{invalid: $v.user.password.$anyError}">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon2">
                                                <i class="fa fa-lock" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <input
                                            @blur="$v.user.password.$touch()"
                                            v-model="user.password" type="password"
                                            class="form-control"
                                            name="password" placeholder="Password">
                                    </div>
                                    <div v-if="$v.user.password.$error" class="invalid-feedback text-right">
                                        <span v-if="!$v.user.password.required" role="alert">This field must not be empty
                                        </span>
                                        <span v-if="!$v.user.password.minLength || !$v.user.password.maxLength" role="alert">Password has {{$v.user.password.$params.minLength.min}}-{{$v.user.password.$params.maxLength.max}} character
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0 justify-content-center">
                                <div class="col-md-10">
                                    <button type="submit" :disabled="$v.$invalid" class="btn btn-primary w-100">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <div class="d-flex justify-content-between">
                                        <router-link class="btn btn-link pl-0" to="/forgot">Forgot your password?
                                        </router-link>
                                        <router-link class="btn btn-link pr-0" to="/register">Create account
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
    import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'

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
        validations: {
            user: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(24)
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
                            this.$v.$reset();
                        }
                    )
            }
        }
    }
</script>

<style>
    .invalid {
        border: 1px solid #dc3545;
        border-radius: .25rem
    }

    .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #dc3545
    }
</style>
