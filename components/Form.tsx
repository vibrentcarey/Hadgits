import React from "react";
import {  useFormik } from "formik";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "./Input";
import {  UserHabit } from "../types/Habit";
import Card from "@material-tailwind/react/Card";

interface FormProps {
  email: string;
}

export default function Form({ email }: FormProps) {
  const router = useRouter();
console.log(email);

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
    <Card className='p-8 max-w-lg w-full'>
    <form
      className="flex flex-col"
      onSubmit={formik.handleSubmit}
    >
      <section className="my-2">
        <Input
          value={formik.values.title}
          onChange={formik.handleChange}
          id="title"
          placeholder="Enter the title for this streak"
        >
          Title
        </Input>
      </section>
      <section className="my-2">
        <Input
          type="number"
          max={365}
          min={0}
          value={formik.values.length}
          onChange={formik.handleChange}
          id="length"
          placeholder="Enter active streak if you have one"
          num
        >
          Active Days
        </Input>
      </section>
      <section className="my-2">
        <Input
          value={formik.values.reason}
          onChange={formik.handleChange}
          id="reason"
          placeholder="Enter a reason for this streak"
        >
          Reason
        </Input>
      </section>

      <section className="my-2">
        <Input
          value={formik.values.resourceLink}
          onChange={formik.handleChange}
          id="resourceLink"
          placeholder="Enter a link to a useful resource"
        >Resource link
        </Input>
      </section>
      <section className="my-2 mb-8">
        <Input
          value={formik.values.resource}
          onChange={formik.handleChange}
          id="resource"
          placeholder="Enter a title for the resource link"
        >
          Resource Title
        </Input>
      </section>
      <Button>Start Habit</Button>
    </form>
    </Card>
  );
}
