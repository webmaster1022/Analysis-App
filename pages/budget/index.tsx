import React, { useState } from "react";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import { Select, Table } from "antd";
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

const Budget: NextPage = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [incomes, setIncome] = useState([
    {
      id: "1",
      name: "Manoj",
    },
    {
      id: "2",
      name: "John",
    },
    {
      id: "3",
      name: "Ronaldo",
    },
    {
      id: "4",
      name: "Harry",
    },
    {
      id: "5",
      name: "Jamie",
    },
  ]);
  const [liabilities, setLiability] = useState([
    {
      id: "1",
      name: "Manoj",
    },
    {
      id: "2",
      name: "John",
    },
    {
      id: "3",
      name: "Ronaldo",
    },
    {
      id: "4",
      name: "Harry",
    },
    {
      id: "5",
      name: "Jamie",
    },
  ]);
  const [expenses, setExpense] = useState([
    {
      id: "1",
      name: "Manoj",
    },
    {
      id: "2",
      name: "John",
    },
    {
      id: "3",
      name: "Ronaldo",
    },
    {
      id: "4",
      name: "Harry",
    },
    {
      id: "5",
      name: "Jamie",
    },
  ]);
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

  return (
    <Dashboard>
      <>
        <Modal
          isVisible={isFilterVisible}
          title="dsa"
          onCancel={handleFilterToggle}
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
                  classes=""
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
                  classes=""
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
                    classes=""
                  />
                  <FormControl
                    element="date"
                    name="endDate"
                    placeholder="To"
                    classes=""
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
        <div className="flex justify-between items-center px-16 py-6 my-6">
          <h1 className="text-2xl font-semibold">Budgets</h1>
        </div>
        <div className="flex flex-col px-16 py-6 gap-12">
          <div className="flex-1 grow">
            <div className="pl-2 text-lg w-fit text-typography-900 font-semibold  mb-6">
              <h2>Income</h2>
              <hr className="h-1 w-2/4 bg-secondary-1 border-0 mt-1" />
            </div>
            <DraggableTable items={incomes} setItems={setIncome}>
              <IncomeRow />
            </DraggableTable>
          </div>
          <div className="flex-1 grow">
            <div className="pl-2 text-lg w-fit text-typography-900 font-semibold  mb-6">
              <h2>Liability</h2>
              <hr className="h-1 w-2/4 bg-secondary-2 border-0 mt-1" />
            </div>
            <div>
              <DraggableTable items={liabilities} setItems={setLiability}>
                <LiabilityRow />
              </DraggableTable>
            </div>
          </div>
          <div className="flex-1 grow">
            <div className="pl-2 text-lg w-fit text-typography-900 font-semibold  mb-6">
              <h2>Expense</h2>
              <hr className="h-1 w-2/4 bg-secondary-3 border-0 mt-1" />
            </div>
            <div>
              <DraggableTable items={expenses} setItems={setExpense}>
                <ExpenseRow />
              </DraggableTable>
            </div>
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default Budget;
