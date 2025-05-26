<template>
    <div>
        <p class="text-3xl font-bold flex justify-center m-6"> iphone {{ name }}</p>
        <div class ="flex justify-center py-8 gap-8">
            <div>
                <img :src="`/images/iphone_${url}.jpg`" alt="" class="w-60">
            </div>
            <div class="item-button flex justify-center items-center flex-col text-start w-64">
                <p class="text-xl font-bold text-start">{{ iphonePrice(fullName) }}</p>
                <div>
                    <!-- <counter value="counter" :is="counter" /> -->
                    <counter v-model:count="counterValue" />
                </div>
                <div class="flex justify-center items-center shrink pt-6">
                    <button @click="addToCart" >
                        <span v-if="!isInCart()" class="rounded-full bg-green-500 text-white px-6 py-2 hover:bg-green-600">Add to cart</span>
                        <span v-else class="rounded-full bg-yellow-500 text-white px-6 py-2 hover:bg-yellow-600">Remove from the cart</span>
                    </button>
                </div>

                <div class="mt-15">
                    <button @click="addToWishlist()">
                        <span v-if="!isInWishlist()" class="rounded-full bg-blue-500 text-white px-6 py-2 hover:bg-blue-600">Add to wishlist</span>
                        <span v-else class="rounded-full bg-red-500 text-white px-6 py-2 hover:bg-red-600">Remove to wishlist</span>

                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const iphones = useIphones();
const route = useRoute();
const counterValue = ref(1);
const cart = useCart();
const wishlist = useWishlist();

const name = computed(() => {
    return route.params.name.replaceAll('-',' ')

})

const url = computed(() => {
    return route.params.name.replaceAll('-','_')
})
const fullName = computed(() => {
    return `iphone-${route.params.name}`
})


function isInCart () {
  const names = cart.value.map(item => item.name);
  return names.includes(fullName.value);
}
function addToCart(){
  if(!isInCart()){
    const phone = iphones.find(item => item.name === fullName.value);
    if (phone) {
      cart.value.push({ 
        name: phone.name,
        price: phone.price,
        brand: phone.brand,
        qty: counterValue.value
      });
    }
  } else {
    cart.value = cart.value.filter(item => item.name !== fullName.value);
  }
}

function isInWishlist(){
    const wishName = wishlist.value.map(item=>item.name);
    return wishName.includes(fullName.value);
}

function addToWishlist() {
    if(!isInWishlist()){
        const wishPhone = iphones.find(item => item.name === fullName.value);
        wishlist.value.push({
            name: wishPhone.name,
            price: wishPhone.price,
            brand: wishPhone.brand,
        })
    } else {
        wishlist.value = wishlist.value.filter(item =>item.name !== fullName.value);
    }
}



function iphonePrice(name) {
    const found = iphones.find((cartItem) => cartItem.name === name);
    return found?.price;
}


useHead({
    title: `Nuxt3 - iphone-${route.params.name}`
})

</script>
