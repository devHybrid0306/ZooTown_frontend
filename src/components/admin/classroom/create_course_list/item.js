import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function NewCourseListItem() {
  return (
    <div>
      <div className="adminclassroom-createcourse-item pl-1 pr-1">
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            COURSEWORK NAME
          </div>
          <input
            type="type"
            className="adminclassroom-createcourse-item-cell-value"
            placeholder="Please enter the course name"
          ></input>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            TOPIC
          </div>
          <div className="adminclassroom-createcourse-item-cell-value"></div>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            SKILLS DEVELOPED
          </div>
          <div className="adminclassroom-createcourse-item-cell-value"></div>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            ACTION
          </div>
          <div className="adminclassroom-createcourse-item-action">
            <Link to="/admin-classroom-editcoursepage">
              <div className="adminclassroom-createcourse-item-create">
                Create Course
              </div>
            </Link>
            <div className="adminclassroom-createcourse-item-publish">
              Publish Course
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCourseListItem;
