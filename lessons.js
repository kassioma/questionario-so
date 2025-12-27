const lessons = {
  "1": {
    "title": "Aula 01: Introdução a Sistemas Operacionais",
    "questions": [
      {
        "question": "De acordo com o material, qual é a definição fundamental de um computador?",
        "options": [
          "Uma máquina eletrônica que processa dados e depende tanto de hardware quanto de software.",
          "Um dispositivo que se conecta à internet para acessar programas e aplicativos.",
          "Um sistema que opera apenas com partes digitais (software) para processar informações.",
          "Uma máquina eletrônica que funciona exclusivamente com partes físicas (hardware)."
        ],
        "correct": 0,
        "hint": "Pense nos dois componentes principais que são necessários para que um computador funcione."
      },
      {
        "question": "Qual é o papel principal do Sistema Operacional (SO) na estrutura de um computador, conforme descrito no material?",
        "options": [
          "Controlar diretamente a conexão com a internet, sem gerenciar outros componentes de hardware.",
          "Funcionar como um aplicativo específico, como um editor de texto ou navegador.",
          "Servir como intermediário essencial entre os aplicativos/usuário e o hardware.",
          "Ser a única parte do software responsável pela segurança, ignorando a gestão de recursos."
        ],
        "correct": 2,
        "hint": "Lembre-se da analogia da estrutura em camadas: Usuário -> Aplicativos -> ? -> Hardware."
      },
      {
        "question": "O sistema operacional Linux, criado por Linus Torvalds, possui uma característica fundamental que o diferencia do Windows. Qual é essa característica?",
        "options": [
          "É desenvolvido e mantido por uma única grande empresa de tecnologia, a Microsoft.",
          "É um sistema de código aberto (open-source), permitindo modificação e distribuição livres.",
          "Foi o primeiro sistema operacional a ter uma interface gráfica para desktops.",
          "Domina o mercado global de desktops e é conhecido por sua interface amigável para iniciantes."
        ],
        "correct": 1,
        "hint": "Pense em como o código-fonte do sistema é tratado e quem pode acessá-lo."
      },
      {
        "question": "Qual das seguintes opções descreve corretamente uma das funções do Sistema Operacional listadas como 'Gerenciar memória'?",
        "options": [
          "Limpar o disco rígido (HD/SSD) de arquivos desnecessários automaticamente.",
          "Organizar os ícones e atalhos na área de trabalho do usuário.",
          "Distribuir o espaço de armazenamento do disco entre diferentes usuários.",
          "Distribuir a memória RAM de forma eficiente entre os programas em execução."
        ],
        "correct": 3,
        "hint": "Esta função está relacionada à memória volátil que os programas usam enquanto estão rodando."
      },
      {
        "question": "O material apresenta o conceito de 'Multitarefa'. O que isso significa no contexto de um Sistema Operacional?",
        "options": [
          "A capacidade do computador de realizar cálculos matemáticos muito complexos em alta velocidade.",
          "A capacidade de conectar vários dispositivos de hardware, como mouses e teclados, ao mesmo tempo.",
          "A habilidade de um programa ser usado por múltiplos usuários na mesma máquina.",
          "A execução de vários programas simultaneamente através de uma rápida alternância entre eles."
        ],
        "correct": 3,
        "hint": "Pense em como você consegue ouvir música, navegar na internet e ter um editor de texto aberto ao mesmo tempo."
      },
      {
        "question": "Segundo o exemplo fornecido, como um aplicativo (um jogo) consegue utilizar um componente de hardware (a placa de vídeo)?",
        "options": [
          "O Sistema Operacional atua como um tradutor, interpretando os comandos do jogo para a placa de vídeo.",
          "A placa de vídeo ignora o jogo e funciona de forma independente com base em suas próprias instruções.",
          "O usuário precisa configurar manualmente a comunicação entre o jogo e a placa de vídeo.",
          "O jogo se comunica diretamente com a placa de vídeo, sem qualquer intermediário."
        ],
        "correct": 0,
        "hint": "Lembre-se da analogia do SO como um 'gerente' que também é um 'intérprete de idiomas'."
      },
      {
        "question": "O Windows, lançado em 1985 pela Microsoft, é mais conhecido por qual das seguintes características?",
        "options": [
          "Ser altamente personalizável e ter seu código-fonte aberto para inspeção.",
          "Ser um sistema gratuito e com centenas de distribuições diferentes.",
          "Ser utilizado principalmente em caixas eletrônicos e roteadores.",
          "Sua interface gráfica intuitiva e domínio no mercado de desktops."
        ],
        "correct": 3,
        "hint": "Pense no que tornou o Windows tão popular entre usuários sem conhecimento técnico."
      },
      {
        "question": "O material menciona várias 'distribuições' Linux, como Ubuntu, Fedora e Kali. O que isso significa?",
        "options": [
          "São os aplicativos de navegador de internet que podem ser instalados no Linux.",
          "São as diferentes empresas que fabricam o hardware compatível com Linux.",
          "São os nomes das atualizações anuais do sistema operacional Linux.",
          "São versões diferentes do Linux, cada uma adaptada para um propósito ou público específico."
        ],
        "correct": 3,
        "hint": "Considere por que existem versões diferentes como 'Ubuntu (iniciantes)' e 'Kali (segurança)'."
      },
      {
        "question": "Além de notebooks e celulares, em quais outros tipos de dispositivos o material didático afirma que podemos encontrar Sistemas Operacionais?",
        "options": [
          "Smart TVs, caixas eletrônicos e roteadores.",
          "Apenas em teclados e mouses com funcionalidades extras.",
          "Apenas em servidores de grandes empresas de tecnologia.",
          "Discos rígidos (HD/SSD) e memórias RAM."
        ],
        "correct": 0,
        "hint": "Revise a imagem e a lista que mostram a variedade de computadores no nosso dia a dia."
      },
      {
        "question": "Qual das seguintes opções NÃO é uma função principal de um Sistema Operacional, de acordo com o material?",
        "options": [
          "Gerenciar os programas em execução e como eles usam os recursos.",
          "Fazer a comunicação entre os componentes de hardware e o software.",
          "Garantir a segurança do sistema contra acessos não autorizados.",
          "Escrever o código-fonte dos aplicativos e programas."
        ],
        "correct": 3,
        "hint": "Pense na diferença entre a plataforma (o SO) e as aplicações que rodam nela."
      }
    ]
  },
  "2": {
    "title": "Aula 02: As Grandes Cidades: Windows vs. Linux",
    "questions": [
      {
        "question": "Na analogia do computador como uma cidade apresentada no material, o que a \"Prefeitura\" simboliza?",
        "options": [
          "As conexões de rede e internet",
          "O Sistema Operacional",
          "O usuário do computador",
          "Os programas e aplicativos"
        ],
        "correct": 1,
        "hint": "Pense na entidade que gerencia e organiza os serviços e recursos para que tudo funcione em uma cidade."
      },
      {
        "question": "De acordo com a apresentação, qual das seguintes opções melhor descreve a filosofia da \"Windows City\"?",
        "options": [
          "Uma cidade governada por um conselho comunitário de desenvolvedores e voluntários.",
          "Uma metrópole aberta onde qualquer cidadão pode construir e modificar as regras.",
          "Uma cidade que serve como base para a construção de muitos outros bairros diferentes.",
          "Uma cidade planejada e privada, construída por uma única empresa, com foco na facilidade de uso."
        ],
        "correct": 3,
        "hint": "Lembre-se da comparação com um \"condomínio de luxo\" e quem seria o arquiteto."
      },
      {
        "question": "Qual é o conceito-chave que define o modelo de desenvolvimento colaborativo da \"Linux City\", permitindo que qualquer pessoa contribua?",
        "options": [
          "Open Source (Código Aberto)",
          "Prefeitura Centralizada",
          "Compatibilidade Universal",
          "Ecossistema Pronto"
        ],
        "correct": 0,
        "hint": "A apresentação menciona que a \"planta da cidade é pública\" e qualquer um pode sugerir mudanças."
      },
      {
        "question": "Como a governança da \"Windows City\" se diferencia da governança da \"Linux City\"?",
        "options": [
          "Linux é governado de forma centralizada por Linus Torvalds, enquanto Windows é governado por uma comunidade de usuários.",
          "Não há diferença fundamental; ambas dependem de voluntários para tomar as decisões mais importantes.",
          "Windows é governado por uma \"Prefeitura Centralizada\" (Microsoft), enquanto Linux é cuidado por um \"Conselho Comunitário\" global.",
          "Ambas são governadas por uma única empresa, mas com filosofias diferentes sobre a participação do usuário."
        ],
        "correct": 2,
        "hint": "Pense se as decisões vêm de um único lugar ou de várias fontes."
      },
      {
        "question": "Na analogia, os diferentes \"bairros\" da \"Linux City\", como Ubuntu, Arch e Fedora, representam qual conceito do mundo real?",
        "options": [
          "Os pacotes de software opcionais.",
          "As distribuições Linux.",
          "As empresas que patrocinam o Linux.",
          "As diferentes versões do kernel Linux."
        ],
        "correct": 1,
        "hint": "A apresentação usa um termo técnico específico para se referir a esses \"bairros\" que oferecem experiências diferentes."
      },
      {
        "question": "De acordo com o material, para qual dos seguintes cenários a \"Windows City\" é a escolha dominante?",
        "options": [
          "Desktops de uso pessoal, ambientes de escritório e o ecossistema de jogos para PC.",
          "A infraestrutura da internet e sistemas críticos que exigem máxima segurança.",
          "Servidores que hospedam os maiores sites do mundo, como Google e Facebook.",
          "Celulares com sistema Android."
        ],
        "correct": 0,
        "hint": "Pense nos ambientes onde a conveniência e a compatibilidade com softwares comerciais são mais importantes."
      },
      {
        "question": "Qual \"bairro\" da \"Linux City\" é descrito como ideal para \"arquitetos que querem controle total\"?",
        "options": [
          "Ubuntu",
          "Debian",
          "Fedora",
          "Arch"
        ],
        "correct": 3,
        "hint": "A dica está na própria palavra \"arquiteto\" e no que ele faz: projeta e controla a construção."
      },
      {
        "question": "A apresentação afirma que a filosofia da \"Linux City\" a torna a escolha número um para as tarefas mais importantes da tecnologia. Qual exemplo NÃO é usado para apoiar essa afirmação?",
        "options": [
          "A maioria dos grandes sites roda em servidores Linux.",
          "A infraestrutura da internet é construída sobre Linux.",
          "O celular Android tem um coração Linux.",
          "O ecossistema de jogos para PC."
        ],
        "correct": 3,
        "hint": "Procure pela aplicação que foi explicitamente associada ao domínio da \"Windows City\"."
      },
      {
        "question": "Qual é a mensagem final da apresentação sobre a escolha entre Windows e Linux?",
        "options": [
          "Não existe uma \"melhor cidade\", mas sim a mais adequada para a necessidade de cada um.",
          "A tendência é que um sistema operacional substitua o outro no futuro próximo.",
          "Linux é objetivamente superior para todas as tarefas devido à sua segurança e performance.",
          "Windows é a melhor escolha para a maioria das pessoas por ser mais fácil de usar."
        ],
        "correct": 0,
        "hint": "A conclusão não aponta um vencedor, mas sim uma forma diferente de pensar sobre a questão."
      },
      {
        "question": "A \"Liberdade para Construir\" em Linux contrasta com qual característica principal da vida na \"Cidade do Windows\"?",
        "options": [
          "O suporte de uma comunidade global.",
          "A conveniência e o ecossistema pronto.",
          "A segurança em sistemas críticos.",
          "A alta performance em tarefas científicas."
        ],
        "correct": 1,
        "hint": "Pense no que se ganha ao abrir mão da liberdade de construir: um ambiente que já está pronto para uso."
      }
    ]
  },
  "3": {
    "title": "Aula 03: Organizando a Cidade: Arquivos e Pastas",
    "questions": [
      {
        "question": "De acordo com a analogia apresentada, o que o conceito de \"sistema de arquivos\" representa na organização de um computador?",
        "options": [
          "O design visual da interface do usuário, como ícones e janelas.",
          "A velocidade de processamento dos aplicativos.",
          "A forma como o sistema operacional organiza os dados, semelhante à organização de uma casa.",
          "A forma como o computador se conecta à internet."
        ],
        "correct": 2,
        "hint": "Pense na primeira analogia principal que o material faz para explicar a organização de dados."
      },
      {
        "question": "No sistema operacional Windows, como são tratados os diferentes dispositivos de armazenamento (discos rígidos, SSDs)?",
        "options": [
          "São representados por ícones na Área de Trabalho sem uma estrutura fixa.",
          "São organizados em pastas numeradas dentro do diretório do usuário.",
          "São considerados \"lotes\" separados, cada um identificado por uma letra (ex: C:, D:).",
          "São todos integrados sob um único diretório chamado '/storage'."
        ],
        "correct": 2,
        "hint": "Lembre-se da analogia da 'Casa do Windows' construída em 'lotes separados'."
      },
      {
        "question": "Qual é a principal característica da estrutura de arquivos no sistema operacional Linux?",
        "options": [
          "Os arquivos do usuário são armazenados em uma unidade de disco completamente separada do sistema.",
          "A estrutura de arquivos é idêntica à do Windows para facilitar a compatibilidade.",
          "Tudo é construído a partir de uma única fundação, o diretório raiz ('/').",
          "A existência de múltiplos \"lotes\" separados para sistema e usuários, como C: e D:."
        ],
        "correct": 2,
        "hint": "Pense na imagem da árvore crescendo a partir de uma única base."
      },
      {
        "question": "Qual dos seguintes \"endereços\" de arquivo representa um caminho válido e típico no sistema de arquivos do Linux?",
        "options": [
          "C:\\Users\\aluno\\documentos\\trabalho.odt",
          "Users:home/aluno/trabalho.odt",
          "/home/aluno/documentos/trabalho.odt",
          "~/Documentos/C:/trabalho.odt"
        ],
        "correct": 2,
        "hint": "Observe o caractere usado para o ponto de partida de todo o sistema e o tipo de barra que separa as pastas."
      },
      {
        "question": "A diferença na organização de arquivos entre Windows e Linux reflete a filosofia de cada sistema. Qual filosofia corresponde à estrutura do Linux?",
        "options": [
          "Uma cidade focada exclusivamente em segurança, onde cada arquivo é um prédio isolado.",
          "Uma cidade planejada e comercial, com estrutura padronizada para ser familiar a todos.",
          "Uma cidade aberta e colaborativa, com uma fundação única e integrada que oferece poder e flexibilidade.",
          "Uma cidade com regras rígidas de construção, onde o usuário não pode criar novas pastas."
        ],
        "correct": 2,
        "hint": "Conecte a estrutura de fundação única ('/') do Linux com os adjetivos usados para descrever sua 'cidade'."
      },
      {
        "question": "Com base na comparação final, para qual perfil de uso o ambiente Windows é apresentado como ideal?",
        "options": [
          "Uso diário, jogos e trabalho em escritório, valorizando praticidade e compatibilidade.",
          "Para quem quer entender em profundidade como os sistemas operacionais funcionam.",
          "Apenas para usuários que querem construir e personalizar seu sistema operacional do zero.",
          "Programação, gerenciamento de servidores e ciência de dados."
        ],
        "correct": 0,
        "hint": "Olhe para a balança e veja quais itens estão do lado azul, associado ao Windows."
      }
    ]
  },
  "4": {
    "title": "Aula 04: O Ritmo da Cidade: CPU, RAM e Processos",
    "questions": [
      {
        "question": "De acordo com a analogia da cidade apresentada, o que representa um 'processo'?",
        "options": [
          "Um veículo transportando mercadorias entre os edifícios.",
          "O edifício em si, independentemente de estar em uso ou não.",
          "Um negócio ou operação ativa dentro de um edifício.",
          "A planta baixa da cidade que dita onde os edifícios são construídos."
        ],
        "correct": 2,
        "hint": "Pense na diferença entre um programa instalado e um programa que você está usando ativamente."
      },
      {
        "question": "Na metáfora da cidade, qual componente do computador é análogo ao 'Centro de Comando' que executa todas as instruções?",
        "options": [
          "O Gabinete do Prefeito.",
          "Os armazéns e docas de carregamento.",
          "Os arquivos de longo prazo da cidade.",
          "A Unidade Central de Processamento (CPU)."
        ],
        "correct": 3,
        "hint": "Qual parte da cidade é responsável por processar e preparar todos os 'pedidos'?"
      },
      {
        "question": "A diferença entre uma CPU de núcleo único e uma CPU de múltiplos núcleos é comparada a qual cenário na cidade?",
        "options": [
          "Ter um armazém pequeno versus ter um armazém grande e espaçoso.",
          "Ter um único controlador de tráfego aéreo versus ter uma equipe de controladores, cada um gerenciando uma tarefa.",
          "Uma cidade com poucas ruas versus uma cidade com uma grande rede de estradas.",
          "Ter um prefeito versus ter um conselho municipal."
        ],
        "correct": 1,
        "hint": "Considere como a capacidade de realizar várias tarefas simultaneamente é representada na analogia da cozinha com chefs."
      },
      {
        "question": "Como a apresentação explica a 'ilusão' de que um computador com um único núcleo consegue fazer várias coisas ao mesmo tempo?",
        "options": [
          "O núcleo único da CPU se divide fisicamente para trabalhar em várias tarefas simultaneamente.",
          "O Sistema Operacional direciona a CPU para alternar entre as tarefas milhares de vezes por segundo.",
          "Cada programa utiliza uma pequena porção diferente da CPU para executar sem interrupções.",
          "A memória RAM executa algumas tarefas enquanto a CPU executa outras."
        ],
        "correct": 1,
        "hint": "A chave para essa 'mágica' não está na execução simultânea real, mas na velocidade da transição entre tarefas."
      },
      {
        "question": "Na analogia da cidade, qual é a função da Memória de Acesso Aleatório (RAM)?",
        "options": [
          "Ser o grande arquiteto que planeja e evita o caos na cidade.",
          "Ser o centro de comando que executa todas as tarefas ativas.",
          "Funcionar como os arquivos de longo prazo, onde tudo é guardado permanentemente.",
          "Servir como o espaço de trabalho, como docas e armazéns de acesso rápido, para os processos ativos."
        ],
        "correct": 3,
        "hint": "Onde a CPU busca os 'ingredientes e ferramentas' de que precisa para trabalhar eficientemente?"
      },
      {
        "question": "O que acontece na 'cidade' quando os 'armazéns' (RAM) ficam cheios?",
        "options": [
          "O 'Centro de Comando' (CPU) para de funcionar completamente.",
          "Novos 'controladores' (núcleos) são ativados para lidar com o excesso de trabalho.",
          "A cidade precisa buscar dados nos 'arquivos de longo prazo' (Disco Rígido), o que causa um 'engarrafamento'.",
          "O 'Gabinete do Prefeito' (Sistema Operacional) deleta programas para liberar espaço."
        ],
        "correct": 2,
        "hint": "Pense no que acontece quando o espaço de trabalho rápido está lotado e é preciso buscar ferramentas em um local distante e lento."
      },
      {
        "question": "Qual é a principal responsabilidade do 'Gabinete do Prefeito', que representa o Sistema Operacional?",
        "options": [
          "Representar um único programa ativo, como uma fábrica produzindo bens.",
          "Executar cada instrução de cada programa o mais rápido possível.",
          "Gerenciar de forma inteligente todos os recursos da cidade para evitar o caos.",
          "Armazenar todos os dados dos programas que estão em execução."
        ],
        "correct": 2,
        "hint": "Quem é o 'grande arquiteto' que planeja e dirige toda a atividade na cidade?"
      },
      {
        "question": "Um computador lento com muitos programas abertos é comparado a um engarrafamento em toda a cidade. Qual é a causa principal desse engarrafamento, segundo a analogia?",
        "options": [
          "A falta de espaço nos 'armazéns de acesso rápido' (RAM), forçando o uso dos 'arquivos lentos' (Disco Rígido).",
          "A 'rede de estradas' (fluxo de dados) da cidade não foi bem projetada.",
          "O 'Gabinete do Prefeito' (SO) está demorando muito para tomar decisões.",
          "Há apenas um 'controlador' (núcleo da CPU) tentando gerenciar todas as tarefas ao mesmo tempo."
        ],
        "correct": 0,
        "hint": "O problema surge quando o espaço de trabalho imediato se esgota. Onde a cidade precisa buscar recursos a seguir?"
      },
      {
        "question": "Qual das seguintes afirmações descreve corretamente a relação entre CPU e RAM na analogia da cidade?",
        "options": [
          "A RAM é a cozinha que prepara os pedidos, e a CPU é o garçom que os entrega.",
          "A CPU e a RAM são como dois chefs trabalhando juntos na mesma cozinha para preparar mais pratos.",
          "A CPU é o livro de receitas (instruções), e a RAM é o chef que as segue.",
          "A CPU é a cozinha onde os pedidos são preparados, e a RAM é o armazém próximo que fornece os ingredientes rapidamente."
        ],
        "correct": 3,
        "hint": "Pense em quem faz o 'trabalho' e quem fornece as 'ferramentas e ingredientes' para esse trabalho."
      },
      {
        "question": "No resumo 'Anatomia de uma Cidade Viva', como são descritos os 'Núcleos da CPU'?",
        "options": [
          "O Gabinete do Prefeito, planejando e dirigindo toda a atividade.",
          "A equipe de controladores dentro do Centro de Comando.",
          "O Centro de Comando central executando todas as tarefas.",
          "As docas de carregamento e armazéns de alta velocidade da cidade."
        ],
        "correct": 1,
        "hint": "Os núcleos não são o centro de comando inteiro, mas sim os trabalhadores que estão dentro dele."
      }
    ]
  },
  "5": {
    "title": "Aula 05: Construindo e Protegendo: Programas e Segurança",
    "questions": [
      {
        "question": "De acordo com a analogia da \"cidade digital\", qual é a filosofia principal que guia a instalação de software (a \"construção de novos prédios\") na \"Windows City\"?",
        "options": [
          "A exclusividade para projetos aprovados em um \"Departamento de Planejamento\" central.",
          "A conveniência e a expansão rápida, permitindo que \"construtoras\" de qualquer lugar ergam seus prédios.",
          "A segurança e a estabilidade através da transparência e do aval da comunidade.",
          "A construção colaborativa onde todos os cidadãos podem inspecionar a planta dos prédios."
        ],
        "correct": 1,
        "hint": "Pense no que torna o processo de encontrar e instalar um programa no Windows tão direto para o usuário final."
      },
      {
        "question": "Na metáfora da \"Linux City\", o que os \"Gerenciadores de Pacotes\" (como apt, dnf, pacman) representam?",
        "options": [
          "A polícia da cidade, responsável por remover programas maliciosos.",
          "Atendentes especializados que entregam material verificado do \"Repositório\" e garantem a correta instalação.",
          "Os prefeitos de cada bairro, que detêm o poder administrativo final.",
          "As construtoras que desenvolvem os softwares e os submetem à aprovação."
        ],
        "correct": 1,
        "hint": "Eles são os intermediários que buscam os \"materiais de construção\" aprovados e cuidam da montagem."
      },
      {
        "question": "Qual é o principal risco associado ao modelo de \"Licença Expressa\" da \"Windows City\", onde arquivos '.exe' podem ser obtidos de qualquer lugar?",
        "options": [
          "A ausência de uma fiscalização central, permitindo que \"kits de construção\" contenham vírus ou malware.",
          "O processo de construção ser muito lento e burocrático para o usuário.",
          "A necessidade de seguir regras comunitárias rígidas que limitam a inovação.",
          "A falta de variedade de softwares, pois poucas empresas podem construir."
        ],
        "correct": 0,
        "hint": "Considere o que acontece quando não há uma verificação oficial da origem dos \"materiais de construção\"."
      },
      {
        "question": "Na analogia da cidade, o que representa o poder do \"Prefeito\", que no computador corresponde à conta de Administrador ou Root/Sudo?",
        "options": [
          "O acesso a todos os dados de todos os cidadãos para fins de segurança.",
          "A capacidade de criar novos programas do zero.",
          "A responsabilidade de verificar a reputação de todos os desenvolvedores de software.",
          "A permissão para realizar mudanças estruturais e proteger o núcleo do sistema contra alterações perigosas."
        ],
        "correct": 3,
        "hint": "Pense nas ações que um usuário comum não pode fazer, mas que são necessárias para instalar softwares importantes ou modificar o sistema."
      },
      {
        "question": "Como a apresentação descreve analogicamente os \"Programas pesados e mal otimizados\"?",
        "options": [
          "Sabotadores que tentam se infiltrar nas defesas da cidade.",
          "Prédios com consumo excessivo que sobrecarregam a rede de energia da cidade.",
          "Construções Ilegais que operam na clandestinidade.",
          "Empresas de Fachada que espionam os cidadãos."
        ],
        "correct": 1,
        "hint": "Qual dos riscos do crescimento acelerado está relacionado ao desempenho e ao uso de recursos do sistema?"
      },
      {
        "question": "Qual é a principal recomendação de segurança para um \"Cidadão Responsável\" na \"Linux City\"?",
        "options": [
          "Comprar um antivírus poderoso para fiscalizar todas as novas construções.",
          "Desconfiar de ofertas \"boas demais para ser verdade\" em becos escuros da internet.",
          "Respeitar o poder do 'sudo' e utilizar os repositórios oficiais como parceiros de confiança.",
          "Verificar a reputação do desenvolvedor em sites de terceiros antes de instalar."
        ],
        "correct": 2,
        "hint": "A segurança na \"Linux City\" está fundamentada na confiança em seu sistema centralizado de distribuição."
      },
      {
        "question": "Segundo a \"Lição Final\" da apresentação, como o Windows é caracterizado em sua analogia de cidade?",
        "options": [
          "Uma cidade planejada e privada, que é conveniente mas exige vigilância do cidadão.",
          "Uma cidade em constante construção, onde a segurança é secundária à expansão.",
          "Uma cidade-fortaleza, onde a segurança é tão rígida que dificulta a construção de novos prédios.",
          "Uma metrópole aberta e colaborativa, construída com base na confiança e verificação."
        ],
        "correct": 0,
        "hint": "Lembre-se da comparação final entre os dois sistemas operacionais, focando no modelo de desenvolvimento e na experiência do usuário."
      },
      {
        "question": "No modelo da \"Linux City\", qual mecanismo garante que um novo \"prédio\" (software) seja seguro antes de ser disponibilizado aos cidadãos?",
        "options": [
          "Um processo que inclui Verificação Técnica, Repositórios Oficiais e Normas Comunitárias.",
          "A exigência de que cada cidadão compre uma licença de construção.",
          "A confiança na reputação individual de cada \"construtora\" (desenvolvedor).",
          "A aprovação quase imediata de projetos para facilitar a expansão da cidade."
        ],
        "correct": 0,
        "hint": "Pense nos três pilares que sustentam a filosofia de segurança e estabilidade através da transparência na \"Linux City\"."
      }
    ]
  }
};
