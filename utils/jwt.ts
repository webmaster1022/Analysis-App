import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";

export const isValidToken = (token?: string): boolean => {
  console.log(JWT_SECRET);
  if (!JWT_SECRET) return false;
  console.log(JWT_SECRET);
  try {
    jwt.verify(token as string, JWT_SECRET);
    return true;
  } catch (error) {
    // console.log('error', error)
    return false;
  }
};
