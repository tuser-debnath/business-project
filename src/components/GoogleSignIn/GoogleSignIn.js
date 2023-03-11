import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./GoogleSignIn.css";

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p className="text-white">Error</p>
      </div>
    );
  }
  if (loading) {
    return <p className="text-white">Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p className="text-center text-white">User Registered</p>
      </div>
    );
  }
  return (
    <>
      <Button
        variant="primary"
        type="submit"
        className="mb-3 w-100 another-button"
        onClick={() => signInWithGoogle()}
      >
        Sign In With Google
      </Button>
    </>
  );
};

export default GoogleSignIn;
