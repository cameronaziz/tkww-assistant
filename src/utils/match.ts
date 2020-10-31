const match = (key: string, text: string, isCaseInsensitive?: boolean) => {
  const re = new RegExp(key, `${isCaseInsensitive ? 'i' : ''}g`);
  const result = text.match(re);
  return result;
};

export default match;
