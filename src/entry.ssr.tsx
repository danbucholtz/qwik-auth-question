/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default async function (opts: RenderToStreamOptions) {
  const cookieString: undefined | string =
    opts.serverData?.requestHeaders.cookie; //I wish this was typed on its own; I wonder if we can get that PR in 🤔
  const user = await getUserFromCookieString(cookieString);

  return renderToStream(<Root user={user} />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes,
    },
  });
}

async function getUserFromCookieString(
  possibleCookieString: undefined | string
) {
  // Fake function to simulate getting the user from the cookie

  console.log("Expensive user lookup logic is triggered");
  console.log(possibleCookieString);

  if (Math.random() > 0.2) {
    return {
      userId: "12345",
      username: "danbucholtz",
      profilePhotoUrl: "https://myapp.com/photos/blah.jpg",
    };
  }
  return null;
}
