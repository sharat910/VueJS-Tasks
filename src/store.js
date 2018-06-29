import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My tasks',
    tasks: [
      'Frontend Auth',
      'Backed Auth',
      'Linking Models with user',
      'Filter Queries',
      'Dashboard'
    ]
  },
  getters: {
    countTasks: state => {
      return state.tasks.length
    }
  },
  mutations: {
    ADD_TASK: (state,task) => {
      state.tasks.push(task)
    },
    REMOVE_TASK: (state,task) => {
      state.tasks.splice(task,1)
    },
    REMOVE_ALL: (state) => {
      state.tasks = []
    }
  },
  actions: {
    removeTask: (context,task) => {
      context.commit("REMOVE_TASK",task)
    },
    removeAll({commit}) {
      return new Promise ((resolve,reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        },1500)
      }

      )
    }
  }
})
