import Link from "next/link"

const textTransform = (text: string) => {
  const words = text.split('-')
  return words.join(' ')
}

export default function Home () {
  const periods = [
    '2023-1',
  ]

  return (
    <div>
      <h1>All</h1>
      <ul>
        {periods.map((period) => (
          <li key={period} className="capitalize">
            <Link href={period}>{period}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}