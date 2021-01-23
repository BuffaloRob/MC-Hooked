import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import FormHelperText from "@material-ui/core/FormHelperText";
import ArrowBack from '@material-ui/icons/ArrowBack';
import { FabContainer } from './styles';

function ItemForm(props) {

  const renderInput = ({ input, label, meta: {touched, error} }) => (
    <>
      <TextField
        label={label}
        autoComplete="off"
        {...input}
        margin="normal"
        error={touched && error}
        helperText={touched && error ? error : null}
      />
      <FormHelperText
        error={touched && error}
      />
    </>
  )

  return (
    <Form
      onSubmit = {values => {
        props.onSubmit(values)
      }}
      validate = {values => {
        const errors = {};
        const requiredFields = [
          'name',
        ]
        requiredFields.forEach(field => {
          if (!values[field]) {
            errors[field] = 'Required'
          }
        })
        return errors
      }}
    >
      {({ handleSubmit }) => (
        <Grid container justify='center'>
          <form onSubmit={handleSubmit} className='ui form error'>
            <Field
              name='name'
              component={renderInput}
              label='Enter Item Name '
            /><br/>
            <br/>
            <Grid container justify='center'> 
              <Button 
                color='primary' 
                variant='outlined' 
                type='submit'
              >
                Submit
              </Button>
            </Grid>
            <br/>
            <FabContainer container justify='center'>
              <Fab
                color="secondary"
                aria-label="Back to Items"
                size="small"
                to={`/items`}
                component={RouterLink}
              >
                <Tooltip title="Back to Items">
                  <ArrowBack />
                </Tooltip>
              </Fab>
            </FabContainer>
          </form>
        </Grid>
      )}
    </Form>
  )
}

export default ItemForm;
