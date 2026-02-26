"use client"

import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()
  console.log("Pending:", pending) // Log para verificar o estado de pending

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
    >
      {pending ? "Entrando..." : "Entrar"}
    </button>
  )
}