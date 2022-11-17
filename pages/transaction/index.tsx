import React, { useEffect, useState } from "react";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import {
  DatePicker,
  DatePickerProps,
  Empty,
  Input,
  Select,
  Skeleton,
} from "antd";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import * as Yup from "yup";
import { NextPage } from "next";
import Dashboard from "../../components/Layout/Dashboard";
import { Navbar } from "../../components/Navbar/Navbar";
import { Modal } from "../../components/Modal/Modal";
import { toast } from "react-toastify";
// import { Loader } from "../../components/Loader/Loader";
import {
  useAddTransactionMutation,
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
  useLazyGetTransactionsQuery,
  useUpdateTransactionMutation,
} from "../../utils/apis/transaction";
import { useLazyGetTransactionTypesQuery } from "../../utils/apis/transactionTypes";
import { useLazyGetWalletsQuery } from "../../utils/apis/wallet";
import { TransactionItem } from "../../components/TransactionItem/TransactionItem";
import {
  transactionResponse,
  transactionResponse1,
  Wallet,
} from "../../utils/models";
import { Loader } from "../../components/Loader/Loader";
import { ToastRender } from "../../utils/toast";
import moment from "moment";
import WithPrivateRoute from "../../components/HOC/WithPrivateRoute";
import omit from "lodash.omit";
import jwt from "jsonwebtoken";

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
interface addTransactionValues {
  id?: number;
  transaction_type: string;
  wallet: string | null;
  category: string;
  amount: number | null;
  date: Date | null;
  note: string | null;
}
export interface categoryTypes {
  id: number;
  name: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

const Transaction: NextPage = () => {
  const [form] = Form.useForm();
  const token = localStorage.getItem("_expense_tracker_tkn_");
  const user: any = jwt.decode(token as string);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [search, setSearch] = useState<searchValues["search"]>("");
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isAddTransactionVisible, setAddTransactionVisible] = useState(false);
  const [addTransaactionMode, setAddTransaactionMode] = useState<
    string | undefined
  >();
  const [categories, setCategories] = useState<categoryTypes[]>();
  const [isDeleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const [categoryDefaultValue, setCategoryDefaultValue] = useState("");
  const filterInitValues: filterValues = {
    wallet: "",
    transaction: "",
    startDate: null,
    endDate: null,
  };
  const addTransactionInitValues: addTransactionValues = {
    id: undefined,
    wallet: null,
    transaction_type: "",
    category: "",
    amount: null,
    date: null,
    note: null,
  };

  const { data: transactions, isLoading: isTransactionLoading } =
    useGetTransactionsQuery({
      dateFrom: moment(currentDate).startOf("month").format("YYYY-MM-DD"),
      dateTo: moment(currentDate).endOf("month").format("YYYY-MM-DD"),
      search,
      user: user?.id,
    });
  const [triggerWallets, { data: wallets }] = useLazyGetWalletsQuery();

  const [triggerTypes, { data: transactionTypes }] =
    useLazyGetTransactionTypesQuery();

  const [
    addTransaction,
    { data: addTransactionResponse, error: addTransactionError },
  ] = useAddTransactionMutation();

  const [updateTransaction, { data: updateTransactionResponse }] =
    useUpdateTransactionMutation();
  const [deleteTransaction] = useDeleteTransactionMutation();

  // useEffect(() => {
  //   dispatch(fetchTransactions({ populate: ["wallet_id"] }));
  //   dispatch(fetchTransactionTypes({ populate: "*" }));
  //   dispatch(fetchWallets());
  // }, []);

  const handleSearch = (values: searchValues) => {
    alert(values);
  };
  const handleSubmit = (values: searchValues) => {
    alert(values);
  };
  const handleFilterToggle = () => {
    setFilterVisible(!isFilterVisible);
  };
  const handleAddTransactionToggle = async (
    data?: transactionResponse1,
    mode?: string
  ) => {
    const val = !isAddTransactionVisible;
    console.log(mode);
    setAddTransaactionMode(mode);
    if (val) {
      triggerWallets();
      triggerTypes({ user: user?.id });
      console.log(data);
      if (data) {
        for (const property of Object.keys(addTransactionInitValues)) {
          form.setFieldsValue({
            [property]:
              property === "date"
                ? moment(
                    `${
                      data[`${property as keyof transactionResponse1}`]
                        .toString()
                        .split("T")[0]
                    }`
                  )
                : data[`${property as keyof transactionResponse1}`],
          });
        }
      }
      return setAddTransactionVisible(val);
    }
    return setAddTransactionVisible(val);
  };

  const handleDelete = async (id?: number) => {
    try {
      const result = await deleteTransaction(id).unwrap();
      setDeleteConfirmVisible(false);
      ToastRender(result.message);
    } catch (error: any) {
      ToastRender(error.message, true);
    }
  };

  const toggleDeleteConfirm = () => {
    console.log(isDeleteConfirmVisible);
    setDeleteConfirmVisible((prev) => !prev);
  };

  const walletSelectionHandler = (value: string) => {
    form.setFieldsValue({ wallet: value });
  };

  const transactionSelectionHandler = (value: string) => {
    const result = transactionTypes?.filter((t) => t.name == value)[0]
      .categories;
    form.setFieldsValue({ transaction_type: value });
    if (result) {
      setCategories(result);
      form.setFieldsValue({
        category: result[0] ? result[0].name : null,
      });
    }
  };

  const categorySelectionHandler = (value: string) => {
    form.setFieldsValue(value);
  };

  const validationSchema = Yup.object().shape({
    transaction: Yup.string(),
    wallet: Yup.string(),
    startDate: Yup.date(),
    endDate: Yup.date(),
  });

  const onFinishedTransaction = async (
    values: transactionResponse1["data"]
  ) => {
    try {
      console.log(values);
      if (addTransaactionMode !== "add") {
        console.log("update");

        await updateTransaction({ ...values })
          .unwrap()
          .then((payload) => {
            form.resetFields();
            ToastRender(payload.message);
          })
          .catch((payload) => ToastRender(payload.message, true));
      } else {
        console.log("add");
        values = omit(values, ["id"]);
        await addTransaction({ ...values, users_id: user?.id })
          .unwrap()
          .then((payload) => {
            form.resetFields();
            ToastRender(payload.message);
          })
          .catch((payload) => ToastRender(payload.message, true));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchHandler = (el: any) => {
    console.log(el.target.value);
    setSearch(el.target.value);
  };

  const onChangeDateHandler: DatePickerProps["onChange"] = (
    value,
    dateString
  ) => {
    setCurrentDate(`${dateString}-05`);
    console.log(value, dateString);
  };

  return (
    <Dashboard title={"transaction"}>
      <>
        <Modal
          isVisible={isAddTransactionVisible}
          title=""
          onCancel={handleAddTransactionToggle}
          width={768}
        >
          <>
            <div className="modal-header flex justify-between items-center py-6 px-12 border-b border-typography-100">
              <h1 className="text-2xl font-semibold">Add Transaction</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon w-5 cursor-pointer"
                viewBox="0 0 512 512"
                onClick={() => handleAddTransactionToggle}
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
              initialValues={addTransactionInitValues}
              autoComplete="off"
              className="add-transaction flex flex-col px-14 py-10"
              form={form}
              onFinish={onFinishedTransaction}
            >
              <div className="flex gap-4">
                <FormControl
                  element="select"
                  name="wallet"
                  label="Wallet"
                  placeholder="Bank"
                  classes={["flex-1"]}
                  onChange={walletSelectionHandler}
                  rules={[
                    { required: true, message: "Please select your wallet!" },
                  ]}
                >
                  <>
                    {wallets?.map((w: Wallet) => (
                      <Option key={w.id} value={w.name}>
                        {w.name}
                      </Option>
                    ))}
                  </>
                </FormControl>
                <FormControl
                  element="select"
                  name="transaction_type"
                  label="Transaction"
                  placeholder="Income"
                  classes={["flex-1"]}
                  onChange={transactionSelectionHandler}
                  rules={[
                    {
                      required: true,
                      message: "Please select the transaction type!",
                    },
                  ]}
                >
                  <>
                    {transactionTypes?.map((t) => (
                      <Option key={t.id} value={t.name}>
                        {t.name}
                      </Option>
                    ))}
                  </>
                </FormControl>
                <FormControl
                  element="select"
                  name="category"
                  label="Category"
                  placeholder="Category"
                  classes={["flex-1"]}
                  showSearch={true}
                  onChange={categorySelectionHandler}
                  rules={[{ required: true }]}
                  // value={categoryDefaultValue}
                >
                  <>
                    {categories &&
                      categories.map((c) => (
                        <Option key={c.id} value={c.name}>
                          {c.name}
                        </Option>
                      ))}
                  </>
                </FormControl>
              </div>
              <div className="flex gap-4">
                <FormControl
                  type="number"
                  element="input"
                  name="id"
                  placeholder="0"
                  classes={["flex-1 hidden"]}
                  rules={[{ required: false, message: "Please input amount" }]}
                />
                <FormControl
                  type="number"
                  element="input"
                  name="amount"
                  label="Amount"
                  placeholder="0"
                  classes={["flex-1"]}
                  rules={[{ required: true, message: "Please input amount" }]}
                />
                <FormControl
                  element="date"
                  name="date"
                  label="Date"
                  placeholder="2022-01-01"
                  classes={["flex-1"]}
                  rules={[{ required: true, message: "Please input date" }]}
                />
              </div>
              <div className="flex">
                <FormControl
                  element="textarea"
                  name="note"
                  placeholder="Note"
                  classes={["flex-1", "py-2"]}
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                classes="px-6 self-end text-primary-50 bg-secondary-3 hover:bg-secondary-hover-3"
              >
                <>Save</>
              </Button>
            </Form>
          </>
        </Modal>
        <Modal
          isVisible={isFilterVisible}
          title=""
          onCancel={handleFilterToggle}
          width={768}
        >
          <>
            <div className="modal-header flex justify-between items-center py-6 px-12 border-b border-typography-100">
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
              className="filter flex flex-col px-14 py-10"
            >
              <div className="flex gap-4">
                <FormControl
                  element="select"
                  name="wallet"
                  label="Wallet"
                  placeholder="Bank"
                  classes={["flex-1"]}
                >
                  <>
                    {/* {wallets.map((w) => (
                      <Option key={w.id}>{w.name}</Option>
                    ))} */}
                  </>
                </FormControl>
                <FormControl
                  element="select"
                  name="transaction"
                  label="Transaction"
                  placeholder="Income"
                  classes={["flex-1"]}
                >
                  <>
                    {/* {transactionTypes.map((t) => (
                      <Option key={t.id}>{t.attributes.name}</Option>
                    ))} */}
                  </>
                </FormControl>
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
                classes="px-6 self-end text-primary-50 bg-secondary-3 hover:bg-secondary-hover-3"
              >
                <>Apply Filter</>
              </Button>
            </Form>
          </>
        </Modal>
        <Navbar classes={"transaction"}>
          <>
            <div className="relative search-input">
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
              <Input
                type="text"
                name="search"
                placeholder="Search Income, Expense..."
                onChange={(el: any) => onSearchHandler(el)}
                className="block p-2 text-sm text-typography-900 rounded flex"
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
            <div className="flex gap-6">
              <DatePicker
                name="date"
                placeholder="2022-01"
                picker={"month"}
                defaultValue={moment(currentDate)}
                onChange={onChangeDateHandler}
              />
              {/* <Button
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
              </Button> */}

              <Button
                type="button"
                classes="py-2 px-4 text-primary-50 bg-secondary-3 hover:bg-secondary-hover-3"
                onClick={() => handleAddTransactionToggle(undefined, "add")}
              >
                <span>New Transaction</span>
              </Button>
            </div>
          </>
        </Navbar>
        <div className="flex justify-between items-center px-6 py-6">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          {/* <div className="flex gap-8">
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
          </div>*/}
        </div>
        <div className="flex px-6 py-6 gap-12">
          <div className="flex-1 grow">
            <div className="bg-primary-50 text-sm text-typography-900 font-semibold px-4 py-2.5 border-l-4 border-secondary-1 rounded mb-6">
              <h2>Income</h2>
            </div>
            <Loader loading={isTransactionLoading} data={transactions?.income}>
              <>
                {transactions?.income.map((t) => (
                  <TransactionItem
                    toggleDeleteConfirm={toggleDeleteConfirm}
                    handleDelete={handleDelete}
                    handleForm={handleAddTransactionToggle}
                    colors={["bg-secondary-1", "bg-green-100 text-green-800"]}
                    data={t}
                    isDeleteConfirmVisible={isDeleteConfirmVisible}
                  />
                ))}
              </>
            </Loader>
          </div>
          <div className="flex-1 grow">
            <div className="bg-primary-50 text-sm text-typography-900 font-semibold px-4 py-2.5 border-l-4 border-secondary-2 rounded mb-6">
              <h2>Debt / Loan</h2>
            </div>
            <Loader
              loading={isTransactionLoading}
              data={transactions?.debt_loan}
            >
              <>
                {transactions?.debt_loan.map((t) => (
                  <TransactionItem
                    toggleDeleteConfirm={toggleDeleteConfirm}
                    handleDelete={handleDelete}
                    handleForm={handleAddTransactionToggle}
                    colors={["bg-secondary-2", "bg-yellow-100 text-yellow-800"]}
                    data={t}
                    isDeleteConfirmVisible={isDeleteConfirmVisible}
                  />
                ))}
              </>
            </Loader>
          </div>
          <div className="flex-1 grow">
            <div className="bg-primary-50 text-sm text-typography-900 font-semibold px-4 py-2.5 border-l-4 border-secondary-3 rounded mb-6">
              <h2>Expense</h2>
            </div>
            <Loader loading={isTransactionLoading} data={transactions?.expense}>
              <>
                {transactions?.expense.map((t) => (
                  <TransactionItem
                    toggleDeleteConfirm={toggleDeleteConfirm}
                    handleDelete={handleDelete}
                    handleForm={handleAddTransactionToggle}
                    colors={["bg-secondary-3", "bg-red-100 text-red-800"]}
                    data={t}
                    isDeleteConfirmVisible={isDeleteConfirmVisible}
                  />
                ))}
              </>
            </Loader>
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default WithPrivateRoute(Transaction);
