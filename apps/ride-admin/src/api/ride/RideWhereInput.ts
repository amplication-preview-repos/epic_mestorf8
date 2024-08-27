import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideWhereInput = {
  driver?: DriverWhereUniqueInput;
  dropOffLocation?: StringNullableFilter;
  fare?: FloatNullableFilter;
  id?: StringFilter;
  pickUpLocation?: StringNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
