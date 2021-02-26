const app = Vue.createApp({
    data() {
        return {
            tasks: [{ info: 'In the afternoon', Image: './images/cityInAfterNoon.jpg', done: false },
            { info: 'Empire state and the sunset', Image: './images/cityInSunset.jpg', done: false },
            { info: 'Street in small town', Image: './images/cityInNight.jpg', done: false }
            ],
            search: { toggle: false, cancel: true },
            index: "",
            
            invisible: true,
            pathImage: ""
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
            console.log(index)
        },

        toggleicon() {
                this.search.toggle = !this.search.toggle
                this.search.cancel = !this.search.cancel
                console.log(this.search.toggle);
                this.index = "";
            },

        togglePicture(position){
            
            this.pathImage = position
            this.invisible = !this.invisible
            console.log(this.pathImage)
        },

        quitCanvas(){
            this.invisible = true
        },

        changeNum(i){
            this.index = i
        }

    },
    computed: {
        countUndone : function() {
            return this.tasks.filter(t => !t.done).length
        },
        inputMassage() {
            
            if (this.index) {
                return this.tasks.filter(c => {
                    return c.info.toLowerCase().includes(this.index.toLowerCase())
                });
            }else{
                return this.tasks
            }
        }
        }
    
})
