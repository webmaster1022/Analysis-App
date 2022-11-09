import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { isValidToken } from "../../utils/jwt";
import {
  removeCredentials,
  setCredentials,
} from "../../redux/slices/auth.slice";
import { baseApi } from "../../utils/baseUrl";
const WithPrivateRoute = (Wrapped: any) => {
  return (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.refreshToken);
    const localToken = localStorage.getItem("_expense_tracker_tkn_");
    if (!token && localToken)
      dispatch(setCredentials({ refreshToken: localToken }));
    if (!token && !localToken) {
      dispatch(removeCredentials());
      dispatch(baseApi.util.resetApiState());
      router.replace("/login");
      return null;
    }
    if (
      (token && !isValidToken(token)) ||
      (localToken && !isValidToken(localToken))
    ) {
      dispatch(removeCredentials());
      dispatch(baseApi.util.resetApiState());
      router.replace("/login");
      return null;
    }
    return <Wrapped {...props} />;
  };
};

export default WithPrivateRoute;
