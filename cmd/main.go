package main

import (
	"net/http"

	"github.com/Ensena/env-global"
	ensena "github.com/Ensena/oauth2-server"
	"github.com/elmalba/oauth2-server"
	"go.elastic.co/apm/module/apmhttp"
)

var basePath, hostName, key string

func init() {
	basePath = env.Check("basepath", "Missing Params basepath")
	hostName = env.Check("hostname", "Missing Params hostname")
	key = env.Check("secretKey", "Missing Params secretKey")
}

func main() {
	srv := oauth2.CreateServer(hostName, basePath)
	srv.SetKey(key)
	srv.MiddleWare = ensena.AuthMiddleWare
	srv.GetUser = ensena.GetUser
	srv.ValidateClientID = ensena.GetApp
	srv.ValidateClientIDAndSecretID = ensena.GetAppAndSecret

	http.HandleFunc(basePath+"/login", ensena.Login)
	http.HandleFunc(basePath+"/logout", ensena.Logout)
	http.HandleFunc(basePath+"/login/google/login", ensena.OauthGoogleLogin)
	http.HandleFunc(basePath+"/login/google/callback", ensena.OauthGoogleCallback)
	http.Handle(basePath+"/assets/", http.StripPrefix(basePath+"/assets/", http.FileServer(http.Dir("./assets"))))

	mux := http.DefaultServeMux
	handler := apmhttp.Wrap(mux)
	http.ListenAndServe(":8000", handler)
}
