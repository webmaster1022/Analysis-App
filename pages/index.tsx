import { Skeleton, Select, DatePicker, DatePickerProps } from "antd";
import omit from "lodash.omit";
import moment, { Moment } from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BarChart } from "../components/Analytics/BarChart";
import { DoughnutChart } from "../components/Analytics/Doughnut";
import { LineChart } from "../components/Analytics/LineChart";
import { PieChart } from "../components/Analytics/PieChart";
import { Button } from "../components/Button/Button";
import { FormControl } from "../components/Form/FormControl";
import { RangeDate } from "../components/Form/types/RangeDate";
import WithPrivateRoute from "../components/HOC/WithPrivateRoute";
import Dashboard from "../components/Layout/Dashboard";
import { Navbar } from "../components/Navbar/Navbar";
import { useGetAnalyticsQuery } from "../utils/apis/analytics";
import { AnalyticsResponse } from "../utils/models";
import Login from "./login";

const { Option } = Select;
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
  const [dateType, setDateType] = useState<
    "time" | "date" | "month" | "year" | "week" | "quarter" | undefined
  >("month");
  const [dateFrom, setDateFrom] = useState(
    moment(new Date().toISOString().slice(0, 10))
      .startOf("month")
      .format("YYYY-MM-DD")
  );
  const [dateTo, setDateTo] = useState(
    moment(new Date().toISOString().slice(0, 10))
      .endOf("month")
      .format("YYYY-MM-DD")
  );
  console.log(dateFrom);
  console.log(dateTo);
  const { data: analytics, isLoading: isAnalyticsLoading } =
    useGetAnalyticsQuery({
      dateFrom: moment(dateFrom).startOf("month").format("YYYY-MM-DD"),
      dateTo,
      type: dateType,
    });
  console.log(analytics);
  console.log(isAnalyticsLoading);
  console.log(analytics?.data.expensesAnalytics);
  const [walletsAnalytics, setWalletsAnalytics] = useState<{}>({
    labels: [],
    datasets: [],
  });

  // setWalletsAnalytics({
  //   labels:
  //     analytics &&
  //     Object.keys(
  //       analytics?.data
  //         .walletsAnalytics as AnalyticsResponse["data"]["walletsAnalytics"]
  //     ),
  //   datasets: [
  //     {
  //       label: "Income",
  //       data:
  //         analytics &&
  //         Object.values(
  //           analytics?.data
  //             .walletsAnalytics as AnalyticsResponse["data"]["walletsAnalytics"]
  //         ),
  //       backgroundColor: ["#63B5F7", "#7240FF", "#4FA153"],
  //       borderColor: ["#63B5F7", "#7240FF", "#4FA153"],
  //       borderWidth: 1,
  //     },
  //   ],
  // });
  console.log(walletsAnalytics);
  // const [transactionTypesAnalytics, setTransactionTypesAnalytics] = useState({
  //   labels: Object.keys(
  //     omit(analytics?.data.transactionsAnalytics[0], "date") as Pick<
  //       AnalyticsResponse["data"]["transactionsTypesTotal"],
  //       "income" | "debt/loan" | "expense"
  //     >
  //   ),
  //   datasets: [
  //     {
  //       label: "Income",
  //       data: analytics?.data.transactionsAnalytics.map((data) => data.income),
  //       backgroundColor: ["#63B5F7"],
  //       borderColor: "#63B5F7",
  //       borderWidth: 1,
  //     },
  //     {
  //       label: "Debt/Loan",
  //       data: analytics?.data.transactionsAnalytics.map(
  //         (data) => data["debt/loan"]
  //       ),
  //       backgroundColor: ["#7240FF"],
  //       borderColor: "#7240FF",
  //       borderWidth: 1,
  //     },
  //     {
  //       label: "Expense",
  //       data: analytics?.data.transactionsAnalytics.map((data) => data.expense),
  //       backgroundColor: ["#4FA153"],
  //       borderColor: "#4FA153",
  //       borderWidth: 1,
  //     },
  //   ],
  // });
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
    setDateFrom(
      moment(`${dateString}-05`).startOf("month").format("YYYY-MM-DD")
    );
  };
  return (
    <Dashboard title="analytics">
      <>
        <Navbar>
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
        <div className="flex px-6 py-6">
          <div className="flex flex-col gap-8 basis-4/6">
            <div className="flex flex-wrap gap-4">
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded bg-primary-50">
                <div className="flex flex-wrap px-4 py-4 h-full w-full">
                  <div className="flex flex-col w-2/3 max-w-full gap-3">
                    <div className="flex flex-col">
                      <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                        Net Income
                      </p>
                      <h5 className="mb-0 font-bold">
                        {analytics?.data.transactionsTypesTotal.income} RFW
                      </h5>
                    </div>
                    <h5 className="mb-0 font-bold">
                      {analytics?.data.transactionsTypesTotal.income} RFW
                    </h5>
                  </div>
                  <div className="px-3 text-right w-1/3">
                    <div className="relative w-12 h-12 text-center rounded bg-secondary-3">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 86.53 122.88"
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            className="st0"
                            d="M64.94,23.79c-3.03-1.49-6.62-1.82-10.06-0.64c-3.44,1.18-6.08,3.64-7.57,6.67 c-1.49,3.03-1.82,6.62-0.64,10.06c1.18,3.44,3.64,6.08,6.67,7.57c3.03,1.49,6.62,1.82,10.06,0.64c3.44-1.18,6.08-3.64,7.57-6.67 c1.48-3.03,1.82-6.62,0.64-10.06C70.43,27.92,67.97,25.28,64.94,23.79L64.94,23.79L64.94,23.79z M20.7,25.5l0.24,1.44 c0.96-0.06,1.81,0,2.54,0.18c0.73,0.18,1.39,0.53,2,1.04c0.47,0.39,0.86,0.8,1.16,1.24c0.3,0.44,0.48,0.86,0.54,1.26 c0.07,0.44-0.03,0.86-0.3,1.23c-0.27,0.38-0.64,0.6-1.1,0.68c-0.87,0.14-1.52-0.24-1.92-1.13c-0.48-1.06-1.3-1.68-2.48-1.86 l0.91,5.53c1.15,0.12,2.07,0.25,2.76,0.39c0.69,0.14,1.34,0.4,1.93,0.79c0.63,0.4,1.15,0.91,1.56,1.54 c0.41,0.63,0.68,1.35,0.81,2.15c0.17,1.01,0.09,1.99-0.25,2.95c-0.33,0.96-0.91,1.79-1.74,2.51c-0.83,0.71-1.87,1.22-3.13,1.53 l0.54,3.31c0.09,0.52,0.1,0.91,0.03,1.17c-0.06,0.26-0.26,0.41-0.61,0.47c-0.32,0.05-0.56-0.01-0.72-0.18 c-0.16-0.17-0.27-0.47-0.34-0.88l-0.59-3.59c-1.05,0.06-2-0.04-2.84-0.28c-0.84-0.24-1.56-0.6-2.17-1.07 c-0.61-0.47-1.09-0.99-1.43-1.54c-0.35-0.56-0.57-1.13-0.66-1.7c-0.07-0.42,0.03-0.83,0.31-1.23c0.28-0.39,0.66-0.63,1.15-0.72 c0.4-0.07,0.75-0.03,1.06,0.11c0.3,0.14,0.54,0.37,0.7,0.69c0.36,0.69,0.66,1.21,0.9,1.57c0.24,0.36,0.57,0.67,0.98,0.92 c0.41,0.26,0.93,0.43,1.55,0.5l-1.02-6.18c-1.24-0.14-2.29-0.34-3.16-0.61c-0.86-0.27-1.61-0.74-2.22-1.4 c-0.62-0.66-1.02-1.58-1.22-2.75c-0.25-1.52,0.03-2.86,0.84-3.99c0.81-1.13,2.12-1.93,3.93-2.39l-0.23-1.41 c-0.12-0.74,0.1-1.16,0.66-1.25C20.24,24.46,20.58,24.78,20.7,25.5L20.7,25.5z M20.51,34.9l-0.84-5.09 c-0.71,0.34-1.24,0.73-1.6,1.16c-0.36,0.43-0.48,1.02-0.35,1.75c0.11,0.7,0.4,1.2,0.85,1.49C19.02,34.51,19.66,34.74,20.51,34.9 L20.51,34.9z M22.85,38.57l0.96,5.82c0.86-0.32,1.5-0.8,1.9-1.42c0.4-0.62,0.54-1.29,0.42-2.01c-0.13-0.77-0.46-1.33-1.01-1.67 C24.57,38.95,23.81,38.71,22.85,38.57L22.85,38.57z M13.35,10.27c-1.23-2.31-2.39-4.67-3.43-7.08C11.85,0.22,21-0.93,23.98,0.84 L22.5,6.99c1.02-1.93,1.34-2.7,1.96-3.78c0.36,0.16,0.71,0.35,1.04,0.56c0.79,0.51,1.52,1.1,1.8,2.04 c0.18,0.61,0.11,1.27-0.34,2.01l-4.49,7.39c-0.73,0-1.46-0.06-2.18-0.19c0.19-0.79,0.44-1.67,0.63-2.47l-1.66,2.52 c-2.18-0.1-3.83,0.45-5.27,1.54l-6.75-5.84c-0.4-0.35-0.62-0.73-0.68-1.13C6.3,8.02,8.5,6.21,9.69,5.46L13.35,10.27L13.35,10.27z M22.59,21.3l-1.93-4.85c4.86,0.1,13.98,8.44,17.14,12.4c1.61,2.02,3.11,4.29,4.45,6.88c1.69,3.73,2.14,7.5,0.82,10.52 c8.56,1.41,12.89,6.26,16.31,10.12c1.31,1.47,2.93,4.72,5.18,4.31c4.23-0.76,16.87-1.46,18.11-1.9l3.86,11.12 c-3.67,1.13-25.92,4.67-28.14,3.95c-3.82-1.47-6.09-3.4-8.06-5.38l-7.32,10.95c2.24,1.35,4.48,2.39,6.6,3.38l0,0 c7.44,3.47,13.56,6.33,14.89,18.15c0.12,1.04,0.15,2.07,0.13,3.12c-0.01,1.06-0.07,2.02-0.12,3.02l0,0.03 c-0.02,0.33-0.04,0.68-0.07,1.37l-0.33,9.91l-14.78,0.04c0.27-8.49,0.22-3.68,0.22-12.14c0.06-1.13,0.12-2.18,0.06-3.13 c-0.05-0.84-0.2-1.62-0.53-2.34l-0.1-0.23c-0.36-0.78-0.68-1.5-0.93-1.62c-1.16-0.54-3.05-1.23-5.23-1.94 c-2.18-0.72-4.56-1.44-6.73-2.06c-3.89,12.7-3.91,15.99-10.04,27.8l-15.55,0.09c5.96-14.65,6.73-20.11,11.32-35.26 c-6.49-9.25,4.51-15.32,6.82-27.27c-1.96-0.18-6.76-0.27-10.9,0.93c-5.16,1.49-8.97,4.14-12.13,8.32L0,59.18 c0.34-0.04,0.99-1.23,7.23-4.67C5.9,53.95,4.78,53.09,4,51.8c-4.71-7.9-0.28-18.95,4.26-26.02c0.6-0.93,1.23-1.81,1.9-2.63 c1.73-2.11,3.56-4.58,6.01-5.88l-1.74,5.09l2.85-5.43l1.92-0.32L22.59,21.3L22.59,21.3z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Total Debt
                        </p>
                        <h5 className="mb-0 font-bold">
                          {analytics?.data.transactionsTypesTotal["debt/loan"]}{" "}
                          RFW
                        </h5>
                      </div>
                    </div>
                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div className="inline-block w-12 h-12 text-center rounded bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 490 490"
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <g>
                                <path d="M110.326,489.922H36.601V357.738h73.725V489.922z M51.911,474.612h43.105V373.048H51.911V474.612z" />
                              </g>
                              <g>
                                <path d="M205.237,489.922h-73.725V290.95h73.725V489.922z M146.822,474.612h43.105V306.26h-43.105V474.612z" />
                              </g>
                              <g>
                                <path d="M300.163,489.922h-73.725V215.805h73.725V489.922z M241.748,474.612h43.105V231.115h-43.105V474.612z" />
                              </g>
                              <g>
                                <path d="M395.074,489.922h-73.725V140.675h73.725V489.922z M336.659,474.612h43.105V155.985h-43.105V474.612z" />
                              </g>
                              <g>
                                <path d="M490,489.922h-73.725V90.573H490V489.922z M431.585,474.612h43.105V105.883h-43.105V474.612z" />
                              </g>
                            </g>
                            <g>
                              <path d="M0,306.114L348.397,28.639L333.43,9.594l65.628-9.516L374.465,61.81l-14.967-19.046L12.904,320.992    C12.904,320.992,0.513,306.295,0,306.114z" />
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Total Expense
                        </p>
                        <h5 className="mb-0 font-bold">
                          {analytics?.data.transactionsTypesTotal.expense} RFW
                        </h5>
                      </div>
                    </div>
                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div className="inline-block w-12 h-12 text-center rounded bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <i
                          className="ni ni-money-coins text-lg relative top-3.5 text-white"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none basis-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Total transactions
                        </p>
                        <h5 className="mb-0 font-bold">
                          {
                            analytics?.data.transactionsTypesTotal
                              .total_transactions
                          }
                        </h5>
                      </div>
                    </div>
                    <div className="basis-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div className="inline-block w-12 h-12 text-center rounded bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <i
                          className="ni ni-money-coins text-lg relative top-3.5 text-white"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isAnalyticsLoading ? (
              <Skeleton active />
            ) : (
              <div className="bg-primary-50 p-6" style={{ height: "500px" }}>
                {analytics && (
                  <LineChart
                    data={{
                      labels: analytics?.data.transactionsAnalytics.map(
                        (data) => data.date
                      ),
                      datasets: [
                        {
                          label: "Income",
                          data: analytics?.data.transactionsAnalytics.map(
                            (data) => data.income
                          ),
                          backgroundColor: ["#63B5F7"],
                          borderColor: "#63B5F7",
                          borderWidth: 1,
                        },
                        {
                          label: "Debt/Loan",
                          data: analytics?.data.transactionsAnalytics.map(
                            (data) => data["debt/loan"]
                          ),
                          backgroundColor: ["#7240FF"],
                          borderColor: "#7240FF",
                          borderWidth: 1,
                        },
                        {
                          label: "Expense",
                          data: analytics?.data.transactionsAnalytics.map(
                            (data) => data.expense
                          ),
                          backgroundColor: ["#14b8a6"],
                          borderColor: "#14b8a6",
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
          <div className="flex flex-col gap-8 basis-2/6">
            {isAnalyticsLoading ? (
              <Skeleton active />
            ) : (
              <div className="basis-6/12">
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
                          backgroundColor: ["#63B5F7", "#7240FF", "#14b8a6"],
                          borderColor: ["#63B5F7", "#7240FF", "#14b8a6"],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={WalletOptions}
                  />
                )}
              </div>
            )}
            {isAnalyticsLoading ? (
              <Skeleton active />
            ) : (
              <div className="basis-6/12">
                {analytics && (
                  <DoughnutChart
                    data={{
                      labels: analytics?.data.expensesAnalytics.map(
                        (e) => e.name
                      ),
                      datasets: [
                        {
                          label: "Income",
                          data: analytics?.data.expensesAnalytics.map(
                            (e) => e.percentage
                          ),
                          backgroundColor: ["#63B5F7", "#7240FF", "#4FA153"],
                          borderColor: ["#63B5F7", "#7240FF", "#4FA153"],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={ExpenseOptions}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default WithPrivateRoute(Home);
