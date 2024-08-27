import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const VehicleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vehicles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
