"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { File } from "buffer";
import "../styles/contactus.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets : ['latin']
});


export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  howDidYouHear: string;
  challange: string;
  budget: string;
  scope: string;
  file: File;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [selectedBudget, setSelectedBudget] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const handleBudgetSelection = (value: string) => {
    setSelectedBudget(value);
  };

  async function onSubmit(data: FormData) {
    data.budget = selectedBudget;
    axios
      .post("http://localhost:3001/send-email", data)
      .then(() => {
        console.log("email sent");
      })
      .catch((error) => {
        alert("An error happened. Please Check console.");
      });
  }

  return (
    <div>
      <div className="banners">
        <h1 className="heroBanner">Let's collaborate</h1>
        <h2 className="smallerHeroBanner">Let's collaborate</h2>
      </div>
      
      <form className="mainDiv" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="First name*"
              className="inputFields"
              {...register("firstName", { required: true })}
            />

            <input
              type="text"
              placeholder="Last name*"
              className="inputFieldsRight"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="inputContainer">
            <input
              type="email"
              placeholder="Email adress*"
              className="inputFields"
              {...register("email", { required: true })}
            />

            <input
              type="tel"
              placeholder="Phone number*"
              pattern="[0-9]{10}"
              className="inputFieldsRight"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Company"
              className="selections"
              {...register("companyName", { required: true })}
            />
          </div>
          <div className="inputContainer">
            <select
              className="selections"
              {...register("howDidYouHear", { required: true })}
              defaultValue="How did you hear about"
            >
              <option value="" disabled>
                How did you hear about us?
              </option>
              <option value="Social media">Social media</option>
              <option value="Word of mouth">Word of mouth</option>
              <option value="Google">Google</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="inputContainer">
            <select
              className="selections"
              {...register("challange", { required: true })}
              defaultValue="What challanges are you trying to solve"
            >
              <option value="" disabled>
                What challange are you trying to solve?
              </option>
              <option value="New product">
                Creating a new digital product
              </option>
              <option value="Scaling">Scaling my business</option>
              <option value="Digital transformation">
                Stepping into digital transformation
              </option>
              <option value="Auditing">
                Auditing and opzimiting my infrastructure/proccesses
              </option>
              <option value="Experts">Building a team of experts</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-3 ">
            What is your budget?
            <div className="buttonLayout">
              <button
                type="button"
                className={`buttons ${
                  selectedBudget === "Up to 50 000 eur" && "selected"
                }`}
                onClick={() => handleBudgetSelection("Up to 50 000 eur")}
              >
                Up to 50 000 eur
              </button>
              <button
                type="button"
                className={`buttons ${
                  selectedBudget === "50 000eur - 100 000 eur" && "selected"
                }`}
                onClick={() => handleBudgetSelection("50 000eur - 100 000 eur")}
              >
                50 000eur - 100 000 eur
              </button>
              <button
                type="button"
                className={`buttons ${
                  selectedBudget === "100 000eur - 250 000 eur" && "selected"
                }`}
                onClick={() =>
                  handleBudgetSelection("100 000eur - 250 000 eur")
                }
              >
                100 000eur-250 000 eur
              </button>
              <button
                type="button"
                className={`buttons ${
                  selectedBudget === "Over 250 000 eur" && "selected"
                }`}
                onClick={() => handleBudgetSelection("Over 250 000 eur")}
              >
                Over 250 000 eur
              </button>
              <button
                type="button"
                className={`buttons ${
                  selectedBudget === "Not sure yet" && "selected"
                }`}
                onClick={() => handleBudgetSelection("Not sure yet")}
              >
                Not sure yet
              </button>
            </div>
            
            <div className="inputContainer">
              <input
                className="selections"
                type="text"
                placeholder="Tell us more about your project and scope*"
                {...register("scope", { required: true })}
              />
            </div>
            
          </div>
          <div style={{
            width: "740px",
          }}>
          <label
              htmlFor="fileInput"
              style={{
                marginTop: "10px",
                left: "100px",
                display: "block",
                width: "100%",
                height: "100px",
                border: "1px solid #dddddd",
                borderRadius: "24px",
                borderStyle: "dashed",
                textAlign: "center",
                lineHeight: "100px",
                cursor: "pointer",
                overflowY: "hidden"
              }}
            >
              <input type="file" id="fileInput" style={{ display: "none" }}/>
              <img className="attachmentsPicture" src="/attachments.png" alt="attachmnets" />
            </label>
          </div>
          <div>
            <button className="buttonSubmit">
              <img className="pictureButton"src="/button.png" alt="send-button" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
