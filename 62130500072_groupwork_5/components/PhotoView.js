app.component('piture-view',{
    props:['view'],
    /*html*/
    template:
    `
<div class="bg-black w-full h-screen flex justify-center" v-show="!invisible">

    <img v-bind:src="pathImage" v-on:click="quitCanvas" class="cursor-pointer">
    
</div>
    `
})