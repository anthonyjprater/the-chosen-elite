<script setup>
import { ref } from "vue"
import { useReviewStore } from "@/stores/review";

const currentRating = ref(0);

const reviewStore = useReviewStore();

reviewStore.rating = currentRating

</script>

<template>
    <!-- <div class="rating-component"> -->
        <div class="rating-stars">
                <!-- <input type="radio" name="rating" id="rs0"><label for="rs0"></label> -->
                <input 
				type="radio" 
				name="rating" 
				id="rs1" 
				value="1"
				v-model="currentRating"
				><label for="rs1"></label>
                <input 
				type="radio" 
				name="rating" 
				id="rs2" 
				value="2"
				v-model="currentRating"
				><label for="rs2"></label>
                <input 
				type="radio" 
				name="rating" 
				id="rs3" 
				value="3"
				v-model="currentRating"
				checked><label for="rs3"></label>
                <input 
				type="radio" 
				name="rating" 
				id="rs4" 
				value="4"
				v-model="currentRating"
				><label for="rs4"></label>
                <input 
				type="radio" 
				name="rating" 
				id="rs5" 
				value="5"
				v-model="currentRating"
				><label for="rs5"></label>
                <!-- <span class="number"></span> -->
            </div>
    <!-- </div> -->
</template>

<style scoped>
:root {
	--tb: #ffffff40;
	--tbh: #ffffff70;
	--tran: all 0.5s ease 0.1s;	
}		

