# Docker running OctoberCMS

It's good for creating a prototype.

- OctoberCMS
- Sqlite

# Preparation

```
$ ./new.sh
```

Or you can do it manually.

## 1. Create database
```
$ mkdir storage
$ touch storage/database.sqlite
$ docker run --rm \
  -v $(pwd)/storage/database.sqlite:/var/www/html/storage/database.sqlite \
  frankmail007/docker-octobercms-dev php artisan october:up
```

## 2. Start container without any volume mounted
```
docker-compose -f new.yml up -d
```

## 3. Copy contents of plugins and themes folder to host

Because when you mount the volume, the contents in container will be removed so that I copy from container first as a work around.

```
$ docker cp octobermovies:/var/www/html/plugins .
```

```
$ docker cp octobermovies:/var/www/html/themes .
```

## 4. Stop container
```
docker-compose down
```

# Normal operations

## Run
```
$ docker-compose up -d
```

## Stop
```
$ docker-compose down
```

## Command line
```
$ docker exec -it octobermovies fish 
```

# TODO: 

To find out if there is a better way to map the volume to container.