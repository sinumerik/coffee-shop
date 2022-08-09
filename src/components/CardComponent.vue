<template>
  <div :class="className" @click="onEmit(card)">
    <img :src="card.url" :alt="card.img" />
    <div class="best__item-title">{{ card.name }}</div>
    <div class="best__item-price">{{ card.price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false
    },
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    onEmit(card) {
      this.$emit('onNavigate', card);
    }
  }
};
</script>
