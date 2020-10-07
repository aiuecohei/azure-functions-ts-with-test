import { HttpRequest } from '@azure/functions';

const queryParamRequest: HttpRequest = ({
  query: { name: 'Bill' },
  body: {},
} as unknown) as HttpRequest;

const bodyParamRequest: HttpRequest = ({
  query: {},
  body: { name: 'Bill' },
} as unknown) as HttpRequest;

const noParamRequest: HttpRequest = ({
  query: {},
  body: {},
} as unknown) as HttpRequest;

export { queryParamRequest, bodyParamRequest, noParamRequest };
