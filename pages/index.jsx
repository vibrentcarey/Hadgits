import Badge from "../components/Badge";
import { pink, purple, red } from './data/colors'

export default function Home() {
  const shade = 100
  return (
    <div className="flex flex-col min-h-screen py-2">
      <div className="flex">
        {purple.map((shade, day) => {
          return <Badge style={shade} day={day} />
        })}
      </div>
      <div className="flex">
        {pink.map((shade, day) => {
          return <Badge style={shade} day={day} />
        })}
      </div>

      <div className="flex">
        {red.map((shade, day) => {
          return <Badge style={shade} day={day} />
        })}
      </div>

    </div>
  );
}
