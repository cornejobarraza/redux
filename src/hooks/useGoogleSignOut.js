import { signOut } from "firebase/auth";

export { useGoogleSignOut };

function useGoogleSignOut(auth) {
  return () => {
    signOut(auth)
      .then(() => {
        window.location.reload();
        localStorage.removeItem("currentUser");
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
