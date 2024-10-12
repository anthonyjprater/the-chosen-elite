<script setup>

const props = defineProps({
    reviews: {
      type: Array,
      required: true,
    }
  });

</script>

<template>
    <div class="article-container">
        <article v-for="review in reviews" :key='review.id'>
            <div>
                <div>
                    <h2>{{ review.name }}</h2>
                    <time datetime="2023-12-04">{{ review.date }}</time>
                </div>
            </div>
            <p>{{ review.content }}</p>
        </article>
    </div>
</template>

<style scoped>

div.article-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
}

article {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 1rem;
    background-color: #474747;
    border-radius: 2px;
}

article div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

article h2, article time, article p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

article div div {
    display: flex;
    flex-direction: column;
}

@media(min-width: 768px) {

    div.article-container {
        flex-flow: row wrap;
        justify-content: space-between;
    }

    article {
        max-width: 45%;
        padding: 1.5rem 2.5rem;
    }
    
}
</style>