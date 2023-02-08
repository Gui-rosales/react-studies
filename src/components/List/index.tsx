import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/task";

interface ListProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.tasksList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
