import React from "react";
import Auth from "../../components/Layout/Auth";
import Link from "next/link";
import { Button } from "../../components/Button/Button";
import { FormControl } from "../../components/Form/FormControl";
import { Form } from "antd";
import * as Yup from "yup";
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
      console.log(values);
      const result = await signup(values).unwrap();
      console.log(result);
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
            <a className="text-secondary-3 hover:text-secondary-hover-3">
              Login
            </a>
          </Link>
        </h6>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Button
            type="button"
            classes="text-typography-900 bg-primary-50 border border-typography-300 px-5 py-2.5"
          >
            <>
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                width="2443"
                height="2500"
                viewBox="0 0 256 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </>
          </Button>
          <Button
            type="button"
            classes="text-primary-50 bg-social-facebook px-5 py-2.5"
          >
            <>
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                ></path>
              </svg>
              Sign in with Facebook
            </>
          </Button>
        </div>
        <div className="mt-8">
          <Form
            layout="vertical"
            initialValues={initialValues}
            autoComplete="off"
            form={form}
            onFinish={onFinishedSignup}
          >
            <div className="grid grid-cols-2 gap-4">
              <FormControl
                type="text"
                element="input"
                name="firstname"
                label="First Name"
                placeholder="John"
                classes={[]}
                rules={[validationSchema.firstname]}
              />
              <FormControl
                type="text"
                element="input"
                name="lastname"
                label="Last Name"
                placeholder="Doe"
                classes={[]}
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
              classes="w-full p-4 text-primary-50 bg-secondary-3 hover:bg-secondary-hover-3"
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