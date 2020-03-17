<template>
  <div class="calendar-header">
    <div class="right-header">
      <div class="right-header__hamburger material-icons" @click="clicked">
        menu
      </div>
      <div class="right-header__title">カレンダー</div>
      <div class="right-header__navigation-holder">
        <div class="right-header__target" @click="jumpToday">今日</div>
        <div class="right-header__prev material-icons" @click="jumpPrevMonth">
          keyboard_arrow_left
        </div>
        <div class="right-header__next material-icons" @click="jumpNextMonth">
          keyboard_arrow_right
        </div>
      </div>
      <div class="right-header__target-month">{{ year }}年{{ month }}月</div>
    </div>
    <div class="left-header">
      <div class="left-header__selector">
        月
        <div class="material-icons">
          arrow_drop_down
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CalendarHeader extends Vue {
  @Prop({ type: Number, required: true })
  year!: number;

  @Prop({ type: Number, required: true })
  month!: number;

  @Prop({ type: Number, required: true })
  day!: number;

  prevMonth: Date = new Date();
  nextMonth: Date = new Date();

  mounted() {
    this.prevMonth = new Date(this.year, this.month - 2, 1);
    this.nextMonth = new Date(this.year, this.month, 1);
  }

  jumpPrevMonth() {
    this.$router.push(
      `/calendar/month/${this.prevMonth.getFullYear()}/${this.prevMonth.getMonth() +
        1}/1/`
    );
  }

  jumpNextMonth() {
    this.$router.push(
      `/calendar/month/${this.nextMonth.getFullYear()}/${this.nextMonth.getMonth() +
        1}/1/`
    );
  }

  jumpToday() {
    this.$router.push('/calendar/month/');
  }

  clicked() {
    this.$emit('show-sidebar');
  }
}
</script>

<style lang="scss" scoped>
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding-right: 10px;
  padding-left: 20px;
  border-bottom: 1px solid $whitesmoke;
}

.right-header {
  display: flex;
  align-items: center;

  &__hamburger {
    margin-right: 20px;
    cursor: pointer;
  }

  &__title {
    margin-right: 20px;
    font-size: 2.2rem;
    color: $dimgray;
  }

  &__target {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 34px;
    margin-right: 20px;
    font-size: 1.4rem;
    color: $lightgray;
    cursor: pointer;
    border: 1px solid $whitesmoke;
    border-radius: 5px;
  }

  &__navigation-holder {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  &__prev,
  &__next {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
  }

  &__target-month {
    font-size: 2.2rem;
  }
}

.left-header {
  display: flex;
  align-items: center;

  &__selector {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 34px;
    font-size: 1.4rem;
    color: $lightgray;
    cursor: pointer;
    border: 1px solid $whitesmoke;
    border-radius: 5px;
  }
}
</style>
