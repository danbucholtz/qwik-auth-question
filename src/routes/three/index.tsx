import { component$, useContext } from "@builder.io/qwik";
import { UserContextId } from "~/root";

export default component$(() => {
  const user = useContext(UserContextId);

  return (
    <>
      <h1>Page Three</h1>
      <p>This is page three</p>
      <p>Username: {user.value?.username}</p>
      <p>User ID: {user.value?.userId}</p>
    </>
  );
});
