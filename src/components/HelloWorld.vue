<template>
  <div class="hello">
    <div class="left">
      <h1>{{title}}</h1>

      <form @submit.prevent="addTask">
        <input class="task-input" type="text" placeholder="Add a task" v-model="newTask">
      </form>

      <ul>
        <li v-for="(task,index) in tasks" key="index">
          {{ task }}
          <button @click="removeTasks(index)" class="rm"> Remove </button>
        </li>
      </ul>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import Stats from '@/components/Stats.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      newTask: ''
    }
  },
  components: {
    Stats
  },
  methods: {
    ...mapMutations([
      'ADD_TASK',
    ]),
    ...mapActions([
      'removeTask'
    ]),
    addTask: function() {
      this.ADD_TASK(this.newTask);
      this.newTask = '';
    },
    removeTasks: function(task) {
      this.removeTask(task)
    }
  },
  computed: {
    ...mapState([
      'title',
      'tasks'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

</style>
