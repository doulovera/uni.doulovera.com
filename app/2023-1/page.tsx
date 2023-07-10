import Link from "next/link"

const textTransform = (text: string) => {
  const words = text.split('-')
  return words.join(' ')
}

export default function Page2023_1 () {
  const courses = [
    'taller-de-programacion',
  ]

  return (
    <div>
      <h1>2023-1</h1>
      <ul>
        {courses.map((course) => (
          <li key={course} className="capitalize">
            <Link href={`/2023-1/${course}`}>{textTransform(course)}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}