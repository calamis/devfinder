import * as React from 'react';
import { useEffect } from 'react';
import { Container, Button, Grid } from '@mui/material';

// Components
import FormTextField from '../TextField/FormTextField';

// Formik
import * as yup from 'yup';
import { Formik, FormikHelpers, FormikProps, Field, Form } from 'formik';

// redux
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUserProfile } from '../../features/githubusers/githubuserSlice';

// interface
interface FormValues {
  username: string;
}

const Search = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = React.useState('');

  useEffect(() => {
    if (user) {
      dispatch(fetchUserProfile(user));
    }
  }, [dispatch, user]);

  const validationSchema = yup.object().shape({
    username: yup.string().required('Field is required'),
  });

  return (
    <>
      <Container maxWidth="md">
        <Formik
          initialValues={{
            username: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values: FormValues, FormikHelpers: FormikHelpers<FormValues>) => {
            dispatch(fetchUserProfile(values.username));
            FormikHelpers.setSubmitting(false);
          }}>
          {(formikProps: FormikProps<FormValues>) => (
            <Form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <Field
                    fullWidth
                    label="Search Github Username"
                    name="username"
                    component={FormTextField}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    fullWidth
                    sx={{ height: '55px' }}
                    variant="contained"
                    type="submit"
                    disabled={formikProps.isSubmitting}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Search;
