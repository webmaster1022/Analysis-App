import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import * as Yup from "yup";
import { NextPage } from "next";
import {
  useGoogleLoginMutation,
  useLoginMutation,
  useResetPasswordMutation,
} from "../../utils/apis/auth";
import { login } from "../../utils/models";
import { ToastRender } from "../../utils/toast";
import WithPublicRoute from "../../components/HOC/WithPublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/slices/auth.slice";
import { RootState } from "../../app/store";
import { useRouter } from "next/router";

interface formValues {
  email: string;
}

const ResetPassword: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const path = router.asPath;
  // console.log("-----");
  // console.log(router);
  // console.log("-----");
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [userId, setUserId] = useState();
  const initialValues: formValues = { email: "" };
  const [resetPassword, { data: loginResponse, error: loginError }] =
    useResetPasswordMutation();

  const decodeToken = () => {
    const token = new URL(window.location.href).searchParams.get("token");
    console.log(token);
    const { id } = jwt.decode(token as any) as any;
    setUserId(id);
    return token;
  };

  useEffect(() => {
    decodeToken();
  }, [decodeToken]);

  const validationSchema = {
    password: {
      required: true,
      message: "Invalid Password",
    },
    confirmPassword: [
      {
        required: true,
        message: "Invalid Confirm Password",
      },
      ({ getFieldValue }: { getFieldValue: any }) => ({
        validator(_: any, value: any) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The two passwords that you entered do not match!")
          );
        },
      }),
    ],
  };

  const onFinishedResetPassword = async (values: login) => {
    try {
      console.log(values);
      console.log(userId);
      const result = await resetPassword({ ...values, id: userId }).unwrap();
      form.resetFields();
      ToastRender(result.message);
    } catch (error: any) {
      const { message } = error.data.error;
      ToastRender(message, true);
    }
  };
  return (
    <Auth>
      <>
        <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
        {/* <h6 className="text-typography-900">
          Type your email below to reset password
        </h6> */}
        <div className="mt-8">
          <Form
            layout="vertical"
            initialValues={initialValues}
            autoComplete="off"
            form={form}
            onFinish={onFinishedResetPassword}
          >
            <FormControl
              type="password"
              element="input"
              name="password"
              label="Password"
              placeholder="password"
              classes={[]}
              rules={[validationSchema.password]}
            />

            <FormControl
              type="password"
              element="input"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="confirm password"
              classes={[]}
              rules={[...validationSchema.confirmPassword]}
            />

            <Button type="submit" classes="w-full text-white bg-primary">
              <>Submit</>
            </Button>
          </Form>
        </div>
      </>
    </Auth>
  );
};

export default WithPublicRoute(ResetPassword);
