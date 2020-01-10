import React, { useEffect } from "react";
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
import RadioGroup from "antd/lib/radio/group";
<<<<<<< HEAD
=======
import { Radio } from "antd";
>>>>>>> c41c074eb96b81ada901c3395239777daeb85708

class AdminEditCoursePage3 extends React.Component {
  constructor(props) {
    console.log(props.page);
    super(props);
    this.state = {
<<<<<<< HEAD
      check: true
=======
      selectedOption: 'answer1'
>>>>>>> c41c074eb96b81ada901c3395239777daeb85708
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
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

  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
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
                      <div className="adminclassroom-editcoursepage-section2 mt-5">
                        <div className="adminclassroom-editcoursepage-section2-title">
                          TITLE ONE
                        </div>
                        <div className="adminclassroom-editcoursepage-section2-desp mt-5">
                          This role will play an important role in growing our
                          international network of content creators. Working
                          within a small team, you’ll execute on a range of
                          campaigns that will attract a high calibre of
                          freelance talent into our Network. You’ll then use
                          your organisation skills to ensure all applicants are
                          screened in an efficient yet professional manner. The
                          right person for this role gets excited about running
                          large-scale talent attraction campaigns, but also
                          enjoys directly sourcing and approaching candidates
                          for specific project briefs.
                        </div>
                      </div>
                      <div className="course3-question-section">
                        <div>
                          <div className="course3-question-section-title">
                            Question1
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                              <RadioGroup>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer1' checked={this.state.selectedOption === 'answer1'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer2' checked={this.state.selectedOption === 'answer2'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer3' checked={this.state.selectedOption === 'answer3'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                <Radio value='answer4' checked={this.state.selectedOption === 'answer4'} onChange={this.handleOptionChange}></Radio>
                                <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                              </RadioGroup>
                          </div>
                        </div>
                        <div>
                          <div className="course3-question-section-title">
                            Question2
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                              <RadioGroup>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer1' checked={this.state.selectedOption === 'answer1'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer2' checked={this.state.selectedOption === 'answer2'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer3' checked={this.state.selectedOption === 'answer3'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                <Radio value='answer4' checked={this.state.selectedOption === 'answer4'} onChange={this.handleOptionChange}></Radio>
                                <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                              </RadioGroup>
                          </div>
                        </div>
                        <div>
                          <div className="course3-question-section-title">
                            Question3
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                              <RadioGroup>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer1' checked={this.state.selectedOption === 'answer1'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer2' checked={this.state.selectedOption === 'answer2'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer3' checked={this.state.selectedOption === 'answer3'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                <Radio value='answer4' checked={this.state.selectedOption === 'answer4'} onChange={this.handleOptionChange}></Radio>
                                <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                              </RadioGroup>
                          </div>
                        </div>
                        <div>
                          <div className="course3-question-section-title">
                            Question4
<<<<<<< HEAD
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                            <div className="course3-question-section-answer">
                              <input type="checkbox" />
                              <label className="pl-3">
                                How many people have been apart of this project?
                              </label>
                            </div>
                            <div className="course3-question-section-answer">
                              <input type="checkbox" />
                              <label className="pl-3">
                                How many people have been apart of this project?
                              </label>
                            </div>
                            <div className="course3-question-section-answer">
                              <input type="checkbox" />
                              <label className="pl-3">
                                How many people have been apart of this project?
                              </label>
                            </div>
                            <div className="course3-question-section-answer">
                              <input type="checkbox" />
                              <label className="pl-3">
                                How many people have been apart of this project?
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="course3-question-section-title">
                            Question5
=======
>>>>>>> c41c074eb96b81ada901c3395239777daeb85708
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                              <RadioGroup>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer1' checked={this.state.selectedOption === 'answer1'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer2' checked={this.state.selectedOption === 'answer2'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                  <Radio value='answer3' checked={this.state.selectedOption === 'answer3'} onChange={this.handleOptionChange}></Radio>
                                  <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                                <div className="course3-question-section-answer">
                                <Radio value='answer4' checked={this.state.selectedOption === 'answer4'} onChange={this.handleOptionChange}></Radio>
                                <label className="pl-3">How many people have been apart of this project?</label>
                                </div>
                              </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="adminclassroom-coursestate-pagenation mt-5 mb-5">
                      <Link to="/admin-classroom-editcoursepage2">
                        <div className="adminclassroom-editcoursepage-nextbtn">
                          PREV
                        </div>
                      </Link>
                      <div className="adminclassroom-editcoursepage-nextbtn">
                        NEXT
                      </div>
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

export default AdminEditCoursePage3;
