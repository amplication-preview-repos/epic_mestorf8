import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rides?: RideListRelationFilter;
  username?: StringFilter;
};
