<template>
    <div>
        <img class="loading" src="../assets/images/carLoadingGif.gif">
    </div>
</template>

<script>

export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
    .loading {
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20em;
    }
</style>