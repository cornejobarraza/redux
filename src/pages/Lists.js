import { getAuth } from "firebase/auth";

export { Lists as default };

function Lists() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return <p>Sign into your Google account to see your lists</p>;
  }

  return <p>Coming soon...</p>;
}
