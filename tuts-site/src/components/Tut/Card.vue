<template>
    <div>
        <div class="card">
            <header class="card-header">
                <slot name="header"></slot>
            </header>
            <div class="card-image">
                <slot name="img"></slot>
            </div>
            <div class="card-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Card"
    }
</script>

<style scoped>

</style>