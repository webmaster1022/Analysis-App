import React, { useState } from "react";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import { Select, Space, Table, Tag } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import * as Yup from "yup";
import { NextPage } from "next";
import Dashboard from "../../components/Layout/Dashboard";
import { Navbar } from "../../components/Navbar/Navbar";
import { Modal } from "../../components/Modal/Modal";
import { DraggableTable } from "../../components/DraggableTable/DraggableTable";
import { IncomeRow } from "./IncomeTable";
import { ExpenseRow } from "./ExpenseTable";
import { LiabilityRow } from "./LiabilityTable";
import { useGetCategoriesQuery } from "../../utils/apis/categories";
import { categoriesResponse1 } from "../../utils/models";
import { ColumnsType } from "antd/lib/table";
import WithPrivateRoute from "../../components/HOC/WithPrivateRoute";

const { Option } = Select;

interface searchValues {
  search: string;
}
interface filterValues {
  transaction: string;
  wallet: string;
  startDate: Date | null;
  endDate: Date | null;
}

const transactions = [
  {
    id: 1,
    name: "Income",
  },
  {
    id: 2,
    name: "Debt/Loan",
  },
  {
    id: 3,
    name: "Expense",
  },
];

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  index: number;
}

const colors = (type: string) => {
  switch (type) {
    case "Income":
      return "bg-secondary-1 bg-green-100 text-green-800";
    case "Debt/Loan":
      return "bg-secondary-2 bg-yellow-100 text-yellow-800";
    case "Expense":
      return "bg-secondary-3 bg-red-100 text-red-800";
    default:
      return "bg-transparent";
  }
};

const Budget: NextPage = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  console.log(categories?.filter((d) => d.transaction_type.name === "Income"));
  const searchInitValues: searchValues = { search: "" };
  const filterInitValues: filterValues = {
    transaction: "",
    wallet: "",
    startDate: null,
    endDate: null,
  };
  const handleSearch = (values: searchValues) => {
    alert(values);
  };
  const handleSubmit = (values: searchValues) => {
    alert(values);
  };
  const handleFilterToggle = () => {
    setFilterVisible(!isFilterVisible);
  };
  const validationSchema = Yup.object().shape({
    transaction: Yup.string(),
    wallet: Yup.string(),
    startDate: Yup.date(),
    endDate: Yup.date(),
  });

  const columns: ColumnsType<categoriesResponse1> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Transaction Type",
      key: "transaction_type",
      dataIndex: "transaction_type",
      render: (_, { transaction_type }) => (
        <span
          className={`${colors(
            transaction_type.name
          )} text-xs font-semibold px-2.5 py-0.5 rounded`}
        >
          {transaction_type.name}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Dashboard>
      <>
        <Modal
          isVisible={isFilterVisible}
          title="dsa"
          onCancel={handleFilterToggle}
          width={768}
        >
          <>
            <div className="modal-header flex justify-between items-center py-6 px-10 border-b border-typography-100">
              <h1 className="text-2xl font-semibold">Filter</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon w-5 cursor-pointer"
                viewBox="0 0 512 512"
                onClick={handleFilterToggle}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="56"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </div>
            <Form
              layout="vertical"
              initialValues={filterInitValues}
              autoComplete="off"
              className="filter flex flex-col px-12 py-10"
            >
              <div className="flex gap-4">
                <FormControl
                  element="select"
                  name="transaction"
                  label="Transaction"
                  placeholder="Income"
                  classes={["flex-1"]}
                >
                  <>
                    {transactions.map((o) => (
                      <Option key={o.id}>{o.name}</Option>
                    ))}
                  </>
                </FormControl>
                <FormControl
                  element="select"
                  name="wallet"
                  label="Wallet"
                  placeholder="Bank"
                  classes={["flex-1"]}
                />
              </div>
              <div>
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-typography-900"
                >
                  Date
                </label>
                <div className="flex gap-4">
                  <FormControl
                    element="date"
                    name="startDate"
                    placeholder="From"
                    classes={["flex-1"]}
                  />
                  <FormControl
                    element="date"
                    name="endDate"
                    placeholder="To"
                    classes={["flex-1"]}
                  />
                </div>
              </div>
              <Button
                type="submit"
                classes="py-2 px-4 self-end text-primary-50 bg-secondary-3 hover:bg-secondary-hover-3"
              >
                <>Apply Filter</>
              </Button>
            </Form>
          </>
        </Modal>
        <Navbar>
          <>
            <div className="flex ml-auto gap-6">
              <Button
                type="button"
                classes="p-2 flex gap-2"
                onClick={handleFilterToggle}
              >
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-6 text-secondary-3"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M32 144h448M112 256h288M208 368h96"
                    />
                  </svg>
                  <span className="font-semibold">Filter</span>
                </>
              </Button>

              <Button
                type="button"
                classes="py-2 px-4 text-primary-50 bg-secondary-3 hover:bg-secondary-hover-3"
              >
                <span>New Budget</span>
              </Button>
            </div>
          </>
        </Navbar>
        <div className="flex justify-between items-center px-6 py-6">
          <h1 className="text-2xl font-semibold">Budgets</h1>
        </div>
        <div className="flex px-6 py-6">
          <div className="flex-1">
            {categories && <Table columns={columns} dataSource={categories} />}
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default WithPrivateRoute(Budget);
