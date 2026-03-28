import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-6  shadow">
      <Image
        src="/logo.png"
        alt="finzolo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '50px', height: 'auto' }}
      />
      <div className="flex flex-row gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <button>Let's Talk</button>
    </div>
  )
}