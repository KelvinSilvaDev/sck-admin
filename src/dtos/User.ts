export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUserAuthenticatedRequest {
  email: string;
  password: string;
}

export interface IUserAuthenticatedResponse {
  success: boolean;
  user: IUser;
  access_token: string;
}
