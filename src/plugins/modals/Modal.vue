<script setup>
import { inject, computed } from "vue"                 //1

const

$props = defineProps({                                 //2

    name: { type: String, default: "" },

    title: { type: String, default: "Modal dialog" }

    }),

$modals = inject("$modals"),                           //3

_show = computed(() => {                               //4

    return $modals.active() == $props.name

})

function closeModal(accept = false) {

    accept?$modals.accept():$modals.cancel()           //5

}

</script>

<template>
    <div class="viewport-wrapper" v-if="_show">
        
        <div class="dialog-wrapper">
            
            <div class="header-wrapper">
                <img src="" width="100" height="100"/>
                <!-- Image source will ve the svg logo. -->
                
                <header>{{$props.title}}</header>
            </div>
            <main><slot></slot></main>
        
            <footer>
            
                <button @click="closeModal(true)">Submit</button>
            
                <button @click="closeModal(false)">Cancel</button>
        
            </footer>
    
        </div>
        
    </div>      
</template>

<style scoped>
.viewport-wrapper {
    --shadow: rgba(0, 0, 0, 0.4);
    display: flex;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--shadow);
    justify-content: center;
    align-items: center;
}

.dialog-wrapper {
    border: 1px solid black;
    box-shadow: 0 1rem 1rem var(--shadow);
    display: flex;
    flex-direction: column;
}

.header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header-wrapper > * {
    width: 50%;
}

header,
footer {
    padding: 4px;
    user-select: none;
}

header {
    font-weight: bold;
    text-wrap: balance;
}

main {
    min-height: 5rem;
    max-width: 40rem;
    font-size: 0.875rem;
    font-weight: bold;
}

footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

button {
    background: var(--green);
}
</style>
