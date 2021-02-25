package oauth2

import (
	"net/http"
	"os"

	"github.com/elmalba/oauth2-server"
)

func Login(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		email := r.FormValue("username")
		password := r.FormValue("password")

		user, exist := GetUserByEmail(email)
		if exist && user.Password == password {

			s := oauth2.Session{}
			s.Load(w, r)
			s.ID = user.ID
			s.Email = user.Email
			s.Save(w, r)
			http.Redirect(w, r, basePath+"/auth", http.StatusTemporaryRedirect)
			return
		}

	}
	outputHTML(w, r, "static/login.html")
}

func outputHTML(w http.ResponseWriter, req *http.Request, filename string) {
	file, err := os.Open(filename)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	defer file.Close()
	fi, _ := file.Stat()
	http.ServeContent(w, req, file.Name(), fi.ModTime(), file)
}

func Logout(w http.ResponseWriter, r *http.Request) {

	s := oauth2.Session{}
	s.Save(w, r)
	http.Redirect(w, r, basePath+"/login", http.StatusTemporaryRedirect)
	return
}
