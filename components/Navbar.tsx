export default function Navbar() {
  return (
    <div className="flex justify-between p-4 shadow">
      <h1>Financ</h1>
      <div>
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}