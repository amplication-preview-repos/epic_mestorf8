/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DriverService } from "../driver.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DriverCreateInput } from "./DriverCreateInput";
import { Driver } from "./Driver";
import { DriverFindManyArgs } from "./DriverFindManyArgs";
import { DriverWhereUniqueInput } from "./DriverWhereUniqueInput";
import { DriverUpdateInput } from "./DriverUpdateInput";
import { RideFindManyArgs } from "../../ride/base/RideFindManyArgs";
import { Ride } from "../../ride/base/Ride";
import { RideWhereUniqueInput } from "../../ride/base/RideWhereUniqueInput";
import { VehicleFindManyArgs } from "../../vehicle/base/VehicleFindManyArgs";
import { Vehicle } from "../../vehicle/base/Vehicle";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DriverControllerBase {
  constructor(
    protected readonly service: DriverService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Driver })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDriver(@common.Body() data: DriverCreateInput): Promise<Driver> {
    return await this.service.createDriver({
      data: {
        ...data,

        vehicle: data.vehicle
          ? {
              connect: data.vehicle,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        licenseNumber: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Driver] })
  @ApiNestedQuery(DriverFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async drivers(@common.Req() request: Request): Promise<Driver[]> {
    const args = plainToClass(DriverFindManyArgs, request.query);
    return this.service.drivers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        licenseNumber: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async driver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    const result = await this.service.driver({
      where: params,
      select: {
        createdAt: true,
        id: true,
        licenseNumber: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDriver(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() data: DriverUpdateInput
  ): Promise<Driver | null> {
    try {
      return await this.service.updateDriver({
        where: params,
        data: {
          ...data,

          vehicle: data.vehicle
            ? {
                connect: data.vehicle,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          licenseNumber: true,
          updatedAt: true,

          vehicle: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDriver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    try {
      return await this.service.deleteDriver({
        where: params,
        select: {
          createdAt: true,
          id: true,
          licenseNumber: true,
          updatedAt: true,

          vehicle: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/rides")
  @ApiNestedQuery(RideFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ride",
    action: "read",
    possession: "any",
  })
  async findRides(
    @common.Req() request: Request,
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Ride[]> {
    const query = plainToClass(RideFindManyArgs, request.query);
    const results = await this.service.findRides(params.id, {
      ...query,
      select: {
        createdAt: true,

        driver: {
          select: {
            id: true,
          },
        },

        dropOffLocation: true,
        fare: true,
        id: true,
        pickUpLocation: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rides")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async connectRides(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: RideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rides: {
        connect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rides")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async updateRides(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: RideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rides: {
        set: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rides")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async disconnectRides(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: RideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rides: {
        disconnect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/vehicles")
  @ApiNestedQuery(VehicleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  async findVehicles(
    @common.Req() request: Request,
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Vehicle[]> {
    const query = plainToClass(VehicleFindManyArgs, request.query);
    const results = await this.service.findVehicles(params.id, {
      ...query,
      select: {
        createdAt: true,

        driver: {
          select: {
            id: true,
          },
        },

        id: true,
        make: true,
        model: true,
        registrationNumber: true,
        updatedAt: true,
        year: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/vehicles")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async connectVehicles(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: VehicleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vehicles: {
        connect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/vehicles")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async updateVehicles(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: VehicleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vehicles: {
        set: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/vehicles")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async disconnectVehicles(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: VehicleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vehicles: {
        disconnect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }
}
