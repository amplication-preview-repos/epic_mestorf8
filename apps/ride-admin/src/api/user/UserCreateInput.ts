import { RideCreateNestedManyWithoutUsersInput } from "./RideCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  rides?: RideCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
