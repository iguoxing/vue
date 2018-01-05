<template>
    <div id="example">
        <left></left>
        <application></application>
    </div>
</template>

<script>
import Left from '@/components/Index/Left'
import Application from '@/components/Exam/Application'
import Wait from '@/components/Exam/Wait'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome',
      radio: '0'
    }
  },
  methods: {},
  computed: {},
  components: {
    Left, Application, Wait
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/css.css";

.active {
  color: green;
}
.text-danger {
  color: red;
}
</style>



