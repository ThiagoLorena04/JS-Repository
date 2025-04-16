// 1 – Verifica tipo de triângulo
function tipoTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      if (a === b && b === c) return "Equilátero";
      if (a === b || a === c || b === c) return "Isósceles";
      return "Escaleno";
    } else {
      return "Não é triângulo";
    }
  }
  
  // 2 – Distância entre dois pontos
  function distancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
  
  // 3 – Verifica idade
  function verificaIdade(idade) {
    if (idade > 18) return "Maior de 18 anos";
    if (idade < 18) return "Menor de 18 anos";
    return "Tem exatamente 18 anos";
  }
  
  // 4 – Ordenação crescente e decrescente
  function ordenarNumeros(numeros) {
    let crescente = [...numeros].sort((a, b) => a - b);
    let decrescente = [...numeros].sort((a, b) => b - a);
    return { crescente, decrescente };
  }
  
  // 5 – Divisíveis por 3, 7, 13 e ambos 3 e 5
  function calcularDivisiveis() {
    let v3 = [], v7 = [], v13 = [], v3e5 = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) v3.push(i);
      if (i % 7 === 0) v7.push(i);
      if (i % 13 === 0) v13.push(i);
      if (i % 3 === 0 && i % 5 === 0) v3e5.push(i);
    }
    return { v3, v7, v13, v3e5 };
  }
  
  // 6 – Manipulação de vetor de animais
  let C = ["canário", "gavião", "cachorra", "gata", "arara", "cavalo", "sabiá", "porco", "galo"];
  let animaisComRepteis = [...C, "jacaré", "iguana"];
  let animaisEntreIndices = animaisComRepteis.slice(2, 7);
  let animaisQuatroPatas = ["cachorra", "gata", "cavalo", "porco"];
  let vetorFinal = animaisQuatroPatas.concat(animaisEntreIndices);
  
  // 7 – Primos até um número
  function primosAte(n) {
    let primos = [];
    for (let i = 2; i <= n; i++) {
      let primo = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          primo = false;
          break;
        }
      }
      if (primo) primos.push(i);
    }
    return primos;
  }
  
  // 8 – Ordenar vetor, média e maior número
  function ordenar(vetor) {
    return [...vetor].sort((a, b) => a - b);
  }
  function media(vetor) {
    let soma = vetor.reduce((acc, val) => acc + val, 0);
    return soma / vetor.length;
  }
  function maior(vetor) {
    return Math.max(...vetor);
  }
  
  // 9 – Jogo de moedas com entrada do usuário e verificação de repetição
  function gerarJogada(qtd) {
    const jogada = [];
    for (let i = 0; i < qtd; i++) {
      jogada.push(Math.random() <= 0.5 ? "Cara" : "Coroa");
    }
    return jogada;
  }
  
  function jogoMoedas() {
    let qtdMoedas = parseInt(prompt("Quantidade de moedas (2-5):"));
    let maxTentativas = parseInt(prompt("Máximo de tentativas:"));
    let jogadaUsuario = prompt("Digite sua jogada (ex: Cara,Cara):").split(",");
  
    const jogadasFeitas = [];
    let tentativas = 0;
    let acertou = false;
    let repetidas = 0;
  
    while (tentativas < maxTentativas && !acertou) {
      let jogada = gerarJogada(qtdMoedas);
      let jogadaTexto = jogada.join(",");
  
      if (!jogadasFeitas.includes(jogadaTexto)) {
        jogadasFeitas.push(jogadaTexto);
        tentativas++;
        if (jogadaTexto === jogadaUsuario.join(",")) {
          acertou = true;
          break;
        }
      } else {
        repetidas++;
      }
    }
  
    console.log("Jogada inicial do usuário:", jogadaUsuario.join(", "));
    console.log("Jogadas feitas:", jogadasFeitas);
    console.log("Total de jogadas repetidas ignoradas:", repetidas);
    console.log(acertou ? `Acertou em ${tentativas} tentativa(s)!` : "Não acertou dentro do limite!");
  }
  
  // 11 a 19 – Respostas objetivas (comentadas abaixo):
  // 11: d) Todas as anteriores
  // 12: c) Um erro é gerado
  // 13: b) false
  // 14: b) shift()
  // 15: b) let tem escopo de bloco, enquanto var tem escopo de função
  // 16: d) Todas as anteriores
  // 17: a) arr[2]
  // 18: d) Ambas b) e c)
  // 19: c) dados.length
  