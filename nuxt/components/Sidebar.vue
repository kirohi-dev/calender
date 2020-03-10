<template>
  <div>
    <button>作成</button>
    <div>
      <div class="row">
        <div class="columns">月</div>
        <div class="columns">月</div>
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
import CalendarService, {
  CalendarServiceImpl
} from '@/domain/calendar/CalendarService';

@Component
export default class ComponentSidebar extends Vue {
  @Prop({ type: Number, required: true })
  year!: number;

  @Prop({ type: Number, required: true })
  month!: number;

  @Prop({ type: Number, required: true })
  day!: number;

  mounted() {
    const Calendar: CalendarService = new CalendarServiceImpl(
      new Date(this.year, this.month - 1, this.day)
    );
    console.log(Calendar.getMonthCalendar());
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