div.rating-component {
	margin: 0;
	max-width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #114e16;
	perspective: 150vmin;
	background: radial-gradient( circle at 50% 0%, #00ff00, #000000);	
}

div.rating-component * {
	box-sizing: border-box;
	transform-style: preserve-3d;
}

.rating-stars {
	display: block;
	width: 80vmin;
	height: 40px;
	padding: 5px;
	border: 1px solid #fff;
	border-radius: 4px;
	position: relative;
	display: flex;
	justify-content: center;
	transform: rotateX(15deg);
}

.rating-stars {
	background: #2f2f2f;
}

input { display: none; }

label {
	width: 2vmin;
	height: 2vmin;
	cursor: pointer;
	margin: 2.5vmin 5vmin;
	transition: var(--tran);
	transition-delay: 0s;
	position: relative;
}

label:before {
	position: absolute;
	width: 100%;
	height: 100%;
	content: "\2605";
	z-index: 2;
	font-size: 5vmin;
	line-height: 2vmin;
	color: #00ff00;
	text-align: center;
	transform: translateY(0vmin);
	transition: var(--tran);
	text-shadow: 
		1px 1px 1px var(--tb), 
		-1px -1px 1px var(--tb), 
		-1px 0px 1px var(--tb), 
		1px 0px 1px var(--tb), 		
		0vmin 0.1vmin 1px #1d8be1, 
		0vmin 0.1vmin 1px #1d8be1, 
		0vmin 0.2vmin 1px #1b81d1, 
		0vmin 0.2vmin 1px #1b81d1, 
		0vmin 0.3vmin 1px #1972b7, 
		0vmin 0.3vmin 1px #1972b7, 
		0vmin 0.4vmin 1px #1a76bd, 
		0vmin 0.4vmin 1px #1a76bd, 
		0vmin 0.5vmin 1px #196fb1, 
		0vmin 0.5vmin 1px #196fb1, 
		0vmin 0.6vmin 1px #1868a5, 
		0vmin 0.6vmin 1px #1868a5, 
		0vmin 0.7vmin 1px #155f97, 
		0vmin 0.7vmin 1px #155f97, 
		0vmin 0.8vmin 1px #125689, 
		0vmin 0.8vmin 1px #125689, 
		0vmin 0.9vmin 1px #104e7d, 
		0vmin 0.9vmin 1px #104e7d, 
		0vmin 1.0vmin 1px #104975, 
		0vmin 1.1vmin 1px #104975, 
		0vmin 1.1vmin 1px #0e4169, 
		0vmin 1.2vmin 1px #0e4169, 
		0vmin 1.2vmin 1px #0c395d, 
		0vmin 1.3vmin 1px #0c395d, 
		0vmin 1.3vmin 1px #0a3151, 
		0vmin 1.4vmin 1px #0a3151, 
		0vmin 1.4vmin 1px #092c49, 
		0vmin 1.5vmin 1px #092c49, 
		0vmin 1.5vmin 1px #072239, 
		0vmin 1.6vmin 1px #072239, 
		0vmin 1.6vmin 3px #00000020;
	filter: drop-shadow(0px 5px 10px #008dff) drop-shadow(0px 5px 30px #008dff);		
}

label:hover:before {
	color: #e2f2ff;
	filter: drop-shadow(0px 5px 15px #b1ddff) drop-shadow(0px 5px 30px #b1ddff);
}




/*** unchecked:before ***/
input:checked + label ~ label:before, 
input:checked + label ~ label:hover:active:before {
	transition: var(--tran);
	color: #ffedb9;
	color: #7d8a8f;
	transform: translateY(1.5vmin);
	filter: none;
	text-shadow: 
		1px 1px 1px var(--tbh), 
		-1px -1px 1px var(--tbh), 
		-1px 0px 1px var(--tbh), 
		1px 0px 1px var(--tbh), 
		0vmin 0.01vmin 1px #1d8be1, 
		0vmin 0.02vmin 1px #1d8be1, 
		0vmin 0.03vmin 1px #1b81d1, 
		0vmin 0.04vmin 1px #1b81d1, 
		0vmin 0.05vmin 1px #1972b7, 
		0vmin 0.06vmin 1px #1972b7, 
		0vmin 0.07vmin 1px #1a76bd, 
		0vmin 0.08vmin 1px #1a76bd, 
		0vmin 0.09vmin 1px #196fb1, 
		0vmin 0.10vmin 1px #196fb1, 
		0vmin 0.11vmin 1px #1868a5, 
		0vmin 0.12vmin 1px #1868a5, 
		0vmin 0.13vmin 1px #155f97, 
		0vmin 0.14vmin 1px #155f97, 
		0vmin 0.15vmin 1px #125689, 
		0vmin 0.16vmin 1px #125689, 
		0vmin 0.17vmin 1px #104e7d, 
		0vmin 0.18vmin 1px #104e7d, 
		0vmin 0.19vmin 1px #104975, 
		0vmin 0.20vmin 1px #104975, 
		0vmin 0.21vmin 1px #0e4169, 
		0vmin 0.22vmin 1px #0e4169, 
		0vmin 0.23vmin 1px #0c395d, 
		0vmin 0.24vmin 1px #0c395d, 
		0vmin 0.25vmin 1px #0a3151, 
		0vmin 0.26vmin 1px #0a3151, 
		0vmin 0.27vmin 1px #092c49, 
		0vmin 0.28vmin 1px #092c49, 
		0vmin 0.29vmin 1px #072239, 
		0vmin 0.3vmin 1px #072239, 
		0vmin 0.5vmin 3px #00000020;
}



/*** unchecked:hover:before ***/
input:checked + label ~ label:hover:before, 
label ~ label:hover:active:before {	
	color: var(--white);
	transform: translateY(1vmin);
	text-shadow: 
		1px 1px 1px var(--tbh), 
		-1px -1px 1px var(--tbh), 
		-1px 0px 1px var(--tbh), 
		1px 0px 1px var(--tbh), 
		0vmin 0.02vmin 1px #1d8be1, 
		0vmin 0.04vmin 1px #1d8be1, 
		0vmin 0.06vmin 1px #1b81d1, 
		0vmin 0.08vmin 1px #1b81d1, 
		0vmin 0.10vmin 1px #1972b7, 
		0vmin 0.12vmin 1px #1972b7, 
		0vmin 0.14vmin 1px #1a76bd, 
		0vmin 0.16vmin 1px #1a76bd, 
		0vmin 0.18vmin 1px #196fb1, 
		0vmin 0.20vmin 1px #196fb1, 
		0vmin 0.22vmin 1px #1868a5, 
		0vmin 0.24vmin 1px #1868a5, 
		0vmin 0.26vmin 1px #155f97, 
		0vmin 0.28vmin 1px #155f97, 
		0vmin 0.30vmin 1px #125689, 
		0vmin 0.32vmin 1px #125689, 
		0vmin 0.34vmin 1px #104e7d, 
		0vmin 0.36vmin 1px #104e7d, 
		0vmin 0.38vmin 1px #104975, 
		0vmin 0.40vmin 1px #104975, 
		0vmin 0.42vmin 1px #0e4169, 
		0vmin 0.44vmin 1px #0e4169, 
		0vmin 0.46vmin 1px #0c395d, 
		0vmin 0.48vmin 1px #0c395d, 
		0vmin 0.50vmin 1px #0a3151, 
		0vmin 0.52vmin 1px #0a3151, 
		0vmin 0.54vmin 1px #092c49, 
		0vmin 0.56vmin 1px #092c49, 
		0vmin 0.58vmin 1px #072239, 
		0vmin 0.60vmin 1px #072239, 
		0vmin 1vmin 3px #00000020;	
}


label[for=rs1]:before {
	transition-delay: 0.05s;
}
label[for=rs2]:before {
	transition-delay: 0.1s;
}
label[for=rs3]:before {
	transition-delay: 0.15s;
}
label[for=rs4]:before {
	transition-delay: 0.2s;
}
label[for=rs5]:before {
	transition-delay: 0.25s;
}




/*** Reload ***/
label[for=rs0] {
	position: absolute;
	left: -4vmin;
	top: 1vmin;
	display: flex;
	align-items: center;
	justify-content: center;
}

label[for=rs0]:before {
    --ar: #ffffff;
	content: "";
    position: absolute;
    width: 7vmin;
    height: 7vmin;
    border-radius: 100%;
	transform: rotate(0deg);
    background: 
		radial-gradient(circle at 50% 135%, #fff0 40%, var(--ar) calc(40% + 1px) 45%, #fff0 calc(45% + 1px) 100%), 
		radial-gradient(circle at 50% -35%, #fff0 40%, var(--ar) calc(40% + 1px) 45%, #fff0 calc(45% + 1px) 100%), 
		conic-gradient(from -45deg at 50% 60%, var(--ar) 0 25%, #fff0 0 100%), 
		conic-gradient(from 135deg at 50% 40%, var(--ar) 0 25%, #fff0 0 100%);
    background-size: 100% 20%, 100% 20%, 1.5vmin 1.5vmin, 1.5vmin 1.5vmin;
    background-repeat: no-repeat;
    background-position: 0% 27%, 0% 73%, 77% 47%, 23% 52%;
    transition: all 0.5s ease 0s;
    filter: drop-shadow(1px 1px 1px #0008) drop-shadow(-1px -1px 1px #fff2);
}

label[for=rs0]:hover:before {
	--ar: #e2f2ff;
	transform: rotate(270deg);
	transition: all 0.5s ease 0s;
	filter: 
		drop-shadow(-1px -1px 1px #0008) 
		drop-shadow(1px 1px 1px #fff2) 
		drop-shadow(0px 5px 15px #00ff00) 
		drop-shadow(0px 5px 30px #00ff00);
}


/*** Number ***/
.number {
    position: absolute;
    margin-top: 0.5vmin;
    font-size: 2vmin;
    font-family: Arial, serif;
    color: #00ff00;
    z-index: -1;
    filter: 
		drop-shadow(1px 1px 1px #000) 
		drop-shadow(-1px -1px 1px #fff4) 
		drop-shadow(0px 0px 5px #00ff00) 
		drop-shadow(0px 0px 10px #00ff00) 
		drop-shadow(0px 0px 15px #00ff00);
		left: -2vmin;
}

#rs0:checked ~ .number {
    color: #00ff00;
    font-weight: bold;
    filter: 
		drop-shadow(1px 1px 1px #000) 
		drop-shadow(-1px -1px 1px #fff4);
    text-shadow: none;
}

.number:after {
	content: "0";
}

#rs1:checked ~ .number:after {
	content: "1";
}

#rs2:checked ~ .number:after {
	content: "2";
}

#rs3:checked ~ .number:after {
	content: "3";
}

#rs4:checked ~ .number:after {
	content: "4";
}

#rs5:checked ~ .number:after {
	content: "5";
}

@media(min-width: 450px) {
	label {
		margin: 0.25vmin 5vmin;
	}

	label::before {
		font-size: 1.5rem;
	}
}
</style>