import type { ContactFormData } from "@/features/contact/types/contact.types";

export interface IEmailService {
  send(data: ContactFormData): Promise<void>;
}
