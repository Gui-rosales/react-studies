import Button from "../Button";
import Clock from "./Clock";
import style from "./Chronometer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Chronometer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function decrement(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return decrement(counter - 1);
      }
      finishTask();
    }, 1000);
  }
  return (
    <div className={style.Chronometer}>
      <p className={style.title}>Pick a Card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time}></Clock>
      </div>
      <Button onClick={() => decrement(time)}>Start</Button>
    </div>
  );
}
