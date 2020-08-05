<template>
    <form @submit.prevent="create">
        <div class="form-group">
            <input type="text" v-model="question.title" class="form-control" placeholder="Title">
        </div>
        <div class="form-group">
            <vue-editor style="min-height:300px;" v-model="question.body" :options="editorOpts"></vue-editor>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-outline-primary">
                Create Question
            </button>
            <button class="btn btn-outline-secondary">
                Discard
            </button>
        </div>
    </form>
</template>

<script>
    import {VueEditor} from 'vue2-quill-editor';
    import {mapGetters} from "vuex";

    export default {
        name: "QuestionCreate",
        data() {
            return {
                question: {
                    title: '',
                    body: '',
                    author: this.$store.getters['auth/loggedUser'].uname
                },
                editorOpts: {
                    modules: {
                        toolbar: [
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'font': []}],
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{'list': 'ordered'}, {'list': 'bullet'}, {'align': []}],
                            [{'color': []}, {'background': []}],
                            ['clean'],
                            ['link', 'image', 'video'],
                            [{'direction': 'rtl'}]
                        ]
                    },
                    theme: 'snow'
                }
            }
        },
        components: {
            VueEditor
        },
        methods: {
            create: function () {
                this.$store.dispatch('question/create', this.question)
                    .then(
                        () => {
                            this.$router.push('/questions');
                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error);
                        }
                    )
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

</style>
