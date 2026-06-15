// Dados compartilhados do Loteamento Jardim Colina

export const WA_NUMBER = '5549997701940';
export const WA_MESSAGE =
  'Oi! Quero ver os lotes disponíveis e os valores do Loteamento Jardim Colina.';

export const waHref = (msg: string = WA_MESSAGE): string =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Cole aqui a URL do Web App do Google Apps Script (deploy como "qualquer pessoa").
// Enquanto estiver vazio, o formulário ainda funciona: só abre o WhatsApp, sem salvar na planilha.
export const LEADS_ENDPOINT = '';

// Preço do lote mais barato (confirmado na plataforma UMMETRO em 2026-06-15)
export const PRECO_LOTE = 'R$ 118.000';

// Preço por m² (118.000 ÷ 397,60 m² do lote A-1, o menor)
export const PRECO_M2 = 'R$ 297';

// Lotes disponíveis em tempo real → alimentado pela página /lotes
// Mantido aqui como valor estático para o hero/selos enquanto não há SSR
export const LOTES_TOTAL = 146;
export const LOTES_RESERVADOS = 2; // D-76 e D-77 estão bloqueados como vendidos

// Link para a página de mapa interativo
export const LOTES_PAGE = '/lotes';

export const NAV = [
  { label: 'O Projeto', href: '#conceito' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Estrutura', href: '#infra' },
  { label: 'Lazer', href: '#amenidades' },
  { label: 'Financiamento', href: '#financiamento' },
  { label: 'Dúvidas', href: '#faq' },
];

export const SELOS = [
  { numero: '146', label: 'lotes planejados' },
  { numero: '360m²', label: 'a partir de' },
  { numero: '72x', label: 'financiamento direto' },
];

export const CONTATO = {
  endereco: 'Av. Brasil, 370 - Centro, Xanxerê - SC, 89820-000',
  telefoneComercial: '(49) 3433-8768',
  insta: 'https://www.instagram.com/imosantafe/',
  instaHandle: '@imosantafe',
  creci: 'CRECI J3799',
  googleNegocio: 'https://share.google/ffiznzL82El4aZWPB',
};
