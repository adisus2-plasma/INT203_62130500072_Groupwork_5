app.component('photo-search', {
    props:
    {
        search: Object
    },

    data() {
        return {
            x: ''
        }
    },

    /*html*/
    template:
        `<div id="search_bar">
    <div id="input_text" v-show="search.toggle">
        <input type="text" v-model="x" @keyup="insertMassage"  placeholder="Enter a new task ..."
            class="p-2 bg-white rounded flex-1 border-b-2 border-blue-300 ">
    </div>

    <button v-on:click="this.$emit('toggle-icon')" v-show="search.cancel" class="material-icons transition duration-150 transform hover:scale-125 motion-reduce:transform-none">search</button>
    <button v-on:click="this.$emit('toggle-icon')" v-show="search.cancel == false" class="transition duration-150 transform hover:scale-125 motion-reduce:transform-none">cancel</button>
</div>`,

    methods:
    {
        insertMassage(){
        
            this.$emit('event', this.x)
        }
    },

})