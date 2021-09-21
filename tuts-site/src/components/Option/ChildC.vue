<template>
    <div>
        <h1 class="title">Child C</h1>
        <h1 class="title">{{title}}</h1>
        <h1 class="title"> injected Title:{{injectedTitle}}</h1>
        <h1 class="title"> injected count:{{childCount}}</h1>
        <h1 class="title"> injected refTitle:{{refTitle}}</h1>
        <h1 class="title"> injected refContent:{{refContent}}</h1>
        <div class="control">
            <button class="button" @click="incrementCount" > increment </button>
        </div>
    </div>
</template>

<script>
    import {inject, toRefs} from 'vue';

    export default {

        name:"ChildC",
        setup(){
            const injectedTitle = inject('refProvideTitle','default machine leaerning2');
            const childCount = inject('count',0);
            const childTut = inject('refTut',{});
            const incrementCount = inject('incrementCount')
            console.log(childTut)
            return {
                injectedTitle,
                childCount,
                ... toRefs(childTut),
                incrementCount
            }
        },
        inject:['title']
    }
</script>