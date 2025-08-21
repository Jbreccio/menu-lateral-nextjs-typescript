"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { menuItems, type MenuItem } from "@/lib/menu-data";

function SidebarContent() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    if (item.isCollapsible) {
      const isOpen = openSections.includes(item.id);
      return (
        <Collapsible key={item.id} open={isOpen} onOpenChange={() => toggleSection(item.id)}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between text-left font-normal h-auto py-3 px-4 text-sm hover:bg-accent"
            >
              <span className="font-medium">{item.title}</span>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 shrink-0" />
              ) : (
                <ChevronRight className="h-4 w-4 shrink-0" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 space-y-1">
            {item.children?.map(child => (
              <Button
                key={child.id}
                variant="ghost"
                className="w-full justify-start text-left font-normal h-auto py-2 px-4 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {child.title}
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }

    if (item.children && !item.isCollapsible) {
      return (
        <div key={item.id} className="space-y-1">
          <div className="px-4 py-2 text-sm font-semibold text-foreground border-b">
            {item.title}
          </div>
          {item.children.map(child => (
            <Button
              key={child.id}
              variant="ghost"
              className="w-full justify-start text-left font-normal h-auto py-2 px-4 text-sm hover:bg-accent"
            >
              {child.title}
            </Button>
          ))}
        </div>
      );
    }

    return (
      <Button
        key={item.id}
        variant="ghost"
        className="w-full justify-start text-left font-normal h-auto py-3 px-4 text-sm hover:bg-accent"
      >
        <span className="font-medium">{item.title}</span>
      </Button>
    );
  };

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-4 border-b bg-background">
        <h2 className="text-lg font-semibold">Menu</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1 p-2">
          {menuItems.map(renderMenuItem)}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 border-b bg-card lg:hidden">
        <h1 className="text-xl font-semibold">Menu App</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 border-r">
          <SidebarContent />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Menu App</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Navegue pelas categorias usando o menu lateral. Você pode facilmente personalizar os itens do menu editando o arquivo <code className="bg-muted px-2 py-1 rounded">src/lib/menu-data.ts</code>.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Alimentos</h3>
                <p className="text-muted-foreground">
                  Gerencie produtos alimentícios e suas categorias como carnes, laticínios, bebidas e cereais.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Automação Comercial</h3>
                <p className="text-muted-foreground">
                  Ferramentas para automação do seu negócio incluindo PDV, impressoras e leitores.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Bazar e Utilidades</h3>
                <p className="text-muted-foreground">
                  Produtos diversos para o dia a dia como limpeza, higiene e decoração.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Descartáveis</h3>
                <p className="text-muted-foreground">
                  Ampla variedade de produtos descartáveis em diferentes materiais.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Embalagens</h3>
                <p className="text-muted-foreground">
                  Soluções completas em embalagens plásticas para seu negócio.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Personalização</h3>
                <p className="text-muted-foreground">
                  Menu totalmente customizável - adicione ou remova categorias conforme necessário.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Como personalizar o menu</h2>
              <div className="space-y-3 text-sm">
                <p>Para modificar os itens do menu:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Abra o arquivo <code className="bg-background px-2 py-1 rounded">src/lib/menu-data.ts</code></li>
                  <li>Edite o array <code className="bg-background px-2 py-1 rounded">menuItems</code></li>
                  <li>Adicione, remova ou modifique as categorias conforme necessário</li>
                  <li>Salve o arquivo e as mudanças aparecerão automaticamente</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
