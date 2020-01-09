import React from "react";
import { Link } from "react-router-dom";
import UploadCoursePhoto from "./../upload_image";
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
            PHOTO
          </div>
          <UploadCoursePhoto width="150px" height="100px" />
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            TOPIC
          </div>
          <input
            type="type"
            className="adminclassroom-createcourse-item-cell-value"
            placeholder="Please enter the topic"
          ></input>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            LEVEL
          </div>
          <select>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            TIME
          </div>
          <input
            type="number"
            className="adminclassroom-createcourse-item-cell-value"
            placeholder="course hours"
          ></input>
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
