export type nodeArg = { argsBefore?: string[]; argsAfter?: string[] };
export type eletronArg = { argsBefore?: string[]; argsAfter?: string[] };
export type builderType = "CLIENT" | "NODEJS" | "SINGLE" | "ELECTRON";
export type builderConfig = {
  watch: string | string[];
  launch?: boolean;
  launchArg?: nodeArg;
  transmitt?: string;
  listen?: string;
  printBuildError?: boolean;
};

export type nodejsConfig = {
  watch: string | string[];
  launch?: boolean;
  launchArg?: nodeArg;
  transmitt?: string;
  listen?: string;
  printBuildError?: boolean;
};

export type clientConfig = {
  watch: string | string[];
  transmitt?: string;
  listen?: string;
  printBuildError?: boolean;
};

export type electronConfig = {
  watch: string | string[];
  launch?: boolean;
  launchArg?: eletronArg;
  transmitt?: string;
  listen?: string;
  printBuildError?: boolean;
};

export type singleConfig = {
  watch: string | string[];
  name?: string;
  transmitt?: string;
  listen?: string;
  printBuildError?: boolean;
};
