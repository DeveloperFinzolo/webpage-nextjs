import { team } from '../lib/data'

export default function Team() {
  return (
    <div className="grid grid-cols-2 gap-4 p-10">
      {team.map((t, i) => (
        <div key={i} className="p-4 shadow">
          <h4>{t.name}</h4>
          <p>{t.role}</p>
        </div>
      ))}
    </div>
  )
}