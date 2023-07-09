// deno-lint-ignore-file no-explicit-any
import { FeedbackException } from "@replicasLocalGlobal"

interface HttpResponse<T extends any> {
  data: T,
  statusCode: number
}

const ok = (data: any): HttpResponse<any> => ({
  data,
  statusCode: 200
})

const badRequest = (data: FeedbackException): HttpResponse<FeedbackException> => ({
  data,
  statusCode: 400
})

function OutputThrowObject(input: any) {
  throw input
}

export {
  ok,
  badRequest,
  OutputThrowObject,
  type HttpResponse
}