import { Routes, Route } from "react-router";

import { Header } from "./Pages/Home/Header/Header";
import { Login } from "./Pages/Login/Login";
import { SignupStudent } from "./Pages/Signup/SignupStudent";
import { SignupCompany } from "./Pages/Signup/SignupCompany";
import { SignupCommunity } from "./Pages/Signup/SignupCommunity";
import { Join } from "./Pages/Join/Join";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserDashboard } from "./Pages/Dashboard/UserDashboard";
import { Dashboard } from "./Components/UserDashboard/Dashboard/Dashboard";
import { Recruitment } from "./Components/UserDashboard/Recruitment/Recruitment";
import { Internship } from "./Components/UserDashboard/Internship/Internship";
import { Networking } from "./Components/UserDashboard/Networking/Networking";
import { Events } from "./Components/UserDashboard/Events/Events";
import { Communities } from "./Components/UserDashboard/Communities/Communities";
import { CommunitiesDetail } from "./Components/UserDashboard/Communities/CommunitiesDetail/CommunitiesDetail";
import { CompanyDashboard } from "./Pages/Dashboard/CompanyDashboard";
import { ComDashboard } from "./Components/CompanyDashboard/ComDashboard/ComDashboard";
import { ComJoborInternship } from "./Components/CompanyDashboard/ComJoborInternship/ComJoborInternship";
import { CreateJoborInternship } from "./Components/CompanyDashboard/ComJoborInternship/CreateJoborInternship/CreateJoborInternship";
import { ComMvpProduct } from "./Components/CompanyDashboard/ComMvpProduct/ComMvpProduct";
import { ComSponsorPool } from "./Components/CompanyDashboard/ComSponsorPool/ComSponsorPool";
import { ComTechEvents } from "./Components/CompanyDashboard/ComTechEvents/ComTechEvents";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = "http://localhost:8080/auth/login/success";
      const response = await fetch(url, { credentials: "include" });
      const data = await response.json();
      console.log(data);
      setUser(data.user._json);
      console.log("data->", data.user);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const getUser = async () => {
  //   try {
  //     const url = `http://localhost:8080/auth/login/success`;
  //     const { data } = await axios
  //       .get(url, { withCredentails: true })
  //       .then((result) => {
  //         console.log(result.data);
  //       });
  //     setUser(data.user._json);
  //     console.log("data->", data.user);
  //   } catch (error) {
  //     if (error.response) {
  //       console.log("Data:", error.response.data);
  //       console.log("Status:", error.response.status);
  //       console.log("Headers:", error.response.headers);
  //     } else if (error.request) {
  //       console.log("Request:", error.request);
  //     } else {
  //       console.error("Error:", error.message);
  //     }
  //   }
  // };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header user={user} setUser={setUser} />} />
        <Route path="/aboutus" element={<></>} />
        <Route path="/join" element={<Join />} />
        <Route path="/howitworks" element={<></>} />
        <Route path="/services" element={<></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/join/signupstudent" element={<SignupStudent />} />
        <Route path="/join/signupcommunity" element={<SignupCommunity />} />
        <Route path="/join/signupcompany" element={<SignupCompany />} />
        <Route path="/userdashboard" element={<UserDashboard />}>
          <Route path="dashboard" component={<Dashboard />} />
          <Route path="recruitment" component={<Recruitment />} />
          <Route path="internship" component={<Internship />} />
          <Route path="networking" component={<Networking />} />
          <Route path="events" component={<Events />} />
          <Route path="communities/:id" component={<CommunitiesDetail />} />
          <Route path="communities" component={<Communities />}></Route>
        </Route>
        <Route path="/companydashboard" element={<CompanyDashboard />}>
          <Route path="dashboard" element={<ComDashboard />} />
          <Route
            path="joborinternship/createJoborIntern"
            element={<CreateJoborInternship />}
          />
          <Route path="joborinternship" element={<ComJoborInternship />}>
            <Route
              path="createJoborIntern"
              element={<CreateJoborInternship />}
            />
          </Route>
          <Route path="product" element={<ComMvpProduct />}></Route>
          <Route path="sponsorpool" element={<ComSponsorPool />}></Route>
          <Route path="techevents" element={<ComTechEvents />}></Route>
        </Route>

        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </>
  );
}

export default App;
