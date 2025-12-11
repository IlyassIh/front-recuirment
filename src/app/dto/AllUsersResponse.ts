// src/app/dto/AllUsersResponse.ts
import { UserResponse } from "./UserResponse";
import { ApiResponse } from "./ApiResponse";

export type AllUsersResponse = ApiResponse<UserResponse[]>; 