import {
  Controller,
  /*   Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, */
} from '@nestjs/common';
import { WawService } from './waw.service';
/* import { CreateWawDto } from './dto/create-waw.dto';
import { UpdateWawDto } from './dto/update-waw.dto';
 */
@Controller('waw')
export class WawController {
  constructor(private readonly wawService: WawService) {}

  /*  @Post()
  create(@Body() createWawDto: CreateWawDto) {
    return this.wawService.create(createWawDto);
  }

  @Get()
  findAll() {
    return this.wawService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wawService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWawDto: UpdateWawDto) {
    return this.wawService.update(+id, updateWawDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wawService.remove(+id);
  } */
}
