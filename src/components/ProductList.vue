<template>
  <div>
    <div> {{title}}</div>
    <ul>
      <li v-for="(product,index) in filteredProducts" :key="index">
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () { 
    return { 
        title: 'My title',
        products:[
            {name: 'refrigerador'}
            ,{name:'productos2'}
            ,{name:'productos3'}
            ,{name:'productos4'}
            ,{name:'productos5'}
          ],
          styleObject:
            {
            "bgColor":true,
            "txtColor":true,
            "bgColorBlue":false
            }

      }
  },
  computed :{
    filteredProducts(){
      return this.products.filter((products,index) => (index >= 3));
    }
  },
  methods:{
    changeToBgBlue(){
      console.log('cambiar color azul');
      this.styleObject.bgColor = false;
      this.styleObject.bgColorBlue = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--style src="./css/style.css" scoped-->
<style scoped>
h3 {
    margin: 40px 0 0;
  }
ul {
list-style-type: none;
padding: 0;
}
li {
border: 1px solid black;
margin: 0 10px;
}
a {
color: #42b983;
}
.bgColor{
  background-color: #42b983;
}
.bgColorBlue{
  background-color: blue;
}
.txtColor{
  color: white;
}
</style>
