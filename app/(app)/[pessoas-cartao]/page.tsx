'use client'

import { usePathname } from "next/navigation"

export default function Example() {
    const pathname = usePathname()
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">{pathname}</div>

  )}