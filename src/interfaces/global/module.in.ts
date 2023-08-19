export interface IModule extends IModuleRunner {}

export interface IModuleRunner {
  run(): Promise<void>;
}
