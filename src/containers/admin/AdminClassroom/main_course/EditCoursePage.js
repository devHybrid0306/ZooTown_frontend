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
import "./style.scss";
import TextArea from "antd/lib/input/TextArea";

const desp =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class AdminEditCoursePage extends React.Component {
  constructor(props) {
    console.log(props.page);
    super(props);
    this.state = {};
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
                        <div className="adminclassroom-coursestate-listtitle-itemon">
                          PUBLISHED COURSEWORKS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-courseworkstats">
                        <div className="adminclassroom-coursestate-listtitle-itemoff">
                          COURSEWORK STATS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-createcoursework">
                        <div className="adminclassroom-published-listtitle-itemoff">
                          CREATE A COURSEWORK
                        </div>
                      </Link>
                    </div>
                    <div className="col mt-3 mb-3">
                      <div>
                        <div className="adminclassroom-editcoursepage-skilltitle">
                          HTML & CSS
                        </div>
                        <div className="adminclassroom-editcoursepage-savepagebtnContainer">
                          <div className="adminclassroom-editcoursepage-savepagebtn">
                            <img
                              src={ImgCheck}
                              style={{ width: 42, height: 39 }}
                            />
                            <div className="adminclassroom-editcoursepage-savepagebtn-label">
                              SavePage
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="adminclassroom-editcoursepage-section1 mt-5">
                        <div className="adminclassroom-editcoursepage-section1-video">
                          Video
                        </div>
                        <div className="adminclassroom-editcoursepage-section1-upload">
                          <img src={ImgAdd} />
                          <div className="adminclassroom-editcoursepage-section1-upload-label ml-3">
                            Upload Video
                          </div>
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

export default AdminEditCoursePage;
