package oauth2

import (
	"fmt"

	"github.com/Ensena/graphql-client"
)

func createUser(user *User) {

	g := fmt.Sprintf(`mutation MyMutation {
		__typename
		createUser(input: {user: {lastName: "%s", name: "%s", picture: "", email: "%s", moodleUdp: false, ready: true, role: "basic"}}) {
		  clientMutationId
		}
	  }`, user.LastName, user.Name, user.Email)
	graphql.Query(g)

}