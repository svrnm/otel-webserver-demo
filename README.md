# OpenTelemetry Webserver Module Demo

This repo is a demo for the [OpenTelemetry Webserver Module](https://github.com/open-telemetry/opentelemetry-cpp-contrib/tree/main/instrumentation/otel-webserver-module), available for nginx and Apache HTTP Server

To run this demo, copy the [./collector/config.yaml-sample](./collector/config.yaml-sample) to `./collector/config.yaml`
and edit the content to your needs. If you only want to use jaeger as your backend you are fine with just a copy:

```bash
cp ./collector/config.yaml-sample ./collector/config.yaml
```

Next you can start the demo with `docker compose`:

```
docker compose up
```

After a while you should see traces flowing into your backend, e.g. your local jaeger
instance at <http://localhost:16686>
