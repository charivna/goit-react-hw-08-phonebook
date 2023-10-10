import { Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();

    // const form = evt.target;
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>

      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit"> Log In</button>
    </Form>
  );
};
