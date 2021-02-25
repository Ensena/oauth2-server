go build -o oauth2 cmd/main.go
docker build -t ensena/oauth2 .
docker push ensena/oauth2