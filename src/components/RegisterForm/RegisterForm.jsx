export const RegisterForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    // const form = evt.target;
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="name" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
