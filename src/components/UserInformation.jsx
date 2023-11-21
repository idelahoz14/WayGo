import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserInformation = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h5 style={{marginLeft: '10px', marginTop: '15px'}}>{user.name}</h5>
      </div>
    )
  );
};

export default UserInformation;