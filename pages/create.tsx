import {  Router,  useRouter } from "next/router";
import React, {  useEffect,  useState } from "react";
import AuthForm from "../components/AuthForm";
import Form from "../components/Form";
import PageWrapper from "../components/PageWrapper";
import {  getSession } from "next-auth/client";
import { Context } from "vm";
import {Session} from '../types/Session'

export default function Create({ session }: Session) {
  const [email, setEmail] = useState("");
  const { user } = session;
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.replace("/auth");
    } else {
      setEmail(user.email);
    }
  }, [session]);
  return (
    <PageWrapper>
      <div className="flex flex-col mt-10 sm:mt-20 items-center">
      <h1 className='underline decoration-purple-700 text-purple-600 text-center font-bold text-4xl mb-8'>
        Start A New Habit
        </h1>

        <Form email={email} />
      </div>
    </PageWrapper>
  );
}

export async function getServerSideProps(ctx: Context) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
