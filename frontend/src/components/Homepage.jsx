import { Register } from "./Register";
import { Login } from "./Login";

export const Homepage = () => {
  return (
    <>
      <ul>
        <a>RenginiųWell</a>
        <Register />
        <Login />
      </ul>
    </>
  );
};
