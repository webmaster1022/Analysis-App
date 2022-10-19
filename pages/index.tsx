import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BarChart } from "../components/Analytics/BarChart";
import { PieChart } from "../components/Analytics/PieChart";
import { Button } from "../components/Button/Button";
import Dashboard from "../components/Layout/Dashboard";
import { Navbar } from "../components/Navbar/Navbar";
import Login from "./login";
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
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Income",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#63B5F7"],
        borderColor: "#63B5F7",
        borderWidth: 1,
      },
      {
        label: "Debt/Loan",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#7240FF"],
        borderColor: "#7240FF",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#4FA153"],
        borderColor: "#4FA153",
        borderWidth: 1,
      },
    ],
  });
  return (
    <Dashboard>
      <>
        <Navbar>
          <>
            <div className="flex gap-6">
              <Button
                type="button"
                classes="p-2 flex gap-2"
                // onClick={handleFilterToggle}
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
                // onClick={handleAddTransactionToggle}
              >
                <span>New Transaction</span>
              </Button>
            </div>
          </>
        </Navbar>
        <div className="flex px-6 py-6">
          <div className="flex flex-col basis-4/6">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded-md bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 className="mb-0 font-bold">
                          $53,000
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <i
                          className="ni ni-money-coins text-lg relative top-3.5 text-white"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded-md bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 className="mb-0 font-bold">
                          $53,000
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <i
                          className="ni ni-money-coins text-lg relative top-3.5 text-white"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded-md bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 className="mb-0 font-bold">
                          $53,000
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <i
                          className="ni ni-money-coins text-lg relative top-3.5 text-white"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative basis-1/3 flex-1 flex flex-col min-w-0 break-words shadow-soft-xl rounded-md bg-primary-50">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-none basis-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 className="mb-0 font-bold">
                          $53,000
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="basis-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
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
            <div className="bg-primary-50 p-6" style={{ height: "400px" }}>
              <BarChart data={userData} options={options} />
            </div>
          </div>
          <div className="basis-2/6">
            <PieChart data={userData} />
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default Home;
