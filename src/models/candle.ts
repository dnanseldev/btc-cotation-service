import { throws } from "assert";
import { CandleColor } from "src/enums/candle-color";

export default class Candle {
    low: number;
    high: number;
    open: number;
    close: number;
    shade: CandleColor;
    finalDate: Date;
    values: number[];

    constructor( readonly currency: string,
                 readonly initialDate: Date ) {
        this.low = Infinity;
        this.high = 0;
        this.close = 0;
        this.open = 0;
        this.values = [];
        this.shade = CandleColor.UNDETERMINED;
    }

    addValue(value: number) {
        this.values.push(value);

        if(this.values.length === 1)
          this.open = value
        if(this.low > value)
          this.low = value
        if(this.high < value)
          this.high = value
    }

    closeCandle() {
        if(this.values.length > 0) {
            this.close = this.values[this.values.length - 1]
            this.finalDate = new Date()

            if(this.open > this.close)
                this.shade = CandleColor.DARK
            else
                this.shade = CandleColor.LIGHT
        }
    }
}