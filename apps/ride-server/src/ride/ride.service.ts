import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RideServiceBase } from "./base/ride.service.base";

@Injectable()
export class RideService extends RideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
