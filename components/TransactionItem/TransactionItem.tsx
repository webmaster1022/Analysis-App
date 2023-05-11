import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Popover } from "../Popover/Popover";
import { TransactionPopContent } from "./PopoverContent";
import { transactionResponse1 } from "../../utils/models";
import { format } from "date-fns";

interface props {
  data?: any;
  colors: string[];
  transaction_type?: string;
  handleForm: () => void;
  toggle?: () => void;
  handleDelete: (id?: number) => void;
  toggleDeleteConfirm: () => void;
  isPopoverVisible: boolean;
  popoverId: number | null;
  popoverHandler: () => void;
  isDeleteConfirmVisible: boolean;
}

export const TransactionItem: React.FC<props> = ({
  data,
  colors,
  transaction_type,
  toggle,
  handleForm,
  handleDelete,
  toggleDeleteConfirm,
  isPopoverVisible,
  popoverId,
  popoverHandler,
  isDeleteConfirmVisible,
}) => {
  return (
    <div className="bg-white rounded p-6 mb-4">
      <div className="flex justify-between items-center">
        <p className="flex items-center text-xs text-typography-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon w-4 mr-1"
            viewBox="0 0 512 512"
          >
            <title>Time</title>
            <path
              d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M256 128v144h96"
            />
          </svg>
          {format(new Date(data.date), "E dd")}
        </p>
        <Popover
          visibleHandler={popoverHandler}
          visible={isPopoverVisible}
          compareId={[data.id, popoverId]}
          content={
            <TransactionPopContent
              edit={handleForm}
              deleteItem={handleDelete}
              data={data}
            />
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon w-6 cursor-pointer"
            viewBox="0 0 512 512"
          >
            <title></title>
            <circle cx="256" cy="256" r="48" />
            <circle cx="416" cy="256" r="48" />
            <circle cx="96" cy="256" r="48" />
          </svg>
        </Popover>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="flex items-center text-base text-typography-900 mb-1 font-semibold">
          <svg className={`${colors[0]} h-2 w-2 mr-2`}>
            <circle cx="50" cy="50" r="40" />
          </svg>
          {data.category}
        </h3>
        <span className="text-xs text-typography-900">{data.wallet}</span>
        <p className="text-typography-300 mt-2">
          {data.note ? data.note : "note..."}
        </p>
      </div>
      <div className="mt-6">
        <span
          className={`${colors[1]} text-xs font-semibold px-2.5 py-0.5 rounded`}
        >
          {data.transaction_type == "Expense" ? "-" : "+"}
          {data.amount} {data.currency}
        </span>
      </div>
    </div>
  );
};
