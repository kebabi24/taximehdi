import React, { useState, useEffect } from "react";
import map from "../assets/map.png";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    objet: " ",
    email: " ",
    phone: " ",
    message: "",
  });
  const [succes, setSucces] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const { objet, email, phone, message } = formData;
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = () => {
    fetch("http://207.180.222.144:3024/api/v1/sendMail", {
      method: "POST",
      body: JSON.stringify({
        formData,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSucces(true);
        setFormData({ objet: " ", email: " ", phone: " ", message: "" });

        setTimeout(() => setSucces(false), 5000);
      })
      .catch((err) => {
        console.log(err.message);
        setFailed(true);
        setTimeout(() => setFailed(false), 5000);
      });
  };
  return (
    <div
      className="md:px-14 px-4 py-8 max-w-screen-2x1 mx-auto bg-blackBlack overflow-hidden"
      id="contact"
    >
      <div className="my-24 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="">
          <div className="mb-4">
            <p className="text-bgWhite">
              Adresse : Coopérative immobilière El Anouar N° 10, Reghaia, Alger{" "}
            </p>
            <p className="text-bgWhite">Email: contact@acsiome.tech</p>
            <p className="text-bgWhite">web: www.acsiome.tech</p>
            <p className="text-bgWhite">Mob: 0560625473/0560613470</p>
          </div>
          <img className="flex self-center" src={map} alt="" />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug ">
            Nous contacter
          </h1>
          <div className="flex max-w-md flex-col gap-4">
            <div>
              {succes && (
                <h3 className="text-white">Message envoyé avec succés</h3>
              )}
              {failed && <h3 className="text-white">Message non envoyé</h3>}
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-white leading-snug "
                  htmlFor="base"
                  value="Object:*"
                />
              </div>
              <TextInput
                id="base"
                sizing="md"
                type="text"
                name="objet"
                value={objet}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-white leading-snug "
                  htmlFor="base"
                  value="Email:*"
                />
              </div>
              <TextInput
                id="base"
                name="email"
                sizing="md"
                type="text"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-white leading-snug "
                  htmlFor="base"
                  value="Numéro de téléphone:*"
                />
              </div>
              <TextInput
                id="base"
                sizing="md"
                type="text"
                name="phone"
                value={phone}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-white leading-snug "
                  htmlFor="large"
                  value="Message"
                />
              </div>
              <Textarea
                id="large"
                rows={5}
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <Button type="submit" onClick={onSubmit}>
              Envoyer un message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
