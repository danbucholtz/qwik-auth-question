import {
  type Signal,
  component$,
  createContextId,
  useSignal,
  useContextProvider,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

//Assuming they might *not* be logged in, adding null case for that
type User = null | {
  userId: string;
  username: string;
  profilePhotoUrl: string;
};

export const UserContextId = createContextId<Signal<User>>("logged-in-user");

export default component$((props: { user: User }) => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  const loggedInUser = useSignal(props.user);
  useContextProvider(UserContextId, loggedInUser);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
