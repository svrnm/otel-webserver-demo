FROM php:8.2-apache
RUN apt-get update && apt-get install -y git
ADD https://github.com/open-telemetry/opentelemetry-cpp-contrib/releases/download/webserver%2Fv1.0.3/opentelemetry-webserver-sdk-x64-linux.tgz /opt
RUN cd /opt ; tar xvfz opentelemetry-webserver-sdk-x64-linux.tgz
RUN cd /opt/opentelemetry-webserver-sdk; ./install.sh
COPY opentelemetry_module.conf /etc/apache2/conf-available
RUN a2enconf opentelemetry_module

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer require "php-http/guzzle7-adapter" open-telemetry/sdk open-telemetry/exporter-otlp

COPY index.php /var/www/html
