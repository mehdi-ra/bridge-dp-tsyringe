import {Module} from '@interfaces/classes/Module';
import {secondContainer} from './domain/containers/second-container';

export default async function () {
  const secondModule = secondContainer.resolve(Module);
  secondModule.run();
}
