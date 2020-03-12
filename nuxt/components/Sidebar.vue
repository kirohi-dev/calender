<template>
  <div class="sidebar">
    <div class="add-btn">作成</div>
    <div class="calendar">
      <div class="calendar__heading">
        <p class="calendar__title">{{ previewYear }}年 {{ previewMonth }}月</p>
        <div class="calendar__navigation-holder">
          <div class="calendar__prev material-icons" @click="prevMonth">
            keyboard_arrow_left
          </div>
          <div class="calendar__next material-icons" @click="nextMonth">
            keyboard_arrow_right
          </div>
        </div>
      </div>
      <div class="days">
        <div class="days__week">
          <div
            v-for="day in daysOfWeek"
            :key="day.id"
            class="days__week-of-day"
          >
            {{ day }}
          </div>
        </div>
        <div v-for="week in monthCalendar" :key="week.id" class="days__week">
          <div
            v-for="day in week"
            :key="day.id"
            class="days__day"
            :class="weekDayClasses(day.month, day.day)"
          >
            {{ day.day }}
          </div>
        </div>
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
export default class ComponentSidebar extends Vue {
  @Prop({ type: Number, required: true })
  year!: number;

  @Prop({ type: Number, required: true })
  month!: number;

  @Prop({ type: Number, required: true })
  day!: number;

  // data
  daysOfWeek: string[] = [];
  monthCalendar: ICalendarCell[][] = [];
  previewYear: number = 0;
  previewMonth: number = 0;
  previewDay: number = 0;

  mounted() {
    this.previewYear = this.year;
    this.previewMonth = this.month;
    this.previewDay = this.day;
    const Calendar: ICalendarService = new CalendarService(
      new Date(this.previewYear, this.previewMonth - 1, this.previewDay)
    );
    this.daysOfWeek = Calendar.daysOfWeek;
    this.monthCalendar = Calendar.getSidebarCalendar();
  }

  weekDayClasses(month: number, day: number) {
    const offset = month !== this.month ? 'days__day--offset' : '';
    const target =
      month === this.month && day === this.day ? 'days__day--target' : '';
    return offset + target;
  }

  prevMonth() {
    const Calendar: ICalendarService = new CalendarService(
      new Date(this.previewYear, this.previewMonth - 2, this.previewDay)
    );
    this.monthCalendar = Calendar.getSidebarCalendar();
    this.previewYear = Calendar.year;
    this.previewMonth = Calendar.month + 1;
  }

  nextMonth() {
    const Calendar: ICalendarService = new CalendarService(
      new Date(this.previewYear, this.previewMonth, this.previewDay)
    );
    this.monthCalendar = Calendar.getSidebarCalendar();
    this.previewYear = Calendar.year;
    this.previewMonth = Calendar.month + 1;
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 256px;
  height: 100vh;
  padding-top: 15px;
  padding-right: 20px;
  padding-left: 6px;
}

.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 48px;
  margin-bottom: 25px;
  font-size: 1.5rem;
  color: $lightgray;
  border: 1px solid #f5f5f5;
  border-radius: 55px;
  box-shadow: 1px 2px 4px -2px $lightgray;
  transition: box-shadow 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 5px 20px -3px $lightgray;
  }
}

.calendar {
  padding: 0 10px;

  &__heading {
    display: flex;
    justify-content: space-between;
    margin-left: 7px;
  }

  &__title {
    font-size: 1.4rem;
    line-height: 24px;
    color: $darkgray;
    text-align: center;
  }

  &__navigation-holder {
    display: flex;
    justify-content: flex-end;
  }

  &__next,
  &__prev {
    width: 24px;
    height: 24px;
    font-size: 1.8rem;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
  }

  &__next {
    margin-left: 10px;
  }

  &__days {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 215px;
    height: 168px;
  }
}

.days {
  &__week {
    display: flex;
    justify-content: space-between;
  }

  &__week-of-day {
    width: 24px;
    height: 24px;
    line-height: 24px;
    color: $darkgray;
    text-align: center;
  }

  &__day {
    width: 24px;
    height: 24px;
    font-size: 1rem;
    line-height: 24px;
    color: $darkgray;
    text-align: center;

    &--offset {
      font-size: 0.5rem;
      color: $lightgray;
    }

    &--target {
      color: #185abc;
      background: #d2e3fc;
      border-radius: 50%;
    }
  }
}
</style>
