// base
import * as React from 'react'
import {
  Formik,
  Form
} from 'formik'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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

const LoginForm: React.FC<{}> = () => {
  const classes = useStyles()
  const initialValues: MyFormValues = { name: '', password: '' }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
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
            <TextField
              id="name"
              name="name"
              placeholder="Name"
              variant="outlined"
              helperText={touched.name ? errors.name : ''}
              error={touched.name && Boolean(errors.name)}
              label="Name"
              value={values.name}
              className={classes.margin}
              onChange={change.bind(null, 'name')}
              fullWidth
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
