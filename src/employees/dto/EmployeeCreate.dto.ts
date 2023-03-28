import { IsNotEmpty } from "class-validator"
import { EmployeeStatus, EmployeeTier } from "../Employee.enum"

export class EmployeeCreateDto{
    id:string
    @IsNotEmpty()
    fisrtName:string
    @IsNotEmpty()
    lastName:string
    designation:string
    nearestCity:string
    tier:EmployeeTier
    status:EmployeeStatus
}