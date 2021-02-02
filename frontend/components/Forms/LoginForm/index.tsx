// base
import * as React from 'react'
import _ from 'lodash'
import {
  Formik,
  Form
} from 'formik'
import labels from '../../../config/labels'

// apollo
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../../config/apollo/queries/auth'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// components
import SelectComponent from '../../../FormComponent/SelectComponent'

import { useDispatch } from 'react-redux'
import { login } from '../../../store/reducers/actions'

interface MyFormValues {
  name: string;
  password: string;
}

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  margin: {
    margin: '.5rem 0'
  }
})

interface User {
  id: number;
  name: string;
}

interface Users {
  allUsers: User[];
}

const LoginForm: React.FC<{}> = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { loading, data } = useQuery<Users>(
    GET_USERS,
    { variables: { year: 2019 } }
  );

  if (loading) return <div>loading</div>

  const initialName = _.get(data, 'allUsers.[0].id', '')

  const initialValues: MyFormValues = {
    name: initialName,
    password: ''
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(login('123', '123'))
        setTimeout(() => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 2000)
      }}
    >
      {({
          isSubmitting,
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched
        }) => {
        const change = (name: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          e.persist()
          handleChange(e)
          setFieldTouched(name, true, false)
        }

        return (
          <Form className={classes.form}>
            <SelectComponent
              id="name"
              name="name"
              label={labels.user}
              variant="outlined"
              // error={touched.name && Boolean(errors.name)}
              value={values.name}
              // className={classes.margin}
              onChange={handleChange}
              fullWidth
              items={data?.allUsers.map(item => ({ value: item.id, name: item.name }))}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              variant="outlined"
              className={classes.margin}
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
              onChange={change.bind(null, 'password')}
              fullWidth
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              color="primary"
              variant="contained"
              className={classes.margin}
            >
              Войти
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
