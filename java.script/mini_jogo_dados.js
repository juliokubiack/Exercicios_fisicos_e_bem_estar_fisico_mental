function buscar(texto) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(texto);
}

const modos = {
    corrida: 'Corrida',
    academia: 'Academia',
    calistenia: 'Calistenia',
    treino: `treino hibrido`,
};

const treinosAcademia = {
    A: 'Braço, Costas e Ombro, Peito.',
    B: 'Abdome, Antebraço, Braço, Costas, Coxa, Glúteo, Ombro',
    C: 'Abdome, Costas, Coxa, Glúteo, Panturrilha',
    D: 'Abdômen, Antebraço, Braço, Costas, Ombro'
};

const exercicios = {
    corrida: [
        {
            nome: 'Corrida leve',
            tipo: 'corrida',
            descricao: 'Ritmo em que dá pra conversar.',
            dicas: ['Passada curta e leve', 'Braços dobrados a 90 graus', 'Respire de forma natural'],
            video: buscar('corrida leve técnica para iniciantes')
        },
        {
            nome: 'Tiros',
            tipo: 'corrida',
            descricao: 'Blocos rápidos com descanso no meio.',
            dicas: ['Aqueça uns 10 minutos antes', 'Tiros de 30 a 60 segundos', 'Descanse trotando ou caminhando'],
            video: buscar('treino de tiros corrida como fazer')
        },
        {
            nome: 'Longão',
            tipo: 'corrida',
            descricao: 'O treino mais longo da semana.',
            dicas: ['Comece devagar', 'Beba água antes e durante', 'Aumente a distância aos poucos'],
            video: buscar('longão corrida como fazer')
        },
        {
            nome: 'Caminhada acelerada',
            tipo: 'corrida',
            descricao: 'Baixo impacto, ótima pra começar.',
            dicas: ['Postura ereta', 'Passos firmes', 'Balance os braços'],
            video: buscar('caminhada acelerada técnica correta')
        }
    ],

    academia: [

        {
            nome: 'Supino reto barra guiada',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Braço, Ombro, Peito.',
            dicas: [`Alinhar o banco para a barra descer na linha dos mamilos, manter as escápulas retraídas, os cotovelos em diagonal (45° a 60°) e os antebraços verticais. Indicamos que faça séries progredindo a carga: comece com pouco peso para que o músculo aqueça e não cause lesões, em seguida coloque o equivalente a 40% da sua força, na 3ª série o equivalente a 80% da sua força e na última série 100-110% da sua força. PORÉM LEMBRE: SEGURANÇA EM PRIMEIRO LUGAR.`],
            video: buscar('Supino Reto na Barra Guiada')
        },
        {
            nome: 'Crucifixo inclinado polia baixa',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Supino inclinado com Halteres',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO')
        },
        {
            nome: 'Pullover',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'elevação frontal com barra supinada',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Desenvolvimento Sentado na barra guiada',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Elevação lateral polia (por trás)',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },















        {
            nome: 'Remada Baixa Neutra',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Peck Deck inverso',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Pull Down',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Puxada Alta Bi-articulada',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Extensor Lombar',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'agachamnetp com barra romana',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'abdominal Bicicleta',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Prancha Alternada com 2 apois',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: `V-sit`,
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {
            nome: 'Agachamento no Hack inverso',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'leg press horizontal(180° graus)',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Panturrilha no Leg Press (180°)',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Leg Press Inclinado',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Banco Adutor',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Cadeira Extensora',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Afundo',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Mesa Flexora',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Agachamento livre com barra',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Abdominal Remador ',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, 
        {
            nome: 'Abdominal Oblíquo',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        
        
        
        
        
        
        
        
        
        
        
        
        {
            nome: 'Rosca Scott na Crossover',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Rosca 21 barra W',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Rosca Alternada Inclinado',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Rosca Inversa no Cross',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Trícips Inverso na Polia',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        }, {
            nome: 'Tricips Corda no Cross Over',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Trícips Puller Barra curva',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Trícips coice na polia ',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Abdominal Canivete',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
        {
            nome: 'Abdominal cruzado',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('COLOCAR ALGO...')
        },
    ],

    calistenia: [
        {
            nome: 'Flexão de braço',
            tipo: 'reps',
            descricao: 'Peito, ombros e tríceps.',
            dicas: ['Corpo reto da cabeça aos pés', 'Cotovelos um pouco fechados', 'Desça até quase tocar o chão'],
            video: buscar('flexão de braço execução correta')
        },
        {
            nome: 'Barra fixa',
            tipo: 'reps',
            descricao: 'Costas e bíceps.',
            dicas: ['Comece com os braços esticados', 'Puxe o peito até a barra', 'Desça com controle'],
            video: buscar('barra fixa como fazer execução correta')
        },
        {
            nome: 'Agachamento sem peso',
            tipo: 'reps',
            descricao: 'Pernas e glúteos.',
            dicas: ['Pés na largura dos ombros', 'Quadril pra trás', 'Peito erguido'],
            video: buscar('agachamento sem peso execução correta')
        },
        {
            nome: 'Prancha',
            tipo: 'tempo',
            descricao: 'Abdômen. Conta em segundos.',
            dicas: ['Cotovelos embaixo dos ombros', 'Não deixe o quadril cair', 'Contraia a barriga'],
            video: buscar('prancha abdominal execução correta')
        },
        {
            nome: 'Burpee',
            tipo: 'reps',
            descricao: 'Corpo todo.',
            dicas: ['Mãos no chão e pés pra trás', 'Faça a flexão', 'Volte e termine com um salto'],
            video: buscar('burpee execução correta')
        }
    ]
};