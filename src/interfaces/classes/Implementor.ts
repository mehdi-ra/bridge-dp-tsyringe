import {IImplementor} from '@interfaces/global/implementor.in';
import {injectable} from 'tsyringe';

@injectable()
export class Implementor implements IImplementor {
  async echo(): Promise<void> {
    console.log('This is default implementor message');
  }
}
