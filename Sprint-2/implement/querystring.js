function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) return queryParams;
// remove leading "?"
  if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
  }
  
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;

    const [key, ...rest] = pair.split("=");
    const value = rest.join("=") // handles  "=" inside values

    const decodedKey = decodeURIComponent(key); // used to make the URL readable. e.g.: from { name: "John%20Doe" } to { name: "John Doe" } 
    const decodedValue = value ? decodeURIComponent(value) : "";

    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}

console.log(parseQueryString("name=oliveira&age=28"));
console.log(parseQueryString("name=Beatriz%20Oliveira&city=Brussels"));


module.exports = parseQueryString;
