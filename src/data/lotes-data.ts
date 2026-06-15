// Dados completos de todos os 146 lotes do Jardim Colina
// Extraídos da plataforma UMMETRO via HAR em 2026-06-15
// Coordenadas (pinX, pinY) no sistema de 500×500 pixels do Leaflet CRS.Simple

export type LoteSituacao = 'disponivel' | 'reservado' | 'vendido' | 'bloqueado';

export interface Lote {
  id: string;
  quadra: string;
  numero: number;
  metragem: number;     // m²
  preco: number;        // R$
  entrada: number;
  avista: number;
  parcelas: {
    '12x': number;
    '18x': number;
    '24x': number;
    '36x': number;
    '48x': number;
    '60x': number;
    '72x': number;
  };
  situacao: LoteSituacao;
  pinX: number;         // lng no sistema UMMETRO (0-500)
  pinY: number;         // lat no sistema UMMETRO (0-500) — Y cresce pra cima
}

export const LOTES: Lote[] = [
  // ── QUADRA A ──────────────────────────────────────────────────
  { id:'A-1',  quadra:'A', numero:1,  metragem:397.60, preco:118000, entrada:29500, avista:112100, parcelas:{'12x':7375,'18x':5298.50,'24x':4117.02,'36x':2939.09,'48x':2383.31,'60x':2077.98,'72x':1900.10}, situacao:'disponivel', pinX:164, pinY:361 },
  { id:'A-2',  quadra:'A', numero:2,  metragem:360,    preco:122000, entrada:30500, avista:115900, parcelas:{'12x':7625,'18x':5478.11,'24x':4256.58,'36x':3038.72,'48x':2464.10,'60x':2148.42,'72x':1964.50}, situacao:'disponivel', pinX:165, pinY:355 },
  { id:'A-3',  quadra:'A', numero:3,  metragem:360,    preco:122000, entrada:30500, avista:115900, parcelas:{'12x':7625,'18x':5478.11,'24x':4256.58,'36x':3038.72,'48x':2464.10,'60x':2148.42,'72x':1964.50}, situacao:'disponivel', pinX:166, pinY:348 },
  { id:'A-4',  quadra:'A', numero:4,  metragem:360,    preco:122000, entrada:30500, avista:115900, parcelas:{'12x':7625,'18x':5478.11,'24x':4256.58,'36x':3038.72,'48x':2464.10,'60x':2148.42,'72x':1964.50}, situacao:'disponivel', pinX:167, pinY:341 },
  { id:'A-5',  quadra:'A', numero:5,  metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:168, pinY:335 },
  { id:'A-6',  quadra:'A', numero:6,  metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:169, pinY:328 },
  { id:'A-7',  quadra:'A', numero:7,  metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:170, pinY:322 },
  { id:'A-8',  quadra:'A', numero:8,  metragem:360,    preco:126000, entrada:31500, avista:119700, parcelas:{'12x':7875,'18x':5657.72,'24x':4396.14,'36x':3138.35,'48x':2544.88,'60x':2218.86,'72x':2028.92}, situacao:'disponivel', pinX:171, pinY:316 },
  { id:'A-9',  quadra:'A', numero:9,  metragem:360,    preco:126000, entrada:31500, avista:119700, parcelas:{'12x':7875,'18x':5657.72,'24x':4396.14,'36x':3138.35,'48x':2544.88,'60x':2218.86,'72x':2028.92}, situacao:'disponivel', pinX:172, pinY:309 },
  { id:'A-10', quadra:'A', numero:10, metragem:360,    preco:126000, entrada:31500, avista:119700, parcelas:{'12x':7875,'18x':5657.72,'24x':4396.14,'36x':3138.35,'48x':2544.88,'60x':2218.86,'72x':2028.92}, situacao:'disponivel', pinX:173, pinY:303 },
  { id:'A-11', quadra:'A', numero:11, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:174, pinY:296 },
  { id:'A-12', quadra:'A', numero:12, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:175, pinY:290 },
  { id:'A-13', quadra:'A', numero:13, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:176, pinY:282 },
  // ── QUADRA B ──────────────────────────────────────────────────
  { id:'B-14', quadra:'B', numero:14, metragem:361.55, preco:118000, entrada:29500, avista:112100, parcelas:{'12x':7375,'18x':5298.50,'24x':4117.02,'36x':2939.09,'48x':2383.31,'60x':2077.98,'72x':1900.10}, situacao:'disponivel', pinX:190, pinY:363 },
  { id:'B-15', quadra:'B', numero:15, metragem:362.85, preco:122000, entrada:30500, avista:115900, parcelas:{'12x':7625,'18x':5478.11,'24x':4256.58,'36x':3038.72,'48x':2464.10,'60x':2148.42,'72x':1964.50}, situacao:'disponivel', pinX:191, pinY:357 },
  { id:'B-16', quadra:'B', numero:16, metragem:360,    preco:122000, entrada:30500, avista:115900, parcelas:{'12x':7625,'18x':5478.11,'24x':4256.58,'36x':3038.72,'48x':2464.10,'60x':2148.42,'72x':1964.50}, situacao:'disponivel', pinX:192, pinY:350 },
  { id:'B-17', quadra:'B', numero:17, metragem:360,    preco:122000, entrada:30500, avista:115900, parcelas:{'12x':7625,'18x':5478.11,'24x':4256.58,'36x':3038.72,'48x':2464.10,'60x':2148.42,'72x':1964.50}, situacao:'disponivel', pinX:193, pinY:344 },
  { id:'B-18', quadra:'B', numero:18, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:194, pinY:338 },
  { id:'B-19', quadra:'B', numero:19, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:195, pinY:331 },
  { id:'B-20', quadra:'B', numero:20, metragem:360,    preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:196, pinY:324 },
  { id:'B-21', quadra:'B', numero:21, metragem:360,    preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:197, pinY:318 },
  { id:'B-22', quadra:'B', numero:22, metragem:360,    preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:198, pinY:312 },
  { id:'B-23', quadra:'B', numero:23, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:199, pinY:306 },
  { id:'B-24', quadra:'B', numero:24, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:200, pinY:299 },
  { id:'B-25', quadra:'B', numero:25, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:201, pinY:292 },
  { id:'B-26', quadra:'B', numero:26, metragem:360,    preco:245000, entrada:61250, avista:232750, parcelas:{'12x':15312.50,'18x':10996.32,'24x':8543.14,'36x':6098.70,'48x':4947.81,'60x':4313.28,'72x':3944.53}, situacao:'disponivel', pinX:201, pinY:284 },
  { id:'B-27', quadra:'B', numero:27, metragem:360,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:211, pinY:285 },
  { id:'B-28', quadra:'B', numero:28, metragem:360,    preco:245000, entrada:61250, avista:232750, parcelas:{'12x':15312.50,'18x':10996.32,'24x':8543.14,'36x':6098.70,'48x':4947.81,'60x':4313.28,'72x':3944.53}, situacao:'disponivel', pinX:222, pinY:285 },
  { id:'B-29', quadra:'B', numero:29, metragem:361.45, preco:130000, entrada:32500, avista:123500, parcelas:{'12x':8125,'18x':5836.72,'24x':4535.26,'36x':3237.82,'48x':2625.76,'60x':2289.97,'72x':2093.77}, situacao:'disponivel', pinX:218, pinY:293 },
  { id:'B-30', quadra:'B', numero:30, metragem:360,    preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:218, pinY:299 },
  { id:'B-31', quadra:'B', numero:31, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:217, pinY:306 },
  { id:'B-32', quadra:'B', numero:32, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:216, pinY:312 },
  { id:'B-33', quadra:'B', numero:33, metragem:360,    preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:215, pinY:319 },
  { id:'B-34', quadra:'B', numero:34, metragem:360,    preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:214, pinY:326 },
  { id:'B-35', quadra:'B', numero:35, metragem:360,    preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:213, pinY:332 },
  { id:'B-36', quadra:'B', numero:36, metragem:360,    preco:124000, entrada:31000, avista:117800, parcelas:{'12x':7750,'18x':5567.33,'24x':4326.02,'36x':3088.45,'48x':2504.65,'60x':2183.75,'72x':1996.69}, situacao:'disponivel', pinX:212, pinY:338 },
  { id:'B-37', quadra:'B', numero:37, metragem:360,    preco:124000, entrada:31000, avista:117800, parcelas:{'12x':7750,'18x':5567.33,'24x':4326.02,'36x':3088.45,'48x':2504.65,'60x':2183.75,'72x':1996.69}, situacao:'disponivel', pinX:211, pinY:345 },
  { id:'B-38', quadra:'B', numero:38, metragem:360,    preco:124000, entrada:31000, avista:117800, parcelas:{'12x':7750,'18x':5567.33,'24x':4326.02,'36x':3088.45,'48x':2504.65,'60x':2183.75,'72x':1996.69}, situacao:'disponivel', pinX:210, pinY:351 },
  { id:'B-39', quadra:'B', numero:39, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:209, pinY:358 },
  { id:'B-40', quadra:'B', numero:40, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:208, pinY:364 },
  // ── QUADRA C ──────────────────────────────────────────────────
  { id:'C-41', quadra:'C', numero:41, metragem:360,    preco:132000, entrada:33000, avista:125400, parcelas:{'12x':8250,'18x':5925.72,'24x':4604.82,'36x':3287.55,'48x':2666.20,'60x':2324.63,'72x':2126.61}, situacao:'disponivel', pinX:232, pinY:365 },
  { id:'C-42', quadra:'C', numero:42, metragem:360,    preco:126000, entrada:31500, avista:119700, parcelas:{'12x':7875,'18x':5657.72,'24x':4396.14,'36x':3138.35,'48x':2544.88,'60x':2218.86,'72x':2028.92}, situacao:'disponivel', pinX:234, pinY:357 },
  { id:'C-43', quadra:'C', numero:43, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:236, pinY:351 },
  { id:'C-44', quadra:'C', numero:44, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:238, pinY:344 },
  { id:'C-45', quadra:'C', numero:45, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:240, pinY:339 },
  { id:'C-46', quadra:'C', numero:46, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:236, pinY:327 },
  { id:'C-47', quadra:'C', numero:47, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:244, pinY:328 },
  { id:'C-48', quadra:'C', numero:48, metragem:360,    preco:118000, entrada:29500, avista:112100, parcelas:{'12x':7375,'18x':5298.50,'24x':4117.02,'36x':2939.09,'48x':2383.31,'60x':2077.98,'72x':1900.10}, situacao:'disponivel', pinX:250, pinY:330 },
  { id:'C-49', quadra:'C', numero:49, metragem:360,    preco:118000, entrada:29500, avista:112100, parcelas:{'12x':7375,'18x':5298.50,'24x':4117.02,'36x':2939.09,'48x':2383.31,'60x':2077.98,'72x':1900.10}, situacao:'disponivel', pinX:256, pinY:332 },
  { id:'C-50', quadra:'C', numero:50, metragem:381.43, preco:130000, entrada:32500, avista:123500, parcelas:{'12x':8125,'18x':5836.72,'24x':4535.26,'36x':3237.82,'48x':2625.76,'60x':2289.97,'72x':2093.77}, situacao:'disponivel', pinX:264, pinY:305 },
  { id:'C-51', quadra:'C', numero:51, metragem:360.85, preco:128000, entrada:32000, avista:121600, parcelas:{'12x':8000,'18x':5747.06,'24x':4465.70,'36x':3188.09,'48x':2585.32,'60x':2254.86,'72x':2061.34}, situacao:'disponivel', pinX:258, pinY:304 },
  { id:'C-52', quadra:'C', numero:52, metragem:388.17, preco:126000, entrada:31500, avista:119700, parcelas:{'12x':7875,'18x':5657.72,'24x':4396.14,'36x':3138.35,'48x':2544.88,'60x':2218.86,'72x':2028.92}, situacao:'disponivel', pinX:252, pinY:304 },
  { id:'C-53', quadra:'C', numero:53, metragem:360,    preco:240000, entrada:60000, avista:228000, parcelas:{'12x':15000,'18x':10775.76,'24x':8372.70,'36x':5977.20,'48x':4848.12,'60x':4228.08,'72x':3866.64}, situacao:'disponivel', pinX:241, pinY:310 },
  { id:'C-54', quadra:'C', numero:54, metragem:360,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:242, pinY:302 },
  { id:'C-55', quadra:'C', numero:55, metragem:360,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:244, pinY:293 },
  { id:'C-56', quadra:'C', numero:56, metragem:360,    preco:242000, entrada:60500, avista:229900, parcelas:{'12x':15125,'18x':10866.14,'24x':8442.26,'36x':6026.94,'48x':4888.56,'60x':4263.05,'72x':3898.38}, situacao:'disponivel', pinX:245, pinY:285 },
  { id:'C-57', quadra:'C', numero:57, metragem:360,    preco:136000, entrada:34000, avista:129200, parcelas:{'12x':8500,'18x':6104.72,'24x':4742.58,'36x':3385.02,'48x':2745.64,'60x':2394.29,'72x':2189.10}, situacao:'disponivel', pinX:255, pinY:288 },
  { id:'C-58', quadra:'C', numero:58, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:263, pinY:289 },
  { id:'C-59', quadra:'C', numero:59, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:270, pinY:289 },
  { id:'C-60', quadra:'C', numero:60, metragem:420.65, preco:134000, entrada:33500, avista:127300, parcelas:{'12x':8375,'18x':6014.33,'24x':4672.02,'36x':3336.29,'48x':2706.20,'60x':2359.53,'72x':2157.77}, situacao:'disponivel', pinX:279, pinY:286 },
  { id:'C-61', quadra:'C', numero:61, metragem:360.73, preco:134000, entrada:33500, avista:127300, parcelas:{'12x':8375,'18x':6014.33,'24x':4672.02,'36x':3336.29,'48x':2706.20,'60x':2359.53,'72x':2157.77}, situacao:'disponivel', pinX:284, pinY:277 },
  { id:'C-62', quadra:'C', numero:62, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:286, pinY:270 },
  { id:'C-63', quadra:'C', numero:63, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:287, pinY:263 },
  { id:'C-64', quadra:'C', numero:64, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:288, pinY:257 },
  { id:'C-65', quadra:'C', numero:65, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:289, pinY:250 },
  { id:'C-66', quadra:'C', numero:66, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:290, pinY:244 },
  { id:'C-67', quadra:'C', numero:67, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:291, pinY:238 },
  { id:'C-68', quadra:'C', numero:68, metragem:360,    preco:248000, entrada:62000, avista:235600, parcelas:{'12x':15500,'18x':11126.88,'24x':8642.02,'36x':6168.18,'48x':5003.73,'60x':4363.19,'72x':3991.92}, situacao:'disponivel', pinX:289, pinY:227 },
  { id:'C-69', quadra:'C', numero:69, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:296, pinY:228 },
  // ── QUADRA D ──────────────────────────────────────────────────
  { id:'D-70', quadra:'D', numero:70, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:175, pinY:261 },
  { id:'D-71', quadra:'D', numero:71, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:183, pinY:262 },
  { id:'D-72', quadra:'D', numero:72, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:181, pinY:252 },
  { id:'D-73', quadra:'D', numero:73, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:182, pinY:246 },
  { id:'D-74', quadra:'D', numero:74, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:183, pinY:239 },
  { id:'D-75', quadra:'D', numero:75, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:183, pinY:232 },
  { id:'D-76', quadra:'D', numero:76, metragem:360,    preco:175000, entrada:43750, avista:166250, parcelas:{'12x':10937.50,'18x':7851.61,'24x':6099.70,'36x':4353.77,'48x':3530.39,'60x':3078.05,'72x':2815.07}, situacao:'vendido', pinX:184, pinY:225 },
  { id:'D-77', quadra:'D', numero:77, metragem:360,    preco:176000, entrada:44000, avista:167200, parcelas:{'12x':11000,'18x':7897.09,'24x':6134.13,'36x':4378.80,'48x':3550.71,'60x':3095.76,'72x':2831.24}, situacao:'vendido', pinX:185, pinY:218 },
  // ── QUADRA E ──────────────────────────────────────────────────
  { id:'E-78', quadra:'E', numero:78, metragem:360,    preco:245000, entrada:61250, avista:232750, parcelas:{'12x':15312.50,'18x':10996.32,'24x':8543.14,'36x':6098.70,'48x':4947.81,'60x':4313.28,'72x':3944.53}, situacao:'disponivel', pinX:204, pinY:266 },
  { id:'E-79', quadra:'E', numero:79, metragem:360,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:205, pinY:258 },
  { id:'E-80', quadra:'E', numero:80, metragem:361.49, preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:208, pinY:251 },
  { id:'E-81', quadra:'E', numero:81, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:208, pinY:244 },
  { id:'E-82', quadra:'E', numero:82, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:210, pinY:238 },
  { id:'E-83', quadra:'E', numero:83, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:207, pinY:230 },
  { id:'E-84', quadra:'E', numero:84, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:208, pinY:220 },
  { id:'E-85', quadra:'E', numero:85, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:216, pinY:226 },
  { id:'E-86', quadra:'E', numero:86, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:222, pinY:226 },
  { id:'E-87', quadra:'E', numero:87, metragem:360,    preco:255000, entrada:63750, avista:242250, parcelas:{'12x':15937.50,'18x':11444.88,'24x':8890.57,'36x':6347.70,'48x':5148.57,'60x':4489.03,'72x':4106.55}, situacao:'disponivel', pinX:231, pinY:222 },
  { id:'E-88', quadra:'E', numero:88, metragem:360,    preco:144000, entrada:36000, avista:136800, parcelas:{'12x':9000,'18x':6462.83,'24x':5021.38,'36x':3583.23,'48x':2906.21,'60x':2534.29,'72x':2317.59}, situacao:'disponivel', pinX:230, pinY:231 },
  { id:'E-89', quadra:'E', numero:89, metragem:384.84, preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:226, pinY:239 },
  { id:'E-90', quadra:'E', numero:90, metragem:372.86, preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:225, pinY:245 },
  { id:'E-91', quadra:'E', numero:91, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:224, pinY:252 },
  { id:'E-92', quadra:'E', numero:92, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:225, pinY:259 },
  { id:'E-93', quadra:'E', numero:93, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:224, pinY:267 },
  { id:'E-94', quadra:'E', numero:94, metragem:363.73, preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:215, pinY:262 },
  // ── QUADRA F ──────────────────────────────────────────────────
  { id:'F-95',  quadra:'F', numero:95,  metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:246, pinY:268 },
  { id:'F-96',  quadra:'F', numero:96,  metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:250, pinY:258 },
  { id:'F-97',  quadra:'F', numero:97,  metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:251, pinY:251 },
  { id:'F-98',  quadra:'F', numero:98,  metragem:360,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:252, pinY:244 },
  { id:'F-99',  quadra:'F', numero:99,  metragem:360,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:253, pinY:237 },
  { id:'F-100', quadra:'F', numero:100, metragem:360,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:254, pinY:230 },
  { id:'F-101', quadra:'F', numero:101, metragem:421.37, preco:268000, entrada:67000, avista:254600, parcelas:{'12x':16750,'18x':12022.88,'24x':9341.09,'36x':6667.08,'48x':5409.33,'60x':4714.29,'72x':4312.84}, situacao:'disponivel', pinX:256, pinY:223 },
  { id:'F-102', quadra:'F', numero:102, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:271, pinY:224 },
  { id:'F-103', quadra:'F', numero:103, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:269, pinY:233 },
  { id:'F-104', quadra:'F', numero:104, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:268, pinY:240 },
  { id:'F-105', quadra:'F', numero:105, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:267, pinY:247 },
  { id:'F-106', quadra:'F', numero:106, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:266, pinY:254 },
  { id:'F-107', quadra:'F', numero:107, metragem:360,    preco:138000, entrada:34500, avista:131100, parcelas:{'12x':8625,'18x':6193.83,'24x':4812.14,'36x':3434.75,'48x':2785.64,'60x':2429.36,'72x':2221.77}, situacao:'disponivel', pinX:265, pinY:261 },
  { id:'F-108', quadra:'F', numero:108, metragem:415,    preco:256000, entrada:64000, avista:243200, parcelas:{'12x':16000,'18x':11484.72,'24x':8921.38,'36x':6367.44,'48x':5163.41,'60x':4502.94,'72x':4118.68}, situacao:'disponivel', pinX:265, pinY:270 },
  { id:'F-109', quadra:'F', numero:109, metragem:363,    preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:256, pinY:269 },
  // ── QUADRA G ──────────────────────────────────────────────────
  { id:'G-110', quadra:'G', numero:110, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:187, pinY:200 },
  { id:'G-111', quadra:'G', numero:111, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:188, pinY:190 },
  { id:'G-112', quadra:'G', numero:112, metragem:392.45, preco:235000, entrada:58750, avista:223250, parcelas:{'12x':14687.50,'18x':10541.55,'24x':8190.03,'36x':5848.35,'48x':4744.36,'60x':4137.40,'72x':3784.87}, situacao:'disponivel', pinX:190, pinY:178 },
  // ── QUADRA H ──────────────────────────────────────────────────
  { id:'H-113', quadra:'H', numero:113, metragem:360,    preco:255000, entrada:63750, avista:242250, parcelas:{'12x':15937.50,'18x':11444.88,'24x':8890.57,'36x':6347.70,'48x':5148.57,'60x':4489.03,'72x':4106.55}, situacao:'disponivel', pinX:208, pinY:200 },
  { id:'H-114', quadra:'H', numero:114, metragem:360.67, preco:142000, entrada:35500, avista:134900, parcelas:{'12x':8875,'18x':6372.82,'24x':4949.95,'36x':3533.49,'48x':2865.76,'60x':2498.61,'72x':2285.26}, situacao:'disponivel', pinX:212, pinY:190 },
  { id:'H-115', quadra:'H', numero:115, metragem:360,    preco:255000, entrada:63750, avista:242250, parcelas:{'12x':15937.50,'18x':11444.88,'24x':8890.57,'36x':6347.70,'48x':5148.57,'60x':4489.03,'72x':4106.55}, situacao:'disponivel', pinX:209, pinY:180 },
  { id:'H-116', quadra:'H', numero:116, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:217, pinY:181 },
  { id:'H-117', quadra:'H', numero:117, metragem:360,    preco:146000, entrada:36500, avista:138700, parcelas:{'12x':9125,'18x':6552.58,'24x':5091.26,'36x':3632.96,'48x':2946.43,'60x':2569.72,'72x':2349.60}, situacao:'disponivel', pinX:224, pinY:182 },
  { id:'H-118', quadra:'H', numero:118, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:232, pinY:181 },
  { id:'H-119', quadra:'H', numero:119, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:241, pinY:181 },
  { id:'H-120', quadra:'H', numero:120, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:236, pinY:191 },
  { id:'H-121', quadra:'H', numero:121, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:235, pinY:197 },
  { id:'H-122', quadra:'H', numero:122, metragem:368.80, preco:260000, entrada:65000, avista:247000, parcelas:{'12x':16250,'18x':11671.86,'24x':9069.07,'36x':6473.32,'48x':5250.65,'60x':4577.79,'72x':4188.27}, situacao:'disponivel', pinX:234, pinY:204 },
  { id:'H-123', quadra:'H', numero:123, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:223, pinY:199 },
  { id:'H-124', quadra:'H', numero:124, metragem:360,    preco:152000, entrada:38000, avista:144400, parcelas:{'12x':9500,'18x':6821.22,'24x':5301.38,'36x':3782.44,'48x':3067.75,'60x':2674.36,'72x':2446.58}, situacao:'disponivel', pinX:216, pinY:200 },
  // ── QUADRA I ──────────────────────────────────────────────────
  { id:'I-125', quadra:'I', numero:125, metragem:389.61, preco:258000, entrada:64500, avista:245100, parcelas:{'12x':16125,'18x':11578.47,'24x':8997.57,'36x':6422.58,'48x':5209.57,'60x':4542.31,'72x':4153.98}, situacao:'disponivel', pinX:258, pinY:205 },
  { id:'I-126', quadra:'I', numero:126, metragem:360,    preco:160000, entrada:40000, avista:152000, parcelas:{'12x':10000,'18x':7179.83,'24x':5577.26,'36x':3981.11,'48x':3229.10,'60x':2815.80,'72x':2574.91}, situacao:'disponivel', pinX:260, pinY:195 },
  { id:'I-127', quadra:'I', numero:127, metragem:400,    preco:265000, entrada:66250, avista:251750, parcelas:{'12x':16562.50,'18x':11887.14,'24x':9237.22,'36x':6594.07,'48x':5349.96,'60x':4665.71,'72x':4268.09}, situacao:'disponivel', pinX:261, pinY:184 },
  { id:'I-128', quadra:'I', numero:128, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:269, pinY:187 },
  { id:'I-129', quadra:'I', numero:129, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:275, pinY:187 },
  { id:'I-130', quadra:'I', numero:130, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:281, pinY:188 },
  { id:'I-131', quadra:'I', numero:131, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:288, pinY:188 },
  { id:'I-132', quadra:'I', numero:132, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:295, pinY:188 },
  { id:'I-133', quadra:'I', numero:133, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:301, pinY:189 },
  { id:'I-134', quadra:'I', numero:134, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:308, pinY:189 },
  { id:'I-135', quadra:'I', numero:135, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:314, pinY:190 },
  { id:'I-136', quadra:'I', numero:136, metragem:400,    preco:265000, entrada:66250, avista:251750, parcelas:{'12x':16562.50,'18x':11887.14,'24x':9237.22,'36x':6594.07,'48x':5349.96,'60x':4665.71,'72x':4268.09}, situacao:'disponivel', pinX:324, pinY:187 },
  { id:'I-137', quadra:'I', numero:137, metragem:360,    preco:154000, entrada:38500, avista:146300, parcelas:{'12x':9625,'18x':6911.53,'24x':5371.94,'36x':3832.18,'48x':3108.19,'60x':2709.72,'72x':2478.25}, situacao:'disponivel', pinX:323, pinY:196 },
  { id:'I-138', quadra:'I', numero:138, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:323, pinY:205 },
  { id:'I-139', quadra:'I', numero:139, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:313, pinY:206 },
  { id:'I-140', quadra:'I', numero:140, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:307, pinY:206 },
  { id:'I-141', quadra:'I', numero:141, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:300, pinY:205 },
  { id:'I-142', quadra:'I', numero:142, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:294, pinY:205 },
  { id:'I-143', quadra:'I', numero:143, metragem:0,      preco:0,      entrada:0,    avista:0,     parcelas:{'12x':0,'18x':0,'24x':0,'36x':0,'48x':0,'60x':0,'72x':0},                                            situacao:'bloqueado', pinX:287, pinY:204 },
  { id:'I-144', quadra:'I', numero:144, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:281, pinY:204 },
  { id:'I-145', quadra:'I', numero:145, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:274, pinY:203 },
  { id:'I-146', quadra:'I', numero:146, metragem:360,    preco:148000, entrada:37000, avista:140600, parcelas:{'12x':9250,'18x':6642.22,'24x':5161.82,'36x':3682.70,'48x':2986.87,'60x':2604.75,'72x':2381.93}, situacao:'disponivel', pinX:268, pinY:202 },
];

// Helpers
export const lotesDisponiveis = () => LOTES.filter(l => l.situacao === 'disponivel').length;
export const lotesReservados  = () => LOTES.filter(l => l.situacao === 'reservado').length;
export const lotesVendidos    = () => LOTES.filter(l => l.situacao === 'vendido').length;
export const lotesVendaveis   = () => LOTES.filter(l => l.preco > 0).length;

export const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
