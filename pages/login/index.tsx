import React, { useCallback, useEffect, useState } from "react";
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
} from "../../utils/apis/auth";
import { login } from "../../utils/models";
import { ToastRender } from "../../utils/toast";
import WithPublicRoute from "../../components/HOC/WithPublicRoute";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/auth.slice";
import { useRouter } from "next/router";

interface formValues {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const initialValues: formValues = { email: "", password: "" };
  const [login, { data: loginResponse, error: loginError }] =
    useLoginMutation();

  const [googleLogin, { data: socialLoginResponse, error: socialLoginError }] =
    useGoogleLoginMutation();
  const queryCheck = useCallback((query: object) => {
    return Object.keys(query).length > 0;
  }, []);
  useEffect(() => {
    if (!router.isReady) return;
    const query = queryCheck(router?.query);
    if (query) {
      onFinishedSocialLogin(path);
    }
  }, [router.isReady]);

  const validationSchema = {
    email: {
      required: true,
      message: "Invalid Email",
    },
    password: {
      required: true,
      message: "Invalid Password",
    },
  };

  const googleAuth = () => {
    window.open("https://wtrackbackend.mucyochris.com/api/connect/google");
  };

  const onFinishedSocialLogin = async (path: string) => {
    try {
      const query = path.split("?")[1];
      const result = await googleLogin({ query }).unwrap();
      dispatch(setCredentials({ refreshToken: result.token }));
      ToastRender(result.message);
    } catch (error: any) {
      const { message } = error.data.error;
      ToastRender(message, true);
    }
  };

  const onFinishedLogin = async (values: login) => {
    try {
      const result = await login(values).unwrap();
      dispatch(setCredentials({ refreshToken: result.token }));
      ToastRender(result.message);
    } catch (error: any) {
      const { message } = error.data.error;
      ToastRender(message, true);
    }
  };
  return (
    <Auth>
      <>
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <h6 className="text-typography-900">
          Don't have an account?&nbsp;
          <Link href="/signup">
            <a className="text-primary hover:text-primary/80">Register</a>
          </Link>
        </h6>
        <div className="mt-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Form
                layout="vertical"
                initialValues={initialValues}
                autoComplete="off"
                form={form}
                onFinish={onFinishedLogin}
                className="relative"
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
                  <>Login</>
                </Button>
              </Form>
              <Link href="/forgot-password">
                <a className="text-primary hover:text-primary/80 py-2">
                  forgot password?
                </a>
              </Link>
            </div>
            <Button
              onClick={googleAuth}
              type="button"
              classes="text-typography-900 bg-white border border-typography-300 px-5 py-2.5 w-full"
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
          </div>
        </div>
      </>
    </Auth>
  );
};

export default WithPublicRoute(Login);
