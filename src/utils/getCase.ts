const getCase = (value: string, config: Dictionary.Config) => {
  const { isCaseInsensitive } = config;
  return isCaseInsensitive ? value.toUpperCase() : value;
};

export default getCase;
