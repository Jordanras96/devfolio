import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/components/schemas/contactSchema";
import { sendEmail } from "@/services/email";
import type { ContactFormData } from "../types/contact.types";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("Contact");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      await sendEmail(data);
      toast.success(t("successMessage"));
      form.reset();
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      toast.error(t("errorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    errors: form.formState.errors,
  };
};
