import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormSchema, ContactFormType } from "@/utils/formSchema";
import toast from "react-hot-toast";

const useContactForm = () => {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormType> = async (
    data: ContactFormType
  ) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        toast.error("送信に失敗しました。時間をおいて再試行してください。");
        return;
      }

      toast.success("お問い合わせを送信しました。");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("送信中にエラーが発生しました。");
    }
  };

  return { form, onSubmit, isSubmitting: form.formState.isSubmitting };
};

export default useContactForm;
