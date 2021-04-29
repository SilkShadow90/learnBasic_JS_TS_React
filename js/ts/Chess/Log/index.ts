import { THorizontal, TVertical, TColor } from '../interfaces/index';

export interface ILogLine {
  figureName: string,
  color: TColor,
  prevPosition: [THorizontal, TVertical],
  nextPosition: [THorizontal, TVertical],
  timeStamp: Date,
}

export default class Log {
  private static instance: ILogLine[];

  private static init(): void {
    Log.instance = [];
  }

  public static next(ILogLine: ILogLine): void {
    Log.instance.push(ILogLine);
  }

  public static getInstance(): ILogLine[] {
    if (!Log.instance) {
      Log.init();
    }

    return Log.instance;
  }
}
