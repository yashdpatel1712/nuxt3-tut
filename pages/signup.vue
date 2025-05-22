<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Create Account</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg"
        >
          Sign Up
        </button>
        <div class="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <NuxtLink to="/login" class="text-indigo-600 hover:underline">Sign in</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
