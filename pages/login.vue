<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6 ">Login</h2>
      <div v-if="_error">
        <p class="bg-red-600 text-white p-6">{{ _error }}</p>
      </div>
      <form class="space-y-4" @submit.prevent="onSubmit">
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            name="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            name="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg"
        >
        <span v-if="isLoading">Loading...</span>
        <span v-else>Sign In</span>
          
        </button>
        <div class="text-center text-sm text-gray-600 mt-4">
          Don’t have an account? <NuxtLink to="/signup" class="text-indigo-600 hover:underline">Sign up</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

const url = 'https://dummyjson.com/auth/login';
const isLoading = ref(false);
const _error = ref(null);
const auth = useAuth();

const form = reactive({
    username: "emilys",
    password: "emilyspass"
});

async function onSubmit() {
    if (isLoading.value) return;

    isLoading.value = true;
    const { data, error } = await useFetch(url, {
        method: 'POST',
        body: JSON.stringify({
        username: form.username,
        password: form.password,
        expiresInMins: 30, // optional, defaults to 60
    }),

  });
    isLoading.value = false;
  if (error.value) {
    _error.value = error.value.statusMessage;
    alert('Login failed: ' + _error.value);
  } else {
    auth.value.isAuth = true;
    navigateTo('/');
  }
}

</script>