<script setup>
const props = defineProps({
  slide: {
    type: Object
  },
})

console.log(props)
</script>

<template>
    <div class="carousel__item">
        <i class="fa-solid fa-basketball"></i>
        <div class="carousel__text">
            {{slide.content}}
        </div>
    </div>
    
</template>

<style scoped>
.carousel__item {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 0;
}

.fa-basketball {
    color: var(--grey);
    font-size: 1.5rem;
    padding: 1rem;
    background: var(--green);
    border-radius: 5px;
    align-self: center;
}

@media(min-width:768px) {
    .carousel__item {
        width: 350px;
    }
}
</style>
