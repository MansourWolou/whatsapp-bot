import { Injectable } from '@nestjs/common';
import { CreateWawDto } from './dto/create-waw.dto';
import { UpdateWawDto } from './dto/update-waw.dto';

@Injectable()
export class WawService {
  /**
   * Connect to the BSP server
   * @internal */
  subscribeAppWaba() {
    return;
  }

  /**
   *To send messages, you need to register the phone number you want to use
   *
   */
  getPhoneWabId() {
    return;
  }

  /**
   * REGISTER PHONE NUMBER
   *
   */
  registerPhoneNumber() {
    return 'Phone Number register for Wab';
  }
}
