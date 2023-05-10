#!/bin/bash

# Build Go API image
docker build -t go-api -f go-api/Dockerfile go-api

# Build Node.js web app image
docker build -t web-app -f web-app/Dockerfile web-app

echo "Docker images for both apis were built successfully"
