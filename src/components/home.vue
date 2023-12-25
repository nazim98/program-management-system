<script setup>
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img class="px-6 py-6" src="https://w0.peakpx.com/wallpaper/169/910/HD-wallpaper-electronic-dance-dark-music-black-dance-dj.jpg" alt="Dj" />
    </div>
    <div class="text-container">
      <h1 @click="$router.push('/about')" style="text-align: center; font-size: 20px; color: black;" class="hover:bg-blue-500">
      MORE ABOUT US
    </h1>
      <p>
        The IIUM Society Programs Hub is a centralized website compiling information about events organized by different societies 
        at the International Islamic University Malaysia. It offers dedicated profiles for each society, showcasing their goals, 
        leadership, and contact details. The platform features an interactive calendar for users to explore upcoming programs, 
        providing detailed event information and multimedia content. With collaboration opportunities and user engagement features, 
        the hub aims to foster a sense of community and inclusivity on campus. Additionally, a resource center and regular 
        news updates contribute to the website's role in enhancing visibility and accessibility for IIUM society programs.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-container {
  flex: 1; /* Takes up 1/2 of the container width */
  margin-right: 20px; /* Adjust the margin as needed */
}

.text-container {
  flex: 1; /* Takes up 1/2 of the container width */
  max-width: 600px; /* Adjust the max-width as needed */
}
</style>
