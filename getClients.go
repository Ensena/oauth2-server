package oauth2

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/Ensena/graphql-client"
	"github.com/elmalba/oauth2-server"
)

type clientsGraphql struct {
	Data struct {
		AllApps struct {
			TotalCount int `json:"totalCount"`
			Edges      []struct {
				Node struct {
					ID       int    `json:"id"`
					ClientID string `json:"clientId"`
					Secret   string `json:"secret"`
					URL      string `json:"url"`
				} `json:"node"`
			} `json:"edges"`
		} `json:"allApps"`
	} `json:"data"`
}

func GetApp(clientID string) (*oauth2.Client, bool) {

	user := oauth2.Client{}

	g := fmt.Sprintf(`{
		allApps(condition:{clientId:"%s"}) {
		  totalCount
		  edges {
			node {
			  id
			  clientId
			  secret
			  url
			}
		  }
		}
	  }`, clientID)

	response, err := graphql.Query(g)
	if err != nil {
		log.Println("ERROR to connect graphql")
		return &user, false
	}
	userInput := clientsGraphql{}
	json.Unmarshal(response, &userInput)
	if userInput.Data.AllApps.TotalCount == 0 {
		log.Println("Not fount", userInput)
		return &user, false
	}

	user.CallBackURL = userInput.Data.AllApps.Edges[0].Node.URL
	user.ClientID = userInput.Data.AllApps.Edges[0].Node.ClientID
	user.Secret = userInput.Data.AllApps.Edges[0].Node.Secret
	return &user, true
}

func GetAppAndSecret(clientID, secret string) bool {

	user, valid := GetApp(clientID)
	if !valid {
		return valid
	}
	if user.Secret != secret {
		return false
	}
	return true

}
