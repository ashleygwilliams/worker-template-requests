## Requests

Examples of reading in a POST request body of type JSON, form-data, and blobs before it reaches the origin server.

[`index.js`](https://github.com/cloudflare/worker-template-requests/blob/master/index.js) is the content of the Workers script.

Live Demos are hosted on `workers-tooling.cf/demos/requests`:
[Demo](http://workers-tooling.cf/demos/requests/)

#### Wrangler
To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate myApp https://github.com/cloudflare/worker-template-requests
```

#### Serverless
To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
