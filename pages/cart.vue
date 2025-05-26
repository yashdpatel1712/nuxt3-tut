<template>
  <div>
    <div v-if="cart.length">
      <p class="text-5xl font-bold flex justify-center mt-4 underline">
        Cart items
      </p>
      <div class="mx-8">
        <NuxtLink 
          v-for="phone in cart"
          :key="phone.name"
          :to="`/${phone.brand}/${phone.name}`"
          class="flex gap-8 items-center p-8 border-b-2 border-gary-500"
        >
          <div>
            <img :src="`/images/${phone.name.replaceAll('-', '_')}.jpg`" alt="" class="w-24 h-auto">
          </div>
          <div class="flex-1 text-xl font-bold">
            {{ phone.name }}
          </div>
          <div class="flex  text-xl gap-2">
            <div>qty:</div>
            <div>{{ phone.qty }} X {{ phone.price }}</div>
          </div>

          <div class="text-xl font-bold"> = </div>
          <div class="flex-1 text-xl font-bold">{{ totalPriceSingleItem(phone.qty , phone.price) }}</div>

          <button @click.prevent="removeFromCart(phone.name)" class="bg-red-500 text-white px-3 py-1 rounded flex gap-2">
            Remove<p class="font-bold">X</p>
          </button>
        
        </NuxtLink>
        <div class="flex justify-between text-xl font-bold mt-5">
          <p>Total Price:</p>
          <p class="mr-8">₹{{ totalPrice() }}</p>
        </div>
        <!-- <p>
          Total Price: ₹{{ totalPrice() }}
        </p> -->
      </div>

    </div>
    <div v-else>
      <p class="text-3xl font-bold flex justify-center">
        Cart is empty
      </p>
      </div>
  </div>
</template>

<script setup>
const cart = useCart();

function removeFromCart(name) {
  cart.value = cart.value.filter((cartItem) => cartItem.name !== name);
}

function totalPrice() {
  let total = 0;
  cart.value.forEach(item => {
    const numericPrice = parseInt(item.price.replace(/[₹,]/g, ''));
    const numericPriceQty = item.qty * numericPrice    
    total+= numericPriceQty;
  });
    return total.toLocaleString('en-IN');
  }
  
  function totalPriceSingleItem(qty,price){
    const singleProduct = qty * price.replace(/[₹,]/g, '');
    
    return singleProduct.toLocaleString('en-IN');
}

</script>

<style>
</style>
