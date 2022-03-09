import { Task } from "../interfaces/Task.interface";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Task[];
    deleteATask: (id: string) => void;
}

export default function TaskList({ tasks, deleteATask }: Props) {
    return (
        <>
            {tasks.map((task) => (
                <div className="col-md-4 pb-2" key={task.id}>
                    <TaskCard task={task} deleteATask={deleteATask} />
                </div>
            ))}
        </>
    );
}
