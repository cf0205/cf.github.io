<script>
export default {
    data(){
        return{
            edit:null,
            url:require('@/assets/delete.png')
        }
    },
    props:{
        index:{
            type:Number,
            required: true
        }
    },
    computed:{
        todo(){
            return this.$store.state.todos[this.index]
        },
        complete:{
            get(){
                return this.todo.complete
            },
            set(val){
                this.$store.commit('UPDATE_TODO',{
                    index:this.index,
                    data:{
                        content:this.todo.content,
                        complete:val
                    }
                })
            }
        }
    },
    methods:{
        destroyHandler(){
            this.$store.commit('REMOVE_TODO',this.index)
        },
        editHandler(){
            this.edit=this.todo.content
            this.cache=this.todo.content
        },
        submitHandler(){
            if(!this.edit) this.destroyHandler()
            this.$store.commit('UPDATE_TODO',{
                index:this.index,
                data:{
                    content:this.edit,
                    complete:this.todo.complete
                }
            })
            this.edit=null
        },
        cancelHandler(){
            this.edit=null
        }
    }
}
</script>

<template src="./template.html"></template>
<style scoped>
    .todoItem {
        /* background-color: #; */
        width: 100%;
        margin: auto;
    }
    input{
        border: 0;

    }
    label{
        display: inline-block;
        width: 80%;
        height: 1.2em;
        /* background-color: #fff; */
        padding: 2px;
    }
    .destroy {
        border: 0;
        background-color:transparent;
    }
   
</style>