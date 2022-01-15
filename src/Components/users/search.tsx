import * as React from 'react'
import {useEffect} from 'react'
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search'
import { Button, Grid } from '@mui/material'

// Components
import CardDetails from '../Card';
import LinearSpinner from '../Layout/Spinner';
import InputField from '../TextField';
import FormTextField from '../TextField/FormTextField'

// Formik
import * as yup from 'yup';
import { Formik, FormikHelpers, FormikProps, Field, Form } from 'formik';

// redux
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchUserProfile } from '../../features/githubusers/githubuserSlice'

// interface
interface FormValues {
  username: string;
}


const Search = () => {

  const dispatch = useAppDispatch();
  const [user, setUser] = React.useState('')

  useEffect(() => {
   dispatch(fetchUserProfile(user));
  }, [dispatch, user])

  const { entities, loading, error} = useAppSelector((state) => state.users)

  const validationSchema = yup.object().shape({
    username: yup.string().required("Field is required")
  });


  return (
    <>
       <Container maxWidth="md">
            <Formik 
              initialValues={{
                username: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(
                values: FormValues,
                FormikHelpers: FormikHelpers<FormValues>
              ) => {
                // alert(JSON.stringify(values, null, 2));
                // const searchValue = JSON.stringify(value
                  dispatch(fetchUserProfile(values.username))
                FormikHelpers.setSubmitting(false)
              }}
            >
              {(formikProps: FormikProps<FormValues>) => (
                <Form noValidate autoComplete='off'>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                    {/* <InputField
                        label="Search Github User"
                        name="username"
                        iconPosition="end"
                        icon={<SearchIcon />}
                        variant="outlined"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && formik.errors.username}
                        helperText={formik.touched.username && formik.errors.username}
                      /> */}
                      <Field
                        fullWidth
                        label="Search Github User"
                        name="username"
                        component={FormTextField}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Button 
                        variant="contained" 
                        type="submit"
                        disabled={formikProps.isSubmitting}
                        >
                          Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}  
            </Formik>
            {/* <CardDetails /> */}
            {/* {!entities ? <LinearSpinner /> : <CardDetails data={entities} />} */}
            {/* {loading ? (
              <LinearSpinner />
            ) : error ? (
              <>{error?.message}</>
            ) : (
              <CardDetails data={entities} />
            ) } */}
        </Container> 
    </>
  )
}


export default Search