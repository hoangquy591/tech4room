<template>
    <div class="question-item">
        <div class="row">
            <div class="col-md-3">
                <div class="time-asked mb-1">
                    <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;{{question.created_at}}
                </div>
                <div class="d-flex flex-row mb-1">
                    <img class="mr-1 w-25" src="../../../assets/default-avatar-img.jpg" alt="">
                    <div>
                        <div class="author" >
                            <a href="/">
                                <span>@{{question.author}}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="question-info d-flex justify-content-between">
                    <span><i class="fa fa-reply" aria-hidden="true"></i>&nbsp;0</span>
                    <span><i class="fa fa-comments" aria-hidden="true"></i>&nbsp;0</span>
                    <span><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{{question.views}}</span>
                </div>
            </div>
            <div class="question-vote col-md-1 bg-secondary text-white d-flex justify-content-center align-items-center flex-wrap">
                <div class="text-center">
                    <h3>{{question.score}}</h3>
                    <span><i>Votes</i></span>
                </div>
            </div>
            <div class="col-md-8">
                <router-link class="question-link" :to="{name: 'qdetail'}">
                    <h5>{{question.title}}</h5>
                </router-link>
<!--                <small>Short body</small>-->
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Question",
        props: {
            question: {},
        }
    }
</script>

<style scoped>
    .question-vote {
        border-radius: 10px
    }
    a.question-link {
        text-decoration: none;
        color: inherit
    }
    a.question-link:hover {
        text-decoration: none;
        color: #5488c7;
    }
</style>
