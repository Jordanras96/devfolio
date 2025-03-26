export interface Testimonials {
  name: string;
  role: string;
  image: string;
  text: string;
}

export const testimonialsData = (t: any) => [
  {
    name: t("person.harison.name"),
    role: t("person.harison.role"),
    image:
      "/images/testimonials/364115805_7638561546183583_139268431628256637_n.webp",
    text: t("person.harison.text"),
  },
  {
    name: t("person.tojo.name"),
    role: t("person.tojo.role"),
    image:
      "/images/testimonials/466827119_1770310247133442_8891819088441267840_n.webp",
    text: t("person.tojo.text"),
  },
  {
    name: t("person.juanito.name"),
    role: t("person.juanito.role"),
    image: "/images/testimonials/1516983291878.webp",
    text: t("person.juanito.text"),
  },
  {
    name: t("person.mamy.name"),
    role: t("person.mamy.role"),
    image: "/images/testimonials/rado.jpg",
    text: t("person.mamy.text"),
  },
];
