export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  children?: MenuItem[];
  isCollapsible?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "menu",
    title: "MENU",
    children: [
      { id: "planejamento", title: "Planejamento (%)", path: "/planejamento" },
      { id: "enviar", title: "Enviar", path: "/enviar" },
      { id: "cadastrar", title: "Cadastrar", path: "/cadastrar" },
      { id: "departamentos", title: "Departamentos", path: "/departamentos" },
    ]
  },
  {
    id: "alimentos",
    title: "ALIMENTOS",
    isCollapsible: true,
    children: [
      { id: "carnes", title: "Carnes", path: "/alimentos/carnes" },
      { id: "laticinios", title: "Laticínios", path: "/alimentos/laticinios" },
      { id: "bebidas", title: "Bebidas", path: "/alimentos/bebidas" },
      { id: "cereais", title: "Cereais", path: "/alimentos/cereais" },
    ]
  },
  {
    id: "automacao",
    title: "AUTOMAÇÃO COMERCIAL",
    isCollapsible: true,
    children: [
      { id: "pdv", title: "PDV", path: "/automacao/pdv" },
      { id: "impressoras", title: "Impressoras", path: "/automacao/impressoras" },
      { id: "leitores", title: "Leitores de Código", path: "/automacao/leitores" },
    ]
  },
  {
    id: "bazar",
    title: "BAZAR E UTILIDADES",
    isCollapsible: true,
    children: [
      { id: "limpeza", title: "Produtos de Limpeza", path: "/bazar/limpeza" },
      { id: "higiene", title: "Higiene Pessoal", path: "/bazar/higiene" },
      { id: "casa", title: "Casa e Decoração", path: "/bazar/casa" },
    ]
  },
  {
    id: "descartaveis-aluminio",
    title: "DESCARTÁVEIS DE ALUMÍNIO",
    isCollapsible: true,
    children: [
      { id: "marmitas-aluminio", title: "Marmitas", path: "/descartaveis/aluminio/marmitas" },
      { id: "bandejas-aluminio", title: "Bandejas", path: "/descartaveis/aluminio/bandejas" },
    ]
  },
  {
    id: "descartaveis-isopor",
    title: "DESCARTÁVEIS DE ISOPOR",
    isCollapsible: true,
    children: [
      { id: "marmitas-isopor", title: "Marmitas", path: "/descartaveis/isopor/marmitas" },
      { id: "copos-isopor", title: "Copos", path: "/descartaveis/isopor/copos" },
    ]
  },
  {
    id: "descartaveis-madeira",
    title: "DESCARTÁVEIS DE MADEIRA",
    isCollapsible: true,
    children: [
      { id: "talheres-madeira", title: "Talheres", path: "/descartaveis/madeira/talheres" },
      { id: "palitos-madeira", title: "Palitos", path: "/descartaveis/madeira/palitos" },
    ]
  },
  {
    id: "descartaveis-papel",
    title: "DESCARTÁVEIS DE PAPEL",
    isCollapsible: true,
    children: [
      { id: "pratos-papel", title: "Pratos", path: "/descartaveis/papel/pratos" },
      { id: "copos-papel", title: "Copos", path: "/descartaveis/papel/copos" },
      { id: "guardanapos", title: "Guardanapos", path: "/descartaveis/papel/guardanapos" },
    ]
  },
  {
    id: "descartaveis-papelao",
    title: "DESCARTÁVEIS DE PAPELÃO",
    isCollapsible: true,
    children: [
      { id: "caixas-pizza", title: "Caixas de Pizza", path: "/descartaveis/papelao/pizza" },
      { id: "embalagens-papelao", title: "Embalagens", path: "/descartaveis/papelao/embalagens" },
    ]
  },
  {
    id: "descartaveis-plasticos",
    title: "DESCARTÁVEIS PLÁSTICOS",
    isCollapsible: true,
    children: [
      { id: "copos-plastico", title: "Copos", path: "/descartaveis/plastico/copos" },
      { id: "pratos-plastico", title: "Pratos", path: "/descartaveis/plastico/pratos" },
      { id: "talheres-plastico", title: "Talheres", path: "/descartaveis/plastico/talheres" },
    ]
  },
  {
    id: "embalagens-plasticas",
    title: "EMBALAGENS PLÁSTICAS",
    isCollapsible: true,
    children: [
      { id: "sacolas", title: "Sacolas", path: "/embalagens/sacolas" },
      { id: "potes", title: "Potes", path: "/embalagens/potes" },
      { id: "filmes", title: "Filmes", path: "/embalagens/filmes" },
    ]
  },
  {
    id: "abastecimento",
    title: "ABASTECIMENTO",
    path: "/abastecimento"
  }
];
