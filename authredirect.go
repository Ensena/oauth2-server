package oauth2

import (
	"fmt"
	"net/http"

	"github.com/elmalba/oauth2-server"
)

func AuthMiddleWare(w http.ResponseWriter, r *http.Request, s *oauth2.Session) string {
	if s.ID == 0 {
		s.Save(w, r)
		http.Redirect(w, r, basePath+"/login", 303)
		return ""

	}
	if s.ClientID == "" {
		s.Save(w, r)
		http.Redirect(w, r, basePath+"/login", 303)
		return ""

	}
	return fmt.Sprintf("%d", s.ID)
}
