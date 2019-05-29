export type QueryMapType = {
  [key: string]: (parent: any, args: any, context: {}, info: any) => any;
};

export type MutationMapType = {
  [key: string]: (parent: any, args: any, context: {}, info: any) => any;
};
export type ResolversMapType = {
  [key: string]: QueryMapType;
};
