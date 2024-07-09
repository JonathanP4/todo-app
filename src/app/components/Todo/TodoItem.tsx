"use client";
import { Draggable } from "react-beautiful-dnd";
import Checkmark from "../UI/Checkmark";

type Props = {
  title: string;
  className?: string;
  id: number;
};
export default function TodoItem({ title, className, id }: Props) {
  return (
    <Draggable draggableId={`${id}`} index={id}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${
            snapshot.isDragging ? "bg-dark-500 rounded-lg" : ""
          } first-of-type:border-0 p-5 flex items-center border-t-[1px] border-t-dark-400 cursor-grab`}
        >
          <Checkmark />
          <h2 className="cursor-default">{title}</h2>
        </div>
      )}
    </Draggable>
  );
}
