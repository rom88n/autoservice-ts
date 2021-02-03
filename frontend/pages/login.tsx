// base
import * as React from 'react'

// components
import LoginPage from '../containers/LoginPage'
import { withApollo } from '../config/apollo/apollo'

function Login() {
  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default withApollo({ ssr: false })(Login)
