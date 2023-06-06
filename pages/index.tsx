import { Skeleton, Select, DatePicker, DatePickerProps, Table } from "antd";
import moment, { Moment } from "moment";
import type { NextPage } from "next";
import { useState } from "react";
import { LineChart } from "../components/Analytics/LineChart";
import { PieChart } from "../components/Analytics/PieChart";
import WithPrivateRoute from "../components/HOC/WithPrivateRoute";
import Dashboard from "../components/Layout/Dashboard";
import { Navbar } from "../components/Navbar/Navbar";
import { useGetAnalyticsQuery } from "../utils/apis/analytics";
import { AnalyticsResponse } from "../utils/models";
import jwt from "jsonwebtoken";
import { ColumnsType } from "antd/lib/table";
import format from "date-fns/format";

const { Option } = Select;

interface ExpenseDataType {
  name: string;
  percentage: number;
}
export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
const walletsData = [
  {
    name: "bank",
    percentage: 72,
  },
  {
    name: "crypto",
    percentage: 20,
  },
  {
    name: "momo",
    percentage: 8,
  },
];
export const options = {
  maintainAspectRatio: false,
  indexAxis: "x" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Transaction analytics",
    },
  },
};

export const WalletOptions = {
  maintainAspectRatio: false,
  indexAxis: "x" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Wallet analytics",
    },
  },
};

export const ExpenseOptions = {
  maintainAspectRatio: false,
  indexAxis: "x" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Expense analytics",
    },
  },
};

