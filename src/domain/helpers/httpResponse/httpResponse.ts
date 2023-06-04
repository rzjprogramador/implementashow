// deno-lint-ignore-file no-explicit-any

type IHttpResponse<T = any> = {
  data: T;
  statusCode?: number;
  info?: IInfoController;
};

interface IInfoController {
  feedback: string;
  mkeLogRegistrado: boolean;
}

const ok = (d: any): IHttpResponse => ({
  data: d,
  statusCode: 200,
  // info: {
  //   feedback: info.feedback,
  //   mkeLogRegistrado: info.mkeLogRegistrado,
  // },
});

export { type IHttpResponse, type IInfoController, ok };
