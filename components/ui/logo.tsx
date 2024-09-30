import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="inline-flex gap-3" href="/" aria-label="Cruip">
      <Image
        className="max-w-none"
        src={LogoImg}
        width={38}
        height={38}
        priority
        alt="Stellar"
      />
      <div className="flex flex-col gap-0">
        <p>Illustrative</p>
        <p>Mathmatics</p>
      </div>
    </Link>
  )
}