app.component('picture-view', {
    props:
        ['view']
    ,
    
    /*html*/
    template:
        `
<div class="bg-black w-full h-screen flex justify-center" >

    <img v-bind:src="view" v-on:click="this.$emit('canvas')" class="cursor-pointer">
    
</div>
    `
})