// APPEND HASH TOKEN TO URL
const urlHash = (url) => {
  if (url.includes("?")) return `${url}&timestamp=${new Date().getTime()}`;
  else return `${url}?timestamp=${new Date().getTime()}`;
};

export { urlHash };
