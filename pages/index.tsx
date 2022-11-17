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
import jwt from "jsonwebtoken";

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
  const token = localStorage.getItem("_expense_tracker_tkn_");
  const user: any = jwt.decode(token as string);
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
      user: user?.id,
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
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Net Income
                        </p>
                        <h5 className="mb-0 font-bold">
                          {analytics?.data.transactionsTypesTotal["income"]} RFW
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
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 295.24 295.24"
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <g>
                                <rect
                                  x="185.714"
                                  y="0.001"
                                  width="9.524"
                                  height="9.524"
                                />
                                <rect
                                  x="185.714"
                                  y="19.049"
                                  width="9.524"
                                  height="9.524"
                                />
                                <rect
                                  x="195.238"
                                  y="9.525"
                                  width="9.524"
                                  height="9.524"
                                />
                                <path
                                  d="M266.667,238.096v-28.571H152.381v-28.814c34.538-2.457,61.905-31.271,61.905-66.424
				c0-25.914-14.848-49.219-38.095-60.233V38.096h-23.81v-6.757c0-5.3,3.376-9.986,8.4-11.657c1.262-0.419,2.571-0.633,3.89-0.633
				h11.519V9.525h-11.519c-2.338,0-4.657,0.376-6.895,1.119c-8.924,2.971-14.919,11.286-14.919,20.695v6.757h-23.81v15.957
				C95.8,65.068,80.952,88.372,80.952,114.287c0,35.152,27.367,63.967,61.905,66.424v28.814H28.571v28.571H0v57.143h66.667v-57.143
				H38.095v-19.048h104.762v19.048h-28.571v57.143h66.667v-57.143h-28.571v-19.048h104.762v19.048h-28.571v57.143h66.667v-57.143
				H266.667z M57.143,247.62v38.095H9.524V247.62H57.143z M90.476,114.287c0-23.133,13.805-43.838,35.167-52.748l2.929-1.224V47.62
				h38.095v12.695l2.929,1.224c21.362,8.91,35.167,29.614,35.167,52.748c0,29.905-23.1,54.467-52.381,56.9v-9.281h-9.524v9.281
				C113.576,168.753,90.476,144.191,90.476,114.287z M171.429,247.62v38.095H123.81V247.62H171.429z M285.714,285.715h-47.619
				V247.62h47.619V285.715z"
                                />
                                <path
                                  d="M152.381,152.382v-9.524c7.876,0,14.286-6.41,14.286-14.286v-4.762c0-7.876-6.41-14.286-14.286-14.286h-9.524
				c-2.624,0-4.762-2.133-4.762-4.762v-4.761c0-2.629,2.138-4.762,4.762-4.762h9.524c2.624,0,4.762,2.133,4.762,4.762h9.524
				c0-7.876-6.41-14.286-14.286-14.286v-9.524h-9.524v9.524c-7.876,0-14.286,6.41-14.286,14.286v4.762
				c0,7.876,6.41,14.286,14.286,14.286h9.524c2.624,0,4.762,2.133,4.762,4.762v4.762c0,2.629-2.138,4.762-4.762,4.762h-9.524
				c-2.624,0-4.762-2.133-4.762-4.762h-9.524c0,7.876,6.41,14.286,14.286,14.286v9.523H152.381z"
                                />
                                <rect
                                  x="19.048"
                                  y="261.906"
                                  width="9.524"
                                  height="9.524"
                                />
                                <rect
                                  x="38.095"
                                  y="261.906"
                                  width="9.524"
                                  height="9.524"
                                />
                                <rect
                                  x="133.333"
                                  y="261.906"
                                  width="9.524"
                                  height="9.524"
                                />
                                <rect
                                  x="152.381"
                                  y="261.906"
                                  width="9.524"
                                  height="9.524"
                                />
                                <rect
                                  x="247.619"
                                  y="261.906"
                                  width="9.524"
                                  height="9.524"
                                />
                                <rect
                                  x="266.667"
                                  y="261.906"
                                  width="9.524"
                                  height="9.524"
                                />
                              </g>
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
                        <svg
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512.001 512.001"
                          xmlSpace="preserve"
                          fontWeight={"400"}
                        >
                          <g>
                            <g>
                              <path
                                d="M459.102,274.658v-66.057c0-21.692-17.647-39.34-39.34-39.34H263.033c1.776-6.602,2.699-13.463,2.699-20.469
			c0-6.653-0.839-13.112-2.404-19.285c14.402,16.775,35.739,27.433,59.531,27.433c43.268,0,78.47-35.201,78.47-78.47
			S366.127,0,322.858,0c-43.269,0-78.47,35.201-78.47,78.47c0,6.653,0.839,13.113,2.404,19.285
			c-14.402-16.775-35.739-27.433-59.531-27.433c-43.268,0-78.469,35.202-78.469,78.47c0,7.005,0.923,13.865,2.699,20.469h-51.4
			c-21.692,0-39.339,17.647-39.339,39.34v264.06c0,21.692,17.647,39.339,39.339,39.339h359.671c21.692,0,39.34-17.647,39.34-39.339
			v-66.057c18.074-2.112,32.148-17.51,32.148-36.141v-59.662C491.251,292.167,477.176,276.769,459.102,274.658z M322.858,33.089
			c25.023,0,45.381,20.358,45.381,45.381s-20.358,45.381-45.381,45.381c-25.023,0-45.381-20.358-45.381-45.381
			S297.835,33.089,322.858,33.089z M187.262,103.41c25.023,0,45.381,20.358,45.381,45.381c0,7.216-1.663,14.172-4.859,20.469H146.74
			c-3.195-6.298-4.859-13.253-4.859-20.469C141.882,123.769,162.239,103.41,187.262,103.41z M426.013,472.66
			c0,3.447-2.804,6.25-6.252,6.25H60.09c-3.447,0-6.25-2.804-6.25-6.25V208.6c0-3.447,2.804-6.252,6.25-6.252
			c7.133,0,351.077,0,359.671,0c3.447,0,6.252,2.804,6.252,6.252v65.802c-10.293,0-106.432,0-116.753,0
			c-19.42,0-35.22,15.8-35.22,35.22c0,13.827,0,56.904,0,62.017c0,19.42,15.8,35.22,35.22,35.22c10.32,0,106.46,0,116.753,0V472.66z
			 M458.162,370.461c0,1.824-1.483,3.308-3.308,3.308c-5.223,0-137.183,0-144.416,0c-1.824,0-3.309-1.483-3.309-3.308v-59.662
			c0-1.824,1.485-3.308,3.309-3.308c7.394,0,139.29,0,144.416,0c1.824,0,3.308,1.484,3.308,3.308V370.461z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <circle cx="340.154" cy="340.627" r="21.92" />
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
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 122.88 72.15"
                        >
                          <defs></defs>
                          <title>money-transactions</title>
                          <path
                            className="cls-1"
                            d="M94.81,26.32,61.3,61.37,42.73,44.12l1.92-2.69L58.25,54l.17.16a3.18,3.18,0,0,0,4.49-.21L64,52.71l0,0L69.17,47,92,23.72l2.81,2.6ZM96.2,43.78V37a1,1,0,0,1,0-.17c.12-3,2.13-4,4.84-3.13a1.47,1.47,0,0,1,.41.22c6.84,5.37,13.21,10.73,20,16.1l.09.09a3.17,3.17,0,0,1,1.21,3.18A4.49,4.49,0,0,1,121,55.74L102.62,70.62C99.38,73.17,96,72.69,96,68c0-2.09,0-4.2,0-6.29H69.9l17.18-18ZM30.53,33.06c0,1.64.15,3.66,0,5.26a7,7,0,0,1-.34,1.8,4.8,4.8,0,0,1-1.91,2.56,5,5,0,0,1-3,.77A7.8,7.8,0,0,1,23.16,43h0a3.57,3.57,0,0,1-.51-.22,4.6,4.6,0,0,1-.46-.3h0c-3.29-2.58-6.7-5.36-10.12-8.13-3.18-2.59-6.37-5.18-9.92-8l-.2-.18A5.83,5.83,0,0,1,.27,23.88l-.06-.2a4.82,4.82,0,0,1-.09-2.47,5.43,5.43,0,0,1,1-2.05,8.18,8.18,0,0,1,1.49-1.51C8.79,13,14.82,7.58,21,2.78A8.12,8.12,0,0,1,25.84.83a4.74,4.74,0,0,1,2,.42,4.44,4.44,0,0,1,1.64,1.29,6.87,6.87,0,0,1,1.26,4.33h0v4.36H55.63l-3.69,3.86H28.76a1.92,1.92,0,0,1-1.9-1.95c0-1.44,0-2.9,0-4.34V6.87h0a3.2,3.2,0,0,0-.44-1.95.67.67,0,0,0-.21-.18.92.92,0,0,0-.37-.06,4.37,4.37,0,0,0-2.47,1.13L5,20.68a4.07,4.07,0,0,0-.78.77,1.57,1.57,0,0,0-.3.59,1,1,0,0,0,0,.46l0,.09a2.24,2.24,0,0,0,.6.8c3.24,2.54,6.61,5.27,10,8s6.43,5.23,10,8a4.05,4.05,0,0,0,.94.18,1.27,1.27,0,0,0,.75-.16,1,1,0,0,0,.38-.55,3.31,3.31,0,0,0,.14-.77v-7A1.92,1.92,0,0,1,28.6,29.2h9.85l-3.53,3.7-.14.16ZM93.89,17.25,60.39,52.3,41.82,35.05,75.33,0,93.89,17.25Zm-21.15,7.4a5.76,5.76,0,1,1-7.37-3.47,5.76,5.76,0,0,1,7.37,3.47Zm12.78-4L63.13,43.67a3.75,3.75,0,0,0-5.29.2L50.5,37.06a3.75,3.75,0,0,0-.2-5.29L72.69,8.68A3.74,3.74,0,0,0,78,8.48l7.35,6.82a3.76,3.76,0,0,0,.19,5.3Z"
                          />
                        </svg>
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
