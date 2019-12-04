import React from "react";
import "./style.scss";

function StatsCourseListItem(props) {
  return (
    <div className="adminclassroom-statscourse-item">
      <div className="adminclassroom-statscourse-item-cell">
        <div className="adminclassroom-statscourse-item-cell-label">
          COURSEWORK NAME
        </div>
        <div className="adminclassroom-statscourse-item-cell-value">
          {props.statsCourseListItem.name}
        </div>
      </div>
      <div className="adminclassroom-statscourse-item-cell">
        <div className="adminclassroom-statscourse-item-cell-label">TOPIC</div>
        <div className="adminclassroom-statscourse-item-cell-value">
          {props.statsCourseListItem.topic}
        </div>
      </div>
      <div className="adminclassroom-statscourse-item-cell">
        <div className="adminclassroom-statscourse-item-cell-label">
          SKILLS DEVELOPED
        </div>
        <div className="adminclassroom-statscourse-item-cell-value">
          {props.statsCourseListItem.skill}
        </div>
      </div>
      <div className="adminclassroom-statscourse-item-cell">
        <div className="adminclassroom-statscourse-item-cell-label">
          STARTED
        </div>
        <div className="adminclassroom-statscourse-item-cell-value">
          {props.statsCourseListItem.start_count}
        </div>
      </div>
      <div className="adminclassroom-statscourse-item-cell">
        <div className="adminclassroom-statscourse-item-cell-label">
          INCOMPLETE
        </div>
        <div className="adminclassroom-statscourse-item-cell-value">
          {props.statsCourseListItem.incomplete_count}
        </div>
      </div>
      <div className="adminclassroom-statscourse-item-cell">
        <div className="adminclassroom-statscourse-item-cell-label">
          COMPLETED
        </div>
        <div className="adminclassroom-statscourse-item-cell-value">
          {props.statsCourseListItem.complete_count}
        </div>
      </div>
    </div>
  );
}

export default StatsCourseListItem;
