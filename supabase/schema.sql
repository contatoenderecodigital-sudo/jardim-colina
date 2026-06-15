-- Schema Supabase · Loteamento Jardim Colina
-- Executar no SQL Editor do painel Supabase

-- 1. Tabela de lotes
CREATE TABLE IF NOT EXISTS public.lotes (
  id          text PRIMARY KEY,          -- ex: 'A-1', 'B-14'
  quadra      text NOT NULL,             -- 'A' ... 'I'
  numero      integer NOT NULL,
  metragem    numeric(8,2) DEFAULT 0,
  preco       numeric(12,2) DEFAULT 0,
  entrada     numeric(12,2) DEFAULT 0,
  avista      numeric(12,2) DEFAULT 0,
  p12x        numeric(10,2) DEFAULT 0,
  p18x        numeric(10,2) DEFAULT 0,
  p24x        numeric(10,2) DEFAULT 0,
  p36x        numeric(10,2) DEFAULT 0,
  p48x        numeric(10,2) DEFAULT 0,
  p60x        numeric(10,2) DEFAULT 0,
  p72x        numeric(10,2) DEFAULT 0,
  situacao    text NOT NULL DEFAULT 'disponivel'
                CHECK (situacao IN ('disponivel','reservado','vendido','bloqueado')),
  pin_x       smallint,                  -- coordenada X no mapa (0-500)
  pin_y       smallint,                  -- coordenada Y no mapa (0-500)
  updated_at  timestamptz DEFAULT now()
);

-- 2. Row Level Security
ALTER TABLE public.lotes ENABLE ROW LEVEL SECURITY;

-- Leitura pública (para o site buscar os dados)
CREATE POLICY "lotes_public_read"
  ON public.lotes FOR SELECT
  USING (true);

-- Escrita apenas para usuários autenticados (admin)
CREATE POLICY "lotes_auth_update"
  ON public.lotes FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 3. Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER lotes_updated_at
  BEFORE UPDATE ON public.lotes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 4. Seed: todos os 146 lotes
-- (copiar o conteúdo do lotes-seed.sql gerado separadamente)
-- ou rodar: INSERT INTO lotes VALUES ...
