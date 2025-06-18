
<template>
  <div class="w-full min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4">
    <div class="max-w-4xl bg-white p-8 rounded-xl shadow-lg space-y-6">

      <h1 class="text-4xl lg:text-5xl font-bold text-blue-700 text-center">
        About Meals Searching App
      </h1>

      <p class="text-lg leading-relaxed text-gray-700 text-center">
        The <strong>Meals Searching App</strong> is a lightweight and modern Vue 3 application designed to help you find delicious meals quickly. Whether you’re cooking with specific ingredients or just curious about what meals start with a certain letter, this app makes it fast and fun to explore recipes.
      </p>

      <div class="grid md:grid-cols-3 gap-6 pt-6">
        <div class="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold text-blue-600 mb-2">🔍 Search by Name</h2>
          <p class="text-gray-700">
            Enter part of a meal’s name and discover matching recipes in real-time with smart search and debounce support.
          </p>
        </div>

        <div class="bg-yellow-50 p-4 rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold text-yellow-600 mb-2">🔠 Search by First Letter</h2>
          <p class="text-gray-700">
            Curious about meals starting with "B" or "T"? Browse alphabetically and discover new dishes effortlessly.
          </p>
        </div>

        <div class="bg-green-50 p-4 rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold text-green-600 mb-2">🥕 Search by Ingredient</h2>
          <p class="text-gray-700">
            Click on any available ingredient to explore meals that use it — perfect for minimizing waste and maximizing taste.
          </p>
        </div>        

      </div>

      <!-- Tech Stack -->
      <div class="text-sm text-center space-y-2">
        <p><strong>Tech Stack:</strong> Vue 3, TypeScript, Pinia, Tailwind CSS, Vite, Axios</p>
        <p>Formatted with Prettier and enhanced with Vue Devtools for developer productivity.</p>
      </div>

      <!-- Developer Portfolio -->
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center space-y-4 shadow-sm">
        <h2 class="text-2xl font-semibold">👨‍💻 About the Developer</h2>
        <p>
          This app was built with love and care by <strong>Olorunshogo (Moses) BAMTEFA</strong>, a frontend developer passionate about clean code, modern UI, and web performance.
        </p>
        <a 
          href="https://shogo-portfolio-mu.vercel.app/" 
          target="_blank" 
          class="inline-block mt-2 px-5 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition font-medium"
        >
          Visit My Portfolio
        </a>
      </div>

    </div>
  </div>
</template>

<style lan="css" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
}
</style>
