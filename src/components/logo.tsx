import { logo } from "@/lib"
import Image from "next/image"
import Link from "next/link"

type Props = {
  width?: number
  height?: number
  variant?: "light" | "dark"
  showText?: boolean
}
export const Logo = ({ showText = true, width = 45, height = 45, variant = "dark" }: Props) => {
  return (
    <Link href="/" className="flex gap-2 items-center transition-all hover:opacity-85">
      <Image src={logo.main} alt="Abdulrahman Saber's Logo" width={width} height={height} />
    </Link>
  )
}
