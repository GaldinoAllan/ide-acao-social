import { ImageInterface, Images } from "../../assets/Image";

interface ItemProps {
  title: string;
  href?: string;
}

interface HeaderContentProps {
  image: ImageInterface;
  inicio: ItemProps;
  dropdown?: ItemProps;
  items: ItemProps[];
}

export const HeaderContent: HeaderContentProps = {
  image: Images.adBelemLogo,
  inicio: {
    title: "Início",
    href: "/",
  },
  items: [
    {
      title: "Sobre o evento",
      href: "/#sobre_evento",
    },
    {
      title: "Como posso Ajudar?",
      href: "/#como_ajudar",
    },
  ],
};