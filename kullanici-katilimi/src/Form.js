import React, { useEffect, useState } from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  List,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import * as Yup from "yup";

const kullanicilar = [];
let yeniobje = [];
const Form = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [isFormValid, setFormValid] = useState(false);
  const [kimKullanici, setKimKullanici] = useState([]);

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Adını bilmek zorundayım")
      .min(3, "İsmin 3 harften kısa olamaz herhalde"),
    email: Yup.string()
      .email("Geçerli bir mail girer misin?")
      .required("Mail olmadan geçmene izin veremem :("),
    password: Yup.string()
      .required("Hop hemşehrim nereye?")
      .min(6, "Güçlü parola hayat kurtarır"),
    terms: Yup.boolean().oneOf([true], "Şartları okumasanda kabul etmelisin"),
    // required isn't required for checkboxes.
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kullanıcı giriş yaptı", loginData);
    kullanicilar.push(loginData);
    console.log("Kullanıcılar Listesi: ", kullanicilar);
    axios
      .post("https://reqres.in/api/users", {
        kullanicilar,
      })
      .then(function (response) {
        console.log("Gelen veri: ", response.data.kullanicilar);
        setKimKullanici(response.data.kullanicilar);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
    Yup.reach(formSchema, name)
      .validate(type === "checkbox" ? checked : value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    console.log("Log in çıktısı: ", loginData);
    formSchema.isValid(loginData).then((valid) => setFormValid(valid));
  }, [loginData]);

  useEffect(() => {
    console.error("Form validation error state updated", formErrors);
  }, [formErrors]);

  return (
    <div className="form-container">
      <h2 className="font-italic">Lüfen Bilgilerinizi Giriniz</h2>
      <br />
      <div className="big-container">
        <div className="frame1">
          <form>
            <FormGroup>
              <Label for="exampleText">Name </Label>
              <Input
                type="tex"
                name="name"
                id="exampleText"
                value={loginData.name}
                invalid={formErrors.name}
                onChange={handleInputChange}
                placeholder="Lütfen isminizi giriniz"
              />
              <FormFeedback>{formErrors.name}</FormFeedback>
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
                invalid={formErrors.email}
                onChange={handleInputChange}
                placeholder="Lütfen mail aresi giriniz"
              />
              <FormFeedback>{formErrors.email}</FormFeedback>
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
                invalid={formErrors.password}
                onChange={handleInputChange}
                placeholder="Şifrenizi paylaşmayınız"
              />
              <FormFeedback>{formErrors.password}</FormFeedback>
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
                    invalid={formErrors.terms}
                    onChange={handleInputChange}
                  />
                  I read and I accept.
                </Label>
                <FormFeedback>{formErrors.terms}</FormFeedback>
              </FormGroup>
            </FormGroup>

            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Log in
            </Button>
          </form>
        </div>
        <div className="frame1">
          Kullanıcılarımız:
          <hr />
          {kimKullanici.map((kullanici, i) => (
            <div>
              <div number={i}>
                Kullanıcı-{i + 1} İsmi: {kullanici.name}
              </div>
              <div number={i}>
                Kullanıcı-{i + 1} Maili: {kullanici.email}
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
