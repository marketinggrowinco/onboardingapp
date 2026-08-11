// Product & Engineering Trail Content
// Complete trail with all items

import { Trail } from './trails';

export const productEngineeringTrail: Trail = {
  id: 'team-product-engineering',
  name: 'Trilha de Product & Engineering',
  description: 'Setup técnico, produto e metodologias de desenvolvimento',
  items: [
    {
      id: 'pe-1',
      title: 'Visão Geral de Clientes',
      description: 'Entendendo nosso ICP através de clientes ativos e suas necessidades',
      type: 'meeting',
      duration: '1h',
      content: `
# Visão Geral de Clientes 🎯

Nesta reunião você vai conhecer nossos clientes ativos, entender o Perfil de Cliente Ideal (ICP) da GrowinCo e aprender sobre as necessidades reais do mercado.

## 📅 Como agendar

Marque uma reunião no **Microsoft Teams** com duração de **1 hora** com o **Pedro Hammer**.

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. Procure por **Pedro Hammer** no chat
3. Envie uma mensagem apresentando-se e mencionando que você está no onboarding
4. Peça para agendar a reunião **"Visão Geral de Clientes"** (1 hora)
5. Sugira horários que funcionam para você nos próximos dias

### Participante

**Pedro Hammer** - Gerente Comercial da GrowinCo

## 🎯 O que você vai aprender

### Perfil de Cliente Ideal (ICP)
- Quem são nossos clientes ideais
- Características dos clientes de maior sucesso
- Segmentos de mercado que atendemos
- Tamanho, indústria e perfil das empresas

### Clientes Ativos
- Principais contas da GrowinCo
- Cases de sucesso e implementações
- Desafios que resolvemos para cada cliente
- Jornada típica do cliente

### Necessidades do Mercado
- Principais dores que nossos clientes enfrentam
- Como nossa solução resolve esses problemas
- Tendências do mercado CPG
- Oportunidades de expansão

## 📝 Prepare-se

- Revise o material de brand guidelines e proposta de valor
- Anote perguntas sobre clientes e mercado
- Pense em como você pode contribuir para o sucesso dos clientes

## ✅ Após a reunião

1. Estude os principais clientes mencionados
2. Marque este item como concluído
3. Comece a se familiarizar com as necessidades do ICP

**Para Product & Engineering**: Entender o cliente é essencial para construir features relevantes e priorizar o roadmap corretamente! 🚀
      `,
    },
    {
      id: 'pe-2',
      title: 'Vídeo: Sales Pitch',
      description: 'Pitch real com lead real - aprenda na prática como vendemos',
      type: 'video',
      duration: '50 min',
      link: 'https://tldv.io/app/meetings/693ac04a35b1710013793bd3/',
      content: `
# Vídeo: Sales Pitch Real 🎥

Assista a uma apresentação de vendas real com um lead real para entender como funciona nosso pitch na prática!

## 🎬 Acesse o vídeo

[**Assista ao Sales Pitch completo aqui**](https://tldv.io/app/meetings/693ac04a35b1710013793bd3/)

**Duração**: 50 minutos

## 🎯 O que observar no vídeo

### Estrutura do Pitch
- Como iniciamos a conversa
- Perguntas de descoberta e qualificação
- Apresentação da solução
- Demonstração de valor
- Tratamento de objeções
- Próximos passos e fechamento

### Técnicas de Vendas
- Como construímos rapport com o lead
- Linguagem corporal e tom de voz
- Uso de histórias e cases
- Personalização da apresentação
- Momentos de escuta ativa

### Aprendizados Práticos
- O que funcionou bem
- Pontos de melhoria
- Como adaptar para diferentes perfis
- Erros a evitar

## 📝 Durante o vídeo

- Anote as perguntas que o vendedor faz
- Observe como as objeções são tratadas
- Identifique os momentos-chave da apresentação
- **Liste as principais características do produto destacadas**

## 💡 Após assistir

1. Reflita sobre o que você aprendeu
2. Pense em como aplicar as técnicas no seu dia a dia
3. Anote dúvidas para discutir com o time
4. Marque este item como concluído

**Para Product & Engineering**: Observe quais features são mais valorizadas pelos clientes e quais objeções aparecem. Isso ajuda a priorizar o que desenvolver! 💡
      `,
    },
    {
      id: 'pe-3',
      title: 'Overview Process Oriented Platform - POP',
      description: 'Entenda a arquitetura e conceitos fundamentais da nossa plataforma',
      type: 'meeting',
      duration: '1h',
      content: `
# Overview Process Oriented Platform - POP 🏗️

Reunião ao vivo para entender os conceitos fundamentais da arquitetura Process Oriented Platform (POP).

## 📅 Como funciona

Esta será uma **reunião ao vivo** com o **Luiz Friedrich - CTO** que será agendada diretamente no seu calendário do Teams.

**Fique atento ao calendário!** O Luiz vai agendar a sessão com você.

## 🎯 Visão geral do tema

A **Process Oriented Platform** é nossa abordagem arquitetural que organiza todo o sistema em torno de **processos de negócio**, não apenas funcionalidades isoladas.

### Principais conceitos

- Cada processo tem **início, meio e fim** definidos
- Processos podem ser **compostos e reutilizados**
- Dados fluem através dos processos de forma **rastreável**
- Event-Driven Architecture
- Composability e modularidade

## 📝 Antes da reunião

- Familiarize-se com conceitos básicos de arquitetura de software
- Pense em perguntas sobre processos de negócio
- Revise materiais sobre o produto da GrowinCo

**Os detalhes serão aprofundados na reunião ao vivo com o Luiz! 🚀**
      `,
    },
    {
      id: 'pe-4',
      title: 'High-level Architecture Tour',
      description: 'Tour guiado pela arquitetura técnica e decisões de design',
      type: 'meeting',
      duration: '1h30',
      content: `
# High-level Architecture Tour 🏛️

Reunião ao vivo para explorar a arquitetura técnica da GrowinCo e decisões de design.

## 📅 Como funciona

Esta será uma **reunião ao vivo** com o **Luiz Friedrich - CTO** que será agendada diretamente no seu calendário do Teams.

**Fique atento ao calendário!** O Luiz vai agendar a sessão com você.

## 🎯 Visão geral do tema

Nesta sessão você vai conhecer:

- Frontend Architecture (React, Component Library, State Management)
- Backend Architecture (Microservices, API Design, Database Design)
- Infrastructure (Cloud Provider, CI/CD)
- Decisões de design e trade-offs
- Fluxo de dados no sistema

## 📝 Antes da reunião

- Leia o material do **"Overview Process Oriented Platform - POP"**
- Revise conceitos básicos de **microservices** e **event-driven architecture**
- Anote perguntas sobre arquitetura

**Os detalhes serão aprofundados na reunião ao vivo com o Luiz! 🚀**
      `,
    },
    {
      id: 'pe-5',
      title: 'Platform Modules Deep Dive',
      description: 'User Access Control, Project Journey, Market Reports',
      type: 'meeting',
      duration: '1h30',
      content: `
# Platform Modules Deep Dive 🧩

Reunião ao vivo para entender em profundidade os três módulos principais da plataforma GrowinCo.

## 📅 Como funciona

Esta será uma **reunião ao vivo** com o **Luiz Friedrich - CTO** que será agendada diretamente no seu calendário do Teams.

**Fique atento ao calendário!** O Luiz vai agendar a sessão com você.

## 🎯 Visão geral do tema

Nesta sessão você vai explorar:

### 🔐 User Access Control
Gerenciamento de autenticação, autorização e permissões de usuários

### 📊 Project Journey
Ciclo de vida completo de projetos de lançamento de produtos no mercado CPG

### 📈 Market Reports
Relatórios de inteligência de mercado, análise de tendências e insights para o setor CPG

## 📝 Antes da reunião

- Revise os conceitos de POP e arquitetura apresentados anteriormente
- Pense em como cada módulo se relaciona com o negócio
- Prepare perguntas sobre os módulos

**Os detalhes serão aprofundados na reunião ao vivo com o Luiz! 🚀**
      `,
    },
    {
      id: 'pe-6',
      title: 'Dev Environment & Acessos',
      description: 'Configuração de acessos, senhas e ambiente de desenvolvimento',
      type: 'tutorial',
      duration: '1h',
      content: `
# Dev Environment & Acessos 🔐

Configure seus acessos e ambiente de desenvolvimento com o auxílio do Luiz Friedrich.

## 📅 Como funciona

O **Luiz Friedrich - CTO** vai te auxiliar diretamente na configuração de todos os acessos e setup do ambiente.

**Aguarde o contato dele!** Você receberá as instruções e credenciais necessárias.

**O Luiz vai te guiar por todo o processo de setup! 🚀**
      `,
    },
  ],
};