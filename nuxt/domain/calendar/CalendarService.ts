import CalendarCell from './CalendarCell';

export default interface CalendarService {
  getMonthCalendar(): CalendarCell[][];
  // getWeek(): CalendarCell[];
}

export class CalendarServiceImpl implements CalendarService {
  private targetDate: Date;
  private DAY_MILLISECOND: number = 1000 * 60 * 60 * 24;
  private DAY_WEEK = ['日', '月', '火', '水', '木', '金', '土'];

  constructor(targetDate: Date = new Date()) {
    this.targetDate = new Date(targetDate.getTime());
  }

  public getMonthCalendar(): CalendarCell[][] {
    const lastMonthLastDate: Date = new Date(
      this.targetDate.getFullYear(),
      this.targetDate.getMonth(),
      0
    );
    const lastMonthDates = this.getLastMonthInMonthCalendar(lastMonthLastDate);
    const targetMonthDates = this.getTargetMonthInMonthCalendar();
    const exceptOffsetDates = lastMonthDates.concat(targetMonthDates);
    const offsetDates = this.getOffsetMonthCalendar(exceptOffsetDates);
    const calendarDates = exceptOffsetDates.concat(offsetDates);
    return this.translateMonthCalendar(calendarDates);
  }

  private getLastMonthInMonthCalendar(lastMonthLastDate: Date): CalendarCell[] {
    const result: CalendarCell[] = [];
    const lastMonthLastDayOfWeek = lastMonthLastDate.getDay();
    for (let i = 0; lastMonthLastDayOfWeek + 1 - i > 0; i++) {
      result.push({
        month: lastMonthLastDate.getMonth() + 1,
        day: lastMonthLastDate.getDate() - lastMonthLastDayOfWeek + i
      });
    }
    return result;
  }

  private getTargetMonthInMonthCalendar(): CalendarCell[] {
    const result: CalendarCell[] = [];
    const targetMonthLastDate = new Date(
      this.targetDate.getFullYear(),
      this.targetDate.getMonth() + 1,
      0
    );
    for (let i = 1; targetMonthLastDate.getDate() - i >= 0; i++) {
      result.push({
        month: this.targetDate.getMonth() + 1,
        day: i
      });
    }
    return result;
  }

  private getOffsetMonthCalendar(
    exceptOffsetDates: CalendarCell[]
  ): CalendarCell[] {
    const result: CalendarCell[] = [];
    for (let i = 0; (exceptOffsetDates.length + i) % 7 !== 0; i++) {
      result.push({
        month: this.targetDate.getMonth() + 2,
        day: i + 1
      });
    }
    return result;
  }

  private translateMonthCalendar(
    CalendarDates: CalendarCell[]
  ): CalendarCell[][] {
    const result: CalendarCell[][] = [];
    let tmp: CalendarCell[] = [];
    CalendarDates.forEach((CalendarCell, index) => {
      tmp.push(CalendarCell);
      if ((index + 1) % 7 === 0) {
        result.push(tmp);
        tmp = [];
      }
    });
    return result;
  }
}
