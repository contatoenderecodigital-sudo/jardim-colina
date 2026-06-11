// Dados compartilhados do Loteamento Jardim Colina

export const WA_NUMBER = '5549997701940';
export const WA_MESSAGE =
  'Oi! Quero ver os lotes disponíveis e os valores do Loteamento Jardim Colina.';

export const waHref = (msg: string = WA_MESSAGE): string =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Cole aqui a URL do Web App do Google Apps Script (deploy como "qualquer pessoa").
// Enquanto estiver vazio, o formulário ainda funciona: só abre o WhatsApp, sem salvar na planilha.
export const LEADS_ENDPOINT = '';

// Preço do lote mais barato, exibido como "Lotes a partir de R$X" (qualifica o lead).
// >>> PLACEHOLDER: usar o preço do MENOR lote (não a média). Trocar pelo valor real antes de publicar. <<<
// Se deixar vazio (''), some o preço e fica só "Até 72x".
export const PRECO_LOTE = 'R$ 139.000';

// Preço aproximado por m² (PRECO_LOTE ÷ menor metragem). Recalcular se o preço mudar.
// Ex: 139.000 ÷ 360 ≈ R$ 386/m². Ancoragem de "investimento, não gasto".
export const PRECO_M2 = 'R$ 386';

// Escassez REAL (não inventar). LOTES_RESERVADOS = 0 deixa a barra escondida.
// >>> EXEMPLO: 86 reservados (faltam 60). Trocar pelo número VERDADEIRO antes de publicar. <<<
export const LOTES_TOTAL = 146;
export const LOTES_RESERVADOS = 86;

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
