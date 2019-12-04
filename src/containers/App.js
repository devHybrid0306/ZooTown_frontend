import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  About,
  Event,
  Blog,
  EmployerPage,
  EmployerManageSingleJob,
  Jobs,
  EmployerJobs,
  StudentPage,
  ClassroomPage,
  Profile,
  MyJobsDetail,
  StudentReviews,
  MyJobs,
  MyPaymentMethods,
  StudentEditProfile,
  StudentMembership,
  AdminManagement,
  AdminSetting,
  AdminPaymentArea,
  ManageBlog,
  EditBlog,
  StudentInvoice,
  ManageCompany,
  ManageRecruiters,
  ManageStudents,
  EmployerProfile,
  StudentChangePass
} from "./index";
import AdminCourseWorkStats from "./../containers/admin/AdminClassroom/coursework_stats";
import AdminPublishedCourseWorks from "./../containers/admin/AdminClassroom/published_courseworks";
import CoursePage from "./classroom/CoursePage";
import { Home } from "./index";
import AdminApp from "../containers/admin/App";

function NotFound() {
  return (
    <div>
      <h1>404 - NOT FOUND</h1>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Root-App">
        <Switch>
          <Route path="/admin" component={AdminApp} />
          <Route
            path="/manage-company"
            component={() => <ManageCompany page="managecompany" />}
          />
          <Route
            path="/admin-paymentarea"
            component={() => <AdminPaymentArea page="adminpaymentarea" />}
          />
          <Route
            path="/manage-blogs"
            component={() => <ManageBlog page="manageblog" />}
          />
          <Route
            path="/edit-blog"
            component={() => <EditBlog page="manageblog" />}
          />
          <Route
            path="/admin-management"
            component={() => <AdminManagement page="adminmanagement" />}
          />
          <Route
            path="/manage-recruiters"
            component={() => <ManageRecruiters page="managerecruiters" />}
          />
          <Route
            path="/manage-students"
            component={() => <ManageStudents page="managestudent" />}
          />
          <Route
            path="/admin-settings"
            component={() => <AdminSetting page="adminsetting" />}
          />
          <Route
            path="/admin-classroom-courseworkstats"
            component={() => (
              <AdminCourseWorkStats page="admincourseworkstats" />
            )}
          />
          <Route
            path="/admin-classroom-publishedcourseworks"
            component={() => (
              <AdminPublishedCourseWorks page="adminpublishedcourseworks" />
            )}
          />
          <Route exact path="/" component={() => <Home page="students" />} />
          <Route path="/students" component={() => <Home page="students" />} />
          <Route
            path="/studentpage"
            component={() => <StudentPage page="studentpage" />}
          />
          <Route
            path="/classroompage"
            component={() => <ClassroomPage page="classroompage" />}
          />
          <Route
            path="/coursepage"
            component={() => <CoursePage page="coursepage" />}
          />
          <Route
            path="/studentprofile"
            component={() => <Profile page="studentprofile" />}
          />
          <Route
            path="/studentreviews"
            component={() => <StudentReviews page="studentreviews" />}
          />
          <Route
            path="/employerprofile"
            component={() => <EmployerProfile page="employerprofile" />}
          />
          <Route
            path="/employerjobs"
            component={() => <EmployerJobs page="employerjobs" />}
          />
          <Route
            path="/employermanagejob"
            component={() => (
              <EmployerManageSingleJob page="employermanagejob" />
            )}
          />
          <Route
            path="/employerpage"
            component={() => <EmployerPage page="employerpage" />}
          />
          <Route
            path="/my-jobs-detail"
            component={() => <MyJobsDetail page="my-jobs-detail-student" />}
          />
          <Route
            path="/mypaymentmethods"
            component={() => (
              <MyPaymentMethods page="mypaymentmethodsstudent" />
            )}
          />
          <Route
            path="/edit-profile"
            component={() => <StudentEditProfile page="edit-profile-student" />}
          />
          <Route
            path="/my-memberships"
            component={() => <StudentMembership page="my-memberships" />}
          />
          <Route
            path="/my-invoices"
            component={() => <StudentInvoice page="my-invoices-student" />}
          />
          <Route
            path="/change-password"
            component={() => <StudentChangePass page="change-password" />}
          />
          <Route path="/my-jobs" component={() => <MyJobs page="my-jobs" />} />
          <Route path="/employer" component={() => <Home page="employer" />} />
          <Route path="/about-us" component={() => <About page="students" />} />
          <Route path="/about" component={() => <About page="employer" />} />
          <Route path="/events" component={() => <Event page="students" />} />
          <Route path="/jobs" component={() => <Jobs page="students" />} />
          <Route path="/blog" component={() => <Blog page="students" />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
