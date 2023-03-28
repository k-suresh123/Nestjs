import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";
import { EmployeeSearchDto } from "../dto/EmployeeSearch.dto";
import { Employee, EmployeeDocument } from "../schemas/Employee.shema";

@Injectable()
export class EmployeeRepository{
    constructor(@InjectModel(Employee.name) private employeeModel:Model<EmployeeDocument>){}

     async create(employeeCreateDto: EmployeeCreateDto):Promise<Employee>{
         let newEmployee = new this.employeeModel(employeeCreateDto);
         console.log("datae12",newEmployee)
         const data =  await newEmployee.save();
         console.log("datae",newEmployee)
         return data;
     }

     async findAll(): Promise<Employee[]> {
        return await this.employeeModel.find();
    }

    async findWithFilters(filter: EmployeeSearchDto) {
        let name = Object.is(filter.name, undefined) ? '' : filter.name
        let designation = Object.is(filter.designation, undefined) ? '' : filter.designation
        return await this.employeeModel.find({ $and: [{ designation: { $regex: designation } }, { firstName: { $regex: name } }] })

    }

}