import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { disabledDate } from "../../utils/date";

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
  category: {};
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
  const [currentPage, setCurrentPage] = useState(1);
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
  const [isPopoverVisible, setPopoverVisibility] = useState<{
    open: boolean;
    id: number | null;
  }>({
    open: false,
    id: null,
  });
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
    category: {},
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
      starter: currentPage * 10,
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
    setAddTransaactionMode(mode);
    triggerWallets();
    triggerTypes({ user: user?.id });
    if (data) {
      for (const property of Object.keys(addTransactionInitValues)) {
        form.setFieldsValue({
          [property]:
            property === "date"
              ? moment(`${data[`${property as keyof transactionResponse1}`]}`)
              : data[`${property as keyof transactionResponse1}`],
        });
      }
    }
    setPopoverVisibility({ ...isPopoverVisible, open: false, id: null });
    setAddTransactionVisible(!isAddTransactionVisible);
  };

  const handleCancelAddTransactionModal = () => {
    form.resetFields();
    setAddTransactionVisible(!isAddTransactionVisible);
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

  const categorySelectionHandler = (value: string, data: any) => {
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
      if (addTransaactionMode !== "add") {
        await updateTransaction({
          ...values,
          date: moment(values.date).format("YYYY-MM-DD").toString(),
        })
          .unwrap()
          .then((payload) => {
            form.resetFields();
            ToastRender(payload.message);
          })
          .catch((payload) => ToastRender(payload.message, true));
      } else {
        values = omit(values, ["id"]);
        await addTransaction({
          ...values,
          users_id: user?.id,
          date: moment(values.date).format("YYYY-MM-DD").toString(),
        })
          .unwrap()
          .then((payload) => {
            form.resetFields();
            ToastRender(payload.message);
          })
          .catch((payload) => {
            const { message } = payload.data.error;
            ToastRender(message, true);
            ToastRender(payload.message, true);
          });
      }
    } catch (error: any) {
      ToastRender(error, true);
    }
  };

  const onSearchHandler = (el: any) => {
    setSearch(el.target.value);
  };

  const onChangeDateHandler: DatePickerProps["onChange"] = (
    value,
    dateString
  ) => {
    setCurrentDate(`${dateString}-05`);
  };

  const onPopoverOpen = (id: number) => {
    setPopoverVisibility({
      ...isPopoverVisible,
      open: !isPopoverVisible.open,
      id: id,
    });
  };

  return (
    <Dashboard title={"transaction"}>
      <>
        <Modal
          isVisible={isAddTransactionVisible}
          title=""
          onCancel={handleCancelAddTransactionModal}
          width={768}
        >
          <>
            <div className="modal-header flex justify-between items-center py-6 px-12 border-b border-typography-100">
              <h1 className="text-2xl font-semibold capitalize">
                {addTransaactionMode} Transaction
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon w-5 cursor-pointer"
                viewBox="0 0 512 512"
                onClick={handleCancelAddTransactionModal}
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
                >
                  <>
                    {categories &&
                      categories.map((c) => (
                        <Option key={c.id} value={c.name} data={c}>
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
                  format="YYYY-MM-DD"
                  disabledDate={disabledDate}
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
                classes="px-6 self-end text-white bg-primary"
              >
                <>Save</>
              </Button>
            </Form>
          </>
        </Modal>
        <Navbar classes={"transaction"}>
          <>
            <div className="relative search-input ml-2">
              <Input
                type="text"
                name="search"
                placeholder="Search Income, Expense..."
                onChange={(el: any) => onSearchHandler(el)}
                className="p-2 text-sm text-typography-900 flex"
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
              <Button
                type="button"
                classes="px-4 text-white bg-primary"
                onClick={() => handleAddTransactionToggle(undefined, "add")}
              >
                <span>New Transaction</span>
              </Button>
            </div>
          </>
        </Navbar>
        <div className="flex justify-between items-center px-6 py-6">
          <h1 className="text-2xl font-semibold">Transactions</h1>
        </div>
        <div className="grid xl:grid-cols-3 px-6 py-6 gap-6 xl:gap-12">
          <div className="grow">
            <div className="bg-white px-4 py-2.5 border-l-4 border-income rounded mb-6">
              <h2 className="text-sm text-typography-900/80 font-semibold">
                Income
              </h2>
            </div>
            <Loader loading={isTransactionLoading} data={transactions?.income}>
              <>
                {transactions?.income.map((t) => (
                  <TransactionItem
                    toggleDeleteConfirm={toggleDeleteConfirm}
                    handleDelete={handleDelete}
                    handleForm={handleAddTransactionToggle}
                    colors={["bg-income", "bg-green-100 text-green-800"]}
                    data={t}
                    isPopoverVisible={isPopoverVisible.open}
                    popoverId={isPopoverVisible.id}
                    popoverHandler={() => onPopoverOpen(t.id)}
                    isDeleteConfirmVisible={isDeleteConfirmVisible}
                  />
                ))}
              </>
            </Loader>
          </div>
          <div className="grow">
            <div className="bg-white px-4 py-2.5 border-l-4 border-debt rounded mb-6">
              <h2 className="text-sm text-typography-900/80 font-semibold">
                Debt / Loan
              </h2>
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
                    colors={["bg-debt", "bg-yellow-100 text-yellow-800"]}
                    data={t}
                    isPopoverVisible={isPopoverVisible.open}
                    popoverId={isPopoverVisible.id}
                    popoverHandler={() => onPopoverOpen(t.id)}
                    isDeleteConfirmVisible={isDeleteConfirmVisible}
                  />
                ))}
              </>
            </Loader>
          </div>
          <div className="grow">
            <div className="bg-white px-4 py-2.5 border-l-4 border-primary rounded mb-6">
              <h2 className="text-sm text-typography-900/80 font-semibold">
                Expense
              </h2>
            </div>
            <Loader loading={isTransactionLoading} data={transactions?.expense}>
              <>
                {transactions?.expense.map((t) => (
                  <TransactionItem
                    toggleDeleteConfirm={toggleDeleteConfirm}
                    handleDelete={handleDelete}
                    handleForm={handleAddTransactionToggle}
                    colors={["bg-primary", "bg-red-100 text-red-800"]}
                    data={t}
                    isPopoverVisible={isPopoverVisible.open}
                    popoverId={isPopoverVisible.id}
                    popoverHandler={() => onPopoverOpen(t.id)}
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
