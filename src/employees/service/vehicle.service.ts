import { Injectable } from "@nestjs/common/decorators";
import { VehicleCreateDTO } from "../dto/VehicleCreate.dto";
import { VehicleRepository } from "../repository/vehicle.repository";
import { Vehicle } from "../schemas/Vehicle.schema";

@Injectable()
export class VehicleService{
    constructor(private vehicleRepository:VehicleRepository){};

    async create(vehicleCreateDTO:VehicleCreateDTO):Promise<Vehicle>{
           return this.vehicleRepository.create(vehicleCreateDTO)
    }

    async getAll():Promise<Vehicle[]>{
        return await this.vehicleRepository.findAll();
    }
}