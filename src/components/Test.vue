<template>
  <p>User Id: {{user.id}}</p>
  <p>{{ testReactiveString }}</p>
  <button @click="changeString()">Change String</button>
  <button @click="toggleNightMode()" class="flex">Toggle Night Mode</button>
</template>
<script lang="ts" setup>
import { onMounted, ref, toRefs, watch, defineProps, defineEmits, computed, watchEffect } from 'vue'
import { fetchUserDirectories } from '@/api/user-directories'
import { ACTIONS, useStore } from '@/store' // @ is an alias to /src
import { toggleNightMode } from '@/state/night-mode'

const props = defineProps<{ user: { id: string }}>()
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'someChange', id: number): void
  (e: 'update', value: string): void
}>()
// using `toRefs` to create a Reactive Reference to the `user` property of props
const { user } = toRefs(props)
const store = useStore()

const repositories = ref([])
const testReactiveString = ref('test')
const getUserRepositories = async () => {
  // update `props.user` to `user.value` to access the Reference value
  repositories.value = await fetchUserDirectories(user.value.id)
}

// MOUNTED
onMounted(() => {
  getUserRepositories()
})

// COMPUTED

// WATCHED
// set a watcher on the Reactive Reference to user prop
watch(user, () => {
  getUserRepositories()
})

// FUNCTIONS
function changeString () {
  testReactiveString.value = testReactiveString.value + '1'
  emit('someChange', 123)
}

</script>
<style lang="scss">
  * {
    color: blue;
  }
</style>
