import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface props {
  classes?: string;
  children: JSX.Element;
  items: { id: string; name: string }[];
  setItems: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
      }[]
    >
  >;
  // rowData: any;
}

export const DraggableTable: React.FC<props> = ({
  classes,
  children,
  items,
  // rowData,
  setItems,
}) => {
  const sensors = [useSensor(PointerSensor)];

  // const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
  //   if (active.id !== over.id) {
  //     setItems((items: any) => {
  //       const oldIndex = items.findIndex(
  //         (item: { id: string; name: string }) => item.id === active.id
  //       );
  //       const newIndex = items.findIndex(
  //         (item: { id: string; name: string }) => item.id === over.id
  //       );
  //       return arrayMove(items, oldIndex, newIndex);
  //     });
  //   }
  // };
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left">
        <tbody>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            // onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item) =>
                React.cloneElement(children, { data: item })
              )}
            </SortableContext>
          </DndContext>
        </tbody>
      </table>
    </div>
  );
};
