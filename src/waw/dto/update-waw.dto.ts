import { PartialType } from '@nestjs/mapped-types';
import { CreateWawDto } from './create-waw.dto';

export class UpdateWawDto extends PartialType(CreateWawDto) {}
