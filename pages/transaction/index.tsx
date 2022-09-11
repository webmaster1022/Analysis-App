import React, { useState } from "react";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import { Select } from "antd";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import * as Yup from "yup";
import { NextPage } from "next";
import Dashboard from "../../components/Layout/Dashboard";
import { Navbar } from "../../components/Navbar/Navbar";
import { Modal } from "../../components/Modal/Modal";

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

const Transaction: NextPage = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
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
            <Form
              layout="vertical"
              initialValues={searchInitValues}
              autoComplete="off"
              className="search-form"
            >
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-0 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 text-typography-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <FormControl
                  type="text"
                  element="search-input"
                  name="search"
                  placeholder="Search Income, Expense..."
                  classes="block p-2 text-sm text-typography-900 rounded-lg flex"
                  prefix={
                    <svg
                      aria-hidden="true"
                      className="w-5 text-typography-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  }
                />
              </div>
            </Form>
            <div className="flex gap-6">
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
                <span>New Transaction</span>
              </Button>
            </div>
          </>
        </Navbar>
        <div className="flex justify-between items-center px-16 py-6 my-6">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">33</h4>
              <h6 className="text-sm text-typography-300 font-semibold">
                Total Net Income
              </h6>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">33</h4>
              <h6 className="text-sm text-typography-300 font-semibold">
                Total Income
              </h6>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">33</h4>
              <h6 className="text-sm text-typography-300 font-semibold">
                Total Debt/Loan
              </h6>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">33</h4>
              <h6 className="text-sm text-typography-300 font-semibold">
                Total Expense
              </h6>
            </div>
          </div>
        </div>
        <div className="flex px-16 py-6 gap-12">
          <div className="flex-1 grow">
            <div className="bg-primary-50 text-sm text-typography-900 font-semibold px-4 py-2.5 border-l-4 border-secondary-1 rounded-lg rounded-lg mb-6">
              <h2>Income</h2>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
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
                  Jan 32
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-6"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <circle cx="256" cy="256" r="48" />
                  <circle cx="416" cy="256" r="48" />
                  <circle cx="96" cy="256" r="48" />
                </svg>
              </div>
              <div className="flex flex-col mt-4">
                <h3 className="flex items-center text-base text-typography-900 mb-1 font-semibold">
                  <svg className="bg-secondary-1 h-2 w-2 mr-2">
                    <circle cx="50" cy="50" r="40" />
                  </svg>
                  Monthly Salary
                </h3>
                <span className="text-xs text-typography-900">Bank</span>
                <p className="text-typography-300 mt-2">
                  short description here
                </p>
              </div>
              <div className="mt-6">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  +200K RFW
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 grow">
            <div className="bg-primary-50 text-sm text-typography-900 font-semibold px-4 py-2.5 border-l-4 border-secondary-2 rounded-lg rounded-lg mb-6">
              <h2>Debt / Loan</h2>
            </div>
            <div className="bg-primary-50 rounded-lg rounded-lg">
              <div className="bg-primary-50 rounded-lg p-6">
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
                    Jan 32
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-6"
                    viewBox="0 0 512 512"
                  >
                    <title></title>
                    <circle cx="256" cy="256" r="48" />
                    <circle cx="416" cy="256" r="48" />
                    <circle cx="96" cy="256" r="48" />
                  </svg>
                </div>
                <div className="flex flex-col mt-4">
                  <h3 className="flex items-center text-base text-typography-900 mb-1 font-semibold">
                    <svg className="bg-secondary-2 h-2 w-2 mr-2">
                      <circle cx="50" cy="50" r="40" />
                    </svg>
                    Monthly Salary
                  </h3>
                  <span className="text-xs text-typography-900">Bank</span>
                  <p className="text-typography-300 mt-2">
                    short description here
                  </p>
                </div>
                <div className="mt-6">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    +200K RFW
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 grow">
            <div className="bg-primary-50 text-sm text-typography-900 font-semibold px-4 py-2.5 border-l-4 border-secondary-3 rounded-lg rounded-lg mb-6">
              <h2>Expense</h2>
            </div>
            <div className="bg-primary-50 rounded-lg rounded-lg">
              <div className="bg-primary-50 rounded-lg p-6">
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
                    Jan 32
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-6"
                    viewBox="0 0 512 512"
                  >
                    <title></title>
                    <circle cx="256" cy="256" r="48" />
                    <circle cx="416" cy="256" r="48" />
                    <circle cx="96" cy="256" r="48" />
                  </svg>
                </div>
                <div className="flex flex-col mt-4">
                  <h3 className="flex items-center text-base text-typography-900 mb-1 font-semibold">
                    <svg className="bg-secondary-3 h-2 w-2 mr-2">
                      <circle cx="50" cy="50" r="40" />
                    </svg>
                    Monthly Salary
                  </h3>
                  <span className="text-xs text-typography-900">Bank</span>
                  <p className="text-typography-300 mt-2">
                    short description here
                  </p>
                </div>
                <div className="mt-6">
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    -200K RFW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        \
      </>
    </Dashboard>
  );
};

export default Transaction;
