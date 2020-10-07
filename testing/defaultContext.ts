import { Context } from '@azure/functions';

const context: Context = ({
  log: jest.fn(),
} as unknown) as Context;

export { context };
