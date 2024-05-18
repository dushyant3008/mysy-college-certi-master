"use client";
import { useEffect, useState } from "react";
import GenerateDoc from "../components/GenerateDoc";
import GenerateDoc2 from "../components/GenerateDoc2";
export default function Home() {
  const branch = [
    "Computer Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
  ];
  const [gender, setGender] = useState("male");
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(gender);
  }, [gender]);
  return (
    <main className="min-h-screen flex items-center p-5 justify-center">
      {/* <div className="bg-white gap-3 rounded-3xl p-5 drop-shadow-md md:w-[80vw]  shadow-black text-balance text-justify">
        <div className="text-3xl font-extrabold">Fill up the details</div>
        This is to certify that{" "}
        <select name="gender" id="" onChange={(e) => setGender(e.target.value)}>
          <option value="male">Mr. </option>
          <option value="female">Mis. </option>
        </select>{" "}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="input"
        />{" "}
        Enrollment No. <input type="text" className="input" />
        is studying in{" "}
        <select name="branch" defaultValue={branch[0]} id="">
          {branch.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>{" "}
        course of our institute in Diploma in the academic year 2024-25, through
        the{" "}
        <select name="admitted-by" id="">
          <option value="acpdc">Central Admissions Committee</option>
          <option value="vq">Vacant Quota(Government)</option>
        </select>
        in our institute in first year. {gender == "male" ? "Mr." : "Ms."}{" "}
        {name} has not got admission on the NRI seat.{" "}
        {gender == "male" ? "He " : "She "} has paid Rs 28,000/- tuition fees in
        Sem 1. Our institute has self finance hostel facility. Mr./Ms. {name}{" "}
        has been{" "}
        <select name="hosteler" id="">
          <option value="yes">admitted</option>
          <option value="no">not admitted</option>
        </select>{" "}
        in our hostel.
      </div> */}
      <GenerateDoc2 />
    </main>
  );
}
