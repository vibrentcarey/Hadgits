import React from "react";
import {  useFormik } from "formik";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "./Input";
import {  UserHabit } from "../types/Habit";
import Card from "@material-tailwind/react/Card";
import * as Yup from 'yup'

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
    validationSchema: Yup.object({
      title: Yup.string()
      .min(3, "Must have 3 characters")
      .max(30 , "Must be 20 characters or less")
      .required("Title is required"),
      length: Yup.number()
      .max(365, "Streaks cap at 1 year")
      .required("Length is required and must be a number"),
      reason: Yup.string()
      .min(3, "Must have 3 characters")
      .max(30, "Must be 20 characters or less")
      .required("Reason is required"),
      resourceLink: Yup.string()
      .min(5, "Must have 5 characters")
      .required("Link is required"),
      resource: Yup.string()
      .min(5, "Must have 5 characters")
      .required("Resource title is required"),
      
    }),
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
      autoComplete='off'
    >
      <section className="my-2">
        <Input
          value={formik.values.title}
          onChange={formik.handleChange}
          id="title"
          placeholder="Enter the title for this streak"
          error={formik.touched.title && formik.errors.title}
          onBlur={formik.handleBlur}
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
          placeholder="Enter active streak or 0"
          num
          error={formik.touched.length && formik.errors.length}
          onBlur={formik.handleBlur}
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
          error={formik.touched.reason && formik.errors.reason}
          onBlur={formik.handleBlur}

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
          error={formik.touched.resourceLink && formik.errors.resourceLink}
          onBlur={formik.handleBlur}

        >Resource link
        </Input>
      </section>
      <section className="my-2 mb-8">
        <Input
          value={formik.values.resource}
          onChange={formik.handleChange}
          id="resource"
          placeholder="Enter a title for the resource link"
          error={formik.touched.resource && formik.errors.resource}
          onBlur={formik.handleBlur}

        >
          Resource Title
        </Input>
      </section>
      <Button color="purple">Start Habit</Button>
    </form>
    </Card>
  );
}
