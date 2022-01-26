import axios from "axios";
import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import HabitCard from "../components/HabitCard";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { Session } from "../types/Session";
import { Context } from "vm";
import PropagateLoader from "react-spinners/PropagateLoader";
import Button from "../components/Button";
import Link from "next/link";
import Card from "@material-tailwind/react/Card";
export default function Home({ session }: Session) {
  // habits and waiting state
  const [habits, setHabits] = useState<any[]>([]);
  const [waiting, setWaiting] = useState(false);
  // create the router
  const router = useRouter();
  // load the habits from the server
  const loadData = async (email: string) => {
    try {
      const response = await axios.get(`/api/badge?user=${email}`);
      setHabits(response.data.message);
    } catch (err) {
      console.log(err);
    }
    setWaiting(false);
  };

  useEffect(() => {
    if (session) {
      setWaiting(true);
      loadData(session.user.email);
    } else {
      router.replace("/auth");
    }
  }, [session, JSON.stringify(habits)]);

  return (
    <PageWrapper>
      <div className="px-4">
      <h1 className="underline tracking-wider decoration-purple-700 text-primaryPurple text-center font-bold text-4xl mt-10">
        Your Habits
      </h1>
      {waiting && (
        <div className="flex flex-col justify-center h-60 items-center">
          <h2 className="mb-2 text-primaryPurple text-lg font-bold">
            Checking For Habits
          </h2>
          <PropagateLoader color="#6B21A8" />
        </div>
      )}
      <div className="flex flex-wrap justify-center items-start h-full pb-6">
        <div className="flex flex-col items-center justify-center mt-20">
          {!waiting && habits.length === 0 && (
            <Card className="flex flex-col items-center">
              <p className="text-primaryPurple text-xl font-bold">
                Can't Find Anything Here 🧐 ...{" "}
              </p>{" "}
              <Link href="/create">
                <p className="text-3xl text-purple-500 font-bold mt-4 hover:animate-pulse cursor-pointer ">
                  Add A Habit
                </p>
              </Link>
            </Card>
          )}
        </div>
        {!waiting &&
          habits &&
          habits.map((habit) => {
            return (
              <HabitCard
                key={habit._id}
                title={habit.title}
                reason={habit.reason}
                resources={habit.resources}
                length={habit.length}
                refresh={loadData}
                user={session.user.email}
                longest={habit.longest}
              />
            );
          })}
      </div>
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
