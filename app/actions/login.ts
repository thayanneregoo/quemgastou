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
  const loginValido = email === "joana@example.com" && password === "1234"

  if (!loginValido) {   
    console.log("Login falhou para:") // Log para depuração
    return {
      error: "Email ou senha inválidos",
   
    }
  }

  // sucesso → redireciona
  redirect("/home")
}