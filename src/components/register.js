import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Layout from "./Layout";
import OrderSuccess from "../../pages/OrderSuccess";

const REGISTER = gql`
	mutation RegisterUser(
		$username: String!
		$email: String!
		$password: String!
	) {
		registerUser(
			input: { username: $username, email: $email, password: $password }
		) {
			clientMutationId
		}
	}
`;
 const RegisterForm =()=> {
	let input;
	let inp;
  const [addTodo, {  data: checkoutResponse, loading, error }] = useMutation(REGISTER);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { username: input.value, email: inp.value, password: input.value  } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
		<input
          ref={node => {
            inp = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
	  <OrderSuccess response={checkoutResponse}/>
    </div>
	
  );
};

export default RegisterForm;