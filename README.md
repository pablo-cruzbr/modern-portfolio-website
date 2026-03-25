# 🚀 Modern Portfolio Website | Next.js 16 & React 19

Este é um projeto de portfólio de alta performance desenvolvido com foco em **UX/UI avançado**, **SEO** e **Performance**. O objetivo foi construir uma vitrine profissional utilizando as versões mais recentes do ecossistema React, demonstrando maturidade em arquitetura de componentes e otimização de recursos.

---

## 🖥️ Demonstração em Tempo Real

Abaixo, podes conferir uma breve demonstração das animações e da fluidez da interface:

<div align="center">
  <img src="./public/img/demo.gif" alt="Demonstração do Portfólio" width="100%">
</div>

---

### 🎥 Vídeo Completo (Alta Resolução)
Para visualizar a demonstração detalhada com maior qualidade e todos os detalhes técnicos, acede ao link abaixo:

👉 [Assista à demonstração completa no YouTube](https://www.youtube.com/watch?v=_PDnhR2fC_Y)

---

## 🛠️ Stack Tecnológica & Decisões de Arquitetura

### Core
*   **Next.js 16 (App Router):** Utilização intensiva de *Server Components* para otimização de LCP (Largest Contentful Paint) e *Client Components* isolados estrategicamente para interatividade.
*   **React 19:** Implementação focada nas melhorias de renderização e estabilidade da nova versão.
*   **TypeScript:** Garantia de type-safety em todo o projeto, facilitando a manutenção e prevenindo bugs em tempo de execução.
*   **Tailwind CSS 4:** Engine de estilização de última geração para um bundle CSS extremamente enxuto e design responsivo nativo.

### Bibliotecas de Experiência (Engine & Animations)
*   **AOS (Animate On Scroll):** Orquestração de animações baseadas em scroll para uma navegação fluida.
*   **tsParticles (Slim Engine):** Implementação de fundo dinâmico de alta performance com baixo consumo de CPU/GPU.
*   **Framer Motion / Parallax Tilt:** Adição de profundidade visual e feedback tátil em cards de serviços e projetos.
*   **Typewriter Effect:** Dinamismo na apresentação das stacks principais.

---

## 🏗️ Engenharia de Software Aplicada

*   **Commits Atômicos & Semânticos:** Histórico de versionamento seguindo o padrão *Conventional Commits* para facilitar code reviews e rastreabilidade.
*   **Otimização de Assets:** Uso rigoroso de imagens em formato **WebP** e o componente `next/image` para Lazy Loading e redução de CLS (Cumulative Layout Shift).
*   **Arquitetura de Componentes:** Divisão modular entre seções autossuficientes, facilitando a escalabilidade e o reuso de lógica.
*   **Tratamento de Performance:** Implementação de `useEffect` com carregamento condicional de bibliotecas de terceiros (como AOS) para evitar gargalos na hidratação do React.

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/modern-portfolio-website.git](https://github.com/seu-usuario/modern-portfolio-website.git)
    ```

2.  **Instale as dependências (preferencialmente via Yarn):**
    ```bash
    yarn install
    ```

3.  **Inicie o ambiente de desenvolvimento:**
    ```bash
    yarn dev
    ```

4.  **Build de Produção:**
    ```bash
    yarn build
    yarn start
    ```

---

## 👨‍💻 Sobre o Desenvolvedor

**Pablo** - Desenvolvedor Fullstack Junior
📍 Mogi das Cruzes, São Paulo

Focado em construir produtos web escaláveis, interfaces memoráveis e código limpo. Atualmente aprofundando conhecimentos em integração de agentes de IA e arquiteturas SaaS.

---

> "Qualidade não é um ato, é um hábito."
