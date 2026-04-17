import { users, resetTokens } from "@/lib/db";

export async function POST(req) {
  try {
    const { token, password } = await req.json();

    if (!token) {
      return Response.json({ error: "Token requerido" }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return Response.json(
        { error: "Mínimo 6 caracteres" },
        { status: 400 }
      );
    }

    const record = resetTokens.find((r) => r.token === token);

    if (!record) {
      return Response.json({ error: "Token inválido" }, { status: 400 });
    }

    if (record.expiry < Date.now()) {
      return Response.json({ error: "Token expirado" }, { status: 400 });
    }

    const user = users.find((u) => u.email === record.email);

    if (!user) {
      return Response.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    user.password = password;

    // eliminar token
    resetTokens.splice(resetTokens.indexOf(record), 1);

    return Response.json({
      message: "Contraseña actualizada correctamente",
    });

  } catch (error) {
    console.error("ERROR RESET:", error);
    return Response.json({ error: "Error interno" }, { status: 500 });
  }
}