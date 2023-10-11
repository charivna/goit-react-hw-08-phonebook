import { useDispatch } from 'react-redux';
import { Form, Label } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
