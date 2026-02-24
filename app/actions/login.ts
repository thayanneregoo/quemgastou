"use server"

import { redirect } from "next/navigation"

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // 👉 simulação de validação
  if (!email || !password) {
    throw new Error("Campos obrigatórios")
  }

  // aqui entraria banco / auth
  const loginValido = email === "teste@email.com" && password === "123"

  if (!loginValido) {
    throw new Error("Credenciais inválidas")
  }

  // sucesso → redireciona
  redirect("/dashboard")
}