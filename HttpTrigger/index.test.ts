import httpFunction from '.';
import { context } from '../testing/defaultContext';
import { queryParamRequest, bodyParamRequest, noParamRequest } from '../testing/defaultRequest';

test('Http trigger with query parameter should return known text', async () => {
  await httpFunction(context, queryParamRequest);
  expect(((context.log as unknown) as jest.Mock).mock.calls.length).toBe(1);
  expect(context.res!.body).toEqual('Hello, Bill. This HTTP triggered function executed successfully.');
});

test('Http trigger with body paramerter should return known text', async () => {
  await httpFunction(context, bodyParamRequest);
  expect(((context.log as unknown) as jest.Mock).mock.calls.length).toBe(1);
  expect(context.res!.body).toEqual('Hello, Bill. This HTTP triggered function executed successfully.');
});

test('Http trigger with no parameter should return known text', async () => {
  await httpFunction(context, noParamRequest);
  expect(((context.log as unknown) as jest.Mock).mock.calls.length).toBe(1);
  expect(context.res!.body).toEqual(
    'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.',
  );
});
