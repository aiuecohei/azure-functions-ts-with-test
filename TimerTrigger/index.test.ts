import timerFunction from '.';
import { context } from '../testing/defaultContext';
import { timer, lateTimer } from '../testing/defaultTimer';

test('Timer trigger should log message', () => {
  timerFunction(context, timer);
  expect(((context.log as unknown) as jest.Mock).mock.calls.length).toBe(1);
});

test('Timer trigger should log message twice if running late', () => {
  timerFunction(context, lateTimer);
  expect(((context.log as unknown) as jest.Mock).mock.calls.length).toBe(2);
});
