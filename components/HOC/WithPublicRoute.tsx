import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isValidToken } from "../../utils/jwt";
import { JWT_SECRET } from "../../config/constants";

const WithPublicRoute = (Wrapped: any) => {
  return (props: any) => {
    const router = useRouter();
    const token = useSelector((state: RootState) => state.auth.refreshToken);
    const localToken = localStorage.getItem("_expense_tracker_tkn_");
    if (
      (token && isValidToken(token)) ||
      (localToken && isValidToken(localToken))
    ) {
      router.replace("/");
      return null;
    }
    return <Wrapped {...props} />;
  };
};
export default WithPublicRoute;
