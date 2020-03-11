<template>
  <div>
    <sidebar :year="year" :month="month" :day="day"></sidebar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import ICalendarService, {
  CalendarService
} from '@/domain/calendar/CalendarService';
import Sidebar from '@/components/Sidebar.vue';

@Component({
  components: {
    Sidebar
  }
})
export default class CalenderMonth extends Vue {
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  day: number = new Date().getMonth() + 1;

  created() {
    this.year = Number(this.$route.params.year);
    this.month = Number(this.$route.params.month);
    this.day = Number(this.$route.params.day);

    const Calendar: ICalendarService = new CalendarService(
      new Date(this.year, this.month - 1, this.day)
    );
    console.log(Calendar.getMonthCalendar());
  }
}
</script>
