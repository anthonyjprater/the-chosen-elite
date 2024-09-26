<script setup lang="ts">

</script>
<template>
    <div class="container">
        <iframe src="https://www.youtube.com/embed/IeqNVFVaEOs?si=sBCByk6bUqgeoMGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>


<style scoped>

.container {
    display: grid;
    place-items: center;
    overflow: auto;
}

/* ----------- New Gallery Images ----------- */

img {
    aspect-ratio: 9/16;
}

iframe {
    aspect-ratio: 16 / 9;
    width: 100% !important;
}

@media (min-width: 768px) {
    iframe {
        width: 640px !important;
    }
}

</style>