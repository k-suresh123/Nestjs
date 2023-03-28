import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { EmployeeTier } from "./employees/Employee.enum";

export class EmployeeTierValidationPipe implements PipeTransform{
    transform(value:any, metadata:ArgumentMetadata){
        if(!(value.tier in EmployeeTier)){
            throw new BadRequestException(`${value.tier} is not a valid tieer`)
        }
      return value;
    }
}