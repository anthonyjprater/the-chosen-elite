<script setup lang="ts">

</script>
<template>
    <div class="container">
        <h1>News from CEA</h1>
        <iframe src="https://www.youtube.com/embed/IeqNVFVaEOs?si=sBCByk6bUqgeoMGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>


<style scoped>

.container {
    display: grid;
    place-items: center;
    overflow: auto;
}

h1,h2,h3 {
  text-shadow: 1px 1px 1px #000;
  padding: 1rem;
  color: var(--green);
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
