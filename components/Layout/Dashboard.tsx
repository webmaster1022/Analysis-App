import Link from "next/link";
import Router from "next/router";
import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidenav } from "../Sidenav/Sidenav";

interface props {
  children: JSX.Element;
  title?: string;
}

const Dashboard: React.FC<props> = ({ children, title }) => {
  const handleLogout = () => {
    Router.push("/login");
  };
  return (
    <div className="flex flex-row min-h-screen bg-secondary-background-3">
      <aside className="bg-primary-50 w-32 overflow-y-auto z-10 drop-shadow-sm">
        <ul className="flex flex-col">
          <li className="h-16"></li>
          <li className="mb-3">
            <Sidenav link="/">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-8 mb-1 text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M344 280l88-88M232 216l64 64M80 320l104-104"
                  />
                  <circle
                    cx="456"
                    cy="168"
                    r="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <circle
                    cx="320"
                    cy="304"
                    r="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <circle
                    cx="208"
                    cy="192"
                    r="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <circle
                    cx="56"
                    cy="344"
                    r="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
                <h6 className="font-medium text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150">
                  Dashboard
                </h6>
              </>
            </Sidenav>
          </li>
          <li className="mb-3">
            <Sidenav link="/transaction">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-8 mb-1 text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <rect
                    x="48"
                    y="144"
                    width="416"
                    height="288"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <path
                    d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                </svg>
                <h6 className="font-medium text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150">
                  Transactions
                </h6>
              </>
            </Sidenav>
          </li>
          <li className="mb-3">
            <Sidenav link="/budget">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-8 mb-1 text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150"
                  viewBox="0 0 512 512"
                >
                  <title>Cash</title>
                  <rect
                    x="32"
                    y="80"
                    width="448"
                    height="256"
                    rx="16"
                    ry="16"
                    transform="rotate(180 256 208)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M64 384h384M96 432h320"
                  />
                  <circle
                    cx="256"
                    cy="208"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <path
                    d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
                <h6 className="font-medium text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150">
                  Budget
                </h6>
              </>
            </Sidenav>
          </li>
          <li className="mb-3">
            <Sidenav link="/">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon  w-8 mb-1 text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <path
                    d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
                <h6 className="font-medium text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150">
                  Settings
                </h6>
              </>
            </Sidenav>
          </li>
          <li className="mb-3" onClick={handleLogout}>
            <Sidenav link="/">
              <>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon  w-8 mb-1 text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <path
                    d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg> */}
                <h6 className="font-medium text-typography-300 group-hover:text-typography-300 transition group-hover:duration-150">
                  Logout
                </h6>
              </>
            </Sidenav>
          </li>
        </ul>
      </aside>
      <main className={`flex flex-col grow ${title}`}>{children}</main>
    </div>
  );
};

export default Dashboard;
