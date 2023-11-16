# cors-for-lambda

"cors-for-lambda", is designed to apply CORS Headers for Lambda HTTP responses.

## Getting Started

To get started with this project, clone the repository and install the necessary dependencies.

## Usage

```javascript
const cors = require("cors-for-lambda");

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return cors.corsResponse(response, "*");
};
```

for multiples sites:

```javascript
const cors = require("cors-for-lambda");

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return cors.corsResponse(
    response,
    "https://example.com",
    "https://example2.com"
  );
};
```

Or

```javascript
const { responseHeader } = require("cors-for-lambda");

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: responseHeader("https://example.com", "https://example2.com"),
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
```

## Contributing

Contributions are welcome. Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
