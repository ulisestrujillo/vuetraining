<template>
    <div class="inline-product">
        <div v-bind:class="[bgColor,txtColor]">
            {{product.name}} ({{product.quantity}})
        </div>
        <div>
            ${{product.price}}
        </div>
        <button v-on:click="addToShopCart(product.price,product.id)">
            Agregar al carrito
        </button>
    </div>    
</template>

<script>
export default {
    name:"ProductItem",
    props:{
        product:Object,
        id:Number,
        addToShopCart:Function,
    },
    data (){
        return {
            bgColor: 'bgColor',
            txtColor: 'txtColor'
        }
    }
}
</script>

<style scope>
.inline-product{
    display: flex;
    justify-content:space-evenly;
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
