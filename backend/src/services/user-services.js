/** @format */

import { userRepository } from "../repository/index.js";

export const signUp = async (data) => {
  const temp = await userRepository.userSignUp(data);
  return temp;
};

export const signIn = async () => {
  const temp = await userRepository.userSignIn(data);
  return temp;
};

export const signOut = async () => {
  const temp = await userRepository.userLogout(data);
  return trmp;
};
