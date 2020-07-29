<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card text-center">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <p class="invalid-feedback" v-if="errors" role="alert">
                            <span v-if="errors.email">{{ errors.email }}</span>
                            <span v-if="errors.uname">{{ errors.uname }}</span>
                        </p>
                        <form @submit.prevent="register">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <input id="name"
                                           v-model="user.name"
                                           :class="{invalid: $v.user.name.$anyError}"
                                           @blur="$v.user.name.$touch()"
                                           type="text" class="form-control" name="name"
                                           placeholder="Your name">
                                    <div v-if="$v.user.name.$error" class="invalid-feedback text-right">
                                        <span v-if="!$v.user.name.required" role="alert">This field must not be empty</span>
                                        <span v-if="!$v.user.name.minLength || !$v.user.name.maxLength" role="alert">
                                            Name has {{$v.user.name.$params.minLength.min}}-{{$v.user.name.$params.maxLength.max}} character
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input v-model="user.email"
                                                   :class="{invalid: $v.user.email.$anyError}"
                                                   @blur="$v.user.email.$touch()"
                                                   class="form-control"
                                                   placeholder="Your email address" name="email">
                                            <div v-if="$v.user.email.$error" class="invalid-feedback text-right">
                                                <span v-if="!$v.user.email.email" role="alert">Please provide a valid email address</span>
                                                <span v-if="!$v.user.email.required" role="alert">This field must not be empty</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <input v-model="user.uname"
                                                   :class="{invalid: $v.user.uname.$anyError}"
                                                   @blur="$v.user.uname.$touch()"
                                                   type="text" class="form-control" name="uname"
                                                   placeholder="Username">
                                            <div v-if="$v.user.uname.$error" class="invalid-feedback text-right">
                                                <span v-if="!$v.user.uname.required" role="alert">This field must not be empty</span>
                                                <span v-if="!$v.user.uname.minLength || !$v.user.uname.maxLength" role="alert">
                                                    Username has {{$v.user.uname.$params.minLength.min}}-{{$v.user.uname.$params.maxLength.max}} character
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <input v-model="user.password"
                                           @blur="$v.user.password.$touch()"
                                           :class="{invalid: $v.user.password.$anyError}"
                                           type="password" class="form-control"
                                           name="password"
                                           placeholder="Password">
                                    <div v-if="$v.user.password.$error" class="invalid-feedback text-right">
                                        <span v-if="!$v.user.password.required" role="alert">This field must not be empty
                                        </span>
                                        <span v-if="!$v.user.password.minLength || !$v.user.password.maxLength" role="alert">Password has {{$v.user.password.$params.minLength.min}}-{{$v.user.password.$params.maxLength.max}} character
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <input v-model="user.password_confirmation"
                                           :class="{invalid: $v.user.password_confirmation.$anyError}"
                                           @blur="$v.user.password_confirmation.$touch()"
                                           type="password" class="form-control"
                                           name="password_confirmation"
                                           placeholder="Confirm your password">
                                    <div v-if="$v.user.password_confirmation.$error" class="invalid-feedback text-right">
                                        <span v-if="!$v.user.password_confirmation.sameAsPassword" role="alert">
                                            Password Confirmation not match with Password
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0 justify-content-center">
                                <div class="col-md-10">
                                    <button type="submit" :disabled="$v.$invalid" class="btn btn-primary w-100">
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
    import {required, email, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'

    export default {
        name: "RegisterComponent",
        data() {
            return {
                errors: {},
                user: {
                    name: "",
                    uname: "",
                    email: "",
                    password: "",
                    password_confirmation: ""
                }
            }
        },
        validations: {
            user: {
                name: {required, minLength: minLength(6), maxLength: maxLength(50)},
                uname: {required, minLength: minLength(6), maxLength: maxLength(18)},
                email: {required, email},
                password: {required, minLength: minLength(6), maxLength: maxLength(24)},
                password_confirmation: {sameAsPassword: sameAs('password')}
            }
        },
        methods: {
            register: function () {
                this.$store.dispatch('auth/register', this.user)
                    .then(() => this.$router.push('/login'))
                    .catch(err => this.errors = err.data.errors);
                console.log(this.errors);
            }
        },
    }
</script>

<style scoped>

</style>
