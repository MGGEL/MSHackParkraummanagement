FROM php:7.4-apache

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl \
    wget \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite
RUN usermod -aG www-data root

ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/
RUN chmod uga+x /usr/local/bin/install-php-extensions && sync && \
    install-php-extensions gd pdo_mysql zip intl

COPY php.ini /usr/local/etc/php/php.ini
COPY apache.conf /etc/apache2/sites-available/000-default.conf

COPY install_composer.sh /install_composer.sh
RUN /install_composer.sh



WORKDIR /app
