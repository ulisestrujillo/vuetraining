<template>
  <div>
    <div> {{title}}</div>
    <div>
      <ProductForm @add ="AddNewProduct" />
    </div>
    <ul>
      <div v-if="filteredProducts.length === 0">Cargando...</div>
      <li v-for="(product,index) in filteredProducts" :key="index">
        <ProductItem :product="product" :addToShopCart="addToShopCart"/>
      </li>
    </ul>
    <!--/*| toLocalePrice*/-->
    <div>Mi Formulario va aqui</div>
    <div>Total a  pagar: {{total  | toPrice('1') }}</div>
    <div>Total articulos: #{{totaladdcart}}</div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import Axios from 'axios';
import ProductForm from './ProductForm.vue';
//import toPrice from '../utils/filters'; // jala default
//import { toPrice, toLocalePrice } from '../utils/filters';  // jala individual
import * as Filter from '@/utils/filters';  // jala todas las funciones

export default {
  name: 'HelloWorld',
  data () {
    return {
        title: 'My title',
        products:[],
          //total :0 ,
          //totaladdcart :0,
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
      return this.products.filter(product => (product.id >= 3));
    },
    totaladdcart(){
      return this.filteredProducts.reduce((total,product) =>{
        return total + product.quantity;
      },0);
    },
    total(){
      return this.filteredProducts.reduce((total,product) =>{
        return total + (product.quantity * product.price);
      },0);
    }
  },
 /* methods:{
    changeToBgBlue(){
      console.log('cambiar color azul');
      this.styleObject.bgColor = false;
      this.styleObject.bgColorBlue = true;
    },

  },**/
  components:{
    ProductItem,
    ProductForm
  },
  methods:{
    addToShopCart(price,id){
      //console.log('cambiar color azul');
      //this.total += price;
      //console.log('id ' + id);
      //this.totaladdcart += 1;
      // Todo: agregar +1 al producto seleccionado
      this.products = this.products.map((product)=>{
        if (product.id === id){
          return{
            ...product,
            quantity: product.quantity +1,
          }
        }
        return product;
      });
    }, AgregarNuevoProducto(newProduct){
      this.products.push(newProduct);
    },
    AddNewProduct(newProduct){
      //debugger
     this.products.push(
        {
          id: this.products.length + 1,
        ...newProduct,
        });
    }
  },
  filters: {
    toPrice:Filter.toPrice,
    toLocalePrice:Filter.toLocalePrice
  },
  /*filters:{
    / *toPrice (price,param2,param3){
      return `$${price}`;
    }* /
    /*toLocalePrice (price){
      return price.toLocaleString();
    }* /
    toLocalePrice,
    toPrice
  },*/
  beforecreate(){
    //Aqui no tengo acceso a las propiedades del componente
    //console.log(this.title);
  },
  created(){
    //console.log("Acabo de ser creado " + this.title);
    //Axios.post('url',{prop1:'val'});
    Axios.get('https://api.myjson.com/bins/hoto8')
    .then((response)=>{
      //console.log(response.data);
      this.products = response.data.products;
    })/* .catch((error)=>{
      console.log(error);
    })*/;
  },
  updated(){
    //console.log("Componente actualizado");
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
padding: 16px;
}
a {
color: #42b983;
}
/*.bgColor{
  background-color: #42b983;
}
.bgColorBlue{
  background-color: blue;
}
.txtColor{
  color: white;
}*/
</style>
