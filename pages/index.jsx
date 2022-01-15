import { colors } from './data/colors'
import BadgeBar from '../components/BadgeBar'
import PageWrapper from '../components/PageWrapper'

export default function Home() {
  const shade = 100
  console.log(colors);
  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen py-2">
        <div className="flex flex-col items-center">
          {colors.map((color) => {
            return (
              <>
                <h1 className={`${color.header} w-full font-bold text-2xl p-2 mt-8 mb-4 shadow-sm text-center text-white max-w-2xl rounded-md`}>
                  {color.level === '🥳' ? color.level : `Badge ${color.level}`}</h1>
                <BadgeBar color={color} />
              </>
            )
          })
          }

        </div>
      </div>
    </PageWrapper>
  )
}
