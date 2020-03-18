<template>
  <div>
    <calendar-header
      :year="year"
      :month="month"
      :day="day"
      @show-sidebar="switchShowSidebar"
    />
    <div class="main">
      <sidebar :year="year" :month="month" :day="day" :class="sidebarClasses" />
      <month-calendar-previewer :year="year" :month="month" :day="day" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Sidebar from '@/components/Sidebar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import MonthCalendarPreviewer from '@/components/MonthCalendarPreviewer.vue';

@Component({
  components: {
    CalendarHeader,
    Sidebar,
    MonthCalendarPreviewer
  }
})
export default class CalenderMonth extends Vue {
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  day: number = new Date().getDate();
  showSidebar: boolean = true;

  get sidebarClasses() {
    if (this.showSidebar) return 'sidebar--open';
    return 'sidebar--close';
  }

  created() {
    this.year = Number(this.$route.params.year);
    this.month = Number(this.$route.params.month);
    this.day = Number(this.$route.params.day);
  }

  switchShowSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}

.sidebar {
  transition: margin 0.2s;

  &--open {
    margin-left: 0;
  }

  &--close {
    margin-left: -256px;
  }
}
</style>
