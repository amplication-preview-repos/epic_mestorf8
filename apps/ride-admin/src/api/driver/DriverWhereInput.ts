import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type DriverWhereInput = {
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  rides?: RideListRelationFilter;
  vehicle?: VehicleWhereUniqueInput;
  vehicles?: VehicleListRelationFilter;
};
