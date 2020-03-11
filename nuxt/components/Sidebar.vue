<template>
  <div>
    <button>作成</button>
    <div>
      <div class="days-week">
        <div v-for="day in daysOfWeek" :key="day.id" class="days-week__day">
          {{ day }}
        </div>
      </div>
      <div class="row">
        <div class="columns">月</div>
        <div class="columns">月</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ICalendarService, {
  CalendarService
} from '@/domain/calendar/CalendarService';

@Component
export default class ComponentSidebar extends Vue {
  @Prop({ type: Number, required: true })
  year!: number;

  @Prop({ type: Number, required: true })
  month!: number;

  @Prop({ type: Number, required: true })
  day!: number;

  // data
  daysOfWeek?: string[];

  mounted() {
    const Calendar: ICalendarService = new CalendarService(
      new Date(this.year, this.month - 1, this.day)
    );
    console.log(Calendar.getMonthCalendar());
    console.log(Calendar.daysOfWeek);
    this.daysOfWeek = Calendar.daysOfWeek;
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
