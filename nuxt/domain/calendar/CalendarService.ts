import ICalendarCell from './CalendarCell';

export default interface ICalendarService {
  readonly daysOfWeek: string[];
  readonly year: number;
  readonly month: number;
  readonly day: number;
  getMonthCalendar(): ICalendarCell[][];
  // getWeek(): CalendarCell[];
}

export class CalendarService implements ICalendarService {
  private targetDate: Date;
  private DAY_MILLISECOND: number = 1000 * 60 * 60 * 24;
  private _daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
  private _year: number;
  private _month: number;
  private _day: number;

  constructor(targetDate: Date = new Date()) {
    this.targetDate = new Date(targetDate.getTime());
    this._year = this.targetDate.getFullYear();
    this._month = this.targetDate.getMonth();
    this._day = this.targetDate.getDate();
  }

  get daysOfWeek(): string[] {
    return this._daysOfWeek;
  }

  get year(): number {
    return this._year;
  }

  get month(): number {
    return this._month;
  }

  get day(): number {
    return this._day;
  }

  public getMonthCalendar(): ICalendarCell[][] {
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

  private getLastMonthInMonthCalendar(
    lastMonthLastDate: Date
  ): ICalendarCell[] {
    const result: ICalendarCell[] = [];
    const lastMonthLastDayOfWeek = lastMonthLastDate.getDay();
    for (let i = 0; lastMonthLastDayOfWeek + 1 - i > 0; i++) {
      result.push({
        month: lastMonthLastDate.getMonth() + 1,
        day: lastMonthLastDate.getDate() - lastMonthLastDayOfWeek + i
      });
    }
    return result;
  }

  private getTargetMonthInMonthCalendar(): ICalendarCell[] {
    const result: ICalendarCell[] = [];
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
    exceptOffsetDates: ICalendarCell[]
  ): ICalendarCell[] {
    const result: ICalendarCell[] = [];
    for (let i = 0; (exceptOffsetDates.length + i) % 7 !== 0; i++) {
      result.push({
        month: this.targetDate.getMonth() + 2,
        day: i + 1
      });
    }
    return result;
  }

  private translateMonthCalendar(
    CalendarDates: ICalendarCell[]
  ): ICalendarCell[][] {
    const result: ICalendarCell[][] = [];
    let tmp: ICalendarCell[] = [];
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
