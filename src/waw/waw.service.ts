import { Injectable } from '@nestjs/common';
import { CreateWawDto } from './dto/create-waw.dto';
import { UpdateWawDto } from './dto/update-waw.dto';

@Injectable()
export class WawService {
  create(createWawDto: CreateWawDto) {
    return 'This action adds a new waw';
  }

  findAll() {
    return `This action returns all waw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} waw`;
  }

  update(id: number, updateWawDto: UpdateWawDto) {
    return `This action updates a #${id} waw`;
  }

  remove(id: number) {
    return `This action removes a #${id} waw`;
  }
}
