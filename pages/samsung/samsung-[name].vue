<template>
    <div>
        <p class="text-3xl font-bold flex justify-center m-6"> {{ name }}</p>
        <div class ="flex justify-center py-8 gap-8">
            <div>
                <img :src="`/images/samsung_${url}.jpg`" alt="" class="w-60">
            </div>
            <div class="item-button flex justify-center items-center flex-col text-start w-64">
                <p class="text-xl font-bold text-start">{{ samsungPrice(fullName) }}</p>
                <div>
                    <!-- <counter value="counter" :is="counter" /> -->
                    <counter v-model:count="counterValue" />
                </div>
                <div class="flex justify-center items-center shrink pt-6">
                    <button @click="addToCart" >
                        <span v-if="!isInCart()" class="rounded-full bg-blue-500 text-white px-6 py-2 hover:bg-blue-600">Add to cart</span>
                        <span v-else class="rounded-full bg-yellow-500 text-white px-6 py-2 hover:bg-yellow-600">Remove from the cart</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const samsungs = useSamsungs();
const route = useRoute();
const counterValue = ref(1);

const name = computed(() => {
    return route.params.name.replaceAll('-',' ')

})

const url = computed(() => {
    return route.params.name.replaceAll('-','_')
})
const fullName = computed(() => {
    return `samsung-${route.params.name}`
})

const cart = useCart();

function isInCart () {
  const names = cart.value.map(item => item.name);
  return names.includes(fullName.value);
}
function addToCart(){
  if(!isInCart()){
    const phone = samsungs.find(item => item.name === fullName.value);
    if (phone) {
      cart.value.push({ 
        name: phone.name,
        price: phone.price,
        qty: counterValue.value
      });
    }
  } else {
    cart.value = cart.value.filter(item => item.name !== fullName.value);
  }
}

function samsungPrice(name) {
    const found = samsungs.find((cartItem) => cartItem.name === name);
    return found?.price;
}


useHead({
    title: `Nuxt3 - samsung-${route.params.name}`
})

</script>