const Home: NextPage = () => {
  const token = localStorage.getItem("_expense_tracker_tkn_");
  const user: any = jwt.decode(token as string);
  const [dateType, setDateType] = useState<
    "time" | "date" | "month" | "year" | "week" | "quarter" | undefined
  >("month");
  const [dateFrom, setDateFrom] = useState<string>(
    moment(new Date().toISOString().slice(0, 10))
      .startOf("month")
      .format("YYYY-MM-DD")
  );
  const [dateTo, setDateTo] = useState<string>(
    moment(new Date().toISOString().slice(0, 10))
      .endOf("month")
      .format("YYYY-MM-DD")
  );
  const { data: analytics, isLoading: isAnalyticsLoading } =
    useGetAnalyticsQuery({
      dateFrom,
      dateTo,
      type: dateType,
      user: user?.id,
    });
  const [walletsAnalytics, setWalletsAnalytics] = useState<{}>({
    labels: [],
    datasets: [],
  });
  const handleDateTypeSelection = (
    value: "time" | "date" | "month" | "year" | "week" | "quarter" | undefined
  ) => {
    setDateType(value);
    setDateFrom(
      moment(new Date().toISOString().slice(0, 10))
        .startOf(`${value}` as any)
        .format("YYYY-MM-DD")
    );
    setDateTo(
      moment(new Date().toISOString().slice(0, 10))
        .endOf(`${value}` as any)
        .format("YYYY-MM-DD")
    );
  };
  const dateFromHandler: DatePickerProps["onChange"] = (
    value,
    dateString: string
  ) => {
    if (!dateString) {
      setDateFrom(moment().startOf("month").format("YYYY-MM-DD"));
      setDateTo(moment().endOf("month").format("YYYY-MM-DD"));
      return;
    }
    if (dateType === "month") {
      setDateFrom(
        moment(`${dateString}-05`).startOf("month").format("YYYY-MM-DD")
      );
      setDateTo(moment(`${dateString}-05`).endOf("month").format("YYYY-MM-DD"));
    } else {
      setDateFrom(
        moment(`${dateString}-02-05`).startOf("year").format("YYYY-MM-DD")
      );
      setDateTo(
        moment(`${dateString}-02-05`).endOf("year").format("YYYY-MM-DD")
      );
    }
  };

  const columns: ColumnsType<ExpenseDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p className="text-typography-900/80">{text}</p>,
    },
    {
      title: "Used",
      dataIndex: "percentage",
      key: "percentage",
      render: (text: any) => <p className="text-typography-900/80">{text}%</p>,
    },
  ];
  return (
    <Dashboard title="analytics">
      <>
        <Navbar classes="analytics">
          <div className="filter-date flex gap-6 ml-auto">
            <Select defaultValue={"month"} onChange={handleDateTypeSelection}>
              <>
                {["month", "year"].map((t: string) => (
                  <Option key={t} value={t}>
                    {t}
                  </Option>
                ))}
              </>
            </Select>
            <DatePicker
              name="dateFrom"
              placeholder="2022-01-01"
              className="flex-1"
              picker={dateType}
              value={moment(dateFrom)}
              onChange={dateFromHandler}
            />
          </div>
        </Navbar>
        <div className="flex flex-col w-full gap-8 px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
            <div className="relative min-w-0 break-words rounded bg-white drop-shadow-sm">
              <div className="p-4">
                <div className="flex max-w-full gap-4 items-center">
                  <div className="flex flex-col justify-center bg-income/20 p-3 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 96 960 960"
                      width="24"
                      className="fill-income"
                    >
                      <path d="M451 936v-84q-57-10-93.5-43.5T305 724l56-23q17 48 49 71.5t77 23.5q48 0 79-24t31-66q0-44-27.5-68T466 589q-72-23-107.5-61T323 433q0-55 35.5-92t92.5-42v-83h60v83q45 5 77.5 29.5T638 391l-56 24q-14-32-37.5-46.5T483 354q-46 0-73 21t-27 57q0 38 30 61.5T524 542q68 21 100.5 60.5T657 702q0 63-37 101.5T511 853v83h-60Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h5 className="mb-0 font-normal text-typography-900/80">
                      {analytics?.data.transactionsTypesTotal["income"]} RFW
                    </h5>
                    <p className="mb-0 font-normal text-typography-900/80 leading-normal text-sm">
                      Net Income
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words rounded bg-white drop-shadow-sm">
              <div className="p-4">
                <div className="flex max-w-full gap-4 items-center">
                  <div className="flex flex-col justify-center bg-debt/20 p-3 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 96 960 960"
                      width="24"
                      className="fill-debt"
                    >
                      <path d="M880 316v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42ZM140 425h680V316H140v109Zm0 129v282h680V554H140Zm0 282V316v520Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h5 className="mb-0 font-normal text-typography-900/80">
                      {analytics?.data.transactionsTypesTotal["debt/loan"]} RFW
                    </h5>
                    <p className="mb-0 font-sans font-normal text-typography-900/80 leading-normal text-sm">
                      Total Debt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words rounded bg-white drop-shadow-sm">
              <div className="p-4">
                <div className="flex max-w-full gap-4 items-center">
                  <div className="flex flex-col justify-center bg-primary/20 p-3 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon fill-primary"
                      height="24"
                      width="24"
                      viewBox="0 0 512 512"
                    >
                      <rect
                        x="48"
                        y="144"
                        width="416"
                        height="288"
                        rx="48"
                        ry="48"
                        fill="none"
                        stroke="#14b8a6"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path
                        d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                        fill="none"
                        stroke="#14b8a6"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                    </svg>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h5 className="mb-0 font-normal text-typography-900/80">
                      {analytics?.data.transactionsTypesTotal.expense} RFW
                    </h5>
                    <p className="mb-0 font-sans font-normal text-typography-900/80 leading-normal text-sm">
                      Total Expense
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words rounded bg-white drop-shadow-sm">
              <div className="p-4">
                <div className="flex max-w-full gap-4 items-center">
                  <div className="flex flex-col justify-center bg-[#000]/20 p-3 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 96 960 960"
                      width="24"
                      className="fill-[#000]"
                    >
                      <path d="M222 976q-43.75 0-74.375-30.625T117 871V746h127V176l59.8 60 59.8-60 59.8 60 59.8-60 59.8 60 60-60 60 60 60-60 60 60 60-60v695q0 43.75-30.625 74.375T738 976H222Zm516-60q20 0 32.5-12.5T783 871V276H304v470h389v125q0 20 12.5 32.5T738 916ZM357 434v-60h240v60H357Zm0 134v-60h240v60H357Zm333-134q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm0 129q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9ZM221 916h412V806H177v65q0 20 12.65 32.5T221 916Zm-44 0V806v110Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h5 className="mb-0 font-normal text-typography-900/80">
                      {
                        analytics?.data.transactionsTypesTotal
                          .total_transactions
                      }
                    </h5>
                    <p className="mb-0 font-sans font-normal text-typography-900/80 leading-normal text-sm">
                      Total transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row w-full gap-4">
            <div className="flex flex-col w-full xl:w-8/12">
              {isAnalyticsLoading ? (
                <Skeleton active />
              ) : (
                <div className="transaction-analytics bg-white drop-shadow-sm p-6 h-[500px]">
                  {analytics && (
                    <LineChart
                      data={{
                        labels: analytics?.data.transactionsAnalytics.map(
                          (data) => {
                            const dt = data.date.split("-");
                            dt.pop();
                            return dt.join("-");
                          }
                        ),
                        datasets: [
                          {
                            label: "Income",
                            data: analytics?.data.transactionsAnalytics.map(
                              (data) => data.income
                            ),
                            backgroundColor: "#6366f1B3",
                            borderColor: "#6366f1B3",
                            borderWidth: 1,
                          },
                          {
                            label: "Debt/Loan",
                            data: analytics?.data.transactionsAnalytics.map(
                              (data) => data["debt/loan"]
                            ),
                            backgroundColor: "#f59e0bB3",
                            borderColor: "#f59e0bB3",
                            borderWidth: 1,
                          },
                          {
                            label: "Expense",
                            data: analytics?.data.transactionsAnalytics.map(
                              (data) => data.expense
                            ),
                            backgroundColor: "#02A7C3B3",
                            borderColor: "#02A7C3B3",
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={options}
                    />
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row xl:flex-col gap-8 w-full xl:w-4/12">
              <div className="w-full lg:basis-6/12 xl:w-full">
                {isAnalyticsLoading ? (
                  <Skeleton active />
                ) : (
                  <div className="wallet-analytics h-[264px]">
                    {analytics && (
                      <PieChart
                        data={{
                          labels: Object.keys(
                            analytics?.data
                              .walletsAnalytics as AnalyticsResponse["data"]["walletsAnalytics"]
                          ),
                          datasets: [
                            {
                              label: "Income",
                              data: Object.values(
                                analytics?.data
                                  .walletsAnalytics as AnalyticsResponse["data"]["walletsAnalytics"]
                              ),
                              backgroundColor: [
                                "#6366f1B3",
                                "#f59e0bB3",
                                "#02A7C3B3",
                              ],
                              borderColor: [
                                "#6366f1B3",
                                "#f59e0bB3",
                                "#02A7C3B3",
                              ],
                              borderWidth: 0,
                            },
                          ],
                        }}
                        options={WalletOptions}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="w-full lg:basis-6/12 xl:w-full">
                {isAnalyticsLoading ? (
                  <Skeleton active />
                ) : (
                  <div>
                    {analytics && (
                      <div className="flex flex-col gap-4 p-6">
                        <div className="text-center">
                          <h6 className="text-xs text-typography-900/70 font-semibold">
                            Expense analytics
                          </h6>
                        </div>
                        <Table
                          columns={columns}
                          dataSource={analytics?.data.expensesAnalytics}
                          pagination={false}
                          rowKey="id"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default WithPrivateRoute(Home);
