<script setup>
const props = defineProps({
  image: {
    type: Object
  },
})
</script>
<template>
    <figure>
      <img :src="props.image.image" alt="">
    </figure>
</template>

<style scoped>
    h3 {
        color: var(--green);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8), -1px -1px 3px rgba(0, 0, 0, 0.8);
      scale: 0.9;
    }

    img:hover {
      scale: 1;
      box-shadow: none;
    }
    
    button {
      color: red;
    }

</style>