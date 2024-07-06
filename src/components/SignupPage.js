import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import "./SignupPage.css"
import Greetings from "./Greetings";

const SignupPage = () => {

  const emailRef = useRef(null),
    passwordRef = useRef(null),
    nationalityRef = useRef(null),
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,

    [emailError, setEmailError] = useState(null),
    [passwordError, setPasswordError] = useState(null),
    [messages, setMessage] = useState(null),

    send = () => {
      let valid = true;

      if (!emailRegex.test(emailRef.current.value)) {
        setEmailError("Invalid email address");
        valid = false;
      } else {
        setEmailError(null);
      }

      if (!passwordRegex.test(passwordRef.current.value)) {
        setPasswordError("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number");
        valid = false;
      } else {
        setPasswordError(null);
      }

      if (valid) {
        setMessage(
          <div>
            <Greetings lang={nationalityRef.current.value} />
            <h1>Your email address is: Valid</h1>
            <h1>Your email address is: {emailRef.current.value}</h1>
          </div>
        );
      }
    }

  return (
    <div>
      <Form className="text-left">
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input

            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            innerRef={emailRef}
            invalid={!!emailError}
          />
          <FormFeedback>
            {emailError}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            Password
          </Label>
          <Input

            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            innerRef={passwordRef}
            invalid={!!passwordError}
          />
          <FormFeedback>
            {passwordError}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">
            Select
          </Label>
          <Input
            id="exampleSelect"
            name="nationality"
            type="select"
            innerRef={nationalityRef}
          >
            <option>
              en
            </option>
            <option>
              de
            </option>
            <option>
              fr
            </option>
          </Input>
        </FormGroup>
        <Button color="primary" onClick={send}>
          Sign up
        </Button>
      </Form>
      {messages}
    </div>
  );
};

export default SignupPage;
