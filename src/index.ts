import prettyMilliseconds from 'pretty-ms';
import timestring from "timestring";

export class TimeMilliConverter {
    static getTimeString(time: number) {
        //if time is not valid
        if (!time) {
            return "--";
        }
        //converting negative time to positive
        if (time < 0) {
            time = time * -1;
        }
        // if time is less than 1 second
        if (time / 1000 < 1) {
            return "0:00";
        }

        return prettyMilliseconds(time, { unitCount: 2, secondsDecimalDigits: 0 });
    }

    static getMilliseconds(time: string, returnUnit?: timestring.ReturnUnit | undefined) {
        if(returnUnit) return timestring(time, returnUnit);
        return timestring(time, 'ms');
    }
}