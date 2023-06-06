import router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCredentials } from "../../redux/slices/auth.slice";
import { useFindUserQuery, useLazyLogoutQuery } from "../../utils/apis/auth";
import { baseApi } from "../../utils/baseUrl";
import { Sidenav } from "../Sidenav/Sidenav";
import jwt from "jsonwebtoken";
import { ToastRender } from "../../utils/toast";

interface props {
  children: JSX.Element;
  title?: string;
}

const Dashboard: React.FC<props> = React.memo(({ children, title }) => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("_expense_tracker_tkn_");
  const { id }: any = jwt.decode(token as string);

  const { data: userData } = useFindUserQuery({ id });
  const [triggerLogout] = useLazyLogoutQuery();
  const handleLogout = async () => {
    try {
      await triggerLogout();
      dispatch(removeCredentials());
      dispatch(baseApi.util.resetApiState());
      router.replace("/login");
    } catch (error: any) {
      ToastRender(error, true);
    }
  };
  return (
    <>
      <div className="flex flex-row w-full min-h-screen bg-[#f8f8f8d9]">
        <aside className="sidebar bg-white w-32 h-screen fixed overflow-y-auto z-10 drop-shadow-sm flex flex-col pb-8">
          <ul className="flex flex-col">
            <li className="logo flex flex-col justify-center items-center">
              <p className="text-2xl font-semibold">
                <span className="text-primary">W</span>Track
              </p>
            </li>
            <li className="mb-3">
              <Sidenav
                link="/"
                classes={`${location.pathname === "/" && "active"}`}
              >
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-8 mb-1 text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150"
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
                  <h6 className="font-medium text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150">
                    Dashboard
                  </h6>
                </>
              </Sidenav>
            </li>
            <li className="mb-3">
              <Sidenav
                link="/transaction"
                classes={`${location.pathname === "/transaction" && "active"}`}
              >
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-8 mb-1 text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150"
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
                    <path
                      d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"
                      fill="currentColor"
                    />
                  </svg>
                  <h6 className="font-medium text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150">
                    Transactions
                  </h6>
                </>
              </Sidenav>
            </li>
            <li className="mb-3">
              <Sidenav
                link="/budget"
                classes={`${location.pathname === "/budget" && "active"}`}
              >
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-8 mb-1 text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150"
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
                  <h6 className="font-medium text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150">
                    Budget
                  </h6>
                </>
              </Sidenav>
            </li>
          </ul>
          <div className="mt-auto">
            <Sidenav link="" classes="bg-[#f8f8f8d9]">
              <>
                <div>
                  {userData && (
                    <>
                      <h6 className="font-medium text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150">
                        {userData.data.firstname}
                      </h6>
                      <h6 className="font-medium text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150">
                        {userData.data.lastname}
                      </h6>
                    </>
                  )}
                </div>
              </>
            </Sidenav>
          </div>
          <div onClick={handleLogout}>
            <Sidenav link="/">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-8 mb-1 text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <path
                    d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
                <h6 className="font-medium text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150">
                  Logout
                </h6>
              </>
            </Sidenav>
          </div>
        </aside>
        <main className={`relative flex flex-col grow ml-32 ${title}`}>
          {children}
        </main>
      </div>
    </>
  );
});

export default Dashboard;
