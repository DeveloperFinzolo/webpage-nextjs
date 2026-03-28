export default function ContactForm() {
  return (
    <form className="grid grid-cols-2 gap-4">
      <input placeholder="First Name" className="border p-2"/>
      <input placeholder="Last Name" className="border p-2"/>
      <input placeholder="Email" className="border p-2 col-span-2"/>
      <textarea placeholder="Message" className="border p-2 col-span-2"/>
      <button className="bg-green-500 text-white p-2 col-span-2">Submit</button>
    </form>
  )
}