<template>
    <!-- <div class="nav">
        <slot name="nav-item"></slot>
    </div> -->
    <nav class="nav">
        <slot name="nav-item"></slot>
    </nav>

</template>

<script>

export default {
    name: "nav-bar"
}
</script>

<style lang="scss">
.nav {
    text-align: center;
    font-size: 1em;
    border-bottom: 1px solid #dee2e6;
    padding: 0 4vmin;
    // padding-left: 5px;
    // padding-right: 5px;
    // margin-top: 20px;
    margin: 1vmin 0;
    display: flex;
    justify-content: flex-end;
}

.nav-link {
    text-decoration: none;
    display: inline-block;
    padding: 5vmin;
    // padding: 13px 13px;
    color: #212529;
    margin-right: 3vmin;
    border-bottom: 2px solid transparent;
}

.nav-link:hover {
    text-decoration: none;
    background-color: #d0ebff;
    border-bottom: 2px solid #339af0
}

.nav-link.current {
    border-bottom: 2px solid #1971c2;
}

@media (min-width: 768px) {
    .nav {
        font-size: 1.1em;
        padding: 0 2vmin;
        // padding-left: 10px;
        // padding-right: 10px;
    }

    .nav-link {
        padding: 3vmin 3vmin;
    }
}
</style>