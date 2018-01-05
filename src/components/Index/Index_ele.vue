

<template>
    <div id="example">
        <h1 :class="{ active: isActive, 'text-danger': hasError }">{{msg}}</h1>
        <h1 v-bind:class="classObject">{{reversedMessage}}</h1>
        <input v-model="msg">
        <p v-if="seen">现在你看到我了</p>
        <p>{{now}}</p>
        <div style="font-size:30px;">
          <!--<input v-model="parentMsg"><br>-->
          <!--<my-component v-bind:message="parentMsg"></my-component>-->
          <my-component message="123123"></my-component>
          <a :href="url">adsf</a>
        </div>
        <a @click="doSomething">click</a>
    </div>

</template>


<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome',
      seen: true,
      url: 'www.baidu.com',
      isActive: true,
      hasError: false,
      error: null
      // classObject: {
      //   active: false,
      //   'text-danger': true
      // }
    }
  },
  methods: {
    doSomething: function () {
      console.log(1212)
    }
  },
  computed: {
    reversedMessage: function () {
      return this.msg.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    },
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "../../assets/css/css.css";

 .active{color:green;}
 .text-danger{color: red;}
</style>
