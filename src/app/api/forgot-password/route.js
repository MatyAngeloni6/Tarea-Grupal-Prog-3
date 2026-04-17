import crypto from "crypto";
import { users, resetTokens } from "@/lib/db";
import { Resend } from "resend";

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      console.error("ERROR PARSE JSON:", e);
      return Response.json({ error: "Body inválido" }, { status: 400 });
    }

    const { email } = body;

    if (!email) {
      return Response.json({ error: "Email requerido" }, { status: 400 });
    }

    // 🔍 Validar usuario
    const user = users.find((u) => u.email === email);

    if (!user) {
      return Response.json(
        { error: "No existe un usuario con ese email" },
        { status: 404 }
      );
    }

    // 🔐 Token
    const token = crypto.randomBytes(32).toString("hex");
    const expiry = Date.now() + 1000 * 60 * 15;

    resetTokens.push({ email, token, expiry });

    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    console.log("TOKEN GENERADO:", token);
    console.log("RESET LINK:", resetLink);

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject: "Recuperar contraseña",
          html: `<a href="${resetLink}">Resetear contraseña</a>`,
        });

        console.log("MAIL ENVIADO");
      } catch (mailError) {
        console.error("ERROR RESEND:", mailError);
      }
    } else {
      console.warn("⚠️ SIN RESEND_API_KEY → modo dev");
    }

    return Response.json({
      message: "Proceso ejecutado correctamente",
    });

  } catch (error) {
    console.error("🔥 ERROR GENERAL:", error);
    return Response.json(
      { error: "Error interno REAL (ver consola)" },
      { status: 500 }
    );
  }
}