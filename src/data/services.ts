// ESTA LISTA DEVE SER IDÊNTICA (nome + descrição) à cadastrada no
// Perfil da Empresa no Google, seção "Serviços".
// Manter os dois em sincronia é o que gera consistência de sinal para o SEO local.

export type Service = {
  id: string;
  grupo: "Fisioterapia e Reabilitação" | "Métodos e Especialidades" | "Formato de Atendimento";
  nome: string;
  descricao: string;
};

export const services: Service[] = [
  // Grupo 1 — Fisioterapia e Reabilitação
  {
    id: "avaliacao",
    grupo: "Fisioterapia e Reabilitação",
    nome: "Avaliação de Movimento e Postura",
    descricao:
      "Avaliação individual para entender a dor, a postura e o objetivo antes de definir o plano de atendimento.",
  },
  {
    id: "dor-lombar",
    grupo: "Fisioterapia e Reabilitação",
    nome: "Fisioterapia para Dor Lombar e Coluna",
    descricao:
      "Atendimento para dor lombar e questões de coluna, com avaliação e acompanhamento individual.",
  },
  {
    id: "pos-cirurgico",
    grupo: "Fisioterapia e Reabilitação",
    nome: "Reabilitação Pós-Cirúrgica",
    descricao:
      "Acompanhamento no retorno após cirurgia, com progressão segura do movimento.",
  },
  {
    id: "lesao-esportiva",
    grupo: "Fisioterapia e Reabilitação",
    nome: "Reabilitação de Lesão Esportiva",
    descricao:
      "Retorno à atividade física e ao esporte após lesão, com plano individual.",
  },
  {
    id: "home-office",
    grupo: "Fisioterapia e Reabilitação",
    nome: "Fisioterapia para Postura (Home Office)",
    descricao:
      "Atendimento para quem trabalha sentado, com foco em postura e rotina.",
  },
  // Grupo 2 — Métodos e Especialidades
  {
    id: "gyrotonic",
    grupo: "Métodos e Especialidades",
    nome: "Método GYROTONIC®",
    descricao:
      "Reeducação postural e mobilidade pelo Método GYROTONIC®, com Roberta como Master Trainer.",
  },
  {
    id: "canolu",
    grupo: "Métodos e Especialidades",
    nome: "Método Canolu",
    descricao:
      "Trabalho corporal complementar para consciência de movimento e postura.",
  },
  {
    id: "mobilidade",
    grupo: "Métodos e Especialidades",
    nome: "Mobilidade e Envelhecimento Ativo",
    descricao:
      "Trabalho de mobilidade, equilíbrio e autonomia para manter qualidade de vida.",
  },
  // Grupo 3 — Formato de Atendimento
  {
    id: "presencial",
    grupo: "Formato de Atendimento",
    nome: "Atendimento Presencial — Itaim Bibi",
    descricao: "Atendimento no consultório do Itaim Bibi, São Paulo.",
  },
  {
    id: "online",
    grupo: "Formato de Atendimento",
    nome: "Atendimento Online",
    descricao:
      "Sessões online para quem está fora da região ou prefere o formato remoto.",
  },
];

export const gruposOrdenados = [
  "Fisioterapia e Reabilitação",
  "Métodos e Especialidades",
  "Formato de Atendimento",
] as const;
