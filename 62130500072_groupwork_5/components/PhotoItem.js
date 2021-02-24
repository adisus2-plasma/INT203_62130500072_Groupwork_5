app.component('count-picture', {
    props: ['tasks'],
    /*html*/
    template:
        `
<h1 class="text-xl">Photo Gallery ( {{ tasks }} )</h1>
        `
})

app.component('picture-set', {
    props: ['photoset'],
    /*html*/
    template:
        `
        <div v-for="(task,index) in photoset" >

            <span >{{task.info}}</span>

            <img v-on:click="togglePicture(task.Image)" v-bind:src="task.Image" class="rounded-lg cursor-pointer w-40">
            <span v-show="task.done == false" class="material-icons cursor-pointer transition duration-150 transform hover:scale-125 motion-reduce:transform-none" v-on:click="this.$emit('fav',index)">favorite_border</span>
            <span v-show="task.done == true" class="material-icons cursor-pointer transition duration-150 transform hover:scale-125 motion-reduce:transform-none" v-on:click="this.$emit('cancelfav', index)">favorite</span>

        </div>
        `   
})

