export default class Log {
    static init() {
        Log.instance = [];
    }
    static next(ILogLine) {
        Log.instance.push(ILogLine);
    }
    static getInstance() {
        if (!Log.instance) {
            Log.init();
        }
        return Log.instance;
    }
}
