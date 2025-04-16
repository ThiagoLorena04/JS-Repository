// Função para capturar a entrada do usuário (quantidade de moedas, tentativas e jogada escolhida)
const entradaUsuario = () => {
    let moedas = parseInt(prompt("Digite a quantidade de moedas (2-5):"));
    while (![2, 3, 4, 5].includes(moedas)) {
      moedas = parseInt(prompt("Digite um valor válido entre 2 e 5:"));
    }
  
    let tentativas = parseInt(prompt("Digite o número máximo de tentativas:"));
    while (isNaN(tentativas) || tentativas <= 0) {
      tentativas = parseInt(prompt("Digite um valor numérico maior que 0:"));
    }
  
    let jogada = prompt(`Digite sua jogada com ${moedas} moedas (ex: Cara,Cara,Coroa):`).split(",");
  
    return [moedas, tentativas, jogada];
  };
  
  // Função que gera aleatoriamente 'Cara' ou 'Coroa'
  const geraMoedas = (quantidade) => {
    const resultado = [];
    for (let i = 0; i < quantidade; i++) {
      resultado.push(Math.random() <= 0.5 ? "Cara" : "Coroa");
    }
    return resultado;
  };
  
  // Função que gera a jogada inicial do simulador
  const geraJogadaInicial = (quantidade) => geraMoedas(quantidade);
  
  // Função que gera uma jogada em uma tentativa
  const geraJogadaGeral = (quantidade) => geraMoedas(quantidade);
  
  // Função que compara se duas jogadas são iguais
  const comparaJogadas = (jogada1, jogada2) => {
    for (let i = 0; i < jogada1.length; i++) {
      if (jogada1[i] !== jogada2[i]) return false;
    }
    return true;
  };
  
  // Função para verificar se a jogada já foi feita antes
  const evitarJogadaRepetida = (jogada, historico) => {
    const jogadaTexto = jogada.join(",");
    return !historico.includes(jogadaTexto);
  };
  
  // Função que exibe o resultado do jogo no console
  const publicaResultado = (acertou, tentativa, historico, jogadaInicial) => {
    if (acertou) {
      console.log(` Acertou em ${tentativa} tentativa(s)!`);
    } else {
      console.log(" O simulador não acertou sua jogada.");
    }
  
    console.log(`Jogada inicial: ${jogadaInicial.join(", ")}`);
    console.log("Tentativas realizadas:");
    for (let i = 0; i < historico.length; i++) {
      console.log(`${i + 1}: ${historico[i]}`);
    }
  };
  
  // Função principal do simulador, orquestra todas as outras
  const simuladorJogaMoedas = () => {
    const [qtdMoedas, maxTentativas, jogadaUsuario] = entradaUsuario();
    const jogadaInicial = geraJogadaInicial(qtdMoedas);
  
    const historico = [];
    let acertou = false;
    let tentativa = 0;
  
    while (tentativa < maxTentativas && !acertou) {
      const jogada = geraJogadaGeral(qtdMoedas);
      const jogadaTexto = jogada.join(",");
  
      if (evitarJogadaRepetida(jogada, historico)) {
        historico.push(jogadaTexto);
        tentativa++;
        if (comparaJogadas(jogada, jogadaInicial)) {
          acertou = true;
        }
      }
    }
  
    publicaResultado(acertou, tentativa, historico, jogadaInicial);
  };
  
  // Chamada inicial do simulador (pode comentar essa linha se for usar com botão HTML)
  simuladorJogaMoedas();
  