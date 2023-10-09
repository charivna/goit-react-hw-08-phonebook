export const LoginForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();

    // const form = evt.target;
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>

      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit"> Log In</button>
    </form>
  );
};
