<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <span class="title">{{title}}</span>
        </div>
    </nav>
</template>
<script>
export default {
    name:"NavBar",
    props:['title']
}
</script>