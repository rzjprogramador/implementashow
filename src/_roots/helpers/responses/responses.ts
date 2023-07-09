import { FeedbackException } from "@globalEntitys"

interface HttpResponse {
  data: any,
  statusCode: number
}

const ok = (data: any): HttpResponse => ({
  data,
  statusCode: 200
})

const badRequest = (data: FeedbackException) => ({
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