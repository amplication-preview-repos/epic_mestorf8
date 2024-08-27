import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  dropOffLocation?: string | null;
  fare?: number | null;
  pickUpLocation?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
