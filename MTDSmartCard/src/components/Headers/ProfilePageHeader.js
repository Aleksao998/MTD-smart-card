import React from "react";

// reactstrap components

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {});

  return (
    <div>
      <div
        className="page-header page-header-xs"
        style={{ backgroundColor: "white!important" }}
        data-parallax={true}
        ref={pageHeader}
      >
        <div
          className="filter"
          style={{ backgroundColor: "white!important" }}
        />
      </div>
    </div>
  );
}

export default ProfilePageHeader;
