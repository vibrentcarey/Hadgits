import { colors } from './data/colors'
import BadgeBar from '../components/BadgeBar'

export default function Home() {
  const shade = 100
  console.log(colors);
  return (
    <div className="flex flex-col min-h-screen py-2">
      <div className="flex flex-col">
        {colors.map((color) => {
          return (
            <>
              <h1 className={`${color.header} font-bold text-xl p-2 my-2`}>
              {color.level === '🥳' ? color.level : `Badge ${color.level}`}</h1>
              <BadgeBar color={color}/>
            </>
          )
        })
        }

      </div>
    </div>
  )
}
