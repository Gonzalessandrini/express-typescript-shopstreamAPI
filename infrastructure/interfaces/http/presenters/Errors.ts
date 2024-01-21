const errorMapper: any = {
  default: 500,
  InitialSetupError: {
    CreateConfigurationError: 409,
    GetConfigurationError: 409,
    InitialSetupError: 500
  }
};

export type ErrorMapper = (data: any) => { status: number; data: any };

export const presentError: ErrorMapper = (error: any) => {
  let errorMapping = errorMapper[error.constructor.name];
  let bottomError = error;
  const errorCode = [];
  let def = errorMapper.default;
  while (isNaN(errorMapping) && !!errorMapping) {
    errorCode.push(bottomError.code);
    bottomError = bottomError.details;
    def = errorMapping.default || def;
    errorMapping =
      bottomError && bottomError.constructor && bottomError.constructor.name
        ? errorMapping[bottomError.constructor.name]
        : errorMapping.default;
    errorMapping = errorMapping || def;
    if (!isNaN(errorMapping)) {
      errorCode.push(bottomError.code);
      error = { code: errorCode.join('-'), message: bottomError.message, details: bottomError.details };
    }
  }
  return { status: errorMapping || def, data: error };
};
