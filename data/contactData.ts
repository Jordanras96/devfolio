export interface ContactFormData {
  textHead: string;
  textContent: string;
  nameForm: string;
  emailForm: string;
  messageForm: string;
  btn: string;
}

export const contactData = (t: (key: string) => string): ContactFormData => {
  return {
    textHead: t("textHead"),
    textContent: t("textContent"),
    nameForm: t("form.name"),
    emailForm: t("form.email"),
    messageForm: t("form.message"),
    btn: t("btn"),
  };
};
