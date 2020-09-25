# Requirement
- docker locally
- PHP 7.4 CLI
- composer

# How to start
*Make sure you have installed all the dependencies before starting*!

At first you have to install the PHP dependencies with composer. They will be shared with the docker container. Execute the follwing commands:

````bash
cd ParkingManager
composer install
````

Afterwards to have a development server execute:

````bash
cd ..
docker-compose up -d
````

Now you have a html Server avaiable at http://localhost/
