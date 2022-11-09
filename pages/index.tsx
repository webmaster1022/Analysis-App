import { Skeleton, Select } from "antd";
import omit from "lodash.omit";
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
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const Home: NextPage = () => {
  const { data: analytics, isLoading: isAnalyticsLoading } =
    useGetAnalyticsQuery({
      dateFrom: "2022-09-05",
      dateTo: "2022-10-20",
      type: "month",
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
  return (
    <Dashboard>
      <>
        <Navbar>
          <div className="flex gap-6 ml-auto">
            <FormControl
              element="select"
              name="filterRangeDate"
              classes={[""]}
              defaultValue={"day"}
            >
              <>
                {["date", "month", "year"].map((t: string) => (
                  <Option key={t} value={t}>
                    {t}
                  </Option>
                ))}
              </>
            </FormControl>
            <RangeDate name="filterRangeDate" classes={[]} picker="date" />
          </div>
        </Navbar>
        <div className="flex px-6 py-6">
          <div className="flex flex-col gap-8 basis-4/6">
            <div className="flex flex-wrap gap-4">
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Net Income
                        </p>
                        <h5 className="mb-0 font-bold">
                          {analytics?.data.transactionsTypesTotal.income} RFW
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
                          backgroundColor: ["#4FA153"],
                          borderColor: "#4FA153",
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
                          backgroundColor: ["#63B5F7", "#7240FF", "#4FA153"],
                          borderColor: ["#63B5F7", "#7240FF", "#4FA153"],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={options}
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
                    options={options}
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