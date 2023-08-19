import {IModule} from '@interfaces/global/module.in';
import {inject, injectable} from 'tsyringe';
import {Implementor} from './Implementor';

@injectable()
export class Module implements IModule {
  constructor(@inject('Implementor') private _implementor?: Implementor) {}

  async run(): Promise<void> {
    this._implementor?.echo();
  }
}
