import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      {/* <Link to="/edit-profile" className="btn btn-sm btn-info">
        <i className="fas fa-user-circle text-info mr-1" /> Edit your handle
      </Link> */}
      <Link
        to="/add-coins"
        className="btn btn-light"
        className="btn btn-sm btn-info"
      >
        Add Coins
      </Link>
    </div>
  );
};

export default ProfileActions;
