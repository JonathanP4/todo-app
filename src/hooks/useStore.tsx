import { useState } from "react";
import { DraggableLocation, DropResult } from "react-beautiful-dnd";

const initialData: { title: string; id: number }[] = [];

export default function useStore() {
  const [store, updateStore] = useState(initialData);

  function setStoreState(newItem: Store) {
    updateStore((state) => [...state, newItem]);
  }
  function reorderState(event: DropResult) {
    const newState = [...store];
    const [item] = newState.splice(event.source.index, 1);

    if (event.destination) {
      console.log(item);
      newState.splice(event.destination.index, 0, item);
      updateStore(newState);
    }
  }
  return { store, setStoreState, reorderState };
}
