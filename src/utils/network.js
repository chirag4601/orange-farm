export const getData = async (url, headers = {}) => {
  let header = new Headers();
  header.append("Content-Type", "application/json");
  for (const key in headers) {
    header.append(key, headers[key]);
  }
  const response = await fetch(url, {
    method: "GET",
    headers: header,
  });
  const status = response.status;
  const responseHeaders = response.headers;
  if (response.status === 200) {
    if (responseHeaders.get("content-type").indexOf("application/json") !== -1)
      return await response.json();
    else return await response.text();
  } else {
    try {
      const data = await response.json();
      return {
        statusCode: response.status,
        error: "Something went wrong",
        ...data,
      };
    } catch (err) {
      return {
        statusCode: response.status,
        error: "Something went wrong",
      };
    }
  }
};
