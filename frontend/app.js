const opentelemetry = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-http');

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start()

const express = require('express');
const http = require('http');
const app = express();

app.get('/', (_, response) => {
  try {
    const options = {
      hostname: 'nginx',
      port: 80,
      path: '/',
      method: 'GET',
    };
    const req = http.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);
      res.on('data', (d) => {
        response.send('Hello World');
      });
    });
    req.end();
  } catch (e) {
    response.send('Error')
  }
});

app.listen(parseInt(8000, 10), () => {
  console.log('Listening for requests');
});
