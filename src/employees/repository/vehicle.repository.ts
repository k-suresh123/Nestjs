import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VehicleCreateDTO } from "../dto/VehicleCreate.dto";
import { Vehicle, VehicleDocument } from "../schemas/Vehicle.schema";


@Injectable()
export class VehicleRepository{
    constructor(@InjectModel(Vehicle.name) private vehicleModel:Model<VehicleDocument>){}
  
    async create(vehicleCreateDTO:VehicleCreateDTO):Promise<Vehicle>{
           let newVehicle = new this.vehicleModel(vehicleCreateDTO);
           return await newVehicle.save();
    }

    async findAll(){
        return await this.vehicleModel.find().populate('employee')
    }


}