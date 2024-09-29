<template>
  <h1 class="gallery-title">{{ title }}</h1>
    <div class="youtube-gallery">
      <div class="video-grid">
        <div v-for="video in videos" :key="video.id" class="video-item">
          <iframe
            :src="`https://www.youtube.com/embed/${video.id}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <!-- <h3>{{ video.title }}</h3> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    title: {
      type: String,
      default: 'News and Video Updates'
    },
    videos: {
      type: Array,
      default: () => [
        { id: 'IeqNVFVaEOs?si=sBCByk6bUqgeoMGa', title: 'The grind never stops Stay chosen!' },
        { id: 'KLv5B6AUejs?si=M3W2UFdVqicblOw_', title: 'When you do what you love you’ll never work another day in your life. Stay Chosen!' },
        { id: 'DkznDQ1ZqEo', title: 'Luis Fonsi - Despacito ft. Daddy Yankee' },
        { id: '5c9fOouJ1Oc', title: 'Ed Sheeran - Shape of You' },
        { id: 'jCYUix0vQ3M', title: 'Mark Ronson - Uptown Funk ft. Bruno Mars' }
      ]
    }
  });
  </script>
  
  <style scoped>
  h1 {
      font-size: 1.5rem;
  }
      
  h1,h2,h3 {
    text-shadow: 1px 1px 1px #000;
    padding: 1rem;
    color: var(--green);
  }

  .youtube-gallery {
    display: grid;
    place-items: center;
    overflow: auto;
    padding: 0px;
  }
  
  .gallery-title {
    align-self: center;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .video-grid {
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .video-item {
    background-color: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .video-item iframe {
    min-width: 320px;
    height: 180px;
  }

  .video-item h3 {
    font-size: 16px;
    padding: 10px;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    .gallery-title {
      font-size: 20px;
    }
  
    .video-grid {
      grid-template-columns: 1fr;
    }

    .video-item iframe {
    min-width: 360;
    height: 202;
  }

  }
  </style>