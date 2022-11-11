import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { transactionResponse1 } from "../../utils/models";
import { Popconfirm } from "antd";

interface props {
  toggle?: () => void;
  edit: (data: transactionResponse1["data"], mode: string) => void;
  deleteItem: (id?: number) => void;
  data: transactionResponse1["data"];
  deleteText?: string;
}

export const TransactionPopContent: React.FC<props> = ({
  toggle,
  edit,
  data,
  deleteText = "Are you sure to delete this transaction?",
  deleteItem,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex gap-2 cursor-pointer"
        onClick={() => edit(data, "update")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon w-4"
          viewBox="0 0 512 512"
        >
          <title></title>
          <path
            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
        </svg>
        Edit
      </div>
      <Popconfirm
        placement="topLeft"
        title={deleteText}
        okText="Yes"
        cancelText="No"
        okButtonProps={{ loading: confirmLoading }}
        onConfirm={() => deleteItem(data?.id)}
      >
        <div className="flex gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon w-4"
            viewBox="0 0 512 512"
          >
            <title></title>
            <path
              d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M80 112h352"
            />
            <path
              d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          <span>Delete</span>
        </div>
      </Popconfirm>
    </div>
  );
};
