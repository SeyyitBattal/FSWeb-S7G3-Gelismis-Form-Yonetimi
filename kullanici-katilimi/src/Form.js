import React, { useEffect, useState } from "react";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import * as Yup from "yup";

const Form = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kullanıcı giriş yaptı", loginData);
    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    console.log("Log in çıktısı: ", loginData);
  }, [loginData]);

  return (
    <div className="form-container">
      <h2 className="font-italic">Lüfen Bilgilerinizi Giriniz</h2>
      <br />

      <div className="frame">
        <form>
          <FormGroup>
            <Label for="exampleText">Name </Label>
            <Input
              type="tex"
              name="name"
              id="exampleText"
              value={loginData.name}
              onChange={handleInputChange}
              placeholder="Lütfen isminizi giriniz"
            />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={loginData.email}
              onChange={handleInputChange}
              placeholder="Lütfen mail aresi giriniz"
            />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Şifrenizi paylaşmayınız"
            />
          </FormGroup>

          <FormGroup row>
            <Label for="checkbox2" sm={2}></Label>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  id="checkbox2"
                  name="terms"
                  checked={loginData.terms}
                  onChange={handleInputChange}
                />{" "}
                I read and I accept.
              </Label>
            </FormGroup>
          </FormGroup>

          <Button type="submit"> Log in </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
