<script setup>

</script>

<template>


<form class="w-full" action="/" method="post">
  <div class="w-full py-2">
    <img  src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="mx-auto w-48 h-48 rounded-full">
  </div>

  <div class="flex flex-col max-w-lg mx-auto border rounded-md p-2 bg-zinc-200 my-1">
    <label class="text-xl" for="uname"><b>Username</b></label>
    <input class="rounded-md py-2 px-1" type="text" placeholder="Enter Username" name="uname" required>

    <label class="text-xl" for="psw"><b>Password</b></label>
    <input class="rounded-md py-2 px-1" type="password" placeholder="Enter Password" name="psw" required>  
    <button class="bg-black text-white rounded-md w-fit mx-auto my-2 p-1 hover:bg-gray-700" type="submit" style="font-size:25px;">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me 
    </label>
    <span class="text-right">Forgot <a href="#" style="color: red;">password?</a></span>
  </div>
</form>



</template>