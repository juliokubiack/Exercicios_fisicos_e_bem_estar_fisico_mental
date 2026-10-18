
function buscar(texto) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(texto);
}

const modos = {
    corrida: 'Corrida',
    academia: 'Academia',
    calistenia: 'Calistenia',
    treino: `treino ibrido`,//configurar
};

const treinosAcademia = {
    A: 'Braço, Costas e Ombro, Peito.',
    B: 'Abdome, Antebraço, Braço, Costa, Coxa, Glúteo, Ombro',
    C: 'Abdome,Costa,Coxa, Glúteo, Panturrilha',
    D: 'Abdômen, Antebraço, Braço, Costa, Ombro'
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
            dicas: [`alinhar o banco para a barra descer na linha dos mamilos, manter as escápulas retraídas, os cotovelos em diagonal (45° a 60°) e os antebraços verticais indicamos que faça  series progredindo a carga, começe com pouco peso para que o musculo aqueça e não cause lesoes, logo em seguida coloque equivalente a 40% de sua força, na 3 serie coloque equivalente a 80% de sua forma na ultima serie coloque 100-110% de sua força, POREM LEMBRE SEGUIRANÇA EM PRIMEIRO LUGAR`],
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
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Pullover',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'elevação frontal com barra supinada',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Desenvolvimento Sentado na barra guiada',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Elevação lateral polia (por trás)',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'A',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'B',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'C',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        },
        {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
        }, {
            nome: 'Remada Alta Cross Over',
            tipo: 'peso',
            treino: 'D',
            descricao: 'Costas, Ombro, Peito.',
            dicas: [`COLOCAR ALGO`],
            video: buscar('Crucifixo Inclinado no Crossover - Exercício para Peito')
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

// ===== guardando os treinos no navegador =====
let treinos = [];
try {
    treinos = JSON.parse(localStorage.getItem('bewell-treinos')) || [];
} catch (erro) {
    treinos = [];
}

function guardar() {
    localStorage.setItem('bewell-treinos', JSON.stringify(treinos));
}

// ===== xp e nivel =====
// cada 100 xp = 1 nivel
function totalXP() {
    let soma = 0;
    for (let i = 0; i < treinos.length; i++) {
        soma += treinos[i].xp;
    }
    return soma;
}

function calcularNivel(xp) {
    return Math.floor(xp / 100) + 1;
}

function atualizarTopo() {
    const xp = totalXP();
    document.getElementById('xp').textContent = xp;
    document.getElementById('nivel').textContent = calcularNivel(xp);
    document.getElementById('barra-xp').style.width = (xp % 100) + '%';
}

// ===== trocar de tela =====
function mostrarSecao(id) {
    document.getElementById('menu').classList.add('escondido');
    document.getElementById('lista').classList.add('escondido');
    document.getElementById('exercicio').classList.add('escondido');
    document.getElementById(id).classList.remove('escondido');
    window.scrollTo(0, 0);
}

function mostrarMenu() {
    mostrarSecao('menu');
    atualizarTopo();
    desenharHistorico();
}

// tela com os 4 botoes de treino da academia
function abrirTreinos() {
    let html = '<button class="botao" onclick="mostrarMenu()">← Voltar</button>';
    html += '<h2>Academia</h2>';
    html += '<p class="texto">Escolha o seu treino:</p>';
    html += '<div class="cards">';
    for (const letra in treinosAcademia) {
        html += '<div class="card academia" onclick="abrirTreino(\'' + letra + '\')">';
        html += '<h2>Treino ' + letra + '</h2>';
        html += '<p>' + treinosAcademia[letra] + '</p>';
        html += '</div>';
    }
    html += '</div>';

    document.getElementById('lista').innerHTML = html;
    mostrarSecao('lista');
}

// lista os exercicios de um treino (A, B, C ou D)
function abrirTreino(letra) {
    let html = '<button class="botao" onclick="abrirTreinos()">← Voltar</button>';
    html += '<h2>Treino ' + letra + '</h2>';
    html += '<p class="texto">' + treinosAcademia[letra] + '</p>';

    const lista = exercicios.academia;
    let quantos = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].treino === letra) {
            html += '<div class="item" onclick="abrirExercicio(\'academia\', ' + i + ')">';
            html += '<b>' + lista[i].nome + '</b><br>';
            html += '<small>' + lista[i].descricao + '</small>';
            html += '</div>';
            quantos++;
        }
    }
    if (quantos === 0) {
        html += '<p>Ainda não tem exercícios neste treino.</p>';
    }

    document.getElementById('lista').innerHTML = html;
    mostrarSecao('lista');
}

function abrirModo(modo) {
    // academia tem os 4 treinos, entao abre outra tela
    if (modo === 'academia') {
        abrirTreinos();
        return;
    }
    let html = '<button class="botao" onclick="mostrarMenu()">← Voltar</button>';
    html += '<h2>' + modos[modo] + '</h2>';
    html += '<p class="texto">Escolha um exercício:</p>';

    const lista = exercicios[modo];
    for (let i = 0; i < lista.length; i++) {
        html += '<div class="item" onclick="abrirExercicio(\'' + modo + '\', ' + i + ')">';
        html += '<b>' + lista[i].nome + '</b><br>';
        html += '<small>' + lista[i].descricao + '</small>';
        html += '</div>';
    }

    document.getElementById('lista').innerHTML = html;
    mostrarSecao('lista');
}

function abrirExercicio(modo, indice) {
    const ex = exercicios[modo][indice];

    // na academia o voltar vai pro treino (A, B, C ou D)
    let voltar = 'abrirModo(\'' + modo + '\')';
    if (modo === 'academia') {
        voltar = 'abrirTreino(\'' + ex.treino + '\')';
    }
    let html = '<button class="botao" onclick="' + voltar + '">← Voltar</button>';
    html += '<h2>' + ex.nome + '</h2>';

    // video e dicas
    html += '<div class="caixa">';
    html += '<a class="botao" href="' + ex.video + '" target="_blank">▶ Ver como fazer (YouTube)</a>';
    html += '<ul class="dicas">';
    for (let i = 0; i < ex.dicas.length; i++) {
        html += '<li>' + ex.dicas[i] + '</li>';
    }
    html += '</ul></div>';

    // formulario (muda dependendo do tipo)
    html += '<div class="caixa"><h3>Registrar treino</h3>';
    if (ex.tipo === 'corrida') {
        html += campo('km', 'Distância (km)') + campo('minutos', 'Tempo (minutos)');
    }
    if (ex.tipo === 'peso') {
        html += campo('peso', 'Carga (kg)') + campo('series', 'Séries') + campo('reps', 'Repetições');
    }
    if (ex.tipo === 'reps') {
        html += campo('series', 'Séries') + campo('reps', 'Repetições');
    }
    if (ex.tipo === 'tempo') {
        html += campo('series', 'Séries') + campo('segundos', 'Segundos por série');
    }
    html += '<br><button class="botao" onclick="salvarTreino(\'' + modo + '\', ' + indice + ')">Salvar treino</button>';
    html += '</div>';

    // historico desse exercicio
    html += '<h3>Seu histórico</h3><ul>';
    let achou = false;
    for (let i = treinos.length - 1; i >= 0; i--) {
        if (treinos[i].nome === ex.nome) {
            html += '<li>' + treinos[i].data + ' - ' + resumo(treinos[i]) + ' (+' + treinos[i].xp + ' XP)</li>';
            achou = true;
        }
    }
    if (!achou) {
        html += '<li>Ainda não tem nenhum treino aqui.</li>';
    }
    html += '</ul>';

    document.getElementById('exercicio').innerHTML = html;
    mostrarSecao('exercicio');
}

// cria um campo de texto
function campo(id, texto) {
    return '<label for="' + id + '">' + texto + '</label><input id="' + id + '" type="text" inputmode="decimal">';
}

// pega o numero de dentro de um campo
function pegar(id) {
    const caixa = document.getElementById(id);
    if (!caixa) {
        return 0;
    }
    const n = parseFloat(caixa.value.replace(',', '.'));
    if (isNaN(n)) {
        return 0;
    }
    return n;
}

// ===== salvar o treino =====
function salvarTreino(modo, indice) {
    const ex = exercicios[modo][indice];
    const dados = {};
    let xp = 0;

    if (ex.tipo === 'corrida') {
        dados.km = pegar('km');
        dados.minutos = pegar('minutos');
        if (dados.km <= 0 || dados.minutos <= 0) {
            alert('Preenche a distância e o tempo!');
            return;
        }
        xp = Math.round(dados.km * 10 + dados.minutos / 2);
    }

    if (ex.tipo === 'peso') {
        dados.peso = pegar('peso');
        dados.series = pegar('series');
        dados.reps = pegar('reps');
        if (dados.series <= 0 || dados.reps <= 0) {
            alert('Preenche as séries e as repetições! (se for sem carga, coloca 0 no peso)');
            return;
        }
        xp = Math.round(dados.series * 10);
    }

    if (ex.tipo === 'reps') {
        dados.series = pegar('series');
        dados.reps = pegar('reps');
        if (dados.series <= 0 || dados.reps <= 0) {
            alert('Preenche as séries e as repetições!');
            return;
        }
        xp = Math.round(dados.series * 8);
    }

    if (ex.tipo === 'tempo') {
        dados.series = pegar('series');
        dados.segundos = pegar('segundos');
        if (dados.series <= 0 || dados.segundos <= 0) {
            alert('Preenche as séries e os segundos!');
            return;
        }
        xp = Math.round(dados.series * 8);
    }

    // xp minimo
    if (xp < 5) {
        xp = 5;
    }

    const nivelAntes = calcularNivel(totalXP());

    treinos.push({
        modo: modo,
        nome: ex.nome,
        tipo: ex.tipo,
        dados: dados,
        xp: xp,
        data: new Date().toLocaleDateString('pt-BR')
    });
    guardar();

    const nivelDepois = calcularNivel(totalXP());
    atualizarTopo();

    if (nivelDepois > nivelAntes) {
        avisar('SUBIU DE NÍVEL! Agora você é nível ' + nivelDepois + ' (+' + xp + ' XP)');
    } else {
        avisar('+' + xp + ' XP! Bora continuar!');
    }

    // abre a pagina de novo pra atualizar o historico
    abrirExercicio(modo, indice);
}

// texto resumido de um treino
function resumo(t) {
    if (t.tipo === 'corrida') {
        return t.dados.km + ' km em ' + t.dados.minutos + ' min';
    }
    if (t.tipo === 'peso') {
        return t.dados.series + 'x' + t.dados.reps + ' com ' + t.dados.peso + ' kg';
    }
    if (t.tipo === 'reps') {
        return t.dados.series + 'x' + t.dados.reps;
    }
    return t.dados.series + 'x' + t.dados.segundos + ' s';
}

// ultimos treinos na tela inicial
function desenharHistorico() {
    const lista = document.getElementById('historico');
    if (treinos.length === 0) {
        lista.innerHTML = '<li>Nenhum treino ainda. Escolha um modo e comece!</li>';
        return;
    }
    let html = '';
    let contador = 0;
    for (let i = treinos.length - 1; i >= 0 && contador < 5; i--) {
        html += '<li><b>' + treinos[i].nome + '</b> - ' + resumo(treinos[i]) + ' (+' + treinos[i].xp + ' XP)</li>';
        contador++;
    }
    lista.innerHTML = html;
}

// mensagem que aparece embaixo da tela
function avisar(texto) {
    const aviso = document.getElementById('aviso');
    aviso.textContent = texto;
    aviso.classList.add('mostrar');
    setTimeout(function () {
        aviso.classList.remove('mostrar');
    }, 3000);
}

function apagarTudo() {
    if (confirm('Quer mesmo apagar todo o seu progresso?')) {
        treinos = [];
        guardar();
        mostrarMenu();
    }
}

// quando a pagina abre
mostrarMenu();