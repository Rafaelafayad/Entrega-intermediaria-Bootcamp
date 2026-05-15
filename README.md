Problema Real: Muitas pessoas esquecem de realizar hábitos básicos de autocuidado, como beber água ou descansar, especialmente devido à rotina corrida e uso excessivo de tecnologia.

Solução: Pensando nisso, foi desenvolvida uma aplicação simples que permite ao usuário acompanhar e marcar hábitos diários, incentivando a criação de uma rotina saudável de forma prática.

O Projeto é um aplicativo que visa o Autocuidado.

Público-alvo: Pessoas com rotina corrida, estudantes e usuários que desejam melhorar seus hábitos.

Funcionalidades:
-  Marcar hábitos como concluídos;
- Adicionar novos hábitos personalizados; 
- Editar hábitos existentes;  
- Remover hábitos com confirmação; 
- Exibição de clima em tempo real (Brasília-DF);
- Relógio com horário de Brasília;
- Mensagens de autocuidado conforme a temperatura;
- Resetar lista diariamente; 
- Exibição de mensagem ao finalizar o dia ("Dia finalizado!");  

API Utilizada
A aplicação utiliza a API pública Open-Meteo para exibir a temperatura atual em tempo real de Brasília - DF.

Tecnologias:
- HTML
- CSS
- JavaScript
- Node.js
- Jest
- ESLint
- GitHub Actions

Instalação:
npm install

Execução:
Abrir index.html no navegador

Lint:
npm run lint

Versão:
1.0.0

Autor:
Rafaela Maciel Fayad

Repositório:
([git@github.com:Rafaelafayad/Projeto-intermediaria-Bootcamp.git](https://github.com/Rafaelafayad/Projeto-intermediaria-Bootcamp.git))

Testes: 
npm test

> autocuidado-app@1.0.0 test
> jest

 PASS  tests/app.test.js
  √ deve resetar todos os itens para falso (2 ms)
                                                                                                                                        
Test Suites: 1 passed, 1 total                                                                                                          
Tests:       1 passed, 1 total                                                                                                          
Snapshots:   0 total
Time:        0.53 s
Ran all test suites.