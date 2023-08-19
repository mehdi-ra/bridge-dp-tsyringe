import {Implementor} from '@interfaces/classes/Implementor';
import {Module} from '@interfaces/classes/Module';
import {container} from 'tsyringe';

const SharedContainer = container;

SharedContainer.register('Module', {
  useClass: Module,
});

SharedContainer.register('Implementor', {
  useClass: Implementor,
});

export {SharedContainer};
