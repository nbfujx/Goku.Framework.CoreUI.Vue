<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" v-for="(item, index) in list">
      <span v-if="isFirst(index)">{{ showName(item) }}</span>
      <span class="active" v-else-if="isLast(index)">{{ showName(item) }}</span>
      <router-link :to="{path:item.path}" v-else>{{ showName(item) }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    isLast (index) {
      return index === this.list.length - 1
    },
    isFirst (index) {
      return index === 0 || index === 1
    },
    showName (item) {
      if (item.name) {
        return item.name
      }
    }
  }
}
</script>
