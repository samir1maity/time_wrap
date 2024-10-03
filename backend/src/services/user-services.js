import { userRepository } from "../repository/index.js";

export const signUp = async (data) => {
    const temp = await userRepository.userSignUp(data)
    return temp
}