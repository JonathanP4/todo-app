"use client";

import useStore from "@/hooks/useStore";
import Checkmark from "../UI/Checkmark";
import TodoItem from "./TodoItem";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { FormEvent, useRef } from "react";

export default function Todos() {
  const { store, setStoreState, reorderState } = useStore();
  const textInputRef = useRef<HTMLInputElement>(null);

  const onDragEnd = (event: DropResult) => {
    const { destination, source } = event;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    reorderState(event);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!textInputRef.current) return;

    const todoTitle = textInputRef.current?.value;

    setStoreState({ title: todoTitle, id: store.length + 1 });
    textInputRef.current.value = "";
  };
  return (
    <div className="grid gap-5 dark:text-dark-200 text-lg min-w-[30rem]">
      <div>
        <form
          onSubmit={submitHandler}
          className={`first-of-type:border-0 p-5 flex items-center border-t-[1px] border-t-dark-400 dark:bg-dark-600 rounded-lg`}
        >
          <Checkmark />
          <input
            ref={textInputRef}
            type="text"
            className="bg-transparent w-full focus-visible:outline-dashed outline-1 outline-dark-400"
            placeholder="Create a new todo..."
          />
        </form>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos-list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="dark:bg-dark-600 rounded-lg"
            >
              {store.map((el, i) => (
                <TodoItem id={i} title={el.title} key={i} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
