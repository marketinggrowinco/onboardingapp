export interface TrailItem {
  id: string;
  title: string;
  description: string;
  type: 'meeting' | 'video' | 'reading' | 'tutorial';
  duration?: string;
  link?: string;
  content?: string; // Conteúdo detalhado do item
}

export interface Trail {
  id: string;
  name: string;
  description: string;
  items: TrailItem[];
}

import { productEngineeringTrail } from './productEngineeringTrail';

// Trilha da Empresa (padrão para todos)
export const companyTrail: Trail = {
  id: 'company',
  name: 'Trilha da Empresa',
  description: 'Conteúdos essenciais sobre nossa cultura, valores e processos',
  items: [
    {
      id: 'company-1',
      title: 'Boas-vindas ao Onboarding',
      description: 'Entenda como usar esta plataforma, navegar pelos conteúdos e marcar reuniões no Teams',
      type: 'reading',
      duration: '10 min',
      content: `
# Bem-vindo(a) à Plataforma de Onboarding da GrowinCo! 🎉

Estamos muito felizes por ter você no nosso time! Esta plataforma foi criada para tornar seus primeiros dias na GrowinCo mais organizados e produtivos.

## Como usar esta plataforma

Esta plataforma está organizada em **duas trilhas de aprendizado**:

### 🏢 Trilha da Empresa
Conteúdos essenciais sobre a GrowinCo que todos os colaboradores precisam conhecer: nossa cultura, valores, processos e visão de mercado.

### 👥 Trilha do seu Time
Conteúdos específicos do seu time/função, incluindo ferramentas, processos e reuniões com seus líderes diretos.

## Navegando pelos conteúdos

Você encontrará diferentes tipos de conteúdo durante seu onboarding:

- **📖 Leituras**: Materiais em texto para você ler no seu ritmo
- **🎥 Vídeos**: Conteúdos gravados para você assistir
- **🎓 Tutoriais**: Guias práticos de ferramentas e processos
- **👋 Reuniões**: Encontros que você precisa agendar ou participar

**Dica importante**: Você pode marcar cada item como concluído clicando no checkbox. Seu progresso é salvo automaticamente!

## Como marcar reuniões no Teams

Durante o onboarding, você terá várias reuniões importantes para participar. Veja como agendar:

### Passo 1: Acesse o Microsoft Teams
- Entre no Teams com seu e-mail @growinco.com
- Clique em "Calendário" no menu lateral

### Passo 2: Agende a reunião
- Clique em "+ Nova reunião"
- Adicione um título descritivo (ex: "Coffee com CEO - Onboarding")
- Adicione os participantes usando o e-mail ou nome deles
- Escolha data e horário
- Clique em "Enviar" para confirmar

### Passo 3: Prepare-se para a reunião
- Revise a descrição do item na trilha
- Anote perguntas que você queira fazer
- Entre no Teams 5 minutos antes do horário

## Dúvidas?

Se tiver qualquer dúvida durante o processo, não hesite em falar com o time de People & Culture. Estamos aqui para ajudar!

**Vamos começar?** 🚀
      `,
    },
    {
      id: 'company-2',
      title: 'Tutoriais de Ferramentas: Teams, Notion e Canva',
      description: 'Aprenda a usar as principais ferramentas do dia a dia na GrowinCo',
      type: 'tutorial',
      duration: '45 min',
      content: `
# Tutoriais de Ferramentas Essenciais 🛠️

No dia a dia da GrowinCo, você vai usar três ferramentas principais para comunicação, organização e criação de conteúdo. Aqui está tudo que você precisa saber para começar!

## 📱 Microsoft Teams

O Teams é nossa principal ferramenta de comunicação e colaboração. Aqui você vai:
- Conversar com o time através de chats individuais e em grupo
- Participar de reuniões por vídeo
- Agendar e organizar seu calendário
- Compartilhar arquivos e trabalhar em conjunto

### Como começar no Teams

[**Acesse o tutorial oficial do Microsoft Teams**](https://support.microsoft.com/pt-br/office/entrar-e-come%C3%A7ar-a-usar-o-microsoft-teams-6723dc43-dbc0-46e6-af49-8a2d1c5cb937)

### Principais funcionalidades

- **Chat**: Envie mensagens rápidas para colegas
- **Equipes e Canais**: Acesse os canais dos seus times
- **Calendário**: Agende e participe de reuniões
- **Chamadas**: Faça chamadas de áudio e vídeo
- **Arquivos**: Compartilhe e colabore em documentos

### Dica importante
Configure suas notificações para não perder mensagens importantes! Vá em Configurações > Notificações.

## 📝 Notion

O Notion é nosso espaço de trabalho centralizado para documentação, projetos e bases de conhecimento.

### Como começar no Notion

[**Acesse o tutorial da GrowinCo sobre Notion**](https://www.canva.com/design/DAFvFf4TEQc/edit?utm_content=DAFvFf4TEQc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### ⚠️ IMPORTANTE: Login Compartilhado do Notion

**Usamos um único login compartilhado para toda a equipe no Notion.**

**Não crie uma conta individual com seu e-mail @growinco.com!**

**Credenciais de acesso:**
- **Login**: internal@growinco.com
- **Senha**: k3VNcTUScchm

Use essas credenciais para fazer login no Notion. Todos do time usam o mesmo acesso.

### O que você vai encontrar no Notion

- Documentação de processos e projetos
- Bases de conhecimento dos times
- Wiki da empresa
- Roadmaps e planejamentos
- Anotações de reuniões

### Recursos principais

- **Páginas e Subpáginas**: Organize informações de forma hierárquica
- **Blocos**: Adicione textos, listas, tabelas, imagens e muito mais
- **Databases**: Crie tabelas, quadros kanban, calendários
- **Templates**: Use modelos prontos para agilizar
- **Colaboração**: Trabalhe em tempo real com o time

## 🎨 Canva

O Canva é nossa ferramenta de design para criar apresentações, posts para redes sociais, materiais de marketing e muito mais - mesmo sem ser designer!

### Como começar no Canva

[**Acesse o guia para iniciantes do Canva**](https://www.canva.com/learn/how-to-canva-beginners-guide/)

### 🔑 Opções de Acesso ao Canva

Você tem duas opções para usar o Canva:

**Opção 1: Conta Pessoal Gratuita**
- Crie uma conta gratuita com seu e-mail pessoal
- Ótima para designs mais simples
- Recursos limitados, mas suficientes para muitas tarefas

**Opção 2: Acesso Compartilhado do Canva Pro (Recomendado)**
- Acesso completo a todos os recursos premium
- Templates exclusivos e elementos profissionais
- Brand Kit da GrowinCo já configurado

**Credenciais do Canva Pro compartilhado:**
- **Login**: george@growinco.com
- **Senha**: Mub39157

### O que criar no Canva

- Apresentações de vendas e propostas
- Posts para redes sociais
- Materiais de comunicação interna
- Infográficos e relatórios visuais
- Banners e criativos para campanhas

### Recursos essenciais

- **Templates**: Milhares de modelos prontos para personalizar
- **Brand Kit**: Acesse as cores e logos da GrowinCo
- **Elementos**: Ícones, ilustrações, fotos e formas
- **Colaboração**: Compartilhe e trabalhe em equipe
- **Export**: Baixe em PNG, JPG, PDF ou compartilhe links

### Importante
Sempre use os templates e elementos do **Brand Kit da GrowinCo** para manter a consistência visual da marca!

## 🚀 Próximos passos

1. **Faça login** em cada uma das três ferramentas:
   - **Teams**: Com seu e-mail @growinco.com
   - **Notion**: Use o login compartilhado (internal@growinco.com)
   - **Canva**: Escolha entre conta pessoal ou o acesso Pro compartilhado
2. **Explore os tutoriais** nos links fornecidos (reserve uns 45 minutos)
3. **Configure seu perfil** em cada plataforma
4. **Peça ajuda** ao seu time se tiver dúvidas - todo mundo está aqui para ajudar!

## ❓ Precisa de ajuda?

Se tiver dificuldade com qualquer ferramenta, fale com o time de People & Culture ou com seu líder direto. Também temos canais no Teams dedicados a tirar dúvidas sobre ferramentas!
      `,
    },
    {
      id: 'company-3',
      title: 'O que é MEI e quando usar',
      description: 'Entenda o que é MEI, quando utilizar e como abrir o seu',
      type: 'tutorial',
      duration: '20 min',
      content: `
# 🧾 O que é MEI e quando usar

A **MEI (Microempreendedor Individual)** é uma forma simples de formalizar sua atividade como prestador de serviço, permitindo que você tenha um CNPJ, emita notas fiscais e pague impostos de forma simplificada.

👉 **Na GrowinCo., utilizamos a MEI como modelo padrão para contratação de prestadores.**

## 🚫 Quem não pode ser MEI

Você **não pode** abrir uma MEI se:

- ❌ For sócio ou administrador de outra empresa
- ❌ Exercer uma atividade que não esteja na lista permitida (ex: algumas profissões regulamentadas)
- ❌ For servidor público em algumas situações específicas

## 🔁 Já tenho MEI, preciso abrir outra?

**Não! ✅**

Se você já possui uma MEI ativa, pode utilizar o mesmo CNPJ para trabalhar com a GrowinCo.

💡 **Apenas verifique se as atividades (CNAEs) cadastradas são compatíveis com o serviço que você irá prestar.**

## 🧭 Como abrir uma MEI (passo a passo)

Abrir uma MEI é rápido, gratuito e pode ser feito **100% online**:

### 🌐 1. Acesse o portal oficial

Entre no [Portal do Empreendedor](https://www.gov.br/empresas-e-negocios/pt-br/empreendedor)

### 🔐 2. Faça login com sua conta Gov.br

- Você precisará de uma conta no Gov.br
- Caso não tenha, é possível criar na hora

### 📝 3. Clique em "Quero ser MEI"

Depois selecione **"Formalize-se"**

### 📋 4. Preencha seus dados

Você vai informar:
- Dados pessoais (CPF, título de eleitor ou IR)
- Endereço
- Nome fantasia (opcional)
- Atividade principal (CNAE) ⚠️ **escolha com atenção**

### 💼 5. Escolha suas atividades (CNAE)

👉 **Recomendamos utilizar os seguintes CNAEs principais:**

- 📊 **8219-9/99** – Preparação de documentos e serviços especializados de apoio administrativo
- 💻 **6209-1/00** – Suporte técnico, manutenção e outros serviços em tecnologia da informação

**Você pode:**
- Escolher 1 como principal
- Adicionar o outro como secundário (e incluir outros, se fizer sentido)

### 📄 6. Revise e confirme

Confira tudo e finalize o cadastro

### ✅ 7. MEI aberta 🎉

Você receberá:
- ✅ CNPJ
- ✅ Certificado de Condição de Microempreendedor Individual (CCMEI)

### 💰 8. Pagamento mensal (DAS)

Após abrir a MEI, existe a obrigação de pagamento mensal do **DAS**.

👉 **A GrowinCo. já considera esse custo**, então você receberá um valor junto ao pagamento para cobrir essa despesa.

## 🔗 Link útil

[Portal do MEI - Governo Federal](https://www.gov.br/empresas-e-negocios/pt-br/empreendedor)

## ❓ Dúvidas?

Se tiver qualquer dúvida sobre MEI ou sobre o processo de formalização, fale com o time de People & Culture. Estamos aqui para ajudar!
      `,
    },
    {
      id: 'company-4',
      title: 'Reunião com People & Culture',
      description: 'Conheça nossa cultura, valores e benefícios. Tire todas as suas dúvidas!',
      type: 'meeting',
      duration: '1h',
      content: `
# Reunião com People & Culture 👋

Esta é uma das reuniões mais importantes do seu onboarding! É o momento de conhecer melhor o time de People & Culture, entender nossa cultura organizacional e esclarecer todas as suas dúvidas sobre trabalhar na GrowinCo.

## 📅 Como agendar

Você deve marcar uma reunião no **Microsoft Teams** com duração de **1 hora** com:

- **Victor Hadad** - victor.hadad@growinco.com
- **Mariane Monteiro** - mariane.monteiro@growinco.com

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. Clique em **"Calendário"** no menu lateral esquerdo
3. Clique em **"+ Nova reunião"** no canto superior direito
4. Preencha os campos:
   - **Título**: "Reunião de Onboarding - People & Culture"
   - **Participantes**: Adicione Victor Hadad e Mariane Monteiro
   - **Duração**: 1 hora
   - **Data/Horário**: Escolha um horário que funcione para todos (o Teams mostra a disponibilidade)
5. Adicione uma mensagem opcional dizendo que é sua reunião de onboarding
6. Clique em **"Enviar"** para confirmar

## 💡 O que você vai aprender nesta reunião

### Cultura e Valores
- Missão, visão e valores da GrowinCo
- Como vivemos nossa cultura no dia a dia
- Comportamentos esperados e valorizados
- Histórias e exemplos reais da nossa jornada

### Benefícios e Políticas
- Pacote completo de benefícios (vale-refeição, vale-transporte, plano de saúde, etc.)
- Política de férias e folgas
- Home office e flexibilidade de horários
- Programas de bem-estar e qualidade de vida
- Plano de desenvolvimento e carreira

### Processos de RH
- Como funcionam os ciclos de feedback
- Avaliação de desempenho e metas
- Política de reembolsos e despesas
- Processo de ponto e ausências
- Canais de comunicação com RH

### Estrutura do Time
- Quem faz parte do time de People & Culture
- Áreas de atuação de cada pessoa
- Como e quando acionar o time de RH
- Principais projetos e iniciativas em andamento

## 📝 Prepare-se para a reunião

Para aproveitar melhor este encontro, sugerimos que você:

- **Anote suas dúvidas**: Faça uma lista de perguntas sobre benefícios, cultura, processos, etc.
- **Revise sua documentação**: Verifique se já enviou todos os documentos necessários
- **Pense no seu desenvolvimento**: Reflita sobre seus objetivos de carreira e crescimento
- **Conheça o time**: Dê uma olhada nos perfis do Victor e da Mariane no Teams

## ❓ Exemplos de perguntas para fazer

Não tenha vergonha de perguntar! Algumas sugestões:

- Como funciona o processo de feedback na GrowinCo?
- Quais são as oportunidades de desenvolvimento e treinamento?
- Como é a cultura de comunicação aqui?
- Existe algum programa de mentoria?
- Como funciona a avaliação de desempenho?
- Quais são os principais eventos e rituais da empresa?
- Como o time lida com work-life balance?

## ✅ Após a reunião

Depois do encontro com o time de People & Culture:

1. Marque este item como concluído na plataforma
2. Anote os principais aprendizados e próximos passos
3. Se surgirem dúvidas depois, não hesite em mandar mensagem para Victor ou Mariane no Teams
4. **Leia nosso Culture Deck**: Acesse [**GrowinCo Culture Deck**](https://www.canva.com/design/DAHC05D32G4/jBN5ax5k5N-j394_KkkysQ/view?utm_content=DAHC05D32G4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h711859db24) para aprofundar seu conhecimento sobre nossa cultura

**Lembre-se**: O time de People & Culture está aqui para apoiar você em toda sua jornada na GrowinCo. Sempre que precisar, pode contar com eles! 🤝
      `,
    },
    {
      id: 'company-5',
      title: 'Coffee com CEO ☕',
      description: 'Marque uma reunião com Raphael no Teams para conhecê-lo e entender a visão da empresa',
      type: 'meeting',
      duration: '30 min',
      content: `
# Coffee com CEO - Raphael Traticoski ☕

Uma oportunidade única de conhecer pessoalmente o CEO da GrowinCo e entender a visão, estratégia e cultura da empresa direto de quem lidera tudo isso!

## 📅 Como agendar

Você deve marcar uma reunião no **Microsoft Teams** com duração de **1 hora** com:

- **Raphael Traticoski** - raphael.traticoski@growinco.com

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. Clique em **"Calendário"** no menu lateral esquerdo
3. Clique em **"+ Nova reunião"** no canto superior direito
4. Preencha os campos:
   - **Título**: "Coffee com CEO - Onboarding"
   - **Participante**: Adicione Raphael Traticoski
   - **Duração**: 1 hora
   - **Data/Horário**: Escolha um horário que funcione (o Teams mostra a disponibilidade)
5. Adicione uma breve mensagem sobre você e sua função
6. Clique em **"Enviar"** para confirmar

## 💡 Sobre este encontro

O Coffee com CEO é uma tradição na GrowinCo! Todo colaborador novo tem a oportunidade de conversar diretamente com o Raphael em uma reunião informal e aberta.

### O que esperar

Este é um momento para:
- **Conhecer o Raphael**: Entender sua trajetória, experiências e valores
- **Ouvir a visão da empresa**: Estratégia, objetivos e para onde a GrowinCo está indo
- **Entender a cultura**: Como a liderança pensa e age no dia a dia
- **Fazer perguntas**: Tudo que você quiser saber sobre a empresa e o mercado
- **Ser ouvido**: Compartilhar suas ideias, expectativas e perspectivas

### Formato da conversa

- **Informal e relaxado**: Não é uma reunião formal, é realmente um café virtual!
- **Bidirecional**: Você vai ouvir E ser ouvido
- **Sem agenda rígida**: Pode fluir naturalmente conforme os temas surgem
- **Confidencial**: Sinta-se à vontade para falar abertamente

## 💭 Temas que você pode explorar

Aqui estão algumas ideias de assuntos interessantes para abordar:

### Sobre a Empresa
- Qual foi a motivação para fundar a GrowinCo?
- Quais foram os maiores desafios até aqui?
- Qual é a visão de longo prazo da empresa?
- Como você vê o mercado CPG evoluindo?
- Quais são as prioridades estratégicas para os próximos anos?

### Sobre Cultura e Liderança
- Quais valores são mais importantes para você?
- Como você define sucesso na GrowinCo?
- Que tipo de cultura você quer construir?
- Como você equilibra crescimento e cultura?
- Qual conselho você daria para novos colaboradores?

### Sobre o Mercado
- Por que CPG (Consumer Packaged Goods)?
- Quem são nossos principais concorrentes?
- O que nos diferencia no mercado?
- Quais tendências estão moldando nosso setor?

### Perguntas Pessoais
- Qual foi sua maior lição como líder?
- O que você mais gosta no que faz?
- Como você se desenvolveu como CEO?
- Quais livros/podcasts você recomenda?

## 📝 Prepare-se para o encontro

Para aproveitar ao máximo esta oportunidade:

1. **Pesquise um pouco**: Dê uma olhada no LinkedIn do Raphael e em entrevistas/artigos sobre a empresa
2. **Anote suas perguntas**: Liste o que você realmente quer saber
3. **Pense na sua história**: O Raphael vai querer te conhecer também!
4. **Seja autêntico**: Não precisa impressionar, seja você mesmo
5. **Prepare seu setup**: Teste câmera e microfone antes da reunião

## 🎯 Durante a reunião

- **Seja pontual**: Entre 5 minutos antes
- **Tenha sua câmera ligada**: Ajuda a criar conexão
- **Tome notas**: Insights valiosos podem surgir
- **Faça perguntas**: Aproveite esta oportunidade única
- **Compartilhe suas ideias**: Sua perspectiva é valiosa
- **Relaxe e aproveite**: É uma conversa, não um teste!

## ✅ Após a reunião

Depois do coffee com Raphael:

1. Anote seus principais aprendizados e insights
2. Marque este item como concluído na plataforma
3. Compartilhe suas impressões com seu time se quiser
4. Aplique o que aprendeu no seu dia a dia

## 💪 Dica final

O Raphael é super acessível e está genuinamente interessado em conhecer você! Não tenha medo de ser direto, fazer perguntas difíceis ou compartilhar suas opiniões. Essa abertura e transparência é parte da nossa cultura.

**Aproveite este momento especial!** 🚀
      `,
    },
    {
      id: 'company-6',
      title: 'Leitura: Código de Conduta',
      description: 'Comportamentos esperados, ética profissional e compromissos da GrowinCo',
      type: 'reading',
      duration: '20 min',
      content: `
# Código de Conduta da GrowinCo 📋

O Código de Conduta é um dos documentos mais importantes da nossa empresa. Ele define os princípios éticos, valores e comportamentos que esperamos de todos os colaboradores da GrowinCo.

## 📖 Acesse o documento

Leia atentamente nosso Código de Conduta completo:

[**Clique aqui para acessar o Código de Conduta da GrowinCo**](https://drive.google.com/file/d/1U0p7DCSAJIVlkZNfQKLpWno_LKUJg9Vv/view?usp=sharing)

Reserve cerca de **20 minutos** para uma leitura cuidadosa e reflexiva do material.

## 📌 Por que este documento é importante?

O Código de Conduta estabelece:

### Princípios Éticos
- Integridade e transparência em todas as ações
- Respeito à diversidade e inclusão
- Responsabilidade social e ambiental
- Compromisso com a excelência

### Comportamentos Esperados
- Como nos relacionamos entre colaboradores
- Postura profissional no ambiente de trabalho
- Uso adequado de recursos da empresa
- Comunicação respeitosa e construtiva

### Políticas Importantes
- Conflito de interesses
- Confidencialidade de informações
- Uso de redes sociais e mídia
- Relacionamentos no ambiente de trabalho
- Prevenção ao assédio e discriminação

### Compliance e Regulamentações
- Normas legais e regulatórias
- Política anticorrupção
- Proteção de dados (LGPD)
- Procedimentos de denúncia

## 💡 Como proceder

### Durante a leitura

1. **Leia com atenção**: Reserve um momento tranquilo sem interrupções
2. **Faça anotações**: Marque pontos importantes ou dúvidas que surgirem
3. **Reflita sobre os valores**: Pense em como aplicá-los no seu dia a dia
4. **Anote dúvidas**: Qualquer ponto que não ficou claro

### Após a leitura

Depois de ler o Código de Conduta:

1. **Você receberá o documento para assinatura** - O time de People & Culture enviará o documento oficialmente para você assinar digitalmente
2. **Assinatura obrigatória** - A assinatura confirma que você leu, compreendeu e concorda em seguir todas as diretrizes
3. **Guarde uma cópia** - Após assinar, você receberá uma cópia para consulta futura

## ❓ Tem dúvidas?

Se durante a leitura surgirem dúvidas ou você precisar de esclarecimentos sobre algum ponto do Código de Conduta:

- Entre em contato com **Victor Hadad** ou **Mariane Monteiro** do time de People & Culture
- Envie uma mensagem pelo Teams ou e-mail
- Não prossiga com a assinatura até que todas as dúvidas estejam esclarecidas

## 🔒 Confidencialidade

Lembre-se de que muitas informações do Código de Conduta são confidenciais e para uso interno. Não compartilhe o documento com pessoas externas à GrowinCo.

## ⚠️ Importante

O cumprimento do Código de Conduta é **obrigatório** para todos os colaboradores da GrowinCo, sem exceção. Violações podem resultar em medidas disciplinares, incluindo desligamento.

Entretanto, nosso objetivo não é punir, mas sim criar um ambiente de trabalho saudável, ético e respeitoso para todos!

## ✅ Próximos passos

1. ✓ Acesse e leia o documento completo no link acima
2. ✓ Anote suas dúvidas (se houver)
3. ✓ Aguarde o time de People enviar o documento para assinatura digital
4. ✓ Assine o documento quando receber
5. ✓ Marque este item como concluído na plataforma

## 🤝 Nosso compromisso

A GrowinCo se compromete a manter um ambiente de trabalho ético, diverso, inclusivo e respeitoso. O Código de Conduta é nossa base para isso, e contamos com você para vivê-lo no dia a dia!

**Bem-vindo(a) a uma empresa que leva seus valores a sério!** 💪
      `,
    },
    {
      id: 'company-7',
      title: 'Material: Brand Guidelines',
      description: 'Guia completo de identidade visual, aplicações e uso da marca GrowinCo',
      type: 'reading',
      duration: '30 min',
      content: `
# Brand Guidelines da GrowinCo 🎨

O Brand Guidelines é o guia oficial da nossa identidade visual. Ele define como usar nossos logos, cores, tipografia e todos os elementos que formam a marca GrowinCo.

## 📚 Acesse a apresentação completa

[**Clique aqui para acessar o Brand Guidelines da GrowinCo**](https://www.canva.com/design/DAHDAlqsVDc/t9LnBcdVEsghhGi3QRJBRA/view?utm_content=DAHDAlqsVDc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6e0e6297dd)

Reserve cerca de **30 minutos** para ler e absorver todo o conteúdo. Esta apresentação é completa e essencial para entender nossa identidade visual.

## 🎯 Por que este material é importante?

### Consistência da Marca
A força de uma marca está na sua consistência. Quando todos usam os mesmos padrões visuais, nossa identidade se fortalece e fica mais reconhecível no mercado.

### Profissionalismo
Usar corretamente nossa identidade visual transmite profissionalismo e cuidado com os detalhes em todas as nossas comunicações.

### Reconhecimento
Uma marca consistente é mais facilmente reconhecida por clientes, parceiros e pelo mercado.

## 📖 O que você vai encontrar no Brand Guidelines

### Identidade Visual
- **Logos e variações**: Versões principais, alternativas e quando usar cada uma
- **Área de proteção**: Espaço mínimo ao redor do logo
- **Tamanhos mínimos**: Dimensões adequadas para cada aplicação
- **Usos incorretos**: O que NÃO fazer com nosso logo

### Paleta de Cores
- **Cores primárias**: Laranja e outras cores principais da GrowinCo
- **Cores secundárias**: Paleta complementar
- **Códigos**: RGB, CMYK, Pantone e HEX para cada cor
- **Aplicações**: Como usar as cores em diferentes contextos

### Tipografia
- **Fontes oficiais**: Famílias tipográficas da marca
- **Hierarquia**: Como usar títulos, subtítulos e texto
- **Tamanhos e pesos**: Especificações técnicas
- **Alternativas**: Fontes substitutas quando necessário

### Aplicações
- **Materiais impressos**: Cartões, papelaria, folders
- **Digital**: Website, redes sociais, apresentações
- **Sinalização**: Uniformes, brindes, ambientes
- **Exemplos práticos**: Casos de uso reais

### Tom de Voz e Linguagem Visual
- **Fotografia**: Estilo e tratamento de imagens
- **Ilustrações**: Estilo gráfico e iconografia
- **Elementos gráficos**: Padrões e texturas
- **Composição**: Como organizar elementos visuais

## 💡 Como usar este material no dia a dia

### Se você trabalha com comunicação
- Use este guia como referência constante
- Sempre que criar materiais, valide contra o guideline
- Mantenha os arquivos de logo e assets organizados
- Em caso de dúvida, consulte o time de Comunicação

### Se você NÃO trabalha diretamente com design
- Entenda os conceitos básicos da nossa identidade
- Use sempre os templates aprovados disponíveis no Canva
- Não modifique logos ou cores por conta própria
- Quando precisar de material novo, fale com Comunicação

## 🎨 Acessando os arquivos da marca

Após ler o Brand Guidelines, você terá acesso a:

- **Templates no Canva**: Modelos prontos para apresentações, posts, etc.
- **Logos em alta resolução**: Arquivos em diversos formatos
- **Paleta de cores instalada**: Já configurada no Canva e outras ferramentas
- **Fontes corporativas**: Download e instalação

**Dica**: No Canva, procure pela pasta "GrowinCo Brand Kit" para acessar todos os elementos aprovados!

## ✅ Checklist de leitura

Ao ler o Brand Guidelines, certifique-se de entender:

- ✓ Como e quando usar cada versão do logo
- ✓ Quais são nossas cores oficiais e códigos
- ✓ Qual tipografia usar em cada situação
- ✓ O que NÃO fazer com nossa identidade visual
- ✓ Onde encontrar templates e assets aprovados
- ✓ Quem contatar em caso de dúvidas

## ⚠️ Importante: O que NUNCA fazer

- ❌ Modificar as proporções ou cores do logo
- ❌ Usar logos de baixa qualidade ou pixelizados
- ❌ Criar suas próprias versões de materiais institucionais
- ❌ Usar fontes ou cores que não estão no guideline
- ❌ Adicionar efeitos não autorizados (sombras, gradientes, distorções)

## 🤝 Precisa de ajuda?

Se tiver dúvidas sobre como aplicar nossa identidade visual ou precisar de materiais específicos:

- Entre em contato com o **time de Comunicação**
- Não improvise - sempre valide antes de publicar
- Quando for criar algo novo, peça orientação primeiro

## 📌 Mantenha como referência

Salve o link do Brand Guidelines nos seus favoritos! Você vai consultar este material várias vezes durante sua jornada na GrowinCo.

## ✅ Próximos passos

1. ✓ Acesse e leia toda a apresentação do Brand Guidelines
2. ✓ Salve o link nos favoritos para consultas futuras
3. ✓ Explore o Brand Kit no Canva
4. ✓ Se tiver dúvidas, anote para a reunião com Comunicação
5. ✓ Marque este item como concluído na plataforma

**Nossa marca é um dos nossos ativos mais valiosos. Vamos cuidar dela juntos!** 🚀
      `,
    },
    {
      id: 'company-8',
      title: 'Reunião com Comunicação: How We Talk GrowinCo',
      description: 'Tom de voz, comunicação corporativa e diretrizes de branding',
      type: 'meeting',
      duration: '30 min',
      content: `
# Reunião com Comunicação: How We Talk GrowinCo 💬

Esta reunião é fundamental para você entender como a GrowinCo se comunica com o mundo - tanto internamente quanto externamente. Vamos conversar sobre tom de voz, linguagem, posicionamento e como você pode contribuir para fortalecer nossa marca.

## 👤 Com quem você vai conversar

**Mariane Monteiro** - Time de Comunicação

Mariane é responsável pela comunicação corporativa e branding da GrowinCo. Ela vai te ajudar a entender como "falamos" enquanto empresa e como manter a consistência da nossa voz em todas as interações.

## 📅 Como agendar

### Passo a passo

1. **Abra o Microsoft Teams**
2. **Procure por**: Mariane Monteiro
3. **Envie uma mensagem** apresentando-se e mencionando que você está no onboarding
4. **Peça para agendar** a reunião "How We Talk GrowinCo" (30 minutos)
5. **Sugira horários** que funcionam para você nos próximos dias

### Mensagem sugerida

*"Oi, Mariane! Tudo bem?*

*Estou no processo de onboarding e gostaria de agendar a reunião 'How We Talk GrowinCo' com você para conversarmos sobre tom de voz e comunicação corporativa.*

*Você teria disponibilidade de 30 minutos nos próximos dias? Posso me adequar ao seu calendário!*

*Obrigado(a)!"*

## 🎯 Objetivo da reunião

Esta conversa vai te ajudar a:

### Entender Nossa Voz
- Como a GrowinCo se posiciona no mercado
- Tom de voz e personalidade da marca
- Diferencial da nossa comunicação
- Valores que transmitimos em cada mensagem

### Conhecer Diretrizes
- Como nos comunicamos com clientes e parceiros
- Linguagem apropriada para cada canal
- O que fazer e o que evitar na comunicação
- Exemplos práticos de boas comunicações

### Aplicar no Dia a Dia
- Como representar a marca em reuniões externas
- Dicas para criar apresentações e materiais
- Cuidados com comunicação em redes sociais
- Quando pedir revisão do time de Comunicação

## 📋 Temas que serão abordados

### Tom de Voz da GrowinCo

- **Personalidade da marca**: Como queremos ser percebidos
- **Linguagem**: Formal ou informal? Quando usar cada uma?
- **Emoção**: Como transmitir entusiasmo e profissionalismo
- **Autenticidade**: Sendo genuínos em nossa comunicação

### Comunicação Corporativa

- **Comunicação interna**: E-mails, Teams, reuniões
- **Comunicação externa**: Clientes, fornecedores, mercado
- **Materiais institucionais**: Apresentações, propostas, cases
- **Redes sociais**: LinkedIn, Instagram e outras plataformas

### Branding e Posicionamento

- **Propósito**: Por que a GrowinCo existe
- **Missão e Visão**: Onde queremos chegar
- **Valores**: O que guia nossas decisões
- **Diferencial**: O que nos torna únicos no mercado CPG

### Exemplos Práticos

Mariane vai compartilhar:
- Cases de comunicações bem-sucedidas
- Erros comuns a evitar
- Templates e guidelines
- Dicas específicas para sua área

## 💡 Prepare-se para a reunião

### Antes da conversa

- ✓ Leia o **Brand Guidelines** (item anterior do onboarding)
- ✓ Pense em como você costuma se comunicar profissionalmente
- ✓ Observe materiais da GrowinCo (site, LinkedIn, apresentações)
- ✓ Anote dúvidas sobre comunicação que você já tenha

### Perguntas que você pode fazer

- Como adaptar o tom de voz para diferentes situações?
- Existe algum termo ou linguagem que devemos evitar?
- Como manter a consistência em comunicações frequentes?
- Quais são os erros mais comuns que novos colaboradores cometem?
- Como o time de Comunicação pode me apoiar no dia a dia?
- Que materiais ou templates estão disponíveis para usar?

## 🎨 Recursos que você vai receber

Após a reunião, você terá acesso a:

- **Guia de Tom de Voz**: Documento completo sobre nossa comunicação
- **Templates aprovados**: Modelos para e-mails, apresentações, etc.
- **Banco de cases**: Exemplos de comunicações de sucesso
- **Checklist de aprovação**: Quando precisa validar com Comunicação
- **Contatos do time**: Para tirar dúvidas futuras

## ⚠️ Importante

### Quando envolver o time de Comunicação

Sempre consulte a equipe de Comunicação antes de:

- Publicar algo em nome da GrowinCo em redes sociais
- Criar materiais institucionais para clientes ou parceiros
- Dar entrevistas ou fazer apresentações públicas
- Enviar comunicados oficiais para grupos grandes
- Criar novos templates ou materiais de marca

### Responsabilidade de todos

**Cada colaborador é um embaixador da marca GrowinCo!**

Tudo que você fala, escreve e compartilha reflete nossa empresa. Por isso, é essencial entender nosso tom de voz e diretrizes de comunicação.

## 🤝 Conexão com outros tópicos

Esta reunião se conecta com:

- **Brand Guidelines** (item anterior) - Identidade visual
- **Código de Conduta** - Ética na comunicação
- **Tutoriais de ferramentas** - Canva para criar materiais

## ✅ Próximos passos

1. ✓ Entre em contato com **Mariane Monteiro** pelo Teams
2. ✓ Agende a reunião para os próximos dias (30 minutos)
3. ✓ Leia o Brand Guidelines antes da conversa
4. ✓ Prepare suas perguntas sobre comunicação
5. ✓ Após a reunião, marque este item como concluído

## 📞 Contato

**Mariane Monteiro**
Time de Comunicação
Disponível pelo Microsoft Teams

**Dica**: Mariane é super acessível e adora ajudar! Não hesite em tirar todas as suas dúvidas sobre comunicação e branding.

**Lembre-se**: A forma como nos comunicamos é tão importante quanto o que comunicamos! 🚀
      `,
    },
    {
      id: 'company-9',
      title: 'Onde Achar Acessos a Ferramentas',
      description: 'Central de acessos, senhas e permissões para todas as ferramentas que você vai usar',
      type: 'reading',
      duration: '15 min',
      content: `
# Onde Achar Acessos a Ferramentas 🔑

Todas as informações sobre acessos às ferramentas da GrowinCo estão centralizadas no nosso **Notion**. É lá que você vai encontrar senhas, links, tutoriais e tudo que precisa para começar a trabalhar!

## 🚪 Como acessar o Notion da GrowinCo

Use estas credenciais compartilhadas para fazer login:

### Credenciais de acesso

- **Login**: internal@growinco.com
- **Senha**: k3VNcTUScchm

### Passo a passo

1. Acesse [**notion.so**](https://notion.so)
2. Clique em **"Sign in"**
3. Digite o e-mail: **internal@growinco.com**
4. Digite a senha: **k3VNcTUScchm**
5. Clique em **"Continue"** para entrar

⚠️ **Importante**: Essas credenciais são compartilhadas por toda a empresa para acesso ao workspace interno.

## 📚 O que você vai encontrar no Notion

### 🏠 Company Home

A **Company Home** é a página principal onde você encontrará:

- **Acessos a Ferramentas** 🔑
  - Logins e senhas de todas as ferramentas da empresa
  - Links diretos para cada plataforma
  - Instruções específicas de acesso
  - Quem contatar em caso de problemas

- **Informações Institucionais** 📖
  - Documentos importantes da empresa
  - Políticas e procedimentos
  - Contatos dos times
  - Calendário de eventos corporativos

- **Recursos e Templates** 📄
  - Templates de apresentações
  - Modelos de documentos
  - Materiais de apoio
  - Brand assets

### 👥 Páginas dos Times

Cada time tem sua própria área no Notion com:

- **Projetos** 📊
  - Projetos ativos do time
  - Status e responsáveis
  - Documentação de cada projeto
  - Roadmaps e planejamentos

- **Tasks** ✅
  - Lista de tarefas do time
  - Prioridades e deadlines
  - Assignments individuais
  - Acompanhamento de progresso

- **Processos** ⚙️
  - Documentação de processos internos
  - Guias e tutoriais específicos do time
  - Checklists e fluxos de trabalho
  - Melhores práticas

- **Base de Conhecimento** 💡
  - Aprendizados do time
  - FAQs e troubleshooting
  - Decisões técnicas/estratégicas
  - Histórico e documentação

## 🔍 Como navegar no Notion

### Encontrando o que você precisa

1. **Sidebar (menu lateral)**: Use para navegar entre páginas principais
2. **Search (Cmd/Ctrl + P)**: Busque qualquer página ou conteúdo rapidamente
3. **Favoritos**: Adicione páginas importantes aos favoritos clicando na estrela ⭐
4. **Breadcrumbs**: Use a navegação no topo para voltar às páginas anteriores

### Dicas de navegação

- **Cmd/Ctrl + K**: Abre o menu rápido de busca
- **Cmd/Ctrl + [**: Volta para a página anterior
- **Cmd/Ctrl + ]**: Avança para a próxima página
- **Cmd/Ctrl + Shift + N**: Cria nova página

## 🔐 Acessos que você vai encontrar

No espaço **Company Home > Acessos a Ferramentas**, você encontrará credenciais para:

### Ferramentas de Comunicação
- Microsoft Teams
- E-mail corporativo
- Slack (se aplicável)
- Zoom ou Meet

### Ferramentas de Trabalho
- Canva (conta corporativa)
- Google Workspace
- Dropbox ou Drive
- Asana/Monday/Jira

### Ferramentas Específicas por Time
- CRM (Commercial)
- ERP (Finances)
- Plataformas de CS
- Ferramentas de desenvolvimento
- E muito mais!

## ⚠️ Segurança e Boas Práticas

### Mantenha as credenciais seguras

- ❌ Não compartilhe credenciais fora da empresa
- ❌ Não salve senhas em lugares não seguros
- ❌ Não tire screenshots com senhas visíveis
- ✅ Use gerenciadores de senha quando possível
- ✅ Altere suas senhas pessoais regularmente
- ✅ Ative 2FA (autenticação de dois fatores) quando disponível

### Se você perder acesso

Se esquecer a senha do Notion ou não conseguir acessar:

1. Entre em contato com o **time de People & Culture**
2. Fale com **Victor Hadad** ou **Mariane Monteiro** no Teams
3. Eles vão te ajudar a recuperar o acesso rapidamente

## 📱 App mobile do Notion

Recomendamos instalar o app do Notion no seu celular:

- **iOS**: [Download na App Store](https://apps.apple.com/app/notion/id1232780281)
- **Android**: [Download na Play Store](https://play.google.com/store/apps/details?id=notion.id)

Assim você pode consultar informações importantes mesmo fora do computador!

## 💡 Explore e familiarize-se

Reserve uns 15-20 minutos para:

- ✓ Fazer login no Notion com as credenciais fornecidas
- ✓ Explorar a **Company Home**
- ✓ Localizar a página de **Acessos a Ferramentas**
- ✓ Visitar a página do seu **time**
- ✓ Adicionar páginas importantes aos **favoritos**
- ✓ Testar a busca e navegação

## 🎯 Dica importante

**Salve as credenciais do Notion em um lugar seguro!** Este será seu ponto de referência para encontrar todos os outros acessos que você precisar durante sua jornada na GrowinCo.

## 🤝 Precisa de ajuda?

Se tiver qualquer dificuldade para acessar o Notion ou encontrar informações:

- Entre em contato com **People & Culture**
- Pergunte ao seu **líder direto**
- Envie mensagem no **Teams** para o time

## ✅ Próximos passos

1. ✓ Acesse o Notion com as credenciais fornecidas
2. ✓ Explore a Company Home e acessos a ferramentas
3. ✓ Visite a página do seu time
4. ✓ Salve o login do Notion em lugar seguro
5. ✓ Marque este item como concluído

**O Notion é o coração da nossa documentação. Explore bastante!** 🚀
      `,
    },
    {
      id: 'company-10',
      title: 'Team Culture: Nossa Plataforma de Clima Organizacional',
      description: 'Conheça a plataforma onde medimos nossa cultura e ambiente de trabalho de forma anônima',
      type: 'reading',
      duration: '10 min',
      content: `
# Team Culture: Nossa Plataforma de Clima Organizacional 🌡️

A **Team Culture** é a plataforma que usamos na GrowinCo para medir e acompanhar nosso clima organizacional e cultura da empresa. É uma ferramenta essencial para garantirmos que estamos construindo um ambiente de trabalho saudável, inclusivo e produtivo.

## 🎯 O que é a Team Culture?

A Team Culture é uma plataforma de **pesquisas e pulse surveys** que nos ajuda a:

- **Medir o clima organizacional** periodicamente
- **Ouvir a opinião** de todos os colaboradores
- **Identificar pontos fortes** e áreas de melhoria
- **Acompanhar a evolução** da nossa cultura ao longo do tempo
- **Tomar decisões baseadas em dados** sobre people & culture

## 🔒 100% Anônimo e Confidencial

**A coisa mais importante que você precisa saber**: Todas as respostas na Team Culture são **completamente anônimas**.

### Por que o anonimato é importante?

- ✅ Você pode ser **100% sincero** nas suas respostas
- ✅ **Ninguém saberá** quem respondeu o quê
- ✅ Não há consequências por opiniões negativas ou construtivas
- ✅ Seu feedback é **agregado** com o de outros colaboradores
- ✅ Isso garante **transparência real** sobre o clima da empresa

### O que a liderança vê?

A liderança recebe apenas:
- Dados **agregados** e estatísticas gerais
- Médias e tendências por time (sem identificação individual)
- Comentários anônimos (sem nenhum dado que identifique quem escreveu)

**Impossível identificar respostas individuais!**

## 📧 Como acessar a Team Culture

### Login via E-mail Corporativo

O acesso à Team Culture é feito através do seu **e-mail corporativo @growinco.com**.

**Passo a passo para primeiro acesso:**

1. Aguarde receber um **e-mail de convite** da Team Culture no seu e-mail corporativo
2. O e-mail virá com o assunto relacionado a "Team Culture" ou "Pesquisa de Clima"
3. Clique no link do e-mail para criar sua conta
4. Use seu **e-mail @growinco.com** para fazer login
5. Siga as instruções para completar seu cadastro

**Importante**: Não é necessário memorizar senha - geralmente o login é feito via link mágico enviado por e-mail.

## 📊 O que você vai responder na plataforma

### Pesquisas Periódicas (Trimestrais ou Semestrais)

Pesquisas mais completas sobre diversos aspectos da empresa:

- **Satisfação geral** com a empresa
- **Liderança e gestão**
- **Desenvolvimento profissional**
- **Ambiente de trabalho**
- **Comunicação interna**
- **Benefícios e reconhecimento**
- **Diversidade e inclusão**
- **Work-life balance**

### Pulse Surveys (Semanais ou Quinzenais)

Perguntas rápidas e curtas sobre temas específicos:

- Como foi sua semana?
- Como está se sentindo no trabalho?
- Algum feedback rápido sobre algo específico?
- Temas pontuais do momento

**Tempo para responder**: 2-5 minutos para pulses, 10-15 minutos para pesquisas completas.

## 💡 Por que sua participação é importante?

### Seu feedback faz diferença!

- 📈 **Dados reais**: Decisões de P&C são baseadas nos resultados da Team Culture
- 🎯 **Identificação de problemas**: Ajuda a detectar questões antes que se tornem críticas
- 🌱 **Melhoria contínua**: Suas sugestões viram ações concretas
- 🗣️ **Voz ativa**: É sua oportunidade de influenciar a cultura da empresa
- 🤝 **Construção coletiva**: Todos contribuem para um ambiente melhor

### Impactos reais que já tivemos

Através do feedback na Team Culture, já implementamos:

- Ajustes em políticas de trabalho remoto
- Melhorias em processos de comunicação
- Novos benefícios solicitados pelo time
- Mudanças em práticas de gestão
- Iniciativas de desenvolvimento

## ⏰ Quando e como responder

### Fique atento às notificações

Você receberá:
- **E-mails** avisando quando houver nova pesquisa
- **Lembretes** caso ainda não tenha respondido
- **Prazo** para completar (geralmente 1-2 semanas)

### Dicas para responder bem

1. **Reserve 10-15 minutos** sem interrupções
2. **Seja sincero e construtivo** - lembre-se que é anônimo!
3. **Pense em exemplos concretos** ao avaliar cada aspecto
4. **Use os campos de comentários** para dar contexto às suas respostas
5. **Não deixe para última hora** - responda quando receber

## 🎯 O que fazer agora

Como novo colaborador:

1. ✅ **Aguarde o e-mail de convite** da Team Culture (pode levar alguns dias)
2. ✅ **Complete seu primeiro acesso** assim que receber
3. ✅ **Marque como lido** este conteúdo do onboarding
4. ✅ **Responda à primeira pesquisa** quando ela chegar

**Observação**: Algumas pesquisas pedem um tempo mínimo na empresa (ex: 30-60 dias) para você poder avaliar melhor certos aspectos. Isso é normal!

## 🤝 Cultura de Feedback

A Team Culture faz parte da nossa **cultura de feedback contínuo** na GrowinCo.

### Outros canais de feedback

Além da Team Culture, você também pode:

- **1:1s regulares** com seu líder
- **Feedbacks informais** no dia a dia
- **Reuniões de retrospectiva** dos times
- **Conversas com People & Culture**
- **Canais abertos no Teams**

### Todos os feedbacks são valorizados!

Seja através da Team Culture (anônimo) ou presencial (identificado), **todo feedback é bem-vindo e usado para melhorar a empresa**.

## ❓ Perguntas Frequentes

**P: E se eu der feedback negativo, vou ter problemas?**
R: Não! As respostas são anônimas e feedback construtivo é sempre valorizado.

**P: Preciso responder todas as pesquisas?**
R: Não é obrigatório, mas sua participação é muito importante para que tenhamos dados representativos.

**P: Quanto tempo leva para ver mudanças baseadas no feedback?**
R: Depende da questão, mas P&C costuma compartilhar planos de ação após cada pesquisa grande.

**P: Posso sugerir temas para futuras pesquisas?**
R: Sim! Fale com People & Culture sobre isso.

**P: Os resultados são compartilhados com todos?**
R: Sim, resultados agregados são geralmente apresentados para toda a empresa.

## 🚀 Vamos construir juntos!

A Team Culture é mais do que uma ferramenta - é um compromisso da GrowinCo em **ouvir ativamente** todos os colaboradores e **construir coletivamente** um lugar cada vez melhor para trabalhar.

**Sua voz importa. Participe!** 🧡

## ✅ Próximos passos

1. ✓ Entenda o propósito e importância da Team Culture
2. ✓ Aguarde o e-mail de convite no seu e-mail corporativo
3. ✓ Complete seu primeiro acesso quando receber
4. ✓ Responda sua primeira pesquisa com sinceridade
5. ✓ Marque este item como concluído

**Juntos, construímos a melhor versão da GrowinCo!** 🌟
      `,
    },
    {
      id: 'company-11',
      title: 'Growth Guide: Seu Mapa de Desenvolvimento na GrowinCo',
      description: 'Conheça o documento que orienta sua evolução de carreira e todas as avaliações de performance',
      type: 'reading',
      duration: '30 min',
      content: `
# Growth Guide: Seu Mapa de Desenvolvimento na GrowinCo 📊

O **Growth Guide da GrowinCo** é o principal documento que orienta o desenvolvimento de carreira dentro da empresa. Ele define de forma clara as competências esperadas ao longo da jornada de cada colaborador e serve como base para evolução profissional, alinhamento cultural e performance.

Todas as avaliações de desempenho — incluindo feedbacks recorrentes e ciclos anuais — são pautadas diretamente pelo Growth Guide. Por isso, é **essencial** que todos os colaboradores conheçam profundamente o material, utilizem-no como referência no dia a dia e o tenham sempre em mãos ao se preparar para conversas de feedback e análises de performance.

## 🎯 Os 4 Pilares de Avaliação

O guia está estruturado em **quatro grandes pilares** de avaliação:

### 1. Soft Skills
Comunicação, inteligência emocional, adaptabilidade e agilidade

### 2. Cultura
Valores, liderança e senso de crescimento

### 3. Hard Skills
Abrangência e expertise técnica

### 4. Performance
Visão de negócio e comprometimento

**Esses pilares refletem não apenas o que fazemos, mas principalmente _como_ fazemos**, reforçando que crescimento na GrowinCo está diretamente ligado ao comportamento, atitude e impacto gerado.

## 📈 Evolução por Senioridade

Outro ponto central do Growth Guide é a **evolução por senioridade**, que descreve claramente o que é esperado em cada nível:

### 🌱 Intern e Junior
**Foco em aprendizado**, desenvolvimento das bases técnicas e comportamentais, abertura a feedbacks e construção de consistência.

### 💼 Full
Maior autonomia, capacidade de execução com qualidade e início de **pensamento crítico** sobre melhorias e impacto.

### 🚀 Senior
Protagonismo, capacidade de resolver problemas de forma estruturada, priorização, colaboração ativa e **influência no time**.

### ⭐ Focal Point / Liderança
Atuação estratégica, desenvolvimento de pessoas, capacidade de alinhar o time com os objetivos da empresa e **gerar impacto ampliado**.

### 🎖️ Coordenação e acima (Manager, Director, VP, C-Level)
Visão sistêmica, tomada de decisão, liderança inspiradora e **responsabilidade direta sobre cultura, resultados e desenvolvimento organizacional**.

## 🔄 As 3 Dimensões do Crescimento

Ao longo dessas evoluções, há uma expectativa clara de crescimento em **três dimensões**:

**Autonomia → Liderança → Estratégia**

**Execução → Impacto → Escala**

**Aprendizado → Desenvolvimento de outros → Construção de cultura**

## 💡 Pontos Fundamentais

### Liderança é atitude, não cargo
Liderança é avaliada em **todos os níveis** da organização. Você não precisa ter um cargo de liderança para demonstrar atitude de líder.

### Alinhamento com valores é indispensável
O alinhamento com os valores da empresa é **requisito fundamental** para qualquer evolução de carreira.

### Ferramenta viva de desenvolvimento
O Growth Guide deve ser encarado como uma **ferramenta viva** de desenvolvimento. Utilizá-lo de forma ativa — especialmente na preparação para feedbacks e ciclos de avaliação — permite maior clareza sobre expectativas e acelera o crescimento individual.

## 📚 Materiais complementares

Para aprofundar seu conhecimento sobre gestão de performance na GrowinCo:

### 1. Growth Guide Completo
[**Acesse o Growth Guide completo**](https://www.notion.so/growinco/Individual-Performance-Management-2bf0709d1db14ce898ff70251ec4f0b8?source=copy_link)

Documento detalhado com todas as competências por senioridade e área.

### 2. Individual Development Plan - IDP
[**Acesse o guia completo sobre IDP**](https://www.notion.so/growinco/Individual-Development-Plan-IDP-91474b884eec4cf78a501dabc9dd7237?source=copy_link)

Entenda como criar seu plano de desenvolvimento usando o método 70/20/10 e metodologias como SWOT e OKRs.

**Tempo de leitura**: Reserve cerca de **30-40 minutos** para ler os materiais.

## 💡 Individual Development Plan (IDP)

O IDP é seu **compromisso com o desenvolvimento**. É um plano com ações práticas para você sair de onde está hoje para onde quer chegar na carreira.

### Método 70/20/10

Seu IDP deve seguir esta proporção:

#### 70% - Experiências práticas do dia a dia
Exemplo: Se quer melhorar inglês, participe de reuniões em inglês. Se quer melhorar comunicação, lidere apresentações.

#### 20% - Aprendizado informal e interações
Exemplo: Conversas com colegas, mentorias internas, benchmarking com outros profissionais, troca de experiências.

#### 10% - Aprendizado formal
Exemplo: Cursos, palestras, certificações, livros, workshops, vídeo-aulas.

### Como construir seu IDP

Você **não precisa fazer sozinho**! Conte com:

- ✅ **Seu relatório de performance** - Identifica competências a desenvolver
- ✅ **Seu líder direto** - Ajuda com insights, validação e direcionamento
- ✅ **Time de P&C** - Follow-ups, escolha de métodos e recursos de aprendizado

## 🚀 Próximos passos no seu desenvolvimento

- **Primeiros 30 dias**: Foco em entender o Growth Guide e expectativas da sua senioridade
- **Até 60 dias**: Primeira conversa de feedback com líder
- **Até 90 dias**: Elaboração do seu IDP com apoio de People e líder
- **Mensalmente**: Feedback Sessions contínuas
- **Semestralmente**: Performance Review formal (junho e novembro)

## 🤝 Precisa de ajuda?

Se tiver dúvidas sobre o Growth Guide, desenvolvimento ou IDP:

- Fale com seu **líder direto**
- Entre em contato com **Victor Hadad** ou **Mariane Monteiro** (People & Culture)
- Consulte os materiais no **Notion** (links acima)

**Lembre-se**: Seu desenvolvimento é uma prioridade na GrowinCo. O Growth Guide é sua bússola nessa jornada! 💪
      `,
    },
    {
      id: 'company-12',
      title: 'Leituras: Sobre o Mercado CPG',
      description: 'Materiais essenciais para entender o mercado de Consumer Packaged Goods',
      type: 'reading',
      duration: '1h',
      content: `
# Entendendo o Mercado CPG 📦

Para trabalhar na GrowinCo, é fundamental entender o mercado que atendemos: **CPG (Consumer Packaged Goods)**, também conhecido como **FMCG (Fast-Moving Consumer Goods)**. Este é o nosso mundo!

## 🎯 O que é CPG/FMCG?

**Fast-moving consumer goods** ou FMCG (também conhecido como Consumer Packaged Goods ou CPG) são, tipicamente, produtos de baixo valor unitário com alta rotatividade.

### Características principais

- **Baixo preço individual** - Produtos acessíveis para consumo do dia a dia
- **Alto volume de vendas** - Vendidos em grande quantidade
- **Consumo rápido** - Produtos usados e repostos frequentemente
- **Vida útil curta** - Prazo de validade ou uso limitado
- **Fidelização do cliente** - Marcas geram lealdade e recompra

## 🛒 Exemplos de produtos CPG

A definição de FMCG é muito ampla - qualquer item vendido a preços relativamente baixos e consumido rapidamente pode ser considerado CPG. A maioria dos produtos do seu supermercado local se qualifica!

Exemplos comuns de CPG/FMCG:

- 🍏 **Frutas e vegetais**
- 🥩 **Carnes**
- 🥤 **Bebidas não alcoólicas**
- 🧈 **Laticínios**
- 🍞 **Pães e produtos de padaria**
- 🪥 **Higiene pessoal** (pasta de dente, desodorante)
- 🍻 **Álcool e tabaco**
- 🍫 **Confeitaria**
- 💊 **Alguns tipos de medicamentos**

## 💼 Como funciona o mercado CPG

### Modelo de Negócio

Individualmente, os produtos CPG geralmente têm uma **margem de lucro baixa** – mas devido à probabilidade de vendas em massa, podem ser muito lucrativos.

**CPG vs. Bens Duráveis**
- **CPG**: Vendidos em alto volume, preços baixos, usados rapidamente
- **Bens duráveis** (carros, eletrodomésticos): Comprados com menos frequência, duram muito mais tempo

### Fatores críticos de sucesso

Para empresas de CPG terem sucesso, elas precisam de:

- ✅ **Vastas redes de distribuição** - Alcançar muitos pontos de venda
- ✅ **Técnicas de baixa contribuição** - Otimizar margens pequenas
- ✅ **Alta rotatividade de estoque** - Vender rápido e repor constantemente
- ✅ **Volume alto** - Compensar margens baixas com quantidade

Produtos CPG geralmente têm prazos de validade mais curtos, são comprados para consumo diário e incentivam a lealdade do cliente.

## 🎥 Vídeo: Introdução ao Mercado CPG

Assista a este vídeo para entender melhor a dinâmica do mercado de bens de consumo:

[**Assista: Introduction to Consumer Goods Market**](https://www.youtube.com/watch?v=yThuLnPBG2c)

Este vídeo explica os fundamentos do mercado, tendências e como as empresas CPG operam.

## 🚀 Como a GrowinCo atua no mercado CPG

A GrowinCo conecta **seekers (empresas CPG que procuram fornecedores)** e **solvers (fornecedores/co-manufacturers)** em um ambiente de colaboração virtual, gerando engajamento, revelando métricas e expondo ambos os lados a oportunidades ilimitadas de crescimento.

### Problemas que resolvemos

## 💡 1. Supplier Drive Innovation

**Desafios das empresas CPG:**
- Falta de canal adequado para fornecedores exibirem suas capacidades e inovações
- Pouco ou nenhum compartilhamento de projetos entre diferentes unidades de negócio da mesma empresa
- **Tempo longo para lançamento** - Mais de 18 meses para lançar um novo produto

**Solução GrowinCo:** Plataforma centralizada para fornecedores apresentarem inovações e empresas descobrirem rapidamente novas soluções.

## 🔗 2. Supply Chain Resilience

**Desafios das empresas CPG:**
- Falta de flexibilidade na manufatura interna
- Dificuldade em encontrar co-manufacturers que atendam aos critérios da empresa
- Base de dados de co-manufacturers desatualizada
- Falta de plano de contingência de negócios para fornecedores e produção interna

**Solução GrowinCo:** Rede atualizada de fornecedores qualificados com dados em tempo real para resiliência da cadeia de suprimentos.

## 🔍 3. Supplier Prospection

**Desafios das empresas CPG:**
- Ciclos longos de desenvolvimento e aprovação de fornecedores
- Processos de prospecção ineficazes e difíceis
- Falta de recursos para explorar todo o mercado

**Solução GrowinCo:** Processo simplificado de prospecção com acesso a todo o mercado de fornecedores em um só lugar.

## 📚 4. Knowledge Management

**Desafios das empresas CPG:**
- Solicitações enviadas a fornecedores não são centralizadas
- Banco de ideias é perdido devido a turnover/mudanças na estrutura
- Processo de NDA não é bem estruturado e organizado

**Solução GrowinCo:** Gestão centralizada de conhecimento, histórico de projetos e processos organizados de confidencialidade.

## 📊 Material complementar

Para se aprofundar ainda mais sobre a GrowinCo e o mercado CPG:

[**Acesse nossa apresentação institucional**](https://growincocom.sharepoint.com/:x:/s/teamsite/IQDbwolIUUNyRamI2wmVanzxAYbYdBgo2YEJ0UbhhKZD_zU?e=0pDeky)

Este documento contém informações detalhadas sobre nossa solução, casos de uso e diferenciais competitivos.

## 🎥 Vídeo adicional: Deep Dive no Mercado

[**Assista: Análise aprofundada do mercado CPG**](https://www.youtube.com/watch?v=lRlObp5bjn0)

Explore as tendências, desafios e oportunidades do setor de bens de consumo.

## 💭 Reflita sobre o mercado

Enquanto consome esses materiais, pense sobre:

- **Quem são nossos clientes?** Grandes empresas CPG com múltiplos produtos e fornecedores
- **Quais suas dores?** Inovação lenta, falta de visibilidade, processos fragmentados
- **Como ajudamos?** Plataforma que conecta, organiza e acelera a cadeia de suprimentos
- **Por que é importante?** O mercado CPG é gigantesco e carente de soluções tecnológicas
- **Qual nosso diferencial?** Somos especialistas neste vertical específico

## 🎯 Por que isso importa para você?

Independente da sua área na GrowinCo, entender o mercado CPG é essencial porque:

- **Você vai falar com clientes CPG** - Precisa entender suas dores e linguagem
- **Vai tomar decisões de produto** - Com base nas necessidades do mercado
- **Vai criar conteúdo e materiais** - Que ressoem com nosso público
- **Vai vender nossa solução** - Precisa articular nosso valor
- **Vai contribuir com ideias** - Baseadas em conhecimento do setor

## ✅ Checklist de aprendizado

Após consumir os materiais, certifique-se de que você entende:

- ✓ O que é CPG/FMCG e suas características
- ✓ Exemplos de produtos e empresas CPG
- ✓ Como o mercado CPG funciona e seus desafios
- ✓ Os 4 principais problemas que a GrowinCo resolve
- ✓ Nosso modelo de negócio (conectar seekers e solvers)
- ✓ Por que nossa solução é relevante para o mercado

## 📝 Próximos passos

1. ✓ Leia todo o conteúdo desta página (15 min)
2. ✓ Assista aos dois vídeos sobre CPG (25-30 min)
3. ✓ Acesse a apresentação institucional no SharePoint (15-20 min)
4. ✓ Anote dúvidas para discutir com seu time ou na reunião com Vendas
5. ✓ Marque este item como concluído

## 🤝 Tem dúvidas?

Se tiver perguntas sobre o mercado CPG ou como a GrowinCo atua:

- Fale com seu **líder direto**
- Pergunte ao **time de Commercial** - eles conhecem profundamente o mercado
- Prepare suas dúvidas para a **Reunião com Vendas** (próximo item)
- Entre em contato com **People & Culture** para indicações de quem conversar

**Agora você está pronto para entender o mundo em que vivemos e como transformamos o mercado CPG!** 🚀
      `,
    },
    {
      id: 'company-13',
      title: 'Reunião com Vendas: Entenda Nossos Pitches',
      description: 'Como vendemos, nossos diferenciais e principais argumentos comerciais',
      type: 'meeting',
      duration: '1h',
      content: `
# Reunião com Vendas: Entenda Nossos Pitches 💼

Esta é uma das reuniões mais práticas e importantes do seu onboarding! Você vai aprender como conversamos com nossos clientes, quais são nossos argumentos de vendas e ver ao vivo como apresentamos a GrowinCo para o mercado.

## 📅 Como funciona esta reunião

**Atenção**: Esta reunião será **agendada por Pedro Hammer** (time de Commercial) diretamente no seu calendário do Teams.

### O que você precisa fazer

1. **Fique atento ao Teams** - Você receberá um convite de reunião
2. **Aceite o convite** - Confirme sua presença assim que receber
3. **Revise os materiais prévios** - Especialmente sobre o mercado CPG (item anterior)
4. **Prepare-se para aprender** - Esta é uma reunião prática e dinâmica

### Quem conduz

**Pedro Hammer** - Time de Commercial

Pedro é experiente em vendas B2B para o mercado CPG e vai te mostrar na prática como a GrowinCo se posiciona comercialmente.

## 🎯 O que você vai aprender

Durante esta reunião de 1 hora, Pedro vai apresentar:

### Como conversamos com clientes

- Os diferentes tipos de pitches que utilizamos
- Quando e como usar cada abordagem
- Principais argumentos e diferenciais da GrowinCo
- Como lidamos com objeções comuns

### Demonstração prática

**A parte mais valiosa da reunião!**

Pedro vai fazer uma **apresentação real** para você ver na prática como vendemos nossa solução para empresas CPG.

Você terá uma visão privilegiada de como um profissional de vendas experiente conduz uma negociação comercial.

## 💡 Por que esta reunião é importante

### Para TODOS os times

Mesmo que você não trabalhe diretamente com vendas, entender nossos pitches é crucial:

#### Se você é de **Product & Engineering**
- Entenda quais features são mais valorizadas pelos clientes
- Saiba como o produto é posicionado no mercado
- Aprenda quais problemas precisamos resolver melhor

#### Se você é de **Customer Success**
- Compreenda as expectativas criadas na venda
- Alinhe sua comunicação com a linguagem comercial
- Saiba como reforçar valor durante onboarding e adoção

#### Se você é de **Communication**
- Aprenda nossos principais argumentos de valor
- Entenda a linguagem que ressoa com clientes CPG
- Alinhe materiais de marketing com discurso de vendas

#### Se você é de **People & Culture**
- Entenda o negócio e como geramos receita
- Saiba explicar o que fazemos para candidatos
- Compreenda o perfil de cliente ideal para contratar melhor

#### Se você é de **Finances**
- Entenda o ciclo de vendas e previsibilidade
- Saiba como são estruturados contratos e precificação
- Compreenda drivers de valor para clientes

#### Se você é de **Commercial**
- Essencial! É seu playbook comercial
- Aprenda com um dos melhores do time
- Absorva técnicas e abordagens validadas

## 📚 Prepare-se antes da reunião

### Materiais para revisar

1. ✓ **Leituras sobre CPG** (item anterior do onboarding)
   - Você precisa entender o mercado para entender o pitch
   
2. ✓ **Brand Guidelines e Tom de Voz**
   - Nossa forma de comunicar se reflete no pitch
   
3. ✓ **Problemas que a GrowinCo resolve**
   - Supplier Innovation, Supply Chain, Prospection, Knowledge Management

### Perguntas para pensar

Antes da reunião, reflita sobre:
- Se você fosse um cliente CPG, o que te convenceria?
- Quais objeções você imaginaria ter?
- Como você explicaria a GrowinCo para alguém?
- Que tipo de prova/evidência seria convincente?

## 🎬 Durante a reunião

### Seja participativo

- ✅ **Faça anotações** - Anote frases, técnicas e argumentos importantes
- ✅ **Observe detalhes** - Tom de voz, ritmo, linguagem utilizada
- ✅ **Pense como cliente** - O que te convenceria?
- ✅ **Anote dúvidas** - Faça perguntas ao final

Você pode até **participar ativamente** se Pedro pedir! É uma ótima forma de aprender.

## 🔑 Nossos principais diferenciais

Alguns dos pilares da nossa comunicação comercial:

### Especialização em CPG
Somos focados 100% no mercado CPG, diferente de concorrentes generalistas que atendem diversos setores.

### Network Qualificado
Acesso a fornecedores e co-manufacturers validados, economizando meses de prospecção.

### Centralização
Tudo em um só lugar: RFQs, NDAs, projetos e histórico - fim da fragmentação.

### Aceleração de Inovação
Reduzimos significativamente o time-to-market de novos produtos.

### Resiliência da Cadeia
Plano B sempre disponível com nossa rede qualificada de fornecedores.

## 📊 Materiais de apoio

Após a reunião, Pedro vai compartilhar materiais relevantes para sua área, que podem incluir:

- Apresentações e decks de vendas
- Cases de sucesso de clientes
- Materiais sobre diferenciais competitivos
- Outros recursos comerciais

## ✅ Após a reunião

Depois da conversa com Pedro:

1. ✓ **Revise suas anotações** - Registre principais aprendizados
2. ✓ **Acesse os materiais** - Se Pedro compartilhar recursos adicionais
3. ✓ **Pratique** - Tente explicar a GrowinCo para alguém com suas próprias palavras
4. ✓ **Aplique no seu contexto** - Como usar esses aprendizados na sua área
5. ✓ **Marque como concluído** - Finalize este item do onboarding

## 💪 Aplique no seu dia a dia

Mesmo fora de vendas, use o que aprendeu:

- **Em reuniões com clientes** - Reforce nossos diferenciais
- **Criando materiais** - Use os argumentos validados
- **Apresentando seu trabalho** - Conecte com valor de negócio
- **Conversando externamente** - Saiba explicar claramente o que fazemos
- **Eventos e networking** - Tenha clareza sobre nossa proposta de valor

## 🚀 Você completou a Trilha da Empresa!

Após esta reunião, você terá completado **TODA a trilha da empresa**! 🎉

Você agora entende:
- ✅ Como usar nossas ferramentas essenciais
- ✅ Nossa cultura, valores e código de conduta
- ✅ Nossa identidade visual e comunicação
- ✅ O mercado CPG que atendemos
- ✅ Como vendemos nossa solução
- ✅ Como funciona gestão de performance
- ✅ Onde encontrar acessos e recursos

**Parabéns! Continue com a trilha específica do seu time para mergulhar ainda mais fundo nos processos e ferramentas da sua área!**

## 🤝 Precisa de ajuda?

Se tiver dúvidas sobre vendas, pitches ou abordagem comercial:

- Entre em contato com **Pedro Hammer** (Commercial)
- Fale com seu **líder direto**
- Peça para acompanhar **calls reais** de vendas quando possível
- Consulte os materiais compartilhados

**Lembre-se**: Todos somos embaixadores da GrowinCo, independente do cargo. Conhecer nossa proposta de valor é essencial! 💼
      `,
    },
    {
      id: 'company-14',
      title: 'Conhecendo Nossos Concorrentes',
      description: 'Panorama competitivo: principais players do mercado e seus posicionamentos',
      type: 'reading',
      duration: '45 min',
      content: `
# Conhecendo Nossos Concorrentes 🎯

Entender o cenário competitivo é fundamental para todos na GrowinCo. Conhecer nossos concorrentes nos ajuda a identificar nossos diferenciais, entender as necessidades do mercado e posicionar nossa solução de forma mais efetiva.

## 🌐 Principais Concorrentes

### 1. Keychain 🔗

**Website**: [https://www.keychain.com](https://www.keychain.com)

**Sobre**:
Keychain é uma plataforma de gestão de supply chain e sourcing focada em conectar marcas com fornecedores globais. Eles oferecem soluções para descoberta de fornecedores, gestão de relacionamento e rastreabilidade da cadeia de suprimentos.

**Foco Principal**:
- Sourcing e descoberta de fornecedores
- Gestão de relacionamento com suppliers
- Compliance e auditoria de fornecedores
- Rastreabilidade da supply chain

**Público-Alvo**:
Grandes empresas de CPG, retail e moda que precisam gerenciar supply chains complexas globalmente.

**Diferenciais deles**:
- Grande base de dados de fornecedores verificados
- Forte foco em compliance e sustentabilidade
- Integrações robustas com ERPs

---

### 2. PartnerSlate 🤝

**Website**: [https://www.partnerslate.com](https://www.partnerslate.com)

**Sobre**:
PartnerSlate é uma plataforma de sourcing que conecta marcas emergentes e estabelecidas com fornecedores e fabricantes. Focam especialmente em startups de CPG que precisam encontrar parceiros de manufatura e co-packers.

**Foco Principal**:
- Matchmaking entre marcas e manufaturadores
- Gestão de RFQs (Request for Quotation)
- Comparação de fornecedores
- Onboarding de novos parceiros

**Público-Alvo**:
Startups e marcas emergentes de CPG, food & beverage, beauty e wellness que estão escalando produção.

**Diferenciais deles**:
- Interface muito amigável para iniciantes
- Forte comunidade de marcas emergentes
- Foco em co-packers e contract manufacturers

---

### 3. ThomasNet 🏭

**Website**: [https://www.thomasnet.com](https://www.thomasnet.com)

**Sobre**:
ThomasNet é um dos maiores e mais antigos diretórios industriais B2B da América do Norte. Conecta compradores com fornecedores de produtos industriais, componentes e serviços de manufatura através de um marketplace robusto.

**Foco Principal**:
- Diretório massivo de fornecedores industriais
- Sourcing de componentes e materiais
- CAD downloads e especificações técnicas
- Leads generation para fornecedores

**Público-Alvo**:
Empresas de manufatura, engenharia, manutenção e operações industriais de todos os portes.

**Diferenciais deles**:
- Histórico de mais de 120 anos no mercado
- Base de dados enorme (500k+ fornecedores)
- Forte presença no setor industrial tradicional
- Conteúdo educacional rico (artigos, webinars)

---

### 4. Torg 🌍

**Website**: [https://www.torg.com](https://www.torg.com)

**Sobre**:
Torg é uma plataforma europeia de sourcing B2B especializada em alimentos e bebidas. Conecta compradores com fornecedores de produtos alimentícios, com forte presença no mercado mediterrâneo e europeu.

**Foco Principal**:
- Sourcing de alimentos e bebidas
- Produtos mediterrâneos (azeite, vinho, queijos)
- Private label e white label sourcing
- Import/export facilitado

**Público-Alvo**:
Distribuidores, importadores, varejistas e marcas de food & beverage que buscam fornecedores europeus, especialmente mediterrâneos.

**Diferenciais deles**:
- Especialização geográfica (Europa/Mediterrâneo)
- Nicho muito específico (F&B)
- Expertise em regulamentações europeias
- Forte em produtos artesanais e premium

---

### 5. Amicci 🤲

**Website**: [https://www.amicci.com](https://www.amicci.com)

**Sobre**:
Amicci é uma plataforma de sourcing colaborativo que conecta marcas com fornecedores verificados, com foco em transparência, sustentabilidade e comércio justo. Priorizam fornecedores éticos e rastreabilidade completa.

**Foco Principal**:
- Sourcing ético e sustentável
- Transparência da supply chain
- Comércio justo (fair trade)
- Certificações de sustentabilidade
- Colaboração entre marcas

**Público-Alvo**:
Marcas conscientes e sustentáveis de CPG, fashion e lifestyle que priorizam impacto social e ambiental.

**Diferenciais deles**:
- Forte foco em ESG (Environmental, Social, Governance)
- Comunidade engajada em sustentabilidade
- Vetting rigoroso de fornecedores
- Storytelling de impacto social

---

## 🎯 Como a GrowinCo se Diferencia

Enquanto nossos concorrentes focam principalmente em **sourcing e discovery de fornecedores**, a GrowinCo vai além:

### Nossa Proposta Única

✅ **Process Oriented Platform (POP)**
- Não somos apenas um diretório ou marketplace
- Gerenciamos todo o **ciclo de vida do projeto** de lançamento
- From ideation to market launch

✅ **Market Intelligence Integrada**
- Relatórios de mercado e insights competitivos
- Dados de tendências e consumer behavior
- Inteligência que informa decisões estratégicas

✅ **Project Management Nativo**
- Não apenas conectamos, mas gerenciamos o projeto inteiro
- Workflows, aprovações, milestones
- Colaboração em tempo real

✅ **Approach Consultivo**
- Não somos self-service puro
- Customer Success ativo
- Expertise em lançamento de produtos

## 🤝 Perguntas Frequentes

**"E se um cliente usar um concorrente?"**
Não há problema! Muitos clientes usam múltiplas ferramentas. Foque em como podemos agregar valor adicional.

**"Devemos mencionar concorrentes em pitches?"**
Sim, quando apropriado. Demonstra que conhecemos o mercado. Mas sempre com respeito e foco nos nossos diferenciais.

---

**Conhecer a competição nos torna mais fortes. Use esse conhecimento para reforçar o valor único da GrowinCo!** 🧡
      `,
    },
  ],
};

