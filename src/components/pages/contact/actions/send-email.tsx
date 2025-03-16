"use server";

import { z } from "zod";

const zodSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(3, "O assunto deve ter no mínimo 3 caracteres"),
  message: z.string().min(3, "A mensagem deve ter no mínimo 3 caracteres"),
});

export async function sendEmail(_prevState: unknown, formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const validatedFields = await zodSchema.safeParseAsync(rawData);

  if (!validatedFields.success) {
    return {
      errors: {
        validation: validatedFields.error.flatten().fieldErrors,
      },
      data: rawData,
      success: false,
    };
  }

  try {
    const res = await fetch("https://graph.microsoft.com/v1.0/me/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MS_GRAPH_TOKEN}`,
      },
      body: JSON.stringify({
        message: {
          subject: `${validatedFields.data.subject} - ${validatedFields.data.name}(${validatedFields.data.email})`,
          body: {
            contentType: "Text",
            content: validatedFields.data.message,
          },
          toRecipients: [
            {
              emailAddress: {
                address: process.env.CONTACT_EMAIL,
              },
            },
          ],
        },
      }),
    });

    if (!res.ok) throw new Error("Error sending email");
    return {
      data: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      data: rawData,
      success: false,
    };
  }
}
