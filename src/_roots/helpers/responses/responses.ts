// deno-lint-ignore-file no-explicit-any

interface HttpResponse {
  data: any,
  statusCode: number
}

const ok = (data: any): HttpResponse => ({
  data,
  statusCode: 200
})
const badRequest = (data: any): HttpResponse => ({
  data,
  statusCode: 400
})

export {
  ok,
  badRequest,
  type HttpResponse
}