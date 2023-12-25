//Motion-U Club

<template>
    <div>
      <h1 style="text-align: center; font-size: 40px;">WELCOME TO MOTION-U CLUB</h1>
      <div class="Card">
        <div class="top">
          <p>Drag & drop images</p>
        </div>
        <div class="drag-area" @click="selectFiles" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop">
          <span v-if="!isDragging">
            Drag & drop image here or
            <span class="select" role="button">Choose</span>
          </span>
          <div v-else class="select">Drop images here</div>
          <input name="file" type="file" class="file" ref="fileInput" multiple @change="onFileSelect" />
        </div>
        <div class="container">
          <div class="image" v-for="(image, index) in images" :key="index">
            <span class="delete" @click="deleteImage(index)">&times;</span>
            <img :src="image.url" alt="uploaded image" />
          </div>
        </div>
        <button type="button">Upload</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = ref([]);
  const isDragging = ref(false);
  const fileInput = ref(null);
  
  const selectFiles = () => {
    fileInput.value.click();
  };
  
  const onFileSelect = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.value.some((e) => e.name === files[i].name)) {
        images.value.push({
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        });
      }
    }
  };
  
  const deleteImage = (index) => {
    images.value.splice(index, 1);
  };
  
  const onDragOver = (event) => {
    event.preventDefault();
    isDragging.value = true;
    event.dataTransfer.dropEffect = "copy";
  };
  
  const onDragLeave = (event) => {
    event.preventDefault();
    isDragging.value = false;
  };
  
  const onDrop = (event) => {
    event.preventDefault();
    isDragging.value = false;
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.value.some((e) => e.name === files[i].name)) {
        images.value.push({
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        });
      }
    }
  };
  </script>
  
  <style scoped>
    .Card {
        width: 100%;
        padding: 10px;
        box-shadow: 0 0 5px #ffdfdf;
        border-radius: 5px;
        overflow: hidden;
    }

    .Card .top {
        text-align:center;
    }

    .Card p {
        font-weight: bold;
        color: #fe0000;
    }

    .Card button {
        outline: 0;
        border: 0;
        color: #fff;
        border-radius: 4px;
        font-weight: 400;
        padding: 8px 13px;
        width: 100%;
        background: #fe0000;
    }

    .Card .drag-area {
        height: 150px;
        border-radius: 5px;
        border: 2px dashed #ef0000;
        background: #f4f3f9;
        color: #fe0000;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: center;
        -webkit-user-select: none;
        margin-top: 10px;
    }

    .Card .drag-area .visible {
        font-size: 18px;
    }

    .Card .Select {
        color: #5256ad;
        margin-left: 5px;
        cursor: pointer;
        transition: 0.4s;
    }

    .Card .Select:hover {
        opacity: 0.6;
    }

    .Card .container {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        max-height: 200px;
        position: relative;
        margin-bottom: 8px;
        padding-top: 15px; 
    }

    .Card .container .image {
        width: 150px;
        height: 150px;
        position: relative;
        margin-bottom: 8px;
        padding-left: 5px;
    }

    .Card .container .image img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .Card .container .image span {
        position: absolute;
        top: -2px;
        right: 9px;
        font-size: 20px;
        cursor: pointer;
    }

    .Card input, 
    .Card .drag-area .on-drop,
    .Card .drag-area.dragover .visible {
        display: none;
    }

    .delete {
        z-index: 999;
        color: #fe0000;
    }
</style>
  