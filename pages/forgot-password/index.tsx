import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import Auth from "../../components/Layout/Auth";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import { NextPage } from "next";
import { useForgotPasswordMutation } from "../../utils/apis/auth";
import { login } from "../../utils/models";
import { ToastRender } from "../../utils/toast";
import WithPublicRoute from "../../components/HOC/WithPublicRoute";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

interface formValues {
  email: string;
}

const ForgotPassword: NextPage = () => {
  const [form] = Form.useForm();
  const initialValues: formValues = { email: "" };
  const [forgotPassword, { data: loginResponse, error: loginError }] =
    useForgotPasswordMutation();

  const validationSchema = {
    email: {
      required: true,
      message: "Invalid Email",
    },
  };

  const onFinishedForgotPassword = async (values: login) => {
    try {
      const result = await forgotPassword(values).unwrap();
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
        <h1 className="text-3xl font-bold mb-2">Forgot Password</h1>
        <div className="mt-8">
          <Form
            layout="vertical"
            initialValues={initialValues}
            autoComplete="off"
            form={form}
            onFinish={onFinishedForgotPassword}
          >
            <FormControl
              type="email"
              element="input"
              name="email"
              label="Email Address"
              placeholder="johndoe@mail.com"
              classes={[]}
              rules={[validationSchema.email]}
            />

            <Button
              type="submit"
              classes="w-full text-white bg-primary hover:bg-primary/80"
            >
              <>Submit</>
            </Button>
          </Form>
        </div>
      </>
    </Auth>
  );
};

export default WithPublicRoute(ForgotPassword);
