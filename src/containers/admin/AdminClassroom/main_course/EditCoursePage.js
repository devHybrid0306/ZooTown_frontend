import React from "react";
import { Link } from "react-router-dom";
import { AdminHeader } from "./../../NavBar/index";
import { Footer } from "./../../../../components/index";
import { AdminSideBar } from "./../../../../components/admin";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  CardHeader,
  CardFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import classnames from "classnames";
import { graphql } from "react-apollo";
import ImgCheck from "./../../../../assets/membership.png";
import ImgAdd from "./../../../../assets/addbtn.png";
import { connect } from "react-redux";
import NotificationSystem from "react-notification-system";
import "./style.scss";

const desp =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class AdminEditCoursePage extends React.Component {
  constructor(props) {
    console.log(props.page);
    super(props);

    this.state = {
      file: ""
    };
    this.myInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmEmail = this.handleConfirmEmail.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }
  handleEmail(e) {
    console.log(e.target.value);
  }
  handlePassword(e) {
    console.log(e.target.value);
  }
  handleConfirmEmail(e) {
    console.log(e.target.value);
  }
  handleConfirmPassword(e) {
    console.log(e.target.value);
  }

  handleChange(event) {
    this.setState({
      file: event.target.files[0]
        ? URL.createObjectURL(event.target.files[0])
        : this.state.file
    });
    document.getElementById("uploadVideo").style.visibility = "visible";
    document.getElementById("label").style.visibility = "hidden";
  }

  triggerClick = () => {
    this.myInput.current.click();
  };

  notificationSystem = React.createRef();

  addNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: <h5>Success</h5>,
      level: "success",
      children: <h7>Page has been saved!</h7>
    });
  };

  render() {
    const { page } = this.props;
    return (
      <div>
        <AdminHeader page={page} />
        <main ref="main">
          <section>
            <Container fluid>
              <Row>
                <AdminSideBar page={page} />
                <div className="col-md-9">
                  <div className="adminclassroom-editcoursepage-header">
                    <div className="adminclassroom-editcoursepage-header-title">
                      ZOO TOWN TASKS CLASSROOM
                    </div>
                    <div className="adminclassroom-editcoursepage-editmodebtn">
                      Edit mode
                    </div>
                  </div>
                  <div className="adminclassroom-coursestate">
                    <div className="adminclassroom-coursestate-listtitle">
                      <Link to="/admin-classroom-publishedcourseworks">
                        <div className="adminclassroom-coursestate-listtitle-itemoff">
                          PUBLISHED COURSEWORKS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-courseworkstats">
                        <div className="adminclassroom-coursestate-listtitle-itemoff">
                          COURSEWORK STATS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-createcoursework">
                        <div className="adminclassroom-published-listtitle-itemon">
                          CREATE A COURSEWORK
                        </div>
                      </Link>
                    </div>
                    <div className="col mt-3 mb-3">
                      <div>
                        <div className="adminclassroom-editcoursepage-skilltitle">
                          {this.props.courseitem.coursename}
                        </div>
                        <div className="adminclassroom-editcoursepage-savepagebtnContainer">
                          <div
                            className="adminclassroom-editcoursepage-savepagebtn"
                            onClick={this.addNotification}
                          >
                            <img
                              src={ImgCheck}
                              style={{ width: 42, height: 39 }}
                            />
                            <div className="adminclassroom-editcoursepage-savepagebtn-label">
                              SavePage
                            </div>
                          </div>
                          <NotificationSystem ref={this.notificationSystem} />
                        </div>
                      </div>
                      <div className="adminclassroom-editcoursepage-section1 mt-5">
                        <div className="adminclassroom-editcoursepage-section1-video">
                          Video
                        </div>
                        <div className="adminclassroom-editcoursepage-section1-upload">
                          <div>
                            <img src={ImgAdd} onClick={this.triggerClick} />
                            {
                              <input
                                type="file"
                                onChange={this.handleChange}
                                style={{ display: "none" }}
                                ref={this.myInput}
                              />
                            }
                          </div>
                          <div
                            className="adminclassroom-editcoursepage-section1-upload-label ml-3"
                            id="label"
                          >
                            Upload Video
                          </div>
                          <video
                            className="adminclassroom-editcoursepage-section1-upload-video"
                            src={this.state.file}
                            id="uploadVideo"
                            style={{
                              visibility: "hidden",
                              width: "1000px",
                              height: "400px"
                            }}
                            controls
                          />
                        </div>
                      </div>
                      <div className="adminclassroom-editcoursepage-section2 mt-5">
                        <div className="adminclassroom-editcoursepage-section2-title">
                          <input
                            type="text"
                            className="adminclassroom-editcoursepage-section2-title"
                            placeholder="Title1"
                            maxLength="50"
                          />
                        </div>
                        <div className="adminclassroom-editcoursepage-section2-desp mt-5">
                          <textarea
                            className="adminclassroom-editcoursepage-section2-desp"
                            placeholder={desp}
                            maxLength="1000"
                          ></textarea>
                        </div>
                      </div>
                      <div className="adminclassroom-editcoursepage-section2 mt-5">
                        <div className="adminclassroom-editcoursepage-section2-title">
                          <input
                            type="text"
                            className="adminclassroom-editcoursepage-section2-title"
                            placeholder="Title2"
                            maxLength="50"
                          />
                        </div>
                        <div className="adminclassroom-editcoursepage-section2-desp mt-5">
                          <textarea
                            className="adminclassroom-editcoursepage-section2-desp"
                            placeholder={desp}
                            maxLength="1000"
                          ></textarea>
                        </div>
                      </div>
                      <div className="adminclassroom-editcoursepage-section2 mt-5">
                        <div className="adminclassroom-editcoursepage-section2-title">
                          <input
                            type="text"
                            className="adminclassroom-editcoursepage-section2-title"
                            placeholder="Title3"
                            maxLength="50"
                          />
                        </div>
                        <div className="adminclassroom-editcoursepage-section2-desp mt-5">
                          <textarea
                            className="adminclassroom-editcoursepage-section2-desp"
                            placeholder={desp}
                            maxLength="1000"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="adminclassroom-coursestate-pagenation mt-5 mb-5">
                      <div className="adminclassroom-editcoursepage-nextbtn">
                        PREV
                      </div>
                      <Link to="/admin-classroom-editcoursepage2">
                        <div className="adminclassroom-editcoursepage-nextbtn">
                          NEXT
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </section>
        </main>
        <Footer page={this.props.page} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courseitem: state.course.item
});

export default connect(mapStateToProps, {})(AdminEditCoursePage);
