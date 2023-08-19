import {SharedContainer} from './shared-container';
import {SecondImplementor} from '@interfaces/classes/secondImplementor';

const secondContainer = SharedContainer.createChildContainer();

secondContainer.register('Implementor', {
  useClass: SecondImplementor,
});

export {secondContainer};
