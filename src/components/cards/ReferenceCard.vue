<script setup>

const props = defineProps({
    reviews: {
      type: Array,
      required: true,
    }
  });

const starRating = (rating) => {
    const value = Array(Number(rating)).fill('★')

    return value
}



</script>

<template>
    <div class="article-container">
        <article v-for="review in reviews" :key='review.id'>
            <div>
                <div>
                    <h2>{{ review.name }}</h2>
                    <time datetime="2023-12-04">{{ review.date }}</time>
                    <div class="rating">
                        <svg v-for="star in starRating(review.rating)" :key='star' width="24" height="24" viewBox="0 0 24 25" fill="#61f31e" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 2.125C12.2851 2.125 12.5459 2.28707 12.6722 2.54308L15.3264 7.9211L21.2614 8.78351C21.5439 8.82456 21.7786 9.02244 21.8669 9.29395C21.9551 9.56546 21.8815 9.86351 21.6771 10.0628L17.3825 14.249L18.3963 20.16C18.4445 20.4414 18.3289 20.7257 18.0979 20.8936C17.867 21.0614 17.5608 21.0835 17.3081 20.9506L11.9996 18.1598L6.69122 20.9506C6.43853 21.0835 6.13233 21.0614 5.90137 20.8936C5.67041 20.7257 5.55475 20.4414 5.603 20.16L6.61682 14.249L2.32222 10.0628C2.11779 9.86351 2.04421 9.56546 2.13243 9.29395C2.22065 9.02244 2.45536 8.82456 2.73788 8.78351L8.67288 7.9211L11.3271 2.54308C11.4534 2.28707 11.7142 2.125 11.9996 2.125ZM11.9996 4.56966L9.84348 8.93853C9.73423 9.15989 9.52306 9.31331 9.27878 9.34881L4.45745 10.0494L7.94619 13.4501C8.12296 13.6224 8.20362 13.8706 8.16189 14.1139L7.33831 18.9158L11.6506 16.6487C11.8691 16.5338 12.1302 16.5338 12.3486 16.6487L16.661 18.9158L15.8374 14.1139C15.7957 13.8706 15.8763 13.6224 16.0531 13.4501L19.5418 10.0494L14.7205 9.34881C14.4762 9.31331 14.2651 9.15989 14.1558 8.93853L11.9996 4.56966Z" fill="#61f31e"/>
                        </svg>
                    </div>
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

div.rating {
    display: flex;
    flex-direction: row;
    align-items: center;
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