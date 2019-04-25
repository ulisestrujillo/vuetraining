<template>
    <div>
        <form class="Form" v-on:submit.prevent="onSubmit">
            <input type="text" v-model="productName" placeholder="Nombre del producto" class="Forminput" v-validate="'required'" name="product-name"/>
            <input type="number" v-model.number="productPrice" placeholder="Precio del producto" class="Forminput"/>
            <button type="submit" class="FormButton">Agregar nuevo producto</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'ProductForm',
    data(){
        return{
            productName:'',
            productPrice: 0,
        }
    },
    methods:{
        onSubmit(){
            this.$validator.validate().then(valid => {
                //debugger
                if (valid){
                    //console.log('Enviando datos');
                    const newProduct = {
                        //id : this.totalProducts + 1,
                        name: this.productName,
                        price: this.productPrice,
                        quantity: 0,
                    };
                    //this.add(newProduct);
                    this.$emit('add',newProduct);
                    this.productName = '';
                    this.productPrice = '';
                }else{
                    //console.log('No paso');
                }
            });

            //TODO: Agregar nuevo producto al array de productos.

        }
    },
    props:{
        /*add:Function,*/
        //totalProducts: Number,
    }
}
</script>
<style scoped>
.Form{
    max-width: 300px;
    background-color: rgb(206, 187, 187);
    margin: auto;
    margin-top: 1rem;
    box-shadow: 5px 4px 4px 0px rgba(132, 131, 0, 75);
    padding: 1rem 0;
    border-radius: 5px;
}
.Forminput{
    width: 80%;
    height: 15px;
    border-radius: 2px;
    border: none;
    margin-bottom: 1rem;
    padding:0.5rem;
}
.FormButton{
    background-color: darkgreen;
    color: white;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 2px;
}
.FormButton:hover{
    background-color:black;
}
</style>
