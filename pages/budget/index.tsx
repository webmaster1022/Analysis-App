import React, { useState } from "react";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import { Collapse, Empty, Popconfirm, Select, Space, Table, Tag } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import * as Yup from "yup";
import { NextPage } from "next";
import Dashboard from "../../components/Layout/Dashboard";
import { Navbar } from "../../components/Navbar/Navbar";
import { Modal } from "../../components/Modal/Modal";
import {
  useAddBudgetMutation,
  useDeleteBudgetMutation,
  useGetCategoriesQuery,
  useUpdateBudgetMutation,
} from "../../utils/apis/categories";
import { categoriesBody, categoriesResponse1 } from "../../utils/models";
import { ColumnsType } from "antd/lib/table";
import WithPrivateRoute from "../../components/HOC/WithPrivateRoute";
import { ToastRender } from "../../utils/toast";
import omit from "lodash.omit";
import { useLazyGetTransactionTypesQuery } from "../../utils/apis/transactionTypes";
import moment from "moment";
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

interface addBudgetValues {
  id?: number;
  name: string | null;
  transaction_type: number | null;
  budget: number | null;
}

const Budget: NextPage = (props) => {
  console.log(props);
  const [form] = Form.useForm();
  const { Panel } = Collapse;
  const token = localStorage.getItem("_expense_tracker_tkn_");
  const user: any = jwt.decode(token as string);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isAddBudgetVisible, setAddBudgetVisible] = useState(false);
  const [addBudgetMode, setAddBudgetMode] = useState<string | undefined>();
  const [triggerTypes, { data: transactionTypes }] =
    useLazyGetTransactionTypesQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery({ user: user?.id });

  const [addBudget] = useAddBudgetMutation();

  const [updateBudget] = useUpdateBudgetMutation();
  const [deleteBudget] = useDeleteBudgetMutation();

  console.log(categories?.filter((d) => d.transaction_type.name === "Income"));
  const searchInitValues: searchValues = { search: "" };
  const filterInitValues: filterValues = {
    transaction: "",
    wallet: "",
    startDate: null,
    endDate: null,
  };

  const addBudgetInitValues: addBudgetValues = {
    id: undefined,
    name: null,
    transaction_type: null,
    budget: null,
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

  const columns: ColumnsType<categoriesResponse1["data"]> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: "50%",
    },
    {
      title: "Transaction Type",
      key: "transaction_type",
      dataIndex: "transaction_type",
      render: (_, { budget }) => (
        <>
          {budget ? (
            <span
              className={`bg-secondary-1 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded`}
            >
              {budget} Rfw
            </span>
          ) : null}
        </>
      ),
      width: "30%",
      className: "bg-light-1",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="w-4 h-4 cursor-pointer"
            onClick={() => handleAddBudgetToggle(record)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon w-full"
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
          </div>
          <Popconfirm
            placement="topLeft"
            title={"Are you sure to delete this budget"}
            onConfirm={() => deleteBudgetHandler(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <div
              className="w-4 h-4 cursor-pointer"
              // onClick={() => handleAddBudgetToggle(record)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon w-full"
                viewBox="0 0 512 512"
              >
                <title></title>
                <path
                  d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M80 112h352"
                />
                <path
                  d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
          </Popconfirm>
        </Space>
      ),
      width: "20%",
    },
  ];

  const handleAddBudgetToggle = async (
    data?: categoriesResponse1["data"],
    mode?: string
  ) => {
    const val = !isAddBudgetVisible;
    console.log(mode);
    setAddBudgetMode(mode);
    if (val) {
      triggerTypes({ user: 0 });
      console.log(data);
      if (data) {
        for (const property of Object.keys(addBudgetInitValues)) {
          form.setFieldsValue({
            [property]:
              property === "transaction_type"
                ? data["transaction_type"]["id"]
                : data[`${property as keyof categoriesResponse1["data"]}`],
          });
        }
      }
      return setAddBudgetVisible(val);
    }
    return setAddBudgetVisible(val);
  };

  const transactionSelectionHandler = (value: string) => {
    form.setFieldsValue({ transaction_type: value });
  };

  const onFinishedBudget = async (values: categoriesBody) => {
    try {
      console.log(values);
      if (addBudgetMode !== "add") {
        console.log("update");

        await updateBudget({ ...values })
          .unwrap()
          .then((payload) => {
            form.resetFields();
            ToastRender(payload.message);
          })
          .catch((payload) => ToastRender(payload.message, true));
      } else {
        console.log("add");
        values = omit(values, ["id"]);
        await addBudget({ ...values, users_permissions_user: user.id })
          .unwrap()
          .then((payload) => {
            form.resetFields();
            ToastRender(payload.message);
          })
          .catch((payload) => {
            console.log(payload);
            ToastRender(payload.message, true);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBudgetHandler = async (id: number) => {
    try {
      const result = await deleteBudget(id).unwrap();
      ToastRender(result.message);
    } catch (error: any) {
      ToastRender(error.message, true);
    }
  };
  return (
    <Dashboard title={"budget"}>
      <>
        <Modal
          isVisible={isAddBudgetVisible}
          title=""
          onCancel={handleAddBudgetToggle}
          width={768}
        >
          <>
            <div className="modal-header flex justify-between items-center py-6 px-12 border-b border-typography-100">
              <h1 className="text-2xl font-semibold">Filter</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon w-5 cursor-pointer"
                viewBox="0 0 512 512"
                onClick={() => handleAddBudgetToggle}
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
              initialValues={addBudgetInitValues}
              autoComplete="off"
              className="add-transaction flex flex-col px-14 py-10"
              form={form}
              onFinish={onFinishedBudget}
            >
              <div className="flex gap-4">
                <FormControl
                  type="text"
                  element="input"
                  name="name"
                  label="Name"
                  placeholder="Transport"
                  classes={["flex-1"]}
                  rules={[{ required: true, message: "Please input name" }]}
                />
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
                      <Option key={t.id} value={t.id}>
                        {t.name}
                      </Option>
                    ))}
                  </>
                </FormControl>
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
                  name="budget"
                  label="Amount"
                  placeholder="0"
                  classes={["flex-1"]}
                  rules={[{ required: true, message: "Please input amount" }]}
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
                onClick={() => handleAddBudgetToggle(undefined, "add")}
              >
                <span>New Budget</span>
              </Button>
            </div>
          </>
        </Navbar>
        <div className="flex justify-between items-center px-6 py-6">
          <h1 className="text-2xl font-semibold">Budgets</h1>
        </div>
        <div className="flex flex-col px-6 py-6 gap-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-4 bg-primary-50 dark:bg-gray-800 rounded-l"
                  style={{ width: "50%" }}
                >
                  Budget name
                </th>
                <th
                  scope="col"
                  className="py-3 px-4 bg-light-1 dark:bg-gray-800"
                  style={{ width: "30%" }}
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="py-3 px-4 bg-primary-50 dark:bg-gray-800 rounded-r"
                  style={{ width: "20%" }}
                >
                  Action
                </th>
              </tr>
            </thead>
          </table>
          <div className="flex-1">
            <Collapse
              bordered={false}
              defaultActiveKey={["1", "2", "3"]}
              // expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="Income"
                key="1"
                className="site-collapse-custom-panel"
              >
                {categories ? (
                  <>
                    <Table
                      showHeader={false}
                      columns={columns}
                      dataSource={categories.filter(
                        (i) => i.transaction_type.name === "Income"
                      )}
                    />
                  </>
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
              </Panel>
              <Panel
                header="Debt/Loan"
                key="2"
                className="site-collapse-custom-panel"
              >
                {categories ? (
                  <>
                    <Table
                      showHeader={false}
                      columns={columns}
                      dataSource={categories.filter(
                        (i) => i.transaction_type.name === "Debt/Loan"
                      )}
                    />
                  </>
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
              </Panel>
              <Panel
                header="Expense"
                key="3"
                className="site-collapse-custom-panel"
              >
                {categories ? (
                  <>
                    <Table
                      showHeader={false}
                      columns={columns}
                      dataSource={categories.filter(
                        (i) => i.transaction_type.name === "Expense"
                      )}
                    />
                  </>
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
              </Panel>
            </Collapse>
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default WithPrivateRoute(Budget);
