import { services } from '../lib/data'

export default function Services() {
  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {services.map((s, i) => (
        <div key={i} className="p-4 shadow">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  )
}