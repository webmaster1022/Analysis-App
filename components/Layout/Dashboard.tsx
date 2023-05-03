import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCredentials } from "../../redux/slices/auth.slice";
import {
  useLazyFindUserQuery,
  useLazyLogoutQuery,
} from "../../utils/apis/auth";
import { baseApi } from "../../utils/baseUrl";
import { Navbar } from "../Navbar/Navbar";
import { Sidenav } from "../Sidenav/Sidenav";
import { Modal } from "../Modal/Modal";
import jwt from "jsonwebtoken";
import { FormControl } from "../Form/FormControl";
import { Button } from "../Button/Button";
import { Form, Skeleton } from "antd";

interface props {
  children: JSX.Element;
  title?: string;
}

interface updateProfileTypes {
  id?: number;
  transaction_type: string;
  wallet: string | null;
  category: string;
  amount: number | null;
  date: Date | null;
  note: string | null;
}

const Dashboard: React.FC<props> = ({ children, title }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const token = localStorage.getItem("_expense_tracker_tkn_");
  const { id }: any = jwt.decode(token as string);
  const [isUpdateProfileVisible, setUpdateProfileVisible] = useState(false);

  const [getUser, { data: userData }] = useLazyFindUserQuery();
  console.log("user data", userData);
  const [triggerLogout] = useLazyLogoutQuery();
  const updateProfilenitValues: updateProfileTypes = {
    id: undefined,
    wallet: null,
    transaction_type: "",
    category: "",
    amount: null,
    date: null,
    note: null,
  };
  const handleLogout = async () => {
    try {
      await triggerLogout();
      dispatch(removeCredentials());
      dispatch(baseApi.util.resetApiState());
      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfileModal = () => {
    getUser({ id });
    setUpdateProfileVisible(!isUpdateProfileVisible);
  };

  const onFinishedTransaction = async () =>
    // values: transactionResponse1["data"]
    {
      // try {
      //     await updateTransaction({ ...values })
      //       .unwrap()
      //       .then((payload) => {
      //         form.resetFields();
      //         ToastRender(payload.message);
      //       })
      //       .catch((payload) => ToastRender(payload.message, true));
      //   }
      // } catch (error: any) {
      //   console.log(error);
      // }
    };
  return (
    <>
      {!userData && console.log("loading")}
      <Modal
        isVisible={isUpdateProfileVisible}
        title=""
        onCancel={handleUpdateProfileModal}
        width={768}
      >
        <div className="flex flex-col gap-6 p-6">
          <div className="modal-header">
            <div className="flex flex-col gap-4">
              <div className="w-full h-[110px] bg-secondary rounded-t"></div>
              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  <div className="relative w-[120px] h-[120px] rounded-[50%] mt-[-56px] bg-secondary">
                    <Image
                      src={"/user(2).png"}
                      width={"100%"}
                      height={"100%"}
                      layout="fill"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    {userData ? (
                      <>
                        <h1 className="text-xl font-bold">
                          {userData.data.firstname} {userData.data.lastname}
                        </h1>
                        <p className="text-sm">
                          Premium designed icons for use in web, iOS, Android,
                          and desktop apps.
                        </p>
                      </>
                    ) : (
                      <>
                        <h1 className="text-xl font-bold">
                          <Skeleton active />
                        </h1>
                        <p className="text-sm">
                          <Skeleton active />
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <Button
                  type="button"
                  classes="p-2 border rounded-[50%] mt-[-10px] border-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 96 960 960"
                    width="32"
                    className="fill-primary"
                  >
                    <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <Form
            layout="vertical"
            initialValues={updateProfilenitValues}
            autoComplete="off"
            className="add-transaction flex flex-col"
            form={form}
            onFinish={onFinishedTransaction}
          >
            <div className="flex gap-4">
              <FormControl
                type="text"
                element="input"
                name="firstname"
                label="First Name"
                placeholder="Mark"
                classes={["flex-1"]}
                defaultValue={userData && userData.firstname}
                rules={[{ required: true, message: "Please input firstname" }]}
              />
              <FormControl
                type="text"
                element="input"
                name="lastname"
                label="Last Name"
                placeholder="Doe"
                classes={["flex-1"]}
                rules={[{ required: true, message: "Please input lastname" }]}
              />
            </div>
            <div className="flex gap-4">
              <FormControl
                type="email"
                element="input"
                name="email"
                label="Email"
                placeholder="markdoe@mail.com"
                classes={["flex-1"]}
                rules={[{ required: true, message: "Please input email" }]}
              />
              <FormControl
                type="text"
                element="input"
                name="phone"
                label="Phone"
                placeholder="+250781560091"
                classes={["flex-1"]}
                rules={[{ required: true, message: "Please input phone" }]}
              />
            </div>
            <div className="flex gap-4">
              <FormControl
                type="text"
                element="input"
                name="username"
                label="Username"
                placeholder="mark@12"
                classes={["flex-1"]}
                rules={[{ required: true, message: "Please input username" }]}
              />
              <FormControl
                type="password"
                element="input"
                name="password"
                label="Password"
                classes={["flex-1"]}
                rules={[{ required: true, message: "Please input password" }]}
              />
            </div>
            <div className="self-start flex gap-4">
              <Button type="submit" classes="px-6 text-white bg-primary">
                <>Submit</>
              </Button>
              <Button type="submit" classes="px-6 text-white bg-[#042f2e]/80">
                <>Cancel</>
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
      {/* )} */}

      <div className="flex flex-row min-h-screen bg-[#f8f8f8d9]">
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
                    <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
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
            <li className="mb-3" onClick={() => handleUpdateProfileModal()}>
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
                      d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                  </svg>
                  <h6 className="font-medium text-typography-300 group-hover:text-primary/60 transition group-hover:duration-150">
                    Settings
                  </h6>
                </>
              </Sidenav>
            </li>
          </ul>
          <div className="mt-auto" onClick={handleLogout}>
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
        <main className={`flex flex-col grow ml-32 ${title}`}>{children}</main>
      </div>
    </>
  );
};

export default Dashboard;
