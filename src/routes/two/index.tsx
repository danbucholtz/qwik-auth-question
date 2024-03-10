import { component$, useContext } from "@builder.io/qwik";
import { UserContextId } from "~/root";

export default component$(() => {
  const user = useContext(UserContextId);
  return (
    <>
      <h1>Page Two</h1>
      <p>This is page two</p>
      <p>Username: {user.value?.username}</p>
      <p>User ID: {user.value?.userId}</p>
    </>
  );
});
