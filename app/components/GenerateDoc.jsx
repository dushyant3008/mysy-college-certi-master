"use client";
import { useState } from "react";
import sendEmail from "../re/email";
import { validate } from "./validate";

const GenerateDoc = () => {
  const [name, setName] = useState("");
  const [eno, setEno] = useState("");
  const [year, setYear] = useState("2024/25");
  const [branch, setBranch] = useState("Computer Engineering");
  const [method, setMethod] = useState("Central Admissions Committee");
  const [fee, setFee] = useState(28000);
  const [is_admitted, setIsAdmitted] = useState("admitted");
  const [gender, setGender] = useState("male");
  const [downUrl , setDownUrl] = useState("")
  const branchOptions = [
    "Computer Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      name,
      eno,
      year,
      branch,
      method,
      fee,
      is_admitted,
      gender,
    };

    if (
      confirm(
        `> Are you sure you want to generate the document?`
      )
    ) {
      data.name = name.toLocaleUpperCase()
      if(validate(data)){
        setDownUrl("loading")
        const response = await fetch("http://160.160.19.13:5000/generate-doc", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const blob = await response.blob();
          const url = await URL.createObjectURL(blob)
          console.log(url)
          setDownUrl(url)
          const buffer = await blob.arrayBuffer();
          const bufferContent = Buffer.from(buffer);
          const base64Content = bufferContent.toString("base64");
          const date = new Date();
          const year = date.getFullYear();
          
          // Send email with the PDF
          sendEmail("fresh" , eno);
        
          // Create a data URL for the PDF
          const pdfData = `data:application/pdf;base64,${base64Content}`;
          // const url = window.URL.createObjectURL(new Blob([blob]));
          // const link = document.createElement("a");
          // link.href = url;
          // link.setAttribute("download", "mysy-form.pdf");
          // document.body.appendChild(link);
          // link.click();
          // link.parentNode.removeChild(link);
          // console.log("Word document generated successfully!");
        } else {
          console.error("Failed to generate Word document");
        }
      } else {
        alert("Fill all fields")
      }
      
    }
  };

  return (
    <div className="flex md:flex-row flex-col mx-5 text-white bg-slate-800 gap-3 rounded-3xl p-5 m-3 drop-shadow-md ">
      <form
        onSubmit={handleSubmit}
        className=" gap-3 p-5 drop-shadow-md md:w-2/3  shadow-black text-balance "
      >
        <div className="text-3xl font-extrabold">
          Fill this form for <br /> MYSY  Fresh certificate
        </div>
        <br />
        Name of student
        <select name="gender" id="" onChange={(e) => setGender(e.target.value)}>
          <option value="male">Mr. </option>
          <option value="female">Ms. </option>
        </select>{" "}
        <input
          placeholder="Your name here"
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="input"
        />{" "}
        <br />
        Enrollment No.{" "}
        <input
          placeholder="Your enrollment number here"
          type="text"
          onChange={(e) => setEno(e.target.value)}
          className="input"
        />{" "}
        <br />
        Branch{" "}
        <select
          name="branch"
          defaultValue={branch[0]}
          onChange={(e) => setBranch(e.target.value)}
          id=""
        >
          {branchOptions.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>{" "}
        <br /> Admitted by{" "}
        <select
          name="admitted-by"
          id=""
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="Central Admissions Committee">ACPDC</option>
          <option value="Vacant Quota(Government)">VQ</option>
        </select>{" "}
        <br />
        You have been
        <select
          name="hosteler"
          id=""
          onChange={(e) => setIsAdmitted(e.target.value)}
        >
          <option value="admitted">admitted</option>
          <option value="not admitted">not admitted</option>
        </select>{" "}
        in our hostel.
        <br />
        <input
          type="submit"
          value="Generate Document"
          className="bg-indigo-700 text-white rounded-xl p-3 m-3"
        />
         {
          downUrl === "" ? "": downUrl !== "loading" ? <a href={`${downUrl}`}  className="bg-green-800 p-3 rounded-xl">Download</a> : "Loading"
        }
      </form>
      <div className="bg-indigo-700 text-white flex flex-col p-5 rounded-xl">
        <div className="text-3xl">Instructions</div>
        <div>Enter your name according to the 10th marksheet.</div>
        <div>Verify the information twice before submitting.</div>
        <br />
        <div className="text-3xl">Note</div>
        <div>Std 10 marksheet.</div>
        <div>School leaving certificate.</div>
        <div>ACPDC admission letter.</div>
        <div>Fee receipt (total 28,000).</div>
        <div>If admitted in hostel, hostel fee receipt.</div>
        <br />
        <hr />
        <br />
        <div>
          Kindly submit these documents,along with the application form
          generated by clicking the button, in admin office.
        </div>
      </div>
    </div>
  );
};

export default GenerateDoc;
