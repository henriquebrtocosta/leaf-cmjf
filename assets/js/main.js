/* LEAF: project composition, measured volumes and plain-language context. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LEAF = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const english = {
    'Conheça o LEAF, projeto do Colégio Militar de Juiz de Fora que une visão computacional, automação e pesquisa agrícola. Consulte a receita do bioagrotóxico LEAF e veja medidas e cuidados para o seu cultivo.':
      'Meet LEAF, a project from Colégio Militar de Juiz de Fora combining computer vision, automation and agricultural research. Explore the LEAF biopesticide recipe, measurements and care guidance for your crops.',
    'LEAF — Ciência que cultiva possibilidades': 'LEAF — Science that grows possibilities',
    'Tecnologia acessível, visão computacional e cuidado agrícola. Conheça a pesquisa do CMJF e explore o assistente LEAF.':
      'Accessible technology, computer vision and crop care. Discover the CMJF research project and explore the LEAF assistant.',
    'Pular para o conteúdo': 'Skip to content',
    'LEAF, início': 'LEAF, home',
    LEAF: 'LEAF',
    'Ciência. Tecnologia. Cultivo.': 'Science. Technology. Growing.',
    Menu: 'Menu',
    'Navegação principal': 'Main navigation',
    'O projeto': 'The project',
    'A tecnologia': 'The technology',
    Materiais: 'Resources',
    'Quem faz': 'Our team',
    'Assistente agrícola': 'Farming assistant',
    'Do Colégio Militar de Juiz de Fora para o campo':
      'From Colégio Militar de Juiz de Fora to the field',
    'Ciência que cultiva': 'Science that grows',
    'possibilidades.': 'possibilities.',
    'Tecnologia que ajuda a cuidar da plantação. O LEAF combina uma câmera para observar plantas, um sistema de aplicação direcionada e pesquisa de um bioagrotóxico de origem vegetal.':
      'Technology to help you care for your crops. LEAF combines a camera to observe plants, a targeted application system and research into a plant-based biopesticide.',
    'Explorar assistente': 'Explore the assistant',
    'Conheça a pesquisa': 'Discover the research',
    'Low-Cost Ecological AgroCare Framework': 'Low-Cost Ecological AgroCare Framework',
    'Conheça o projeto por dentro': 'Explore the project',
    'Repositório aberto no GitHub ↗': 'Open repository on GitHub ↗',
    'LEAF / VISÃO COMPUTACIONAL': 'LEAF / COMPUTER VISION',
    PROTÓTIPO: 'PROTOTYPE',
    'Ilustração do processamento de uma planta': 'Illustration of plant image processing',
    'Folhas dentro de uma área de observação, com marcações de análise. Diagrama ilustrativo, sem imagem de câmera real.':
      'Leaves inside an observation area with analysis markers. An illustrative diagram, not a live camera image.',
    'REGIÃO DE INTERESSE': 'REGION OF INTEREST',
    OBSERVAR: 'OBSERVE',
    'x: imagem → y: análise': 'x: image → y: analysis',
    'OPEN CV / HSV': 'OPEN CV / HSV',
    '01 / OBSERVAR · ANALISAR · DIRECIONAR': '01 / OBSERVE · ANALYZE · TARGET',
    'Diagrama ilustrativo': 'Illustrative diagram',
    'Visão computacional': 'Computer vision',
    'Enxergar para compreender': 'Seeing to understand',
    'Automação acessível': 'Accessible automation',
    'Conectar software e mecanismo': 'Connecting software and hardware',
    'Pesquisa ecológica': 'Ecological research',
    'Investigar antes de aplicar': 'Research before application',
    'Explore o LEAF': 'Explore LEAF',
    'EXPLORE O LEAF': 'EXPLORE LEAF',
    'A proposta': 'The idea',
    'Como funciona': 'How it works',
    'Documentos e arquivos': 'Documents and files',
    'Na imprensa': 'In the news',
    '01 / A ideia que nos move': '01 / THE IDEA BEHIND LEAF',
    'Cuidado com a plantação.': 'Care for your crops.',
    'Ao alcance do produtor.': 'Within the farmer’s reach.',
    'O LEAF foi pensado para pequenos e médios agricultores. A proposta é observar melhor a plantação, ajudar a direcionar a aplicação e reunir informações úteis para cuidar do cultivo.':
      'LEAF was designed with small and medium-sized farms in mind. Its aim is to improve crop observation, support targeted application and bring together useful crop care information.',
    'Uma ideia que conecta diferentes saberes': 'An idea that brings different fields together',
    'Da observação da planta': 'From observing plants',
    'ao cuidado com o cultivo.': 'to caring for crops.',
    'O LEAF nasce no Colégio Militar de Juiz de Fora e reúne programação, eletrônica e pesquisa agrícola em uma mesma proposta: aproximar ferramentas de cuidado e aplicação direcionada da realidade de pequenos e médios produtores.':
      'Created at Colégio Militar de Juiz de Fora, LEAF brings programming, electronics and agricultural research together to make crop care and targeted application tools more accessible to small and medium-sized farms.',
    'Ler a apresentação completa ↗': 'Read the full project overview ↗',
    'Para quem': 'Who it is for',
    'Pequenos e médios agricultores': 'Small and medium-sized farms',
    'Onde nasceu': 'Where it began',
    'Colégio Militar de Juiz de Fora · MG':
      'Colégio Militar de Juiz de Fora · Minas Gerais, Brazil',
    'O que conecta': 'What it connects',
    'Imagens, automação e bioagrotóxico': 'Images, automation and biopesticide research',
    'Como conhecer': 'Where to learn more',
    'Documentação e materiais abertos': 'Open documentation and resources',
    '01 / OBSERVAR': '01 / OBSERVE',
    'Um olhar para a planta.': 'A closer look at the plant.',
    'Uma câmera registra imagens, e o programa examina cores e formas para apoiar a observação do cultivo.':
      'A camera records images, and the software examines colors and shapes to support crop observation.',
    'Conheça o sistema': 'Explore the system',
    '02 / CUIDAR': '02 / CARE',
    'Uma mistura do próprio projeto.': 'The project’s own blend.',
    'Nim, própolis, cravo, alho e cebola, pimenta e sabão potássico compõem a receita registrada pela equipe.':
      'Neem, propolis, clove, garlic and onion, chili pepper and potassium soap make up the recipe recorded by the team.',
    'Explore o assistente': 'Explore the assistant',
    '03 / DIRECIONAR': '03 / TARGET',
    'Tecnologia na aplicação.': 'Technology for targeted application.',
    'Computador, controlador, motores e bombas se conectam na proposta de um borrifador com aplicação direcionada.':
      'A computer, controller, motors and pumps come together in the proposed targeted spraying system.',
    'Veja os materiais': 'Browse the resources',
    'O LEAF também é notícia': 'LEAF in the news',
    'Ciência feita na escola, compartilhada com o público.':
      'School science, shared with the public.',
    'LEAF NA IMPRENSA': 'LEAF IN THE NEWS',
    CB: 'CB',
    'Correio Braziliense': 'Correio Braziliense',
    'CIÊNCIA NA ESCOLA': 'SCIENCE AT SCHOOL',
    '03 OUT 2025': '03 OCT 2025',
    'Eu, Estudante / Educação básica': 'Eu, Estudante / Basic education',
    'Desafio Global do Conhecimento reúne 15 colégios militares, em Brasília':
      'Global Knowledge Challenge brings 15 military schools together in Brasília',
    'A reportagem apresenta o LEAF entre os projetos do evento e destaca a proposta dos estudantes do CMJF: combinar análise por câmera e pesquisa de manejo ecológico para atender pequenos e médios agricultores.':
      'The article features LEAF among the event’s projects and highlights the CMJF students’ proposal: combine camera-based analysis with ecological crop care research to support small and medium-sized farms.',
    'Por Yandra Martins · Prévia editorial resumida pelo LEAF':
      'By Yandra Martins · Editorial summary prepared by LEAF',
    'Ler sobre o LEAF na matéria': 'Read about LEAF in the article',
    'Abrir notícia original ↗': 'Open the original article ↗',
    'Na seção dedicada ao projeto, Henrique Barreto Costa e Luiz Guilherme Caovilla explicam a observação de plantas e possíveis pragas por imagem. A matéria também descreve a ideia de um aplicativo para consultar formulações conforme a ocorrência e acompanhar cuidados de uso.':
      'In the section about the project, Henrique Barreto Costa and Luiz Guilherme Caovilla explain how images can help observe plants and possible pests. The article also describes the idea of an app for consulting formulations for different situations and reviewing care guidance.',
    'Resumo do trecho sobre o LEAF; a reportagem completa está disponível no jornal. Esta prévia já faz parte da página e não precisa acessar o site do Correio para aparecer.':
      'A summary of the section about LEAF; the full article is available from the newspaper. This preview is included in the page and appears without loading the Correio website.',
    '02 / Da imagem ao movimento': '02 / FROM IMAGE TO MOVEMENT',
    'A câmera observa.': 'The camera observes.',
    'O sistema direciona.': 'The system targets.',
    'Veja como as partes do LEAF trabalham juntas: da imagem da planta ao controle do borrifador.':
      'See how LEAF’s parts work together, from the plant image to control of the sprayer.',
    'Etapas da tecnologia': 'Technology steps',
    Observar: 'Observe',
    'A câmera vê a planta': 'The camera sees the plant',
    Analisar: 'Analyze',
    'O programa examina a imagem': 'The software examines the image',
    Conectar: 'Connect',
    'O comando chega ao aparelho': 'The command reaches the device',
    Direcionar: 'Target',
    'Motores e bombas trabalham': 'Motors and pumps take action',
    '01 / A entrada do sistema': '01 / THE SYSTEM’S INPUT',
    'Tudo começa pela observação.': 'It starts with observation.',
    'A câmera fornece imagens das plantas. Enquadramento, iluminação e qualidade da captura influenciam as informações disponíveis para o processamento.':
      'The camera provides images of the plants. Framing, lighting and image quality affect the information available for processing.',
    'Câmera → Aplicação Python': 'Camera → Python application',
    'Como a imagem é analisada': 'How the image is analyzed',
    'O programa observa cores e formas para encontrar características das plantas na imagem. Quem cuida da lavoura confere os sinais e decide o manejo com orientação. Os detalhes de programação estão na documentação.':
      'The software examines colors and shapes to find plant features in the image. The grower checks the signs and makes crop care decisions with guidance. Programming details are available in the documentation.',
    'Explorar a documentação ↗': 'Explore the documentation ↗',
    '03 / Assistente para o agricultor': '03 / THE FARMING ASSISTANT',
    'A receita do LEAF.': 'The LEAF recipe.',
    'Explicada passo a passo.': 'Explained step by step.',
    'Conte o que você planta e o que está vendo. O assistente calcula as medidas da mistura original do LEAF e organiza os cuidados para o seu cultivo.':
      'Tell us what you grow and what you see. The assistant calculates the amounts for the original LEAF blend and organizes care guidance for your crops.',
    'Como está sua plantação?': 'How are your crops doing?',
    'Não precisa saber o nome técnico do problema.':
      'You do not need to know the technical name of the problem.',
    'O que você planta? *': 'What do you grow? *',
    'Escolha a planta': 'Choose a plant',
    Alface: 'Lettuce',
    Couve: 'Collard greens',
    'Couve-flor': 'Cauliflower',
    Tomate: 'Tomato',
    Morango: 'Strawberry',
    Melancia: 'Watermelon',
    'Outra planta': 'Another plant',
    'O que você está vendo? *': 'What do you see? *',
    'Escolha o sinal observado': 'Choose the sign you noticed',
    'Bichinhos agrupados nos brotos (pulgões)': 'Small insects clustered on shoots (aphids)',
    'Placas ou bolinhas grudadas (cochonilhas)':
      'Small bumps or patches stuck to the plant (scale insects)',
    'Lagartas e folhas comidas': 'Caterpillars and chewed leaves',
    'Pontinhos nas folhas ou teias finas (ácaros)': 'Tiny spots on leaves or fine webs (mites)',
    'Insetos brancos que voam ao mexer na planta':
      'Small white insects that fly when the plant is disturbed',
    'Fungos ou mofo': 'Fungi or mold',
    'Manchas nas folhas': 'Leaf spots',
    'Raízes com caroços': 'Lumps on roots',
    'Amarelecimento ou murcha': 'Yellowing or wilting',
    'Não sei identificar': 'I am not sure',
    'Se tiver dúvida, escolha “Não sei identificar”.': 'If you are unsure, choose “I am not sure”.',
    'Em que fase estão as plantas?': 'What stage are your plants at?',
    Crescendo: 'Growing',
    'Muda pequena': 'Young seedlings',
    'Com flores': 'Flowering',
    'Com frutos': 'Bearing fruit',
    'Perto de colher': 'Close to harvest',
    'Quanto o problema se espalhou?': 'How far has the problem spread?',
    'Poucas plantas': 'A few plants',
    'Está se espalhando': 'It is spreading',
    'Muitas plantas': 'Many plants',
    'O que você quer preparar?': 'What would you like to prepare?',
    'O concentrado e a mistura do pulverizador são coisas diferentes.':
      'The concentrate and the sprayer mixture are different things.',
    'O que preparar': 'What to prepare',
    'Preparar o LEAF': 'Prepare LEAF',
    'Diluir o concentrado': 'Dilute the concentrate',
    'Esta é a mistura-base do LEAF, concentrada.': 'This is the concentrated LEAF base blend.',
    'Ela reúne nim, própolis, cravo, alho e cebola, pimenta e sabão potássico. Antes de ir para o pulverizador, precisa ser diluída conforme a orientação de uso.':
      'It contains neem, propolis, clove, garlic and onion, chili pepper and potassium soap. Before it goes into the sprayer, it must be diluted according to the instructions for use.',
    'Use esta opção se você já tem o concentrado e recebeu uma orientação de diluição para seu cultivo.':
      'Use this option if you already have the concentrate and have received dilution instructions for your crops.',
    'Orientação de diluição recebida': 'Dilution instructions received',
    'Quantos mL de LEAF por litro de mistura pronta? *':
      'How many mL of LEAF per liter of final mixture? *',
    'Preencha com a medida que recebeu da assistência técnica. A medida de outro agrotóxico não serve como referência para o LEAF.':
      'Enter the amount provided by your agricultural adviser. The dose for another pesticide cannot be used as a reference for LEAF.',
    'Recebi essa medida para esta planta e este problema.':
      'I received this amount for this plant and this problem.',
    'Quantos litros de concentrado LEAF quer preparar? *':
      'How many liters of LEAF concentrate would you like to prepare? *',
    'Esta quantidade é do concentrado, não do pulverizador. 1 litro = 1.000 mL.':
      'This is the amount of concentrate, not the sprayer mixture. 1 liter = 1,000 mL.',
    'Quer acrescentar mais alguma coisa?': 'Would you like to add anything else?',
    'O que você observou? (opcional)': 'What did you notice? (optional)',
    'Ex.: começou depois das chuvas; há insetos por baixo das folhas; já usei algum produto…':
      'E.g. it started after the rain; there are insects under the leaves; I have already used a product…',
    'Cidade ou região (opcional)': 'Town or region (optional)',
    'Ex.: Juiz de Fora, MG': 'E.g. Juiz de Fora, Minas Gerais, Brazil',
    'Ver minha receita LEAF': 'Show my LEAF recipe',
    'Começar de novo': 'Start over',
    'É gratuito, não precisa de cadastro e suas respostas ficam neste navegador.':
      'Free to use, no account needed. Your answers stay in this browser.',
    'SUA FICHA LEAF': 'YOUR LEAF SHEET',
    'RECEITA DO PROJETO': 'PROJECT RECIPE',
    'Sua receita e os cuidados do cultivo': 'Your recipe and crop care guidance',
    'Do projeto para a sua consulta': 'From the project to your reference sheet',
    'A mistura do LEAF,': 'The LEAF blend,',
    'com cada medida à vista.': 'with every amount clearly shown.',
    'Veja a quantidade de cada ingrediente, entenda o papel da mistura e leve uma ficha do seu cultivo para quem orienta o uso.':
      'See the amount of each ingredient, understand the blend and take a crop reference sheet to the person advising you on its use.',
    'Nim · Própolis · Cravo': 'Neem · Propolis · Clove',
    'Alho e cebola · Pimenta · Sabão potássico': 'Garlic and onion · Chili pepper · Potassium soap',
    'Receita original da equipe, disponível nos documentos do projeto. As medidas são da mistura concentrada.':
      'The team’s original recipe is available in the project documents. These amounts are for the concentrated blend.',
    'Ver exemplo: couve com pulgões ↗': 'See an example: collard greens with aphids ↗',
    'Concentrado é a mistura-base. Diluir é acrescentar água na medida orientada para o uso. Não aplique o concentrado puro; siga as orientações para sua planta, sua situação e a colheita.':
      'Concentrate is the base blend. Diluting means adding water in the amount specified for use. Do not apply the concentrate undiluted; follow the instructions for your plants, situation and harvest.',
    'De onde vem a receita e como a ficha é personalizada?':
      'Where does the recipe come from, and how is the sheet personalized?',
    'A composição vem da tabela “Preparação do agrotóxico (1L)”, no artigo da Feira de 2025. A ficha ajusta as medidas à quantidade escolhida e adapta os cuidados à planta, aos sinais, à fase de crescimento e à extensão do problema. As proporções dos ingredientes são preservadas.':
      'The composition comes from the “Preparation of the pesticide (1 L)” table in the 2025 science fair article. The sheet scales the amounts to your chosen volume and adapts care guidance to the plant, signs, growth stage and spread of the problem. Ingredient proportions are preserved.',
    'Os relatos do projeto também comparam versões com e sem própolis. A receita quantitativa apresentada aqui é a que inclui própolis. A intensidade do problema muda a prioridade de atendimento e as observações; não aumenta automaticamente a concentração.':
      'The project records also compare versions with and without propolis. The quantitative recipe shown here includes propolis. The extent of the problem changes the priority and observations; it does not automatically increase the concentration.',
    'Consultar os documentos usados na ficha ↗': 'View the documents used for this sheet ↗',
    'Ative o JavaScript para calcular as medidas. A apresentação do projeto e a prévia da notícia continuam disponíveis sem ele.':
      'Enable JavaScript to calculate the amounts. The project overview and news preview remain available without it.',
    '04 / Biblioteca aberta do LEAF': '04 / LEAF’S OPEN LIBRARY',
    'O projeto, organizado.': 'The project, organized.',
    'O conhecimento, acessível.': 'Knowledge, within reach.',
    'Escolha por onde começar. Reunimos os principais acessos para você encontrar a apresentação, a receita, os artigos e os registros sem precisar procurar pasta por pasta.':
      'Choose where to begin. Find the overview, recipe, articles and records without searching through every folder.',
    'Fonte oficial dos arquivos': 'The official source of project files',
    'Todo o LEAF em um só repositório.': 'All of LEAF in one repository.',
    'Acompanhe o conteúdo do projeto, consulte os documentos e conheça os arquivos do site.':
      'Explore the project, read the documents and browse the website files.',
    'Abrir repositório no GitHub ↗': 'Open the GitHub repository ↗',
    'COMECE POR AQUI': 'START HERE',
    'Conheça o projeto': 'Meet the project',
    'Objetivos, arquitetura e história do LEAF em português.':
      'LEAF’s objectives, architecture and background in English.',
    'README · Português': 'Overview · English',
    BIOAGROTÓXICO: 'BIOPESTICIDE',
    'Receita e composição': 'Recipe and composition',
    'Ingredientes, documentos de origem e informações da fórmula LEAF.':
      'Ingredients, source documents and information about the LEAF formula.',
    'Documentação da fórmula': 'Formula documentation',
    'ARTIGO DO PROJETO': 'PROJECT ARTICLE',
    'A pesquisa em detalhe': 'The research in detail',
    'Materiais, métodos, discussão e apresentação do trabalho.':
      'Materials, methods, discussion and presentation of the work.',
    'PDF · Artigo FEBRACE': 'PDF · FEBRACE article',
    'REGISTROS DOS TESTES': 'EXPERIMENT RECORDS',
    'Acompanhe os experimentos': 'Follow the experiments',
    'Consulte as observações registradas pela equipe durante os ensaios.':
      'Read the team’s observations recorded during the experiments.',
    'PDF · Diário dos experimentos': 'PDF · Experiment diary',
    'PARA APRESENTAR': 'PRESENTATION RESOURCES',
    'Banners e materiais visuais': 'Banners and visual materials',
    'Conheça os materiais usados para compartilhar o LEAF em feiras e eventos.':
      'Explore the materials used to share LEAF at fairs and events.',
    'Pasta · Banners e folder': 'Folder · Banners and brochure',
    'TODOS OS ARQUIVOS': 'ALL FILES',
    'Explore os documentos do projeto': 'Explore the project documents',
    'Artigos, roteiros, apresentações e outros documentos do projeto.':
      'Articles, scripts, presentations and other project documents.',
    'Pasta · Acervo completo': 'Folder · Full collection',
    'Os documentos abrem em uma nova aba no GitHub. Para salvar um arquivo, use a opção de download na página dele.':
      'Documents open in a new GitHub tab. To save a file, use the download option on its page.',
    'Conheça o caminho da pesquisa': 'Follow the research journey',
    'Uma ideia que ganha forma.': 'An idea taking shape.',
    Investigar: 'Research',
    'Reunir referências e definir a proposta de cuidado agrícola.':
      'Gather references and define the crop care proposal.',
    Construir: 'Build',
    'Conectar a análise de imagens ao mecanismo de aplicação.':
      'Connect image analysis to the application mechanism.',
    Registrar: 'Record',
    'Documentar os ensaios e organizar as observações da equipe.':
      'Document the experiments and organize the team’s observations.',
    Compartilhar: 'Share',
    'Apresentar o trabalho em artigos, feiras e materiais abertos.':
      'Present the work through articles, fairs and open resources.',
    '05 / As pessoas por trás da pesquisa': '05 / THE PEOPLE BEHIND THE RESEARCH',
    'Curiosidade em comum.': 'Shared curiosity.',
    'Conhecimento em construção.': 'Knowledge in the making.',
    'Uma iniciativa estudantil do Colégio Militar de Juiz de Fora, desenvolvida com orientação e colaboração interdisciplinar.':
      'A student initiative from Colégio Militar de Juiz de Fora, developed with guidance and collaboration across disciplines.',
    HC: 'HC',
    'Estudante pesquisador': 'Student researcher',
    'Henrique Barreto Costa': 'Henrique Barreto Costa',
    LC: 'LC',
    'Luiz Guilherme Caovilla': 'Luiz Guilherme Caovilla',
    GM: 'GM',
    'Professor orientador': 'Faculty adviser',
    'Guilherme Marins Maciel': 'Guilherme Marins Maciel',
    'Antes de começar': 'Before you begin',
    'Boas perguntas': 'Good questions',
    'fazem parte.': 'are part of the process.',
    'O assistente fornece receitas com medidas?':
      'Does the assistant provide recipes with measurements?',
    'Sim. O assistente mostra a composição original do concentrado LEAF e calcula as medidas para a quantidade escolhida. Também organiza os cuidados conforme a planta, os sinais e a fase do cultivo.':
      'Yes. The assistant shows the original LEAF concentrate composition and calculates the amounts for your chosen volume. It also organizes care guidance based on the plant, signs and growth stage.',
    'As receitas são fórmulas próprias do LEAF?': 'Are these LEAF’s own formulas?',
    'Sim. A receita vem do artigo da Feira de 2025, disponível nos documentos do projeto. Ela reúne extrato de nim, própolis, óleo de cravo, extrato combinado de alho e cebola, pimenta-malagueta e sabão potássico.':
      'Yes. The recipe comes from the 2025 science fair article in the project documents. It combines neem extract, propolis, clove oil, combined garlic and onion extract, chili pepper and potassium soap.',
    'O site analisa fotos ou identifica pragas automaticamente?':
      'Does the website analyze photos or identify pests automatically?',
    'O assistente usa as informações selecionadas no formulário. A análise de imagens faz parte do aparelho do projeto. Nesta página, você informa os sinais observados; a ficha ajuda a organizar essas informações e as medidas da receita.':
      'The assistant uses the information selected in the form. Image analysis is part of the project’s device. On this page, you report the signs you see; the sheet helps organize that information and the recipe amounts.',
    'Posso usar mais concentrado quando há mais pragas?':
      'Can I use more concentrate when there are more pests?',
    'Não aumente por conta própria. A quantidade de água e de LEAF para pulverizar deve seguir a orientação de uso para sua situação. O assistente usa a intensidade para organizar a atenção ao problema, sem alterar sozinho a concentração.':
      'Do not increase it on your own. The amounts of water and LEAF for spraying must follow the instructions for your situation. The assistant uses the extent of the problem to organize priorities, without changing the concentration automatically.',
    'Posso salvar e usar sem internet?': 'Can I save it and use it without internet access?',
    'O cálculo e a prévia da notícia não consultam serviços externos. Você pode copiar o plano, baixá-lo como texto ou usar a impressão do navegador para salvar um PDF. Uma cópia local dos arquivos do site também funciona sem internet; links para documentos, lojas e a notícia completa precisam de conexão.':
      'The calculations and news preview do not call external services. You can copy the sheet, download it as text or use the browser’s print option to save a PDF. A local copy of the website also works without internet access; links to documents, shops and the full article need a connection.',
    'Ciência que cultiva possibilidades.': 'Science that grows possibilities.',
    Explore: 'Explore',
    'Nossa equipe': 'Our team',
    'Conhecimento aberto': 'Open knowledge',
    'GitHub ↗': 'GitHub ↗',
    'Receita e documentos do LEAF ↗': 'LEAF recipe and documents ↗',
    'LEAF na imprensa': 'LEAF in the news',
    'CMJF · Ciência e cuidado agrícola': 'CMJF · Science and crop care',
    'Receita original do LEAF — Artigo 1, Feira 2025':
      'Original LEAF recipe — Article 1, 2025 science fair',
    'Tabela “Preparação do agrotóxico (1L)”': '“Preparation of the pesticide (1 L)” table',
    'Artigo LEAF — composição e resultados': 'LEAF article — composition and results',
    'Materiais e métodos; resultados': 'Materials and methods; results',
    'Diário dos experimentos do LEAF': 'LEAF experiment diary',
    'Registros de setembro de 2025': 'September 2025 records',
    'Roteiro DGC — produto concentrado': 'DGC presentation script — concentrated product',
    'Descrição do concentrado e dos ensaios': 'Description of the concentrate and experiments',
    'Extrato de nim (neem) já preparado': 'Prepared neem extract',
    'Não troque por óleo de nim puro.': 'Do not replace it with pure neem oil.',
    'Extrato de própolis': 'Propolis extract',
    'Use a mesma apresentação adotada pelo projeto.':
      'Use the same preparation used by the project.',
    'Óleo essencial de cravo-da-índia': 'Clove essential oil',
    'Meça em mL com recipiente graduado ou seringa medidora.':
      'Measure in mL using a graduated container or measuring syringe.',
    'Extrato de alho e cebola, juntos': 'Combined garlic and onion extract',
    'É a medida dos dois juntos, não de cada um separado.':
      'This is the combined amount, not the amount of each separately.',
    'Extrato de pimenta-malagueta': 'Chili pepper extract',
    'Use o extrato preparado, sem trocar por molho de pimenta.':
      'Use the prepared extract; do not replace it with chili sauce.',
    'Sabão potássico líquido': 'Liquid potassium soap',
    'É diferente de detergente de cozinha e sabão em pó.':
      'This is different from dishwashing liquid and laundry detergent.',
    Pulgões: 'Aphids',
    Ácaros: 'Mites',
    'Escolha de {{0}} a 100 litros, em passos de {{1}} litro.':
      'Choose between {{0}} and 100 liters, in steps of {{1}} liter.',
    'Use uma medida de diluição que você recebeu para esta planta e este problema.':
      'Use the dilution amount you received for this plant and this problem.',
    'Informe a medida recebida, em mL de LEAF por litro de mistura pronta. Ela precisa ser maior que zero e menor que 1.000.':
      'Enter the amount you received, in mL of LEAF per liter of final mixture. It must be greater than zero and less than 1,000.',
    'O resultado é menor que 0,1 mL. Confira a orientação e como medir antes de preparar.':
      'The result is less than 0.1 mL. Check the instructions and how to measure before preparing it.',
    'informada pelo usuário': 'provided by the user',
    '{{0}} de LEAF por litro × {{1}} = {{2}} de concentrado':
      '{{0}} of LEAF per liter × {{1}} = {{2}} of concentrate',
    'A receita reúne os componentes do LEAF na proporção registrada pela equipe.':
      'The recipe combines LEAF’s ingredients in the proportions recorded by the team.',
    'O artigo do LEAF descreve os ingredientes e os contextos dos testes do projeto.':
      'The LEAF article describes the ingredients and the conditions of the project’s experiments.',
    'O nim integra a parte voltada aos insetos na descrição do LEAF. Alho, cebola e sabão potássico também fazem parte da mistura completa.':
      'Neem is included in the insect-related part of the LEAF description. Garlic, onion and potassium soap are also part of the complete blend.',
    'Os documentos do LEAF relatam observações em alface e couve com pulgões. A orientação de diluição deve considerar o seu cultivo.':
      'LEAF documents report observations on lettuce and collard greens with aphids. Dilution instructions must take your crop into account.',
    'Os relatos do LEAF sobre pulgões citam alface e couve. A orientação de uso deve considerar a planta que você selecionou.':
      'LEAF’s aphid records refer to lettuce and collard greens. Instructions for use must take your selected plant into account.',
    'Veja se há bichinhos agrupados nos brotos ou por baixo das folhas. Fotografe também folhas enroladas e formigas.':
      'Look for small insects clustered on shoots or under leaves. Photograph curled leaves and ants as well.',
    'Própolis e cravo aparecem no estudo do LEAF sobre fungos. A receita mantém esses ingredientes na proporção original.':
      'Propolis and clove appear in LEAF’s research on fungi. The recipe keeps these ingredients in their original proportions.',
    'O diário do LEAF descreve testes em tomates e morangos já colhidos e em laboratório. Esse contexto é diferente do uso na lavoura.':
      'The LEAF diary describes tests on harvested tomatoes and strawberries and in the laboratory. This differs from use in the field.',
    'O projeto descreve testes com fungos em frutos e em laboratório. Manchas nas folhas também podem ter outras causas.':
      'The project describes fungal tests on fruit and in the laboratory. Leaf spots can also have other causes.',
    'Observe onde começam as manchas ou o mofo e se há excesso de umidade. Tire fotos da planta inteira e da parte afetada.':
      'Check where spots or mold start and whether there is excess moisture. Take photos of the whole plant and the affected part.',
    'Não use a mistura para tentar recuperar alimento mofado ou estragado para consumo.':
      'Do not use the blend to try to make moldy or spoiled food suitable for eating.',
    'A pimenta-malagueta é relacionada aos ácaros na descrição dos ingredientes do LEAF. Ela permanece na proporção original.':
      'Chili pepper is associated with mites in LEAF’s ingredient descriptions. It remains in its original proportion.',
    'Procure pontinhos claros nas folhas e teias finas. Uma lupa ajuda a observar o lado de baixo das folhas.':
      'Look for pale spots on leaves and fine webs. A magnifying glass can help you check the underside of leaves.',
    'Alho e cebola aparecem nos materiais do LEAF entre os componentes pesquisados para organismos que atacam as raízes.':
      'Garlic and onion appear in LEAF materials among the ingredients studied for organisms that attack roots.',
    'Fotografe as raízes com caroços e veja se a planta cresce pouco ou murcha. Confirme a causa antes de colocar qualquer produto no solo.':
      'Photograph roots with lumps and check for poor growth or wilting. Confirm the cause before adding any product to the soil.',
    'Procure lagartas, ovos, folhas comidas e pontinhos de fezes. Fotografe o animal encontrado.':
      'Look for caterpillars, eggs, chewed leaves and small droppings. Photograph any insects you find.',
    'Observe bolinhas, placas ou material parecido com algodão grudados nos ramos e folhas. Registre também a presença de formigas.':
      'Look for bumps, patches or cotton-like material stuck to stems and leaves. Also record any ants.',
    'Veja se pequenos insetos brancos voam ao mexer na planta e observe o verso das folhas.':
      'Check whether small white insects fly when you disturb the plant, and look under the leaves.',
    'Confira a umidade do solo, a drenagem e quais folhas estão amarelando. Falta ou excesso de água também podem causar esses sinais.':
      'Check soil moisture, drainage and which leaves are turning yellow. Too little or too much water can also cause these signs.',
    'Fotografe a planta inteira, os dois lados das folhas e o que chamou sua atenção. Leve as fotos à assistência técnica para identificar o problema.':
      'Photograph the whole plant, both sides of the leaves and anything that caught your attention. Take the photos to an agricultural adviser to identify the problem.',
    'Compare plantas afetadas com plantas sadias e proteja joaninhas, abelhas e outros animais úteis à lavoura.':
      'Compare affected plants with healthy ones, and protect ladybirds, bees and other helpful animals in the field.',
    'Escolha o que você está plantando.': 'Choose what you are growing.',
    'Escolha o problema ou marque “Não sei identificar”.':
      'Choose the problem or select “I am not sure”.',
    'Informe a fase das plantas e quanto o problema se espalhou.':
      'Enter the growth stage and how far the problem has spread.',
    'Como muitas plantas estão afetadas, procure assistência técnica com prioridade e leve fotos da área.':
      'Because many plants are affected, seek agricultural advice promptly and take photos of the area.',
    'Marque as plantas afetadas e acompanhe se o problema avança. Peça ajuda para decidir o momento de agir.':
      'Mark the affected plants and watch whether the problem spreads. Ask for help deciding when to act.',
    'Observe as plantas afetadas e as vizinhas e registre se aparecem novos focos.':
      'Observe affected plants and their neighbors, and record any new affected areas.',
    'Não aumente a concentração porque o problema está mais forte. Use a medida de diluição indicada para a sua situação.':
      'Do not increase the concentration because the problem is worse. Use the dilution amount specified for your situation.',
    'Mudas são mais sensíveis. Confirme o uso nessa fase: o óleo de cravo pode danificar plantas dependendo da concentração e de como é aplicado.':
      'Seedlings are more sensitive. Confirm use at this stage: clove oil can damage plants depending on its concentration and application method.',
    'Proteja as abelhas. Não direcione a aplicação às flores nem aos insetos benéficos.':
      'Protect bees. Do not direct the spray at flowers or beneficial insects.',
    'Confirme quanto tempo deve esperar até a colheita. Não use o prazo de outro produto para decidir quando colher ou consumir.':
      'Confirm how long to wait before harvest. Do not use another product’s waiting period to decide when to harvest or eat the produce.',
    'Use luvas e proteção para os olhos ao manusear. Meça com utensílios exclusivos para esse fim e mantenha longe de crianças, alimentos e animais.':
      'Wear gloves and eye protection when handling the blend. Use dedicated measuring utensils and keep it away from children, food and animals.',
    'LEAF — Ficha do seu cultivo': 'LEAF — Your crop reference sheet',
    'Data: {{0}}': 'Date: {{0}}',
    'Plantio: {{0}}': 'Crop: {{0}}',
    'Problema informado: {{0}}': 'Reported problem: {{0}}',
    'Fase: {{0}}': 'Growth stage: {{0}}',
    'Situação: {{0}}': 'Extent: {{0}}',
    'RECEITA ORIGINAL DO CONCENTRADO LEAF — lote nominal de {{0}}':
      'ORIGINAL LEAF CONCENTRATE RECIPE — nominal batch of {{0}}',
    'Concentrado é a mistura-base; não é produto pronto para pulverizar.':
      'Concentrate is the base blend; it is not ready for spraying.',
    'COMO ORGANIZAR O PREPARO': 'PREPARATION STEPS',
    '1. Separe os extratos já preparados e equivalentes aos usados pelo projeto.':
      '1. Gather prepared extracts equivalent to those used by the project.',
    '2. Meça cada quantidade em mL. Alho e cebola são um extrato combinado.':
      '2. Measure each amount in mL. Garlic and onion are a combined extract.',
    '3. A descrição original orienta misturar os extratos e o óleo em um recipiente escuro e depois acrescentar o sabão potássico, misturando bem.':
      '3. The original description says to mix the extracts and oil in a dark container, then add the potassium soap and mix well.',
    '4. A tabela original já soma o volume nominal do lote. Água acrescentada muda a concentração; não calcule uma quantidade extra por conta própria.':
      '4. The original table already adds up to the nominal batch volume. Adding water changes the concentration; do not calculate an extra amount on your own.',
    '5. Identifique o recipiente como LEAF — concentrado, com a data. Siga a orientação de preparo e armazenamento recebida da equipe.':
      '5. Label the container LEAF — concentrate, with the date. Follow the preparation and storage instructions received from the team.',
    'Para o pulverizador, é necessária uma orientação de diluição. Não aplique o concentrado puro.':
      'Dilution instructions are needed for the sprayer. Do not apply undiluted concentrate.',
    'MISTURA PARA O PULVERIZADOR — {{0}} finais': 'SPRAYER MIXTURE — final volume of {{0}}',
    'Medida informada por você: {{0}} de LEAF por litro de mistura pronta.':
      'Amount you provided: {{0}} of LEAF per liter of final mixture.',
    'Concentrado LEAF: {{0}}': 'LEAF concentrate: {{0}}',
    'Água: completar até {{0}} de mistura final.': 'Water: top up to {{0}} of final mixture.',
    'O cálculo reproduz sua orientação recebida; não confirma se a dose é adequada ao cultivo.':
      'The calculation follows the instructions you received; it does not confirm whether the dose is suitable for the crop.',
    'Siga a ordem de mistura e os cuidados indicados na orientação que recebeu.':
      'Follow the mixing order and precautions in the instructions you received.',
    'PARA O SEU CASO': 'FOR YOUR SITUATION',
    'O que você observou: {{0}}': 'What you noticed: {{0}}',
    'Região: {{0}}': 'Region: {{0}}',
    'FONTES DO LEAF': 'LEAF SOURCES',
    'Esta ficha organiza a receita registrada e as informações do cultivo. Não substitui a orientação de uso para a sua plantação.':
      'This sheet organizes the recorded recipe and crop information. It does not replace instructions for use on your crops.',
    'Vamos atualizar sua ficha.': 'Let’s update your sheet.',
    'Você mudou as respostas. Use o botão do formulário para calcular as novas medidas.':
      'You changed your answers. Use the form button to calculate the new amounts.',
    'Quantos litros de mistura pronta quer no pulverizador? *':
      'How many liters of final mixture would you like in the sprayer? *',
    'É o total de água e concentrado juntos. Não acrescente esse volume de água por fora.':
      'This is the total of water and concentrate together. Do not add this volume of water separately.',
    'Calcular água e LEAF': 'Calculate water and LEAF',
    '1 / Observar a planta': '1 / Observe the plant',
    'Tudo começa com uma imagem.': 'It all starts with an image.',
    'A câmera registra a planta. Uma imagem bem iluminada e com a planta visível ajuda o programa a fazer a análise.':
      'The camera records the plant. A well-lit image with the plant clearly visible helps the software analyze it.',
    'Câmera → Computador': 'Camera → Computer',
    '2 / Examinar a imagem': '2 / Examine the image',
    'O programa observa cores e formas.': 'The software examines colors and shapes.',
    'O programa busca características visuais na imagem. Uma pessoa precisa conferir a interpretação antes de decidir o cuidado com a plantação.':
      'The software looks for visual features in the image. A person must check its interpretation before deciding how to care for the crops.',
    'Imagem → Análise de cores e contornos': 'Image → Color and contour analysis',
    '3 / Enviar o comando': '3 / Send the command',
    'O computador conversa com o aparelho.': 'The computer communicates with the device.',
    'Um cabo leva os comandos do programa ao controlador do LEAF. Ele coordena as partes que movimentam o sistema e acionam as bombas.':
      'A cable carries the software’s commands to the LEAF controller. It coordinates the parts that move the system and activate the pumps.',
    'Computador → Cabo USB → Controlador': 'Computer → USB cable → Controller',
    '4 / Controlar o borrifador': '4 / Control the sprayer',
    'Aplicar no lugar escolhido.': 'Apply in the selected area.',
    'Motores e bombas fazem parte do sistema de aplicação direcionada. O aparelho deve ser ajustado para controlar a posição e a quantidade de líquido.':
      'Motors and pumps are part of the targeted application system. The device needs to be adjusted to control the position and amount of liquid.',
    'Controlador → Motores e bombas': 'Controller → Motors and pumps',
    'Receita original do concentrado LEAF': 'Original LEAF concentrate recipe',
    'Diluição com a medida que você informou': 'Dilution using the amount you provided',
    'Seu concentrado LEAF': 'Your LEAF concentrate',
    'Sua mistura para o pulverizador': 'Your sprayer mixture',
    'As seis medidas abaixo seguem a tabela do projeto e foram ajustadas à quantidade escolhida.':
      'The six amounts below follow the project’s table, scaled to your chosen volume.',
    'O cálculo usa a orientação que você preencheu. Ele não confirma se a dose é adequada para sua plantação.':
      'The calculation uses the instructions you entered. It does not confirm whether the dose is suitable for your crops.',
    'Concentrado: precisa de diluição antes do uso.': 'Concentrate: dilute before use.',
    'Esta receita é da mistura-base. Não coloque o concentrado puro nas plantas. A quantidade de água para pulverizar deve seguir a orientação para o seu cultivo.':
      'This is the base blend recipe. Do not put undiluted concentrate on plants. The amount of water for spraying must follow the instructions for your crops.',
    '1. Separe os ingredientes': '1. Gather the ingredients',
    'Receita proporcional ao lote de {{0}} da tabela original':
      'Recipe scaled to the {{0}} batch in the original table',
    '1 L = 1.000 mL. Use um copo medidor ou uma seringa medidora; não estime com colheres de cozinha.':
      '1 L = 1,000 mL. Use a measuring cup or syringe; do not estimate with kitchen spoons.',
    '2. Confira o preparo': '2. Review the preparation',
    'Separe os extratos já preparados, equivalentes aos usados pelo projeto. Óleo de nim puro, alho em pó e molho de pimenta não substituem os extratos da tabela.':
      'Gather prepared extracts equivalent to those used by the project. Pure neem oil, garlic powder and chili sauce do not replace the extracts in the table.',
    'A descrição original orienta misturar os extratos e o óleo em um recipiente escuro e depois acrescentar o sabão potássico, misturando bem.':
      'The original description says to mix the extracts and oil in a dark container, then add the potassium soap and mix well.',
    'As medidas da tabela já somam o volume nominal do lote. Água acrescentada muda a concentração; não calcule uma quantidade extra por conta própria.':
      'The amounts in the table already add up to the nominal batch volume. Adding water changes the concentration; do not calculate an extra amount on your own.',
    'Identifique o recipiente como “LEAF — concentrado”, com a data. Siga a orientação de preparo e armazenamento recebida da equipe.':
      'Label the container “LEAF — concentrate”, with the date. Follow the preparation and storage instructions received from the team.',
    '1. Meça o concentrado': '1. Measure the concentrate',
    'Concentrado LEAF': 'LEAF concentrate',
    'Medida informada por você: {{1}} de LEAF por litro de mistura pronta.':
      'Amount you provided: {{1}} of LEAF per liter of final mixture.',
    '2. Complete com água': '2. Top up with water',
    'Acrescente água para chegar a': 'Add water to reach',
    '{{3}} no total': '{{3}} in total',
    ', seguindo a ordem de preparo da orientação recebida.':
      ', following the preparation order in the instructions you received.',
    'Não coloque {{4}} de água e depois o produto por cima: o total é de água e concentrado juntos.':
      'Do not add {{4}} of water and then the product: the total includes both water and concentrate.',
    'Para {{0}} com {{1}}': 'For {{0}} with {{1}}',
    'Cuidados que fazem diferença': 'Care that makes a difference',
    'O que você contou': 'What you told us',
    'Ver os documentos da receita': 'View the recipe documents',
    'Imprimir / salvar PDF ↗': 'Print / save PDF ↗',
    'Copiar ficha': 'Copy sheet',
    'Baixar ficha': 'Download sheet',
    'LEAF · {{2}} · Guarde esta ficha com as orientações de uso do seu cultivo.':
      'LEAF · {{2}} · Keep this sheet with the instructions for use on your crops.',
    'Clipboard unavailable': 'Clipboard unavailable',
    'Ficha copiada com medidas, cuidados e fontes.':
      'Sheet copied with amounts, care guidance and sources.',
    'Use “Baixar ficha” para salvar o texto completo.':
      'Use “Download sheet” to save the full text.',
    'Sua ficha está pronta para baixar.': 'Your sheet is ready to download.',
    'Pronto. Você pode começar uma nova ficha.': 'Done. You can start a new sheet.',
    Cochonilhas: 'Scale insects',
    Lagartas: 'Caterpillars',
    'Mosca-branca': 'Whiteflies',
    Ingrediente: 'Ingredient',
    Medida: 'Amount',
    CUIDADOS: 'PRECAUTIONS',
    'O que você observou': 'What you noticed',
    Região: 'Region',
    '{{0}}: {{1}}. {{2}}': '{{0}}: {{1}}. {{2}}',
    '{{0}} ↗': '{{0}} ↗',
    '03.10.2025': 'Oct 3, 2025',
    '• {{0}}': '• {{0}}',
    alface: 'lettuce',
    couve: 'collard greens',
    'couve-flor': 'cauliflower',
    tomate: 'tomato',
    morango: 'strawberry',
    melancia: 'watermelon',
    'outra planta': 'another plant',
    pulgões: 'aphids',
    cochonilhas: 'scale insects',
    lagartas: 'caterpillars',
    ácaros: 'mites',
    'mosca-branca': 'whiteflies',
    'fungos ou mofo': 'fungi or mold',
    'manchas nas folhas': 'leaf spots',
    'raízes com caroços': 'lumps on roots',
    'amarelecimento ou murcha': 'yellowing or wilting',
    'não sei identificar': 'i am not sure',
  };
  let language = 'pt';
  const locale = () => (language === 'en' ? 'en' : 'pt-BR');
  const getLanguage = () => language;
  function setLanguage(next) {
    if (!['pt', 'en'].includes(next)) throw new Error('Unsupported language');
    language = next;
  }
  const normalizeText = (value) => value.replace(/\s+/g, ' ').trim();
  const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const translationPatterns = Object.entries(english)
    .filter(([key]) => key.includes('{{'))
    .sort(([a], [b]) => b.length - a.length)
    .map(([key, value]) => {
      const slots = [...key.matchAll(/\{\{(\d+)\}\}/g)].map((match) => match[1]);
      const expression = key
        .split(/\{\{\d+\}\}/)
        .map(escapePattern)
        .join('(.+?)');
      return { key, value, slots, expression: new RegExp('^' + expression + '$') };
    });
  function translate(input) {
    const text = String(input);
    if (language === 'pt') return text;
    const key = normalizeText(text);
    if (Object.hasOwn(english, key)) return english[key];
    for (const pattern of translationPatterns) {
      const match = key.match(pattern.expression);
      if (!match) continue;
      const values = Object.fromEntries(
        pattern.slots.map((slot, index) => [slot, match[index + 1]])
      );
      const userContent = /^(Região:|O que você observou:)/.test(pattern.key);
      return pattern.value.replace(/\{\{(\d+)\}\}/g, (_, slot) =>
        userContent ? values[slot] : translate(values[slot])
      );
    }
    if (text.includes('\n')) return text.split('\n').map(translate).join('\n');
    return text;
  }

  const fileLink = (path) =>
    'https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/' +
    path.split('/').map(encodeURIComponent).join('/');
  const sources = Object.freeze({
    recipe: {
      title: 'Receita original do LEAF — Artigo 1, Feira 2025',
      section: 'Tabela “Preparação do agrotóxico (1L)”',
      url: fileLink('docs/pesquisa/artigos/artigo-1-feira-2025.docx'),
    },
    article: {
      title: 'Artigo LEAF — composição e resultados',
      section: 'Materiais e métodos; resultados',
      url: fileLink('docs/pesquisa/artigos/artigo-leaf.docx'),
    },
    diary: {
      title: 'Diário dos experimentos do LEAF',
      section: 'Registros de setembro de 2025',
      url: fileLink('docs/pesquisa/artigos/anotacoes-dos-experimentos-para-o-diario-de-bordo.pdf'),
    },
    script: {
      title: 'Roteiro DGC — produto concentrado',
      section: 'Descrição do concentrado e dos ensaios',
      url: fileLink('docs/pesquisa/roteiros/roteiro-dgc-v1.docx'),
    },
  });
  // Amounts refer to prepared extracts, never interchangeable raw oils or powders.
  const ingredients = Object.freeze(
    [
      {
        id: 'neem',
        name: 'Extrato de nim (neem) já preparado',
        perLiter: 300,
        help: 'Não troque por óleo de nim puro.',
      },
      {
        id: 'propolis',
        name: 'Extrato de própolis',
        perLiter: 180,
        help: 'Use a mesma apresentação adotada pelo projeto.',
      },
      {
        id: 'clove',
        name: 'Óleo essencial de cravo-da-índia',
        perLiter: 30,
        help: 'Meça em mL com recipiente graduado ou seringa medidora.',
      },
      {
        id: 'garlicOnion',
        name: 'Extrato de alho e cebola, juntos',
        perLiter: 300,
        help: 'É a medida dos dois juntos, não de cada um separado.',
      },
      {
        id: 'pepper',
        name: 'Extrato de pimenta-malagueta',
        perLiter: 120,
        help: 'Use o extrato preparado, sem trocar por molho de pimenta.',
      },
      {
        id: 'soap',
        name: 'Sabão potássico líquido',
        perLiter: 70,
        help: 'É diferente de detergente de cozinha e sabão em pó.',
      },
    ].map(Object.freeze)
  );
  const crops = Object.freeze([
    'Alface',
    'Couve',
    'Couve-flor',
    'Tomate',
    'Morango',
    'Melancia',
    'Outra planta',
  ]);
  const problems = Object.freeze([
    'Pulgões',
    'Cochonilhas',
    'Lagartas',
    'Ácaros',
    'Mosca-branca',
    'Fungos ou mofo',
    'Manchas nas folhas',
    'Raízes com caroços',
    'Amarelecimento ou murcha',
    'Não sei identificar',
  ]);
  const stages = Object.freeze([
    'Muda pequena',
    'Crescendo',
    'Com flores',
    'Com frutos',
    'Perto de colher',
  ]);
  const severities = Object.freeze(['Poucas plantas', 'Está se espalhando', 'Muitas plantas']);
  const clean = (value, limit = 1500) =>
    String(value ?? '')
      .trim()
      .slice(0, limit);
  function number(value) {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string' || !value.trim()) return NaN;
    return Number(value.trim().replace(',', '.'));
  }
  const format = (value) =>
    new Intl.NumberFormat(locale(), { maximumFractionDigits: 3 }).format(value);
  const quantity = (value, unit) => `${format(value)} ${unit}`;
  const liquid = (liters) => (liters < 1 ? quantity(liters * 1000, 'mL') : quantity(liters, 'L'));
  function validateVolume(input, mode = 'concentrate') {
    const value = number(input),
      minimum = mode === 'dilution' ? 0.5 : 0.1,
      step = mode === 'dilution' ? 0.5 : 0.1;
    if (
      !Number.isFinite(value) ||
      value < minimum ||
      value > 100 ||
      Math.abs(value / step - Math.round(value / step)) > 1e-7
    )
      throw new Error(
        `Escolha de ${format(minimum)} a 100 litros, em passos de ${format(step)} litro.`
      );
    return value;
  }
  function calculateConcentrate(input) {
    const volume = validateVolume(input);
    return {
      volume,
      totalNominalML: volume * 1000,
      ingredients: ingredients.map((item) => ({
        ...item,
        amountML: item.perLiter * volume,
        amountText: quantity(item.perLiter * volume, 'mL'),
      })),
    };
  }
  function calculateDilution(input) {
    const volume = validateVolume(input.volume, 'dilution'),
      dose = number(input.dose);
    if (input.doseConfirmed !== true)
      throw new Error(
        'Use uma medida de diluição que você recebeu para esta planta e este problema.'
      );
    if (!Number.isFinite(dose) || dose <= 0 || dose >= 1000)
      throw new Error(
        'Informe a medida recebida, em mL de LEAF por litro de mistura pronta. Ela precisa ser maior que zero e menor que 1.000.'
      );
    const concentrateML = dose * volume;
    if (concentrateML < 0.1)
      throw new Error(
        'O resultado é menor que 0,1 mL. Confira a orientação e como medir antes de preparar.'
      );
    return {
      volume,
      dose,
      concentrateML,
      waterApproxML: volume * 1000 - concentrateML,
      doseOrigin: 'informada pelo usuário',
      formula: `${quantity(dose, 'mL')} de LEAF por litro × ${liquid(volume)} = ${quantity(concentrateML, 'mL')} de concentrado`,
    };
  }
  function contextFor(crop, problem) {
    const context = {
      focus: 'A receita reúne os componentes do LEAF na proporção registrada pela equipe.',
      evidence: 'O artigo do LEAF descreve os ingredientes e os contextos dos testes do projeto.',
      observations: [],
    };
    if (problem === 'Pulgões') {
      context.focus =
        'O nim integra a parte voltada aos insetos na descrição do LEAF. Alho, cebola e sabão potássico também fazem parte da mistura completa.';
      context.evidence = ['Alface', 'Couve'].includes(crop)
        ? 'Os documentos do LEAF relatam observações em alface e couve com pulgões. A orientação de diluição deve considerar o seu cultivo.'
        : 'Os relatos do LEAF sobre pulgões citam alface e couve. A orientação de uso deve considerar a planta que você selecionou.';
      context.observations.push(
        'Veja se há bichinhos agrupados nos brotos ou por baixo das folhas. Fotografe também folhas enroladas e formigas.'
      );
    } else if (['Fungos ou mofo', 'Manchas nas folhas'].includes(problem)) {
      context.focus =
        'Própolis e cravo aparecem no estudo do LEAF sobre fungos. A receita mantém esses ingredientes na proporção original.';
      context.evidence = ['Tomate', 'Morango'].includes(crop)
        ? 'O diário do LEAF descreve testes em tomates e morangos já colhidos e em laboratório. Esse contexto é diferente do uso na lavoura.'
        : 'O projeto descreve testes com fungos em frutos e em laboratório. Manchas nas folhas também podem ter outras causas.';
      context.observations.push(
        'Observe onde começam as manchas ou o mofo e se há excesso de umidade. Tire fotos da planta inteira e da parte afetada.',
        'Não use a mistura para tentar recuperar alimento mofado ou estragado para consumo.'
      );
    } else if (problem === 'Ácaros') {
      context.focus =
        'A pimenta-malagueta é relacionada aos ácaros na descrição dos ingredientes do LEAF. Ela permanece na proporção original.';
      context.observations.push(
        'Procure pontinhos claros nas folhas e teias finas. Uma lupa ajuda a observar o lado de baixo das folhas.'
      );
    } else if (problem === 'Raízes com caroços') {
      context.focus =
        'Alho e cebola aparecem nos materiais do LEAF entre os componentes pesquisados para organismos que atacam as raízes.';
      context.observations.push(
        'Fotografe as raízes com caroços e veja se a planta cresce pouco ou murcha. Confirme a causa antes de colocar qualquer produto no solo.'
      );
    } else if (problem === 'Lagartas')
      context.observations.push(
        'Procure lagartas, ovos, folhas comidas e pontinhos de fezes. Fotografe o animal encontrado.'
      );
    else if (problem === 'Cochonilhas')
      context.observations.push(
        'Observe bolinhas, placas ou material parecido com algodão grudados nos ramos e folhas. Registre também a presença de formigas.'
      );
    else if (problem === 'Mosca-branca')
      context.observations.push(
        'Veja se pequenos insetos brancos voam ao mexer na planta e observe o verso das folhas.'
      );
    else if (problem === 'Amarelecimento ou murcha')
      context.observations.push(
        'Confira a umidade do solo, a drenagem e quais folhas estão amarelando. Falta ou excesso de água também podem causar esses sinais.'
      );
    else
      context.observations.push(
        'Fotografe a planta inteira, os dois lados das folhas e o que chamou sua atenção. Leve as fotos à assistência técnica para identificar o problema.'
      );
    context.observations.push(
      'Compare plantas afetadas com plantas sadias e proteja joaninhas, abelhas e outros animais úteis à lavoura.'
    );
    return context;
  }
  function createPlan(input) {
    const crop = clean(input.crop, 100),
      problem = clean(input.problem, 100),
      stage = clean(input.stage, 100),
      severity = clean(input.severity, 100);
    if (!crops.includes(crop)) throw new Error('Escolha o que você está plantando.');
    if (!problems.includes(problem))
      throw new Error('Escolha o problema ou marque “Não sei identificar”.');
    if (!stages.includes(stage) || !severities.includes(severity))
      throw new Error('Informe a fase das plantas e quanto o problema se espalhou.');
    const mode = input.mode === 'dilution' ? 'dilution' : 'concentrate',
      volume = validateVolume(input.volume, mode);
    const plan = {
      mode,
      crop,
      problem,
      stage,
      severity,
      volume,
      context: contextFor(crop, problem),
      notes: clean(input.notes),
      location: clean(input.location, 100),
      precautions: [],
      sources: Object.values(sources),
      concentrate: null,
      dilution: null,
    };
    if (mode === 'concentrate') plan.concentrate = calculateConcentrate(volume);
    else plan.dilution = calculateDilution(input);
    plan.priority =
      severity === 'Muitas plantas'
        ? 'Como muitas plantas estão afetadas, procure assistência técnica com prioridade e leve fotos da área.'
        : severity === 'Está se espalhando'
          ? 'Marque as plantas afetadas e acompanhe se o problema avança. Peça ajuda para decidir o momento de agir.'
          : 'Observe as plantas afetadas e as vizinhas e registre se aparecem novos focos.';
    plan.precautions.push(
      'Não aumente a concentração porque o problema está mais forte. Use a medida de diluição indicada para a sua situação.'
    );
    if (stage === 'Muda pequena')
      plan.precautions.push(
        'Mudas são mais sensíveis. Confirme o uso nessa fase: o óleo de cravo pode danificar plantas dependendo da concentração e de como é aplicado.'
      );
    if (stage === 'Com flores')
      plan.precautions.push(
        'Proteja as abelhas. Não direcione a aplicação às flores nem aos insetos benéficos.'
      );
    if (stage === 'Perto de colher' || stage === 'Com frutos')
      plan.precautions.push(
        'Confirme quanto tempo deve esperar até a colheita. Não use o prazo de outro produto para decidir quando colher ou consumir.'
      );
    plan.precautions.push(
      'Use luvas e proteção para os olhos ao manusear. Meça com utensílios exclusivos para esse fim e mantenha longe de crianças, alimentos e animais.'
    );
    return plan;
  }
  function planText(plan, date = new Date().toLocaleDateString(locale())) {
    const lines = [
      'LEAF — Ficha do seu cultivo',
      `Data: ${date}`,
      `Plantio: ${plan.crop}`,
      `Problema informado: ${plan.problem}`,
      `Fase: ${plan.stage}`,
      `Situação: ${plan.severity}`,
      '',
    ];
    if (plan.mode === 'concentrate')
      lines.push(
        `RECEITA ORIGINAL DO CONCENTRADO LEAF — lote nominal de ${liquid(plan.volume)}`,
        'Concentrado é a mistura-base; não é produto pronto para pulverizar.',
        ...plan.concentrate.ingredients.map(
          (item) => `${item.name}: ${item.amountText}. ${item.help}`
        ),
        '',
        'COMO ORGANIZAR O PREPARO',
        '1. Separe os extratos já preparados e equivalentes aos usados pelo projeto.',
        '2. Meça cada quantidade em mL. Alho e cebola são um extrato combinado.',
        '3. A descrição original orienta misturar os extratos e o óleo em um recipiente escuro e depois acrescentar o sabão potássico, misturando bem.',
        '4. A tabela original já soma o volume nominal do lote. Água acrescentada muda a concentração; não calcule uma quantidade extra por conta própria.',
        '5. Identifique o recipiente como LEAF — concentrado, com a data. Siga a orientação de preparo e armazenamento recebida da equipe.',
        'Para o pulverizador, é necessária uma orientação de diluição. Não aplique o concentrado puro.'
      );
    else
      lines.push(
        `MISTURA PARA O PULVERIZADOR — ${liquid(plan.volume)} finais`,
        `Medida informada por você: ${quantity(plan.dilution.dose, 'mL')} de LEAF por litro de mistura pronta.`,
        `Concentrado LEAF: ${quantity(plan.dilution.concentrateML, 'mL')}`,
        `Água: completar até ${liquid(plan.volume)} de mistura final.`,
        plan.dilution.formula,
        'O cálculo reproduz sua orientação recebida; não confirma se a dose é adequada ao cultivo.',
        'Siga a ordem de mistura e os cuidados indicados na orientação que recebeu.'
      );
    lines.push(
      '',
      'PARA O SEU CASO',
      plan.context.focus,
      plan.context.evidence,
      plan.priority,
      ...plan.context.observations.map((item) => `• ${item}`),
      '',
      'CUIDADOS',
      ...plan.precautions.map((item) => `• ${item}`)
    );
    if (plan.notes) lines.push('', `O que você observou: ${plan.notes}`);
    if (plan.location) lines.push(`Região: ${plan.location}`);
    lines.push(
      '',
      'FONTES DO LEAF',
      ...plan.sources.map(
        (source) => `${translate(source.title)} — ${translate(source.section)}\n${source.url}`
      ),
      '',
      'Esta ficha organiza a receita registrada e as informações do cultivo. Não substitui a orientação de uso para a sua plantação.'
    );
    return lines
      .map((line) => {
        if (line.startsWith('O que você observou: '))
          return `${translate('O que você observou')}: ${plan.notes}`;
        if (line.startsWith('Região: ')) return `${translate('Região')}: ${plan.location}`;
        return translate(line);
      })
      .join('\n');
  }
  return Object.freeze({
    locale,
    getLanguage,
    setLanguage,
    translate,
    sources,
    ingredients,
    crops,
    problems,
    stages,
    severities,
    number,
    format,
    quantity,
    liquid,
    validateVolume,
    calculateConcentrate,
    calculateDilution,
    contextFor,
    createPlan,
    planText,
  });
});

(function () {
  'use strict';
  if (typeof document === 'undefined') return;
  const $ = (selector) => document.querySelector(selector);
  const escape = (text) =>
    String(text ?? '').replace(
      /[&<>"']/g,
      (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
    );
  const form = $('#cropForm'),
    result = $('#result'),
    initialResult = result.innerHTML;
  const tabs = [...document.querySelectorAll('[data-mode]')];
  let mode = 'concentrate',
    currentPlan = null,
    toastTimer;
  function toast(message) {
    $('#toast').textContent = LEAF.translate(message);
    $('#toast').classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 4500);
  }
  function invalidate() {
    if (!currentPlan) return;
    currentPlan = null;
    result.innerHTML =
      '<div class="empty-result"><span class="empty-plant" aria-hidden="true">⌁</span><h3>Vamos atualizar sua ficha.</h3><p>Você mudou as respostas. Use o botão do formulário para calcular as novas medidas.</p></div>';
    translatePage();
  }
  function setMode(next, focus = false) {
    invalidate();
    mode = next;
    tabs.forEach((tab) => {
      const selected = tab.dataset.mode === mode;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (focus && selected) tab.focus();
    });
    const dilution = mode === 'dilution';
    $('#concentratePanel').hidden = dilution;
    $('#dilutionPanel').hidden = !dilution;
    $('#dilutionFields').disabled = !dilution;
    $('#volumeLabel').textContent = dilution
      ? 'Quantos litros de mistura pronta quer no pulverizador? *'
      : 'Quantos litros de concentrado LEAF quer preparar? *';
    $('#volumeHelp').textContent = dilution
      ? 'É o total de água e concentrado juntos. Não acrescente esse volume de água por fora.'
      : 'Esta quantidade é do concentrado, não do pulverizador. 1 litro = 1.000 mL.';
    $('#volume').min = dilution ? '0.5' : '0.1';
    $('#volume').step = dilution ? '0.5' : '0.1';
    $('#volume').value = dilution ? '20' : '1';
    form.querySelector('button[type="submit"]').innerHTML = dilution
      ? 'Calcular água e LEAF <span aria-hidden="true">↗</span>'
      : 'Ver minha receita LEAF <span aria-hidden="true">↗</span>';
    translatePage();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? tabs.length - 1
            : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      setMode(tabs[next].dataset.mode, true);
    });
  });
  form.addEventListener('input', invalidate);
  form.addEventListener('change', invalidate);
  const menu = $('#menuToggle'),
    nav = $('#mainNav');
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });
  $('#newsToggle').addEventListener('click', () => {
    const toggle = $('#newsToggle'),
      open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    $('#newsDetail').hidden = !open;
    toggle.querySelector('span').textContent = open ? '−' : '+';
  });
  const architecture = [
    {
      symbol: '◎',
      kicker: '1 / Observar a planta',
      title: 'Tudo começa com uma imagem.',
      text: 'A câmera registra a planta. Uma imagem bem iluminada e com a planta visível ajuda o programa a fazer a análise.',
      tag: 'Câmera → Computador',
    },
    {
      symbol: '⌕',
      kicker: '2 / Examinar a imagem',
      title: 'O programa observa cores e formas.',
      text: 'O programa busca características visuais na imagem. Uma pessoa precisa conferir a interpretação antes de decidir o cuidado com a plantação.',
      tag: 'Imagem → Análise de cores e contornos',
    },
    {
      symbol: '⌘',
      kicker: '3 / Enviar o comando',
      title: 'O computador conversa com o aparelho.',
      text: 'Um cabo leva os comandos do programa ao controlador do LEAF. Ele coordena as partes que movimentam o sistema e acionam as bombas.',
      tag: 'Computador → Cabo USB → Controlador',
    },
    {
      symbol: '⌁',
      kicker: '4 / Controlar o borrifador',
      title: 'Aplicar no lugar escolhido.',
      text: 'Motores e bombas fazem parte do sistema de aplicação direcionada. O aparelho deve ser ajustado para controlar a posição e a quantidade de líquido.',
      tag: 'Controlador → Motores e bombas',
    },
  ];
  document.querySelectorAll('[data-step]').forEach((button) =>
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-step]').forEach((item) => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      const item = architecture[Number(button.dataset.step)];
      $('#architectureDetail').innerHTML =
        `<span class="detail-symbol" aria-hidden="true">${item.symbol}</span><div><p class="overline">${item.kicker}</p><h3>${item.title}</h3><p>${item.text}</p><span class="tech-tag">${item.tag}</span></div>`;
      translatePage();
    })
  );
  function render(plan, scroll = true) {
    const concentrate = plan.concentrate,
      dilution = plan.dilution;
    let html = `<span class="result-badge">${concentrate ? 'Receita original do concentrado LEAF' : 'Diluição com a medida que você informou'}</span><h3 class="result-title">${concentrate ? 'Seu concentrado LEAF' : 'Sua mistura para o pulverizador'}</h3><p class="result-subtitle">${concentrate ? 'As seis medidas abaixo seguem a tabela do projeto e foram ajustadas à quantidade escolhida.' : 'O cálculo usa a orientação que você preencheu. Ele não confirma se a dose é adequada para sua plantação.'}</p><div class="result-context"><span>${escape(plan.crop)}</span><span>${escape(plan.problem)}</span><span>${escape(plan.severity)}</span><span>${escape(plan.stage)}</span></div>`;
    if (concentrate) {
      html += `<div class="notice concentrate-notice"><strong>Concentrado: precisa de diluição antes do uso.</strong><p>Esta receita é da mistura-base. Não coloque o concentrado puro nas plantas. A quantidade de água para pulverizar deve seguir a orientação para o seu cultivo.</p></div><div class="result-section"><h4>1. Separe os ingredientes</h4><table class="measure-table"><caption>Receita proporcional ao lote de ${LEAF.liquid(plan.volume)} da tabela original</caption><thead><tr><th scope="col">Ingrediente</th><th scope="col">Medida</th></tr></thead><tbody>${concentrate.ingredients.map((item) => `<tr><td>${escape(item.name)}<small>${escape(item.help)}</small></td><td>${escape(item.amountText)}</td></tr>`).join('')}</tbody></table><p class="result-date">1 L = 1.000 mL. Use um copo medidor ou uma seringa medidora; não estime com colheres de cozinha.</p></div><div class="result-section"><h4>2. Confira o preparo</h4><ol><li>Separe os extratos já preparados, equivalentes aos usados pelo projeto. Óleo de nim puro, alho em pó e molho de pimenta não substituem os extratos da tabela.</li><li>A descrição original orienta misturar os extratos e o óleo em um recipiente escuro e depois acrescentar o sabão potássico, misturando bem.</li><li>As medidas da tabela já somam o volume nominal do lote. Água acrescentada muda a concentração; não calcule uma quantidade extra por conta própria.</li><li>Identifique o recipiente como “LEAF — concentrado”, com a data. Siga a orientação de preparo e armazenamento recebida da equipe.</li></ol></div>`;
    } else {
      html += `<div class="result-section"><h4>1. Meça o concentrado</h4><div class="measure-highlight"><span>Concentrado LEAF</span><strong>${LEAF.quantity(dilution.concentrateML, 'mL')}</strong></div><p class="result-date">Medida informada por você: ${LEAF.quantity(dilution.dose, 'mL')} de LEAF por litro de mistura pronta.</p><p>${escape(dilution.formula)}</p></div><div class="result-section"><h4>2. Complete com água</h4><p>Acrescente água para chegar a <strong>${LEAF.liquid(plan.volume)} no total</strong>, seguindo a ordem de preparo da orientação recebida.</p><p>Não coloque ${LEAF.liquid(plan.volume)} de água e depois o produto por cima: o total é de água e concentrado juntos.</p></div>`;
    }
    html += `<div class="result-section case-guidance"><h4>Para ${escape(plan.crop.toLocaleLowerCase('pt-BR'))} com ${escape(plan.problem.toLocaleLowerCase('pt-BR'))}</h4><p>${escape(plan.context.focus)}</p><p class="priority-message">${escape(plan.priority)}</p><ul>${plan.context.observations.map((item) => `<li>${escape(item)}</li>`).join('')}</ul></div><div class="result-section"><h4>Cuidados que fazem diferença</h4><ul>${plan.precautions.map((item) => `<li>${escape(item)}</li>`).join('')}</ul></div>`;
    if (plan.notes || plan.location)
      html += `<div class="result-section"><h4>O que você contou</h4>${plan.notes ? `<p data-user-content>${escape(plan.notes)}</p>` : ''}${plan.location ? `<p><span>Região</span>: <span data-user-content>${escape(plan.location)}</span></p>` : ''}</div>`;
    html += `<details class="extra-fields result-evidence"><summary>Ver os documentos da receita <span aria-hidden="true">+</span></summary><p>${escape(plan.context.evidence)}</p><div class="source-list">${plan.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗<small>${escape(source.section)}</small></a>`).join('')}</div></details><div class="result-actions no-print"><button type="button" class="button" data-action="print">Imprimir / salvar PDF ↗</button><button type="button" class="button outline" data-action="copy">Copiar ficha</button><button type="button" class="button outline" data-action="download">Baixar ficha</button></div><p class="result-date">LEAF · ${new Date().toLocaleDateString(LEAF.locale())} · Guarde esta ficha com as orientações de uso do seu cultivo.</p>`;
    result.innerHTML = html;
    translatePage();
    if (!scroll) return;
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function generate() {
    if (!form.reportValidity()) return;
    try {
      currentPlan = LEAF.createPlan({
        mode,
        crop: $('#crop').value,
        problem: $('#problem').value,
        stage: $('#stage').value,
        severity: $('#severity').value,
        volume: $('#volume').value,
        dose: $('#dose').value,
        doseConfirmed: $('#doseConfirmed').checked,
        notes: $('#notes').value,
        location: $('#location').value,
      });
      render(currentPlan);
    } catch (error) {
      toast(error.message);
    }
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    generate();
  });
  result.addEventListener('click', async (event) => {
    if (event.target.closest('#loadExample')) {
      setMode('concentrate');
      $('#crop').value = 'Couve';
      $('#problem').value = 'Pulgões';
      $('#stage').value = 'Crescendo';
      $('#severity').value = 'Poucas plantas';
      generate();
      return;
    }
    const button = event.target.closest('[data-action]');
    if (!button || !currentPlan) return;
    if (button.dataset.action === 'print') {
      window.print();
      return;
    }
    const text = LEAF.planText(currentPlan);
    if (button.dataset.action === 'copy') {
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(text);
        toast('Ficha copiada com medidas, cuidados e fontes.');
      } catch {
        toast('Use “Baixar ficha” para salvar o texto completo.');
      }
    }
    if (button.dataset.action === 'download') {
      const url = URL.createObjectURL(
        new Blob(['\ufeff' + text], { type: 'text/plain;charset=utf-8' })
      );
      const link = document.createElement('a');
      link.href = url;
      link.download = LEAF.getLanguage() === 'en' ? 'my-leaf-sheet.txt' : 'minha-ficha-leaf.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast('Sua ficha está pronta para baixar.');
    }
  });
  form.addEventListener('reset', () => {
    currentPlan = null;
    setMode('concentrate');
    result.innerHTML = initialResult;
    translatePage();
    toast('Pronto. Você pode começar uma nova ficha.');
  });
  let printDetails = [];
  window.addEventListener('beforeprint', () => {
    printDetails = [...result.querySelectorAll('details:not([open])')];
    printDetails.forEach((detail) => {
      detail.open = true;
    });
  });
  window.addEventListener('afterprint', () => {
    printDetails.forEach((detail) => {
      detail.open = false;
    });
    printDetails = [];
  });

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  function translatePage() {
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (
        node.parentElement?.closest(
          'script, style, noscript, textarea, [data-user-content], #languageToggle, #languageStatus'
        )
      )
        continue;
      if (!node.textContent.trim()) continue;
      if (!originalText.has(node)) originalText.set(node, node.textContent);
      const source = originalText.get(node);
      node.textContent =
        LEAF.getLanguage() === 'pt'
          ? source
          : source.replace(/\S[\s\S]*\S|\S/, (text) => LEAF.translate(text));
    }
    document
      .querySelectorAll(
        '[aria-label], [placeholder], [title], meta[name="description"], meta[property^="og:"]'
      )
      .forEach((element) => {
        if (element.id === 'languageToggle') return;
        if (!originalAttributes.has(element)) {
          originalAttributes.set(
            element,
            Object.fromEntries(
              ['aria-label', 'placeholder', 'title', 'content']
                .filter((name) => element.hasAttribute(name))
                .map((name) => [name, element.getAttribute(name)])
            )
          );
        }
        for (const [name, source] of Object.entries(originalAttributes.get(element)))
          element.setAttribute(name, LEAF.translate(source));
      });
    const english = LEAF.getLanguage() === 'en';
    document.documentElement.lang = english ? 'en' : 'pt-BR';
    $('#languageToggle').textContent = english ? 'Português' : 'English';
    $('#languageToggle').lang = english ? 'pt-BR' : 'en';
    $('#languageToggle').setAttribute(
      'aria-label',
      english ? 'Switch website language to Portuguese' : 'Mudar idioma do site para inglês'
    );
    document
      .querySelectorAll('a[href*="/README.md"], a[href*="/README.en.md"]')
      .forEach((link) => {
        link.href = link.href.replace(
          /README(?:\.en)?\.md/,
          english ? 'README.en.md' : 'README.md'
        );
      });
  }
  $('#languageToggle').addEventListener('click', () => {
    LEAF.setLanguage(LEAF.getLanguage() === 'pt' ? 'en' : 'pt');
    form
      .querySelectorAll('input, select, textarea')
      .forEach((field) => field.setCustomValidity(''));
    $('#toast').textContent = '';
    if (currentPlan) {
      currentPlan = LEAF.createPlan({
        ...currentPlan,
        dose: currentPlan.dilution?.dose,
        doseConfirmed: !!currentPlan.dilution,
      });
      render(currentPlan, false);
    } else translatePage();
    $('#languageStatus').textContent =
      LEAF.getLanguage() === 'en'
        ? 'Language changed to English.'
        : 'Idioma alterado para português.';
  });
  form.addEventListener(
    'invalid',
    (event) => {
      const field = event.target;
      if (LEAF.getLanguage() !== 'en') return;
      field.setCustomValidity(
        field.validity.valueMissing
          ? field.type === 'checkbox'
            ? 'Please confirm this statement.'
            : 'Please complete this field.'
          : field.validity.rangeUnderflow || field.validity.rangeOverflow
            ? `Enter a value between ${field.min} and ${field.max}.`
            : field.validity.stepMismatch
              ? `Use increments of ${field.step}.`
              : 'Please enter a valid value.'
      );
    },
    true
  );
  form.addEventListener('input', (event) => event.target.setCustomValidity?.(''));
  form.addEventListener('change', (event) => event.target.setCustomValidity?.(''));
  translatePage();
})();