// Trilhas por Time/Função
export const teamTrails: Record<string, Trail> = {
  'Product & Engineering': productEngineeringTrail,
  'People & Culture': {
    id: 'team-people-culture',
    name: 'Trilha de People & Culture',
    description: 'Processos, ferramentas e práticas do time de People & Culture',
    items: [
      {
        id: 'pc-1',
        title: 'Reunião com People Lead',
        description: 'Apresentação do time, estratégia de RH e principais iniciativas',
        type: 'meeting',
        duration: '1h',
      },
      {
        id: 'pc-2',
        title: 'Vídeo: Cultura e Employee Experience',
        description: 'Como construímos e mantemos nossa cultura organizacional',
        type: 'video',
        duration: '30 min',
      },
      {
        id: 'pc-3',
        title: 'Tutorial: Sistema de RH - BambooHR',
        description: 'Gestão de colaboradores, férias, benefícios e documentação',
        type: 'tutorial',
        duration: '1h',
      },
      {
        id: 'pc-4',
        title: 'Tutorial: Recrutamento e Seleção',
        description: 'Processo seletivo, ferramentas de ATS e avaliação de candidatos',
        type: 'tutorial',
        duration: '1h30',
      },
      {
        id: 'pc-5',
        title: 'Leitura: Performance e Desenvolvimento',
        description: 'Ciclos de feedback, PDI e avaliação de desempenho',
        type: 'reading',
        duration: '45 min',
      },
      {
        id: 'pc-6',
        title: 'Tutorial: People Analytics',
        description: 'Métricas de RH, dashboards e análise de dados',
        type: 'tutorial',
        duration: '1h',
      },
    ],
  },
  Commercial: {
    id: 'team-commercial',
    name: 'Trilha de Commercial',
    description: 'Processo comercial, metodologia de vendas e ferramentas',
    items: [
      {
        id: 'commercial-1',
        title: 'Coffee com Gerente Comercial',
        description: 'Prioridades e estratégia de vendas; Estrutura comercial; Principais metas e KPIs',
        type: 'meeting',
        duration: '1h',
        content: `
# Coffee com Gerente Comercial ☕

Uma reunião essencial para você entender as prioridades, estratégia e estrutura do time comercial da GrowinCo.

## 📅 Como funciona

Esta reunião será **agendada pelo Pedro Hammer** (Gerente Comercial) diretamente no seu calendário do Teams.

### O que você precisa fazer

1. **Fique atento ao Teams** - Você receberá um convite de reunião do Pedro
2. **Aceite o convite** - Confirme sua presença
3. **Prepare-se** - Leia os tópicos abaixo e anote suas dúvidas
4. **Participe** - Entre na reunião no horário marcado

### Participante

**Pedro Hammer** - Gerente Comercial da GrowinCo

## 🎯 O que será abordado

### Prioridades e Estratégia de Vendas
- Principais objetivos do time comercial
- Estratégia de vendas da GrowinCo
- Prioridades atuais e foco do trimestre
- Como o comercial se conecta com a estratégia geral da empresa

### Estrutura Comercial
- Organização do time de vendas
- Territórios e segmentação de clientes
- Papéis e responsabilidades dentro do time
- Como funciona a colaboração entre SDR, Account Executive e outras funções

### Principais Metas e KPIs
- Metas individuais e do time
- Indicadores-chave de performance
- Ciclo de vendas e funil comercial
- Como é medido o sucesso no comercial

## 📝 Prepare-se para a reunião

- Anote suas dúvidas sobre o processo comercial
- Pense em suas experiências anteriores de vendas
- Esteja pronto para compartilhar suas expectativas
- Leve papel e caneta (ou abra um bloco de notas) para anotar insights

## ✅ Após a reunião

1. Anote os principais aprendizados
2. Marque este item como concluído na plataforma
3. Comece a pensar em como aplicar o que aprendeu
        `,
      },
      {
        id: 'commercial-2',
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
        `,
      },
      {
        id: 'commercial-3',
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
- Liste as principais características do produto destacadas

## 💡 Após assistir

1. Reflita sobre o que você aprendeu
2. Pense em como aplicar as técnicas no seu dia a dia
3. Anote dúvidas para discutir com o time
4. Marque este item como concluído

**Dica**: Você pode assistir o vídeo mais de uma vez para captar diferentes detalhes!
        `,
      },
      {
        id: 'commercial-4',
        title: 'Visão Geral do CRM - Hubspot',
        description: 'Pipelines de vendas e gestão de leads; Relatórios; Automações',
        type: 'tutorial',
        duration: '1h',
        content: `
# Visão Geral do CRM - Hubspot 📊

Aprenda a usar o HubSpot, nossa principal ferramenta de gestão comercial, para gerenciar leads, acompanhar o pipeline e gerar relatórios.

## 🎯 O que você vai aprender

### Pipelines de Vendas
- Como funciona nosso funil de vendas
- Estágios do pipeline e critérios de movimentação
- Como adicionar e qualificar leads
- Gestão de oportunidades e deals
- Previsão de vendas (forecast)

### Gestão de Leads
- Cadastro de novos leads
- Qualificação e scoring
- Histórico de interações
- Tarefas e follow-ups
- Atribuição de leads ao time

### Relatórios e Dashboards
- Principais métricas do comercial
- Relatórios de performance individual
- Análise de funil e conversão
- Relatórios personalizados
- KPIs e metas

### Automações
- Sequências de e-mail
- Workflows automáticos
- Notificações e alertas
- Tarefas recorrentes
- Integração com outras ferramentas

## 📅 Como agendar

Esta é uma **reunião prática** onde você aprenderá a usar o HubSpot na prática.

Marque uma reunião no **Microsoft Teams** com duração de **1 hora** com a **Gabriella Santos**.

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. Procure por **Gabriella Santos** no chat
3. Envie uma mensagem apresentando-se e mencionando que você está no onboarding
4. Peça para agendar o **"Tutorial de CRM - HubSpot"** (1 hora)
5. Sugira horários que funcionam para você nos próximos dias

### Participante

**Gabriella Santos** - Especialista em HubSpot com grande experiência na plataforma

## 📝 Durante o treinamento

- Acesse o HubSpot junto com a Gabriella
- Faça perguntas conforme surgem dúvidas
- Anote processos importantes
- Peça para ver casos reais de uso

## 💡 Após o treinamento

1. Explore o HubSpot por conta própria
2. Familiarize-se com os principais recursos
3. Configure suas preferências e notificações
4. Comece a registrar suas atividades no CRM
5. Marque este item como concluído

## ⚠️ Importante

O CRM é a **ferramenta mais importante** do time comercial. Manter o HubSpot atualizado é fundamental para:
- Acompanhar seu desempenho
- Colaborar com o time
- Não perder oportunidades
- Gerar relatórios precisos

## 💬 Dúvidas sobre HubSpot?

A **Gabriella Santos** é sua principal referência para dúvidas sobre o HubSpot. Não hesite em entrar em contato com ela sempre que precisar de ajuda com a plataforma!
        `,
      },
      {
        id: 'commercial-5',
        title: 'Material: Estratégia de Marketing & Vendas',
        description: 'Panorama do mercado; Engines de GTM; Workflow de vendas; Planejamento de marketing',
        type: 'reading',
        duration: '45 min',
        link: 'https://www.canva.com/design/DAG37pgYcCc/5d2OCs4XlWFz_Lb3NBCXjw/view',
        content: `
# Material: Estratégia de Marketing & Vendas 📈

Uma visão completa da nossa abordagem integrada de Marketing e Vendas para conquistar o mercado.

## 📚 Acesse o material

[**Clique aqui para acessar: Marketing & Sales Strategy - A Winning Orchestration Approach**](https://www.canva.com/design/DAG37pgYcCc/5d2OCs4XlWFz_Lb3NBCXjw/view?utm_content=DAG37pgYcCc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview)

**Tempo de leitura**: 45 minutos

## 🎯 O que você vai encontrar

### Market Landscape (Panorama do Mercado)
- Análise do mercado CPG atual
- Principais tendências e oportunidades
- Concorrentes e posicionamento
- Gaps de mercado que exploramos

### GTM Engines (Motores de Go-to-Market)
- Estratégias de entrada no mercado
- Canais de aquisição de clientes
- Modelo de vendas (inbound/outbound)
- Parcerias e ecossistema

### Sales Workflow (Fluxo de Vendas)
- Jornada do lead ao cliente
- Processo de qualificação
- Etapas do ciclo de vendas
- Handoffs entre marketing e vendas

### Marketing Planning (Planejamento de Marketing)
- Estratégia de conteúdo
- Campanhas e iniciativas
- Geração de demanda
- Alinhamento com vendas

## 📝 Como estudar este material

1. **Primeira leitura**: Leia todo o material para ter uma visão geral
2. **Segunda passada**: Aprofunde nos tópicos mais relevantes para sua função
3. **Anote insights**: Marque pontos importantes e ideias
4. **Conecte com a prática**: Pense em como aplicar no dia a dia

## 💡 Pontos de atenção

- Entenda como marketing e vendas trabalham juntos
- Identifique seu papel dentro dessa estratégia
- Observe como geramos e qualificamos leads
- Veja como medimos sucesso em cada etapa

## ✅ Após a leitura

1. Anote seus principais aprendizados
2. Pense em perguntas para discutir com o time
3. Conecte a estratégia com suas atividades diárias
4. Marque este item como concluído

**Esta é a base da nossa abordagem comercial. Estude com atenção!** 🚀
        `,
      },
      {
        id: 'commercial-6',
        title: 'Demonstração ao Vivo do GrowinCo APP',
        description: 'Conhecendo nosso produto e valor prático que entregamos',
        type: 'meeting',
        duration: '1h',
        content: `
# Demonstração ao Vivo do GrowinCo APP 📱

Uma sessão prática para você conhecer profundamente nosso produto, entender suas funcionalidades e o valor que entregamos aos clientes.

## 📅 Como agendar

Marque uma reunião no **Microsoft Teams** com duração de **1 hora** com **um dos Customer Success Managers** do time.

### Escolha um dos CSMs

Você pode marcar esta demo com qualquer um dos nossos Customer Success Managers:

- **Rafael Oliveira** - Customer Success Manager
- **Albert Ramos** - Customer Success Manager  
- **Gabriella Ferreira** - Customer Success Manager

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. **Escolha um dos CSMs** da lista acima
3. Procure por ele(a) no Teams e envie uma mensagem apresentando-se
4. Mencione que você está no onboarding e gostaria de agendar a **"Demo do GrowinCo APP"**
5. Sugira horários que funcionam para você nos próximos dias
6. Aguarde a confirmação e aceite o convite quando receber

### Dica

Todos os CSMs conhecem profundamente o produto e podem te dar uma excelente demonstração. Escolha quem tiver disponibilidade mais rápida ou alguém que você já tenha interagido!

## 🎯 O que você vai ver

### Visão Geral do Produto
- Proposta de valor principal
- Principais funcionalidades
- Diferenciais competitivos
- Roadmap e evolução do produto

### Demo Prática
- Navegação na plataforma
- Casos de uso reais
- Fluxos principais de trabalho
- Integrações e conectividade

### Valor Entregue ao Cliente
- Problemas que resolvemos
- ROI e benefícios mensuráveis
- Cases de sucesso
- Impacto no negócio do cliente

## 📝 Prepare-se para a demo

- Revise o material sobre clientes e ICP
- Anote perguntas sobre funcionalidades
- Pense em objeções que clientes podem ter
- Esteja pronto para interagir e testar

## 💡 Durante a demonstração

- **Faça perguntas**: Não tenha vergonha de interromper
- **Anote casos de uso**: Exemplos práticos para suas vendas
- **Teste você mesmo**: Peça para navegar na plataforma
- **Pense no cliente**: Como você apresentaria isso em um pitch?

## ✅ Após a demo

1. Explore o produto por conta própria (se tiver acesso)
2. Anote os principais pontos de valor
3. Prepare sua própria versão resumida da demo
4. Marque este item como concluído

## ⚠️ Importante

Como vendedor, você **precisa conhecer o produto** tão bem quanto quem o desenvolveu. Esta demo é o primeiro passo, mas continue explorando e fazendo perguntas!

**Dica**: Peça acesso a uma conta demo para praticar apresentações!
        `,
      },
      {
        id: 'commercial-7',
        title: 'Tutorial de Ferramenta: Mintel',
        description: 'Aprenda a usar a plataforma Mintel para pesquisa de mercado',
        type: 'tutorial',
        duration: '1h',
        content: `
# Tutorial de Ferramenta: Mintel 🔍

Aprenda a usar a Mintel, plataforma de inteligência de mercado e pesquisa no setor de CPG.

## 🎯 O que é a Mintel?

A Mintel é uma plataforma de pesquisa de mercado que fornece insights sobre:
- Tendências de consumo
- Análise de produtos e categorias
- Comportamento do consumidor
- Inovações no mercado CPG
- Inteligência competitiva

## 📅 Como agendar

Marque uma reunião no **Microsoft Teams** com duração de **1 hora** com o **Pedro Hammer**.

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. Procure por **Pedro Hammer** no chat
3. Envie uma mensagem apresentando-se e mencionando que você está no onboarding
4. Peça para agendar o **"Tutorial de Mintel"** (1 hora)
5. Sugira horários que funcionam para você nos próximos dias

### Participante

**Pedro Hammer** - Gerente Comercial da GrowinCo

## 🎯 O que você vai aprender

Durante o treinamento, você vai aprender:

### Navegação na Plataforma
- Como fazer login e acessar
- Estrutura e organização do conteúdo
- Principais seções e recursos
- Filtros e buscas avançadas

### Tipos de Conteúdo
- Relatórios de mercado
- Análise de tendências
- Lançamentos de produtos
- Pesquisas de consumidor
- Previsões de categoria

### Aplicação no Dia a Dia
- Como usar para preparar pitches
- Enriquecer apresentações com dados
- Identificar oportunidades de mercado
- Fundamentar argumentos de venda
- Responder perguntas de clientes

## 📝 Durante o tutorial

- Acesse a Mintel junto com o instrutor
- Explore casos práticos da sua área
- Anote os principais recursos
- Faça buscas relevantes para seu trabalho

## 💡 Após o treinamento

1. Explore a plataforma por conta própria
2. Busque dados sobre clientes atuais
3. Identifique tendências relevantes para suas vendas
4. Salve relatórios importantes nos favoritos
5. Marque este item como concluído

## 🔑 Como obter acesso

Se você ainda não tem credenciais de acesso à Mintel, solicite ao time de **People & Culture** ou ao seu **gerente comercial**.
        `,
      },
      {
        id: 'commercial-8',
        title: 'Tutorial de Ferramenta: Penta Transaction',
        description: 'Aprenda a usar a Penta Transaction para gestão de transações',
        type: 'tutorial',
        duration: '1h',
        content: `
# Tutorial de Ferramenta: Penta Transaction 💳

Aprenda a usar a Penta Transaction, ferramenta para gestão e acompanhamento de transações comerciais.

## 🎯 O que é a Penta Transaction?

A Penta Transaction é uma plataforma que permite:
- Acompanhar transações comerciais
- Gerenciar documentação de vendas
- Processar pedidos e contratos
- Controlar aprovações e workflows
- Integrar com sistemas financeiros

## 📅 Como agendar

Marque uma reunião no **Microsoft Teams** com duração de **1 hora** com o **Pedro Hammer**.

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. Procure por **Pedro Hammer** no chat
3. Envie uma mensagem apresentando-se e mencionando que você está no onboarding
4. Peça para agendar o **"Tutorial de Penta Transaction"** (1 hora)
5. Sugira horários que funcionam para você nos próximos dias

### Participante

**Pedro Hammer** - Gerente Comercial da GrowinCo

## 🎯 O que você vai aprender

Durante o treinamento, você vai aprender:

### Funcionalidades Principais
- Como criar e registrar transações
- Anexar documentos e contratos
- Acompanhar status e aprovações
- Gerar relatórios de vendas
- Integração com CRM e ERP

### Processos e Workflows
- Fluxo de aprovação de propostas
- Processamento de pedidos
- Gestão documental
- Notificações e alertas
- Handoff entre times

### Boas Práticas
- Como manter informações atualizadas
- Organização de documentos
- Comunicação com outros times
- Resolução de problemas comuns
- Compliance e segurança

## 📝 Durante o tutorial

- Acesse a Penta Transaction junto com o instrutor
- Veja exemplos de transações reais (com dados anonimizados)
- Pratique criar uma transação teste
- Entenda os diferentes status e etapas

## 💡 Após o treinamento

1. Familiarize-se com a interface
2. Revise transações recentes (se tiver permissão)
3. Configure suas preferências e notificações
4. Teste o processo com casos fictícios
5. Marque este item como concluído

## 🔑 Como obter acesso

Se você ainda não tem credenciais de acesso à Penta Transaction, solicite ao time de **People & Culture** ou ao seu **gerente comercial**.

## ⚠️ Importante

A Penta Transaction é crítica para o processo comercial. Mantenha sempre as informações atualizadas e siga os processos estabelecidos para evitar atrasos ou problemas com clientes.
        `,
      },
      {
        id: 'commercial-9',
        title: 'Tutorial de Ferramenta: n8n',
        description: 'Plataforma de automação de workflows e integração de ferramentas',
        type: 'tutorial',
        duration: '2h',
        content: `
# Tutorial de Ferramenta: n8n 🔄

Aprenda a usar o n8n, nossa plataforma de automação de workflows que conecta diferentes ferramentas e automatiza processos comerciais.

## 🎯 O que é o n8n?

O n8n é uma ferramenta de automação de workflows que permite:
- Conectar diferentes aplicações e serviços
- Automatizar tarefas repetitivas
- Criar fluxos de trabalho complexos sem código (ou com código quando necessário)
- Integrar dados entre HubSpot, planilhas, e-mail e outras ferramentas
- Monitorar e executar processos automaticamente

### Por que usamos n8n no Commercial?

No time comercial, usamos n8n para:
- **Automatizar follow-ups**: Enviar e-mails automáticos baseados em ações no CRM
- **Sincronizar dados**: Manter HubSpot, planilhas e outras ferramentas sempre atualizadas
- **Notificações inteligentes**: Alertar o time sobre eventos importantes (novos leads, deals fechados, etc.)
- **Enriquecimento de leads**: Buscar informações adicionais sobre prospects automaticamente
- **Relatórios automáticos**: Gerar e enviar relatórios periódicos

## 📚 Material de Estudo

### Artigo Introdutório (Obrigatório)

Antes de começar a usar o n8n, leia este artigo completo da Alura:

[**O que é n8n? Conheça a plataforma de automação de workflows**](https://www.alura.com.br/artigos/n8n?srsltid=AfmBOopXULmBOQgo28fE4fKBt53lytvFwR9AGHk6prmsWrUxVr4SpYRE)

**Tempo de leitura**: 15 minutos

Este artigo vai te ensinar:
- O que é n8n e como funciona
- Conceitos básicos de workflows e nodes
- Casos de uso práticos
- Primeiros passos na plataforma

### Cursos e Recursos Adicionais

**Em breve**: Estamos selecionando os melhores cursos e tutoriais para você se aprofundar no n8n. Fique atento às atualizações desta trilha!

## 📅 Como agendar o tutorial prático

Após ler o material introdutório, marque uma reunião no **Microsoft Teams** com duração de **2 horas** com o **Pedro Hammer**.

### Passo a passo para agendar

1. **Abra o Microsoft Teams**
2. Procure por **Pedro Hammer** no chat
3. Envie uma mensagem apresentando-se e mencionando que você está no onboarding
4. Peça para agendar o **"Tutorial de n8n"** (2 horas)
5. Mencione que já leu o artigo da Alura sobre n8n
6. Sugira horários que funcionam para você nos próximos dias

### Participante

**Pedro Hammer** - Gerente Comercial da GrowinCo

## 🎯 O que você vai aprender no tutorial

### Conceitos Fundamentais
- Interface do n8n e componentes principais
- O que são nodes e como funcionam
- Tipos de triggers (gatilhos) para iniciar workflows
- Como conectar diferentes ferramentas
- Execução manual vs automática

### Workflows Práticos do Commercial
- **Workflow 1**: Notificação de novos leads no HubSpot
- **Workflow 2**: Enriquecimento automático de dados de prospects
- **Workflow 3**: Follow-up automático após demonstrações
- **Workflow 4**: Sincronização entre HubSpot e Google Sheets
- **Workflow 5**: Relatório diário de pipeline

### Criação e Edição de Workflows
- Como criar um workflow do zero
- Adicionar e configurar nodes
- Conectar nodes e criar fluxos lógicos
- Testar e debugar workflows
- Ativar e desativar automações

### Boas Práticas
- Organização de workflows
- Nomenclatura e documentação
- Gestão de credenciais e segurança
- Monitoramento e logs de execução
- Tratamento de erros

## 📝 Durante o tutorial

- Acesse o n8n junto com o Pedro
- Veja workflows reais já implementados no comercial
- Crie um workflow simples como exercício prático
- Teste execuções e aprenda a debugar
- Anote os workflows mais importantes para seu dia a dia

## 💡 Após o treinamento

1. Explore a interface do n8n por conta própria
2. Revise os workflows existentes que você vai usar
3. Teste executar workflows manualmente
4. Identifique tarefas do seu dia a dia que poderiam ser automatizadas
5. Compartilhe ideias de automação com o time
6. Marque este item como concluído

## 🔑 Como obter acesso

Se você ainda não tem credenciais de acesso ao n8n, solicite ao **Pedro Hammer** ou ao time de **People & Culture** durante o agendamento do tutorial.

## ⚠️ Importante

- **Cuidado ao editar workflows existentes**: Sempre faça uma cópia antes de modificar workflows em produção
- **Teste antes de ativar**: Execute workflows manualmente algumas vezes antes de ativar a execução automática
- **Monitore execuções**: Verifique regularmente se os workflows estão funcionando corretamente
- **Documente suas automações**: Se criar novos workflows, documente o que fazem e quando executam

## 💬 Dúvidas sobre n8n?

O **Pedro Hammer** e o time comercial estão disponíveis para ajudar com dúvidas sobre n8n e automações. A plataforma é poderosa, mas pode ser complexa no início - não hesite em pedir ajuda!

## 🚀 Próximos passos

Depois de dominar o básico do n8n:
- Proponha novas automações que podem melhorar o trabalho do time
- Compartilhe workflows úteis com colegas
- Mantenha-se atualizado sobre novos nodes e recursos da plataforma
        `,
      },
    ],
  },
  'Customer Success': {
    id: 'team-customer-success',
    name: 'Trilha de Customer Success',
    description: 'Estratégias de sucesso do cliente e retenção',
    items: [
      {
        id: 'cs-1',
        title: 'Reunião com CS Lead',
        description: 'Estratégia de Customer Success, segmentação e objetivos',
        type: 'meeting',
        duration: '1h',
      },
      {
        id: 'cs-2',
        title: 'Vídeo: Jornada do Cliente',
        description: 'Onboarding, adoção, expansão e renovação',
        type: 'video',
        duration: '30 min',
      },
      {
        id: 'cs-3',
        title: 'Tutorial: Plataforma de CS - Gainsight/Totango',
        description: 'Health score, playbooks e gestão de contas',
        type: 'tutorial',
        duration: '1h30',
      },
      {
        id: 'cs-4',
        title: 'Tutorial: Métricas de CS',
        description: 'NPS, CSAT, churn, expansion e outras métricas essenciais',
        type: 'tutorial',
        duration: '1h',
      },
      {
        id: 'cs-5',
        title: 'Leitura: Playbook de Success',
        description: 'QBRs, check-ins, renewals e melhores práticas',
        type: 'reading',
        duration: '40 min',
      },
      {
        id: 'cs-6',
        title: 'Tutorial: Ferramentas de Suporte',
        description: 'Zendesk, Intercom e gestão de tickets',
        type: 'tutorial',
        duration: '45 min',
      },
    ],
  },
  Communication: {
    id: 'team-communication',
    name: 'Trilha de Communication',
    description: 'Estratégias de comunicação, branding e marketing',
    items: [
      {
        id: 'comm-1',
        title: 'Reunião com Communication Lead',
        description: 'Estratégia de comunicação, canais e principais campanhas',
        type: 'meeting',
        duration: '1h',
      },
      {
        id: 'comm-2',
        title: 'Vídeo: Brand Guidelines',
        description: 'Identidade visual, tom de voz e posicionamento da marca',
        type: 'video',
        duration: '25 min',
      },
      {
        id: 'comm-3',
        title: 'Tutorial: Ferramentas de Marketing',
        description: 'HubSpot, Mailchimp e automação de marketing',
        type: 'tutorial',
        duration: '1h',
      },
      {
        id: 'comm-4',
        title: 'Leitura: Estratégia de Conteúdo',
        description: 'Calendário editorial, SEO e diretrizes de conteúdo',
        type: 'reading',
        duration: '40 min',
      },
      {
        id: 'comm-5',
        title: 'Tutorial: Social Media e Analytics',
        description: 'Gestão de redes sociais e análise de métricas',
        type: 'tutorial',
        duration: '1h',
      },
      {
        id: 'comm-6',
        title: 'Vídeo: Comunicação Interna',
        description: 'Como manter o time alinhado e engajado',
        type: 'video',
        duration: '20 min',
      },
    ],
  },
  Finances: {
    id: 'team-finances',
    name: 'Trilha de Finances',
    description: 'Processos financeiros, controles e ferramentas',
    items: [
      {
        id: 'fin-1',
        title: 'Reunião com Finance Lead',
        description: 'Estrutura financeira, processos e compliance',
        type: 'meeting',
        duration: '1h',
      },
      {
        id: 'fin-2',
        title: 'Tutorial: Sistema Financeiro - ERP',
        description: 'Gestão de contas a pagar, receber e conciliação',
        type: 'tutorial',
        duration: '1h30',
      },
      {
        id: 'fin-3',
        title: 'Vídeo: Planejamento e Orçamento',
        description: 'Budget, forecast e análise de variações',
        type: 'video',
        duration: '35 min',
      },
      {
        id: 'fin-4',
        title: 'Tutorial: Despesas e Reembolsos',
        description: 'Política de despesas, aprovações e sistema de reembolso',
        type: 'tutorial',
        duration: '45 min',
      },
      {
        id: 'fin-5',
        title: 'Leitura: Compliance e Controles Internos',
        description: 'Normas, auditoria e procedimentos de controle',
        type: 'reading',
        duration: '50 min',
      },
      {
        id: 'fin-6',
        title: 'Tutorial: Dashboards Financeiros',
        description: 'KPIs financeiros, métricas e relatórios gerenciais',
        type: 'tutorial',
        duration: '1h',
      },
    ],
  },
};

export const availableTeams = Object.keys(teamTrails);