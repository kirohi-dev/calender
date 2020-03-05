<template>
  <div>
    <side-bar></side-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Sidebar from '@/components/Sidebar.vue';

@Component({
  components: {
    Sidebar
  }
})
export default class CalenderMonth extends Vue {}
</script>
