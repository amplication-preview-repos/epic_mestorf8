import { RideCreateNestedManyWithoutDriversInput } from "./RideCreateNestedManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { VehicleCreateNestedManyWithoutDriversInput } from "./VehicleCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  licenseNumber?: string | null;
  rides?: RideCreateNestedManyWithoutDriversInput;
  vehicle?: VehicleWhereUniqueInput | null;
  vehicles?: VehicleCreateNestedManyWithoutDriversInput;
};
