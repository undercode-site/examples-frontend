<template>
  <div
      class="StarsInput"
      :class="{'StarsInput--large': large}"
  >
    <StarSvg
        v-for="i in count"
        :key="i"
        class="StarsInput__star"
        :class="{'StarsInput__star--active': count - value < i}"
        @click="select(count)"
    />
  </div>
</template>

<script>
import StarSvg from './assets/star.svg?inline';

/*
* Простой инпут для выбора рейтинга
* Работает с моделью, что позволяет просто встраивать его в другие компоненты
* Нативное закрашивание звёзд, это позволяет свести к минимуму ререндер компонента и оптимизирует нагрузку на браузер
* */

export default {
  name: "StarsInput",
  components: { StarSvg },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    count: {
      type: Number,
      default: 5,
    },
    value: Number,
    large: Boolean,
  },
  methods: {
    select(index) {
      this.$emit('change', index);
    },
  },
}
</script>

<style lang="scss">
.StarsInput {
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  margin: 0 -4px;

  &--large {
    justify-content: space-between;

    .StarsInput__star {
      width: 48px;
      height: 48px;
    }
  }

  &__star {
    width: 32px;
    height: 32px;
    margin: 0 4px;

    cursor: pointer;

    path {
      transition: fill 0.25s;
      fill: #D7DDEA;
    }

    &--active,
    &:hover,
    &:hover ~ .StarsInput__star {
      path {
        fill: #FF4F17;
      }
    }
  }
}
</style>
