import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import { useAlert } from "react-alert";
import { Col, Row } from "react-bootstrap";
import "./Home.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

function HomePage() {
  const { username } = useContext(LoginContext);
  const [user, setuser] = username;
  const alert = useAlert();

  useEffect(() => {
    alert.show(`welcome ${user}    
       This is our Stackroot Home page`);
  }, [user]);
  return (
    <MDBCard className="maincard">
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png"
            alt="..."
            className="reactimg"
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody className="cardbody">
            <MDBCardTitle>{user}</MDBCardTitle>
            <MDBCardText>
              Position:{" "}
              <span className="font-weight-bold">React Js Developer</span>
            </MDBCardText>
            <MDBCardText>Qualification: B-TECH</MDBCardText>
            <MDBCardText>Role: Software Developer</MDBCardText>
            <MDBCardText>
              Company:
              <span className="font-weight-bold">Osperb Innovations</span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
export default HomePage;
