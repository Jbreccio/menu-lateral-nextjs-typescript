# Menu App - Aplicativo de Menu Lateral

Este é um aplicativo Next.js 15+ com TypeScript que implementa um menu lateral responsivo baseado na imagem fornecida. O app utiliza shadcn/ui, Radix UI e Tailwind CSS para criar uma interface moderna e acessível.

## 🚀 Características

- **Menu lateral responsivo** - Funciona perfeitamente em desktop e mobile
- **Categorias colapsáveis** - Organize itens em seções expansíveis
- **Fácil personalização** - Modifique o menu editando um único arquivo
- **Design moderno** - Interface limpa usando Tailwind CSS
- **Totalmente tipado** - TypeScript para desenvolvimento seguro
- **Componentes acessíveis** - Baseado em Radix UI primitives

## 📱 Funcionalidades do Menu

O menu inclui as seguintes categorias (baseadas na imagem original):

### Menu Principal
- Planejamento (%)
- Enviar
- Cadastrar
- Departamentos

### Categorias Colapsáveis
- **ALIMENTOS** - Carnes, Laticínios, Bebidas, Cereais
- **AUTOMAÇÃO COMERCIAL** - PDV, Impressoras, Leitores de Código
- **BAZAR E UTILIDADES** - Produtos de Limpeza, Higiene Pessoal, Casa e Decoração
- **DESCARTÁVEIS DE ALUMÍNIO** - Marmitas, Bandejas
- **DESCARTÁVEIS DE ISOPOR** - Marmitas, Copos
- **DESCARTÁVEIS DE MADEIRA** - Talheres, Palitos
- **DESCARTÁVEIS DE PAPEL** - Pratos, Copos, Guardanapos
- **DESCARTÁVEIS DE PAPELÃO** - Caixas de Pizza, Embalagens
- **DESCARTÁVEIS PLÁSTICOS** - Copos, Pratos, Talheres
- **EMBALAGENS PLÁSTICAS** - Sacolas, Potes, Filmes

### Item Individual
- **ABASTECIMENTO**

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação
```bash
npm install
```

### Servidor de Desenvolvimento
```bash
npm run dev
```
O app será executado em http://localhost:8000 com Turbopack

### Build de Produção
```bash
npm run build && npm start
```

## 🎨 Como Personalizar o Menu

Para modificar os itens do menu, edite o arquivo `src/lib/menu-data.ts`:

### Estrutura do Item de Menu
```typescript
interface MenuItem {
  id: string;           // Identificador único
  title: string;        // Texto exibido no menu
  path?: string;        // URL de navegação (opcional)
  children?: MenuItem[]; // Sub-itens (opcional)
  isCollapsible?: boolean; // Se deve ser colapsável (opcional)
}
```

### Exemplos de Personalização

#### Adicionar uma nova categoria simples:
```typescript
{
  id: "nova-categoria",
  title: "NOVA CATEGORIA",
  path: "/nova-categoria"
}
```

#### Adicionar uma categoria colapsável:
```typescript
{
  id: "nova-categoria-colapsavel",
  title: "NOVA CATEGORIA COLAPSÁVEL",
  isCollapsible: true,
  children: [
    { id: "item1", title: "Item 1", path: "/categoria/item1" },
    { id: "item2", title: "Item 2", path: "/categoria/item2" }
  ]
}
```

#### Adicionar uma seção com sub-itens (não colapsável):
```typescript
{
  id: "secao-menu",
  title: "SEÇÃO DO MENU",
  children: [
    { id: "opcao1", title: "Opção 1", path: "/secao/opcao1" },
    { id: "opcao2", title: "Opção 2", path: "/secao/opcao2" }
  ]
}
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx      # Layout principal da aplicação
│   ├── page.tsx        # Página inicial com sidebar
│   └── globals.css     # Estilos globais (NÃO MODIFICAR)
├── components/ui/      # Componentes UI do shadcn
├── lib/
│   ├── menu-data.ts    # ⭐ ARQUIVO PARA PERSONALIZAR O MENU
│   └── utils.ts        # Utilitários
└── hooks/              # Custom React hooks
```

## 🎯 Componentes Principais

- **SidebarContent**: Componente principal do menu lateral
- **Collapsible**: Seções expansíveis do menu
- **Sheet**: Modal do menu para dispositivos móveis
- **Button**: Botões do menu com hover effects

## 🔧 Tecnologias Utilizadas

- **Next.js 15+** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Biblioteca de componentes
- **Radix UI** - Primitives acessíveis
- **Lucide React** - Ícones (apenas chevrons para expansão)

## 📱 Responsividade

- **Desktop**: Menu lateral fixo visível
- **Mobile**: Menu acessível via botão hambúrguer
- **Tablet**: Adaptação automática baseada no tamanho da tela

## ⚠️ Importante

**NÃO MODIFIQUE** o arquivo `src/app/globals.css` - isso pode quebrar toda a aplicação!

## 🤝 Contribuição

Para contribuir com melhorias:
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
