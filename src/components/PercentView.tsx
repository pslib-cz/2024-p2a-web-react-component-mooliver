import {FC} from  "react"
import style from "./PercentView.module.css"

type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string,
    percentvalue: number;
};

const PercentView: FC<PercentViewType> = ({value, percentvalue, max, makeColor}) => {
    const makeBar: number = value / max * 100;
    return(
        <>
        <div className={style.percentview} style={ {backgroundColor:makeColor(value/max)} }>
            {makeBar}%
        </div>
        <div className={style.percentbar}>
            <div className={style.percentvalue} style={{width: `${makeBar}%`}}></div>
        </div>
        </>
    )
}
export default PercentView