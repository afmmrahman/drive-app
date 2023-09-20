import React from "react";
import { signIn, signOut } from "next-auth/react";
import useFetchSession from "~/hooks/useFetchSession";
import Button from "../common/Button";
import styles from "./TopBar.module.scss";

export default function TopBar() {
  const { session } = useFetchSession();

  return (
    <div className={styles.authBtn}>
      {session ? (
        // <Button btnClass="btn-primary" title="Sign Out!" onClick={signOut} />
        <img
          onClick={() => signOut()}
          className={styles.profileImg}
          src={session.user.image as string}
        ></img>
      ) : (
        <Button btnClass="btn-primary" title="Sign In!" onClick={signIn} />
      )}
    </div>
  );
}
