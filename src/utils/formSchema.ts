import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, "名前を入力してください。")
    .max(50, "名前は50文字以内で入力してください。"),
  email: z
    .string()
    .email("有効なメールアドレスを入力してください。")
    .max(100, "メールアドレスは100文字以内で入力してください。"),
  message: z
    .string()
    .min(1, "メッセージを入力してください。")
    .max(500, "メッセージは500文字以内で入力してください。"),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
