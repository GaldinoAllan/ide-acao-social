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
      title: "Atendimento",
      href: "/#atendimento",
    },
    {
      title: "Informar sinistro",
      href: "/#sinistro",
    },
    {
      title: "Seja um parceiro",
      href: "/#seja-parceiro",
    },
    {
      title: "Sobre",
      href: "/#sobre",
    },
    {
      title: "Solicitar cotação agora!",
      href: "/cotacao",
    },
  ],
};