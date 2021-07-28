<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>
    <div class="todo">
      <TodoInput />
      <hr  noshade="true">
      <div class="list">
        <TodoItem v-for="index in todoIndex" :key="index" :index="index" />
      </div>
    </div>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput/index.vue";
import TodoItem from "@/components/TodoItem/index.vue";

export default {
  components: {
    TodoInput,
    TodoItem,
  },
  computed: {
    todoIndex() {
      return this.$store.getters["todoIndex"];
    },
  },
  mounted() {
    this.$store.dispatch("INIT_TODOS");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.todo {
  width: 400px;
  margin: auto;
  background: #42b983;
  padding: 20px;
}
hr{
  color: #fff;
  
  
}
</style>
