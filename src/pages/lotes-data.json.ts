// Endpoint estático que exporta os dados dos lotes como JSON
// Usado como fallback pelo admin quando Supabase não está configurado
import type { APIRoute } from 'astro';
import { LOTES } from '~/data/lotes-data';

export const GET: APIRoute = () => {
  const payload = LOTES
    .map(l => ({
      id:        l.id,
      quadra:    l.quadra,
      numero:    l.numero,
      metragem:  l.metragem,
      preco:     l.preco,
      avista:    l.avista,
      situacao:  l.situacao,
      pin_x:     l.pinX,
      pin_y:     l.pinY,
    }));

  return new Response(JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
  });
};
