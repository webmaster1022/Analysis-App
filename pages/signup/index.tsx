import React from "react";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import { NextPage } from "next";
import { useSignupMutation } from "../../utils/apis/auth";
import { signup } from "../../utils/models";
import { ToastRender } from "../../utils/toast";

interface formValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Signup: NextPage = () => {
  const [form] = Form.useForm();
  const initialValues: formValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [signup, { data: loginResponse, error: loginError }] =
    useSignupMutation();
  const validationSchema = {
    firstname: {
      required: true,
      message: "Invalid Firstname",
    },
    lastname: {
      required: true,
      message: "Invalid Lastname",
    },
    email: {
      required: true,
      message: "Invalid Email",
    },
    password: {
      required: true,
      message: "Invalid Password",
    },
  };

  const onFinishedSignup = async (values: signup) => {
    try {
      const result = await signup(values).unwrap();
      ToastRender(result.message);
    } catch (error: any) {
      const { message } = error.data.error;
      ToastRender(message, true);
    }
  };

  return (
    <Auth>
      <>
        <h1 className="text-3xl font-bold mb-2">Sign up</h1>
        <h6 className="text-typography-900">
          Already have an account?&nbsp;
          <Link href="/login">
            <a className="text-primary hover:text-primary/80">Login</a>
          </Link>
        </h6>
        <div className="mt-8">
          <Form
            layout="vertical"
            initialValues={initialValues}
            autoComplete="off"
            form={form}
            onFinish={onFinishedSignup}
          >
            <div className="flex flex-row gap-4">
              <FormControl
                type="text"
                element="input"
                name="firstname"
                label="First Name"
                placeholder="John"
                classes={["!block flex-1"]}
                rules={[validationSchema.firstname]}
              />
              <FormControl
                type="text"
                element="input"
                name="lastname"
                label="Last Name"
                placeholder="Doe"
                classes={["!block flex-1"]}
                rules={[validationSchema.lastname]}
              />
            </div>
            <FormControl
              type="email"
              element="input"
              name="email"
              label="Email address"
              placeholder="johndoe@mail.com"
              classes={[]}
              rules={[validationSchema.email]}
            />

            <FormControl
              type="password"
              element="input"
              name="password"
              label="Password"
              placeholder="password"
              classes={[]}
              rules={[validationSchema.password]}
            />

            <Button
              type="submit"
              classes="w-full text-white bg-primary hover:bg-primary/80"
            >
              <>Register</>
            </Button>
          </Form>
        </div>
      </>
    </Auth>
  );
};

export default Signup;
