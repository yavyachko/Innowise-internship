.PHONY: all install build dev docker-build docker-up

all: install build

install:
    npm install

build:
    npm run build

dev:
    npm run dev

docker-build:
    docker-compose build

docker-up:
    docker-compose up

clean:
    rm -rf node_modules dist