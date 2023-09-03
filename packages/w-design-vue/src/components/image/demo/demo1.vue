<template>
  <w-preview title="Default" desc="Default">
    <w-image
      :width="300"
      alt="Default"
      src-set="https://cdn.pixabay.com/photo/2017/10/23/02/19/beach-2879929_960_720.jpg 1x, https://cdn.pixabay.com/photo/2017/10/23/02/19/beach-2879929_1280.jpg 2x"
      src="https://cdn.pixabay.com/photo/2017/10/23/02/19/beach-2879929_1280.jpg"
    ></w-image>
  </w-preview>

  <w-preview title="Blured" desc="Blured">
    <w-image
      :width="300"
      alt="Default"
      blurred
      src="https://cdn.pixabay.com/photo/2017/10/23/02/19/beach-2879929_1280.jpg"
    ></w-image>
  </w-preview>

  <w-preview title="Zoomed" desc="Zoomed">
    <w-image
      :width="300"
      alt="Default"
      zoomed
      src-set="https://cdn.pixabay.com/photo/2018/09/06/19/23/outlook-3659088_960_720.jpg 1x, https://cdn.pixabay.com/photo/2018/09/06/19/23/outlook-3659088_1280.jpg 2x"
      src="https://cdn.pixabay.com/photo/2018/09/06/19/23/outlook-3659088_1280.jpg"
    ></w-image>
  </w-preview>
</template>

<script setup>
// const themes = ['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus']
// const sizes = ['small', 'medium', 'large']
</script>
