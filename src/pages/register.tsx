import React from "react";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { useMutation } from "urql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";

interface registerProps {}

const REGISTER_MUTATION = `
mutation Register($username: String!, $password: String!) {
  register(options: { username: $username, password: $password }) {
    user {
      id
      createdAt
      updatedAt
      username
    }
    errors {
      field
      message
    }
  }
}
`

export const Register: React.FC<registerProps> = ({}) => {
  const [,register] = useMutation(REGISTER_MUTATION)
	return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={ async(values) => {
          console.log(values)
          const response = await register(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type='password'
              />
            </Box>
            <Button mt={4} type="submit" colorScheme="teal" isLoading={ isSubmitting }>register</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
};

export default Register;
