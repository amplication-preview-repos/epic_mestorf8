import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VEHICLE_TITLE_FIELD } from "./VehicleTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="make" source="make" />
        <TextField label="model" source="model" />
        <TextField label="registrationNumber" source="registrationNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
        <ReferenceManyField
          reference="Driver"
          target="vehicleId"
          label="Drivers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="licenseNumber" source="licenseNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
