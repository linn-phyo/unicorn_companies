import { PartialType } from "@nestjs/swagger";
import { CreateUnicornCompanyDto } from "./create-unicorn-company.dto";

export class UpdateUnicornCompanyDto extends PartialType(CreateUnicornCompanyDto) {}