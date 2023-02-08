import style from "./Clock.module.scss";

interface ClockProps {
  time: number | undefined;
}

export default function Clock({ time = 0 }: ClockProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [setOfTenMinute, setOfUnitMinute] = String(minutes).padStart(2, "0");
  const [setOfTenSecond, setOfUnitSecond] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{setOfTenMinute}</span>
      <span className={style.clockNumber}>{setOfUnitMinute}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{setOfTenSecond}</span>
      <span className={style.clockNumber}>{setOfUnitSecond}</span>
    </>
  );
}
