import { RideUpdateManyWithoutDriversInput } from "./RideUpdateManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { VehicleUpdateManyWithoutDriversInput } from "./VehicleUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  licenseNumber?: string | null;
  rides?: RideUpdateManyWithoutDriversInput;
  vehicle?: VehicleWhereUniqueInput | null;
  vehicles?: VehicleUpdateManyWithoutDriversInput;
};
