#!/bin/bash
echo '1. Create sqlite database'
mkdir storage
touch storage/database.sqlite
docker run --rm \
  -v $(pwd)/storage/database.sqlite:/var/www/html/storage/database.sqlite \
  frankmail007/docker-octobercms-dev php artisan october:up

echo '2. Run container without volume'
docker-compose -f new.yml up -d

echo '3. Copy contents of plugins and themes folder to host'
docker cp octobermovies:/var/www/html/plugins .
docker cp octobermovies:/var/www/html/themes .

echo '4. Stop container'
docker-compose down

