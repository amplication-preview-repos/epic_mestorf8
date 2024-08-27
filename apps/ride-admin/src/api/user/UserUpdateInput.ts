import { RideUpdateManyWithoutUsersInput } from "./RideUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  rides?: RideUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
