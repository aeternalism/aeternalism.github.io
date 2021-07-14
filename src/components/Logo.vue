<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  light: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
const isLoading = ref(false)

router.beforeEach(() => {
  isLoading.value = true
})
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})
</script>

<template>
  <img
    src="/images/logos/logo/aes.png"
    :class="[isLoading && 'is-roll', light && 'is-light']"
  />
</template>
