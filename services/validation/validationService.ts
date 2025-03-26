import { contactSchema } from "@/components/schemas/contactSchema";
import type { ContactFormData } from "@/features/contact/types/contact.types";

export const validationService = {
  async validate(data: unknown): Promise<ContactFormData> {
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      throw new Error("Validation failed");
    }
    return result.data;
  },
};
