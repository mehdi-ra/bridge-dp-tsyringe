import {injectable} from 'tsyringe';
import {Implementor} from './Implementor';

@injectable()
export class SecondImplementor extends Implementor {
  constructor() {
    super();
  }

  override async echo(): Promise<void> {
    console.log('This is second layer');
  }
}
