<template>
  <div :class="className">
    <img :src="require(`@/assets/img/${img}`)" :alt="img" />
    <div class="best__item-title">{{ name }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false
    },
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
  }
};
</script>
