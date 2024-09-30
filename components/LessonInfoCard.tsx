type Props = {
  lessonInfo: {
    lesson: number
    title: string
    subtitle: string
  }
}

export default function LessonInfoCard({ lessonInfo }: Props) {
  return (
    <div className="relative px-5 py-3 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-100 before:bg-slate-300 before:opacity-10 before:rounded-xl max-w-xl mb-3">
      <div className="flex items-center space-x-8">
        <h4 className="inline-flex text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200">
          {lessonInfo.lesson}
        </h4>
        <div className="grow">
          <div className="font-semibold text-lg text-slate-100">
            {lessonInfo.title}
          </div>
          <div className="text-sm text-slate-400 font-medium">
            {lessonInfo.subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}
