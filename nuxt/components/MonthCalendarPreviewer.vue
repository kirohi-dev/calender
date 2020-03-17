<template>
  <div class="previewer">
    <div class="previewer__days-of-week">
      <div
        v-for="dayOfweek in daysOfWeek"
        :key="dayOfweek.id"
        class="previewer__day-of-week"
      >
        {{ dayOfweek }}
      </div>
    </div>
    <div v-for="week in monthCalendar" :key="week.id" class="previewer__week">
      <div
        v-for="date in week"
        :key="date.id"
        class="previewer__day"
        :class="dayClasses(date)"
      >
        {{ dateGenerator(date) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ICalendarService, {
  CalendarService
} from '@/domain/calendar/CalendarService';
import ICalendarCell from '@/domain/calendar/CalendarCell';

@Component
export default class MonthCalendarPreviewer extends Vue {
  @Prop({ type: Number, required: true })
  year!: number;

  @Prop({ type: Number, required: true })
  month!: number;

  @Prop({ type: Number, required: true })
  day!: number;

  daysOfWeek: string[] = [];
  monthCalendar: ICalendarCell[][] = [];
  today: Date = new Date();

  dayClasses(date: ICalendarCell) {
    const classes: string[] = [];
    if (
      this.year === this.today.getFullYear() &&
      date.month === this.today.getMonth() + 1 &&
      date.day === this.today.getDate()
    ) {
      classes.push('previewer__day--target');
    }
    if (this.monthCalendar.length === 5) {
      classes.push('previewer__day--5row');
      return classes.join(' ');
    }
    classes.push('previewer__day--6row');
    return classes.join(' ');
  }

  mounted() {
    const Calendar: ICalendarService = new CalendarService(
      new Date(this.year, this.month - 1, this.day)
    );
    this.daysOfWeek = Calendar.daysOfWeek;
    this.monthCalendar = Calendar.getMonthCalendar();
  }

  dateGenerator(date: ICalendarCell) {
    return date.day === 1 ? `${date.month}月 ${date.day}日` : String(date.day);
  }
}
</script>

<style lang="scss" scoped>
$cell-width: calc(100% / 7);
$borders: 1px solid $whitesmoke;

.previewer {
  width: 100%;

  &__days-of-week {
    display: flex;
    height: 20px;
  }

  &__day-of-week {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $cell-width;
    border-left: $borders;

    &:last-child {
      border-right: $borders;
    }
  }

  &__week {
    display: flex;
    border-bottom: $borders;
  }

  &__day {
    position: relative;
    display: flex;
    justify-content: center;
    width: $cell-width;
    padding-top: 8px;
    border-left: $borders;

    &--5row {
      height: calc((100vh - 64px - 20px) / 5);
    }

    &--6row {
      height: calc((100vh - 64px - 20px) / 6);
    }

    &--target {
      color: white;

      &::before {
        position: absolute;
        top: 2px;
        right: 0;
        left: 0;
        z-index: -1;
        width: 24px;
        height: 24px;
        margin: 0 auto;
        content: '';
        background: #185abc;
        border-radius: 12px;
      }
    }

    &:last-child {
      border-right: $borders;
    }
  }
}
</style>
