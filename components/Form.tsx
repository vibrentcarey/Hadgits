import React from "react";
import {  useFormik } from "formik";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "./Input";
import {  UserHabit } from "../types/Habit";

interface FormProps {
  email: string;
}

export default function Form({ email }: FormProps) {
  const router = useRouter();

  const createHabit = async (habitInfo: UserHabit) => {
    try {
      const response = await axios.post("/api/badge", habitInfo);
      console.log(response);
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Form Logic & State
  const formik = useFormik({
    initialValues: {
      title: "",
      length: "",
      reason: "",
      resource: "",
      resourceLink: "",
    },
    onSubmit: (values) => {
      const streakInfo = {
        title: values.title,
        length: +values.length,
        reason: [values.reason],
        resources: [
          { title: values.resource, resourceLink: values.resourceLink },
        ],
        longest: +values.length,
        user: email,
      };
      createHabit(streakInfo);
    },
  });
  return (
    <form
      className="p-8 max-w-lg w-full shadow-lg mt-10 flex flex-col border-4 border-black rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <section className="mt-4">
        <Input
          value={formik.values.title}
          onChange={formik.handleChange}
          id="title"
          placeholder="Enter the title for this streak"
          white
        >
          Title
        </Input>
      </section>
      <section className="mt-4">
        <Input
          type="number"
          max={365}
          min={0}
          value={formik.values.length}
          onChange={formik.handleChange}
          id="length"
          placeholder="Enter active streak if you have one"
          white
        >
          Active Days
        </Input>
      </section>
      <section className="mt-4">
        <Input
          value={formik.values.reason}
          onChange={formik.handleChange}
          id="reason"
          placeholder="Enter a reason for this streak"
          white
        >
          Reason
        </Input>
      </section>

      <section className="mt-4">
        <label className="text-white font-bold text-2xl" htmlFor="resourceLink">
          Resource Link
        </label>
        <br />
        <textarea
          className="w-full mt-2 h-24 rounded-lg outline-none text-white bg-primaryGrey border-4 border-black px-2 py-1 text-lg"
          value={formik.values.resourceLink}
          onChange={formik.handleChange}
          id="resourceLink"
          placeholder="Enter a link to a useful resource"
        />
      </section>
      <section className="mt-4">
        <Input
          value={formik.values.resource}
          onChange={formik.handleChange}
          id="resource"
          placeholder="Enter a title for the resource link"
          white
        >
          Resource Title
        </Input>
      </section>
      <Button>Start Habit</Button>
    </form>
  );
}
