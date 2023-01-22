import { AxiosResponse } from "axios";
import {
  IUserAuthenticatedRequest,
  IUserAuthenticatedResponse,
} from "../dtos/User";
import api from "../services/api";

export const authenticate = async (
  params: IUserAuthenticatedRequest
): Promise<IUserAuthenticatedResponse> => {
  const result: AxiosResponse<IUserAuthenticatedResponse> = await api.post(
    "/login",
    params
  );

  return result.data;
};
