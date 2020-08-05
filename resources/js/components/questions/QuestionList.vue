<template>
    <div class="row">
        <div class="col-md-9">
            <question-item v-for="(question, index) in questions" :key="index" v-bind:question="question"></question-item>
        </div>
        <div class="col-md-3">
            Post list
        </div>
    </div>

</template>

<script>
    import QuestionItem from "./QuestionItem";

    export default {
        name: "QuestionList",
        components: {
            QuestionItem,
        },
        data() {
            return {
                questionsMetadata: [],
                questions: []
            }
        },
        mounted: function () {
            this.$store.dispatch('question/all')
                .then((response) => {
                        this.questionsMetadata = response[0];
                        // console.log(this.questionsMetadata.data);
                        this.questions = this.questionsMetadata.data
                    }
                )
                .catch((error) => {
                    console.log(error);
                });
        },
    }
</script>

<style scoped>

</style>
