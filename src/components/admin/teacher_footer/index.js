import React from "react";
import "./style.scss";

function TeacherFooter() {
  return (
    <div className="admin-teacherfooter">
      <div className="admin-teacherfooter-teacherlabel">Teacher</div>
      <div className="admin-teacherfooter-main">
        <div className="admin-teacherfooter-photo">Photo</div>
        <div className="admin-teacherfooter-infoContainer">
          <div className="admin-teacherfooter-infoContainer-name">
            Teacher Name
          </div>
          <div className="admin-teacherfooter-infoContainer-intro">
            Teacher Info
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherFooter;
