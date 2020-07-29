<template>
    <div class="question-item row">
        <div class="col-md-3">
            <div class="time-asked mb-1">
                <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;29-07-2020 10:59 AM
            </div>
            <div class="d-flex flex-row mb-1">
                <img class="mr-1 w-25" src="../../../assets/default-avatar-img.jpg" alt="">
                <div>
                    <div class="author" >
                        <a href="/">
                            <span>@quyhn91</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="question-info d-flex justify-content-between">
                <span><i class="fa fa-reply" aria-hidden="true"></i>&nbsp;15</span>
                <span><i class="fa fa-comments" aria-hidden="true"></i>&nbsp;15</span>
                <span><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;15</span>
            </div>
        </div>
        <div class="question-vote col-md-1 bg-secondary text-white d-flex justify-content-center align-items-center flex-wrap">
            <div class="text-center">
                <h3>6</h3>
                <span><i>Votes</i></span>
            </div>
        </div>
        <div class="col-md-8">
            <a class="question-link" href="/">
                <h5>Học những gì và học như thế nào để có cơ hội phát triển bản thân tốt hơn khi mới bắt đầu đi làm ?</h5>
            </a>
            <small>Short body</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Question"
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
