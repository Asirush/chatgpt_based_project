FROM golang:latest

COPY . /app

WORKDIR /app

RUN go get -u

RUN go build -o main main.go

ENTRYPOINT ["./main"]