import gql from 'graphql-tag'

export const GET_USERS = gql`
  query {
    allUsers {
      email
      name
    }
  }
`

export const AUTH = gql`
mutation auth($email: String!, $password: String!) {
   authenticateUserWithPassword(email: $email, password: $password) {
    token
    item {
      id
      isAdmin
    }
  }
}
`

export const VALIDATE = gql`
  query {
     authenticatedUser {
      id
    }
  }
`
