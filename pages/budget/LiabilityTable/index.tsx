import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface props {
  classes?: string;
  children?: JSX.Element;
  data?: any;
  onClick?: () => void;
}

export const LiabilityRow: React.FC<props> = ({ classes, children, data }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id: data.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };
  return (
    <tr
      className="bg-primary-50 border-b-4 border-secondary-background-3"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {data.id}
      </td>
      <td className="py-4 px-6">{data.name}</td>
    </tr>
  );
};
