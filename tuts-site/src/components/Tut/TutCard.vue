<template>
    <div class="section">
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img  alt="Placeholder image">
            </figure>
        </div>
        <div class="card-header">
            <div class="card-header-title">{{title}}</div>
        </div>
        <div class="card-content">
            {{content}}
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"TutCard",
        data(){
            return{

            }
        },
        props:["title","content"]
    }
</script>

<style scoped>

</style>