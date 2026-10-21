
<div align="center">

# 🌱 LEAF

### Low-Cost Ecological AgroCare Framework

**Tornando a agricultura de precisão mais acessível, sustentável e inteligente.**

Um projeto de pesquisa estudantil que combina **visão computacional, sistemas embarcados, automação agrícola e proteção ecológica de culturas** para investigar alternativas acessíveis à agricultura moderna.

[![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-Computer_Vision-5C3EE8?logo=opencv&logoColor=white)](https://opencv.org/)
[![ESP32](https://img.shields.io/badge/ESP32-Embedded_Systems-E7352C?logo=espressif&logoColor=white)](https://www.espressif.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-orange)](#-status-do-projeto)

**[🌐 Site Oficial](https://henriquebrtocosta.github.io/leaf-cmjf/)** · **[📁 Arquivos do Projeto](Files/)** · **[💬 Contribuir](https://github.com/henriquebrtocosta/leaf-cmjf/issues)**

**🌍 Idiomas:** [English](README.md) | Português (Brasil)

</div>

---

## 📖 Visão Geral

O **LEAF (Low-Cost Ecological AgroCare Framework)** é um projeto de pesquisa interdisciplinar voltado à investigação de tecnologias acessíveis para a agricultura sustentável e de precisão.

O projeto estuda como a visão computacional, os sistemas automatizados de pulverização e as formulações agrícolas de origem natural podem contribuir para uma proteção mais direcionada das culturas, especialmente em contextos nos quais o acesso a tecnologias agrícolas avançadas é limitado.

Ao integrar software, eletrônica e pesquisa agrícola, o LEAF busca desenvolver uma estrutura experimental que possa apoiar estudos futuros sobre a redução do uso desnecessário de insumos químicos, o aumento da precisão das aplicações e a democratização da automação agrícola.

> [!IMPORTANT]
> O LEAF é um **projeto acadêmico experimental**, e não um produto agrícola comercialmente validado. A precisão da identificação visual, a confiabilidade dos componentes eletrônicos, a eficácia das formulações e os benefícios ambientais ainda precisam ser avaliados experimentalmente antes de qualquer aplicação prática.

## 🎯 Objetivos do Projeto

O desenvolvimento do LEAF é orientado por cinco objetivos principais:

- **Acessibilidade:** investigar alternativas de baixo custo utilizando hardware acessível e software de código aberto.
- **Automação:** estudar mecanismos controlados computacionalmente para aplicações agrícolas direcionadas.
- **Visão Computacional:** desenvolver técnicas de processamento de imagens capazes de identificar culturas e detectar indicadores visuais associados à possível presença de pragas.
- **Sustentabilidade:** pesquisar formulações agrícolas de origem natural e avaliar seu potencial na proteção de culturas.
- **Educação e Pesquisa:** estimular a experimentação interdisciplinar envolvendo programação, eletrônica, ciências ambientais e agricultura.

## ✨ Principais Funcionalidades

O protótipo e sua documentação técnica descrevem os seguintes componentes:

| Componente | Descrição |
|---|---|
| 📷 Visão Computacional | Captura e processamento de imagens utilizando Python e OpenCV. |
| 🌿 Identificação de Culturas | Regras experimentais de classificação visual para determinadas culturas agrícolas. |
| 🔍 Indicação de Pragas | Detecção de padrões visuais potencialmente associados à presença de pragas. |
| ⚙️ Controle Embarcado | Arquitetura baseada em ESP32 para controle de motores e bombas de pulverização. |
| 🔌 Comunicação Serial | Comunicação entre a aplicação Python e o microcontrolador por meio de conexão USB serial. |
| 💧 Pulverização Direcionada | Mecanismo experimental destinado à aplicação mais seletiva de soluções agrícolas. |
| 🌱 Pesquisa Ecológica | Investigação de ingredientes de origem natural para possíveis formulações agrícolas. |
| 🌐 Site do Projeto | Plataforma pública de apresentação dos objetivos e das atividades de pesquisa. |

### Abordagem de Visão Computacional

A abordagem de processamento de imagens documentada utiliza principalmente **OpenCV, NumPy, segmentação baseada em cores e regras heurísticas de classificação**.

Entre as técnicas empregadas estão a análise de imagens no espaço de cores HSV e a identificação de regiões com características visuais específicas.

Embora a inteligência artificial faça parte das direções de pesquisa do projeto, a implementação documentada não deve ser confundida com um modelo de aprendizado de máquina treinado e validado.

A identificação de culturas e a detecção de possíveis pragas permanecem experimentais e não devem ser interpretadas como diagnósticos agronômicos confiáveis.

## 🏗️ Arquitetura do Sistema

O LEAF investiga uma arquitetura modular que conecta processamento de imagens e controle de hardware embarcado.

```mermaid
flowchart TD
    A["Câmera"] --> B["Aplicação Python"]
    B --> C["Processamento de Imagens com OpenCV"]
    C --> D["Classificação Experimental de Culturas e Pragas"]
    D --> E["Lógica de Controle"]
    E --> F["Comunicação Serial USB"]
    F --> G["Microcontrolador ESP32"]
    G --> H["Controle de Motores"]
    G --> I["Controle de Bombas"]
    H --> J["Mecanismo de Posicionamento"]
    I --> K["Aplicação Direcionada Experimental"]
```

### Como Funciona

1. **Captura de Imagens:** uma câmera conectada registra imagens das plantas observadas.
2. **Processamento:** a aplicação Python analisa regiões selecionadas das imagens capturadas.
3. **Classificação Visual:** algoritmos experimentais identificam cores, formas e outras características visuais.
4. **Decisão de Controle:** o software determina a ação correspondente com base em sua lógica programada.
5. **Comunicação Serial:** comandos são transmitidos ao microcontrolador ESP32.
6. **Operação do Hardware:** o ESP32 coordena os movimentos dos motores e o acionamento das bombas conforme as instruções do firmware.

Esse fluxo representa a integração investigada pelo projeto. Sua confiabilidade e seu desempenho devem ser avaliados por meio de testes controlados.

## 🛠️ Tecnologias Utilizadas

### Software

| Tecnologia | Finalidade |
|---|---|
| Python 3 | Aplicação principal e lógica de controle |
| OpenCV | Captura e processamento de imagens |
| NumPy | Operações numéricas e manipulação de matrizes de imagens |
| Matplotlib | Visualização de dados e imagens |
| PySerial | Comunicação serial com o ESP32 |
| pyttsx3 | Funcionalidades de síntese de voz |
| keyboard | Gerenciamento de entradas pelo teclado |
| HTML, CSS e JavaScript | Desenvolvimento do site público do projeto |

### Hardware

A arquitetura experimental inclui:

- Microcontrolador ESP32
- Conexão USB serial
- Câmera ou webcam compatível
- Motor de passo e driver correspondente
- Chaves de fim de curso
- Bombas controladas eletricamente
- Componentes mecânicos de posicionamento e pulverização

Os detalhes de fiação, alimentação elétrica e configuração dos componentes devem ser verificados antes da operação do protótipo.

## 📂 Estrutura do Repositório

O repositório público contém o site, os documentos, a licença e os materiais complementares do projeto.

```text
leaf-cmjf/
├── Files/              # Materiais complementares do projeto
├── index.html          # Site público do LEAF
├── README.md           # Documentação principal (inglês)
├── README.pt-BR.md     # Documentação em português
├── LICENSE             # Licença MIT
└── .gitignore
```

A documentação técnica também faz referência aos seguintes arquivos do protótipo:

| Arquivo | Finalidade |
|---|---|
| `leaf.py` | Aplicação Python principal |
| `funcao_identific.py` | Análise de imagens e classificação experimental |
| `executar.bat` | Inicializador da aplicação no Windows |
| `firmware_usb.ino` | Arquivo principal do firmware ESP32 |
| `controle_motor.ino` | Controle de motores |
| `comunicacao_serial.ino` | Gerenciamento da comunicação serial |
| `controle_bombas.ino` | Controle das bombas |

> [!NOTE]
> Esses arquivos são descritos na documentação técnica, mas suas localizações exatas no repositório público atual não foram completamente verificadas. Localize os arquivos correspondentes antes de seguir as instruções de execução.

## 🚀 Primeiros Passos

### Pré-requisitos

Para executar o protótipo Python, os requisitos documentados incluem:

- Python 3
- Câmera compatível
- Windows para utilizar o inicializador `.bat`
- ESP32 e hardware compatível para a integração física
- Arduino IDE para configurar e carregar o firmware

O site do projeto pode ser visualizado independentemente do protótipo físico.

### 1. Clonar o Repositório

```bash
git clone https://github.com/henriquebrtocosta/leaf-cmjf.git
cd leaf-cmjf
```

### 2. Localizar os Arquivos da Aplicação

Localize o diretório que contém a aplicação Python principal (`leaf.py`) e seus módulos associados.

Os próximos comandos devem ser executados a partir desse diretório.

### 3. Criar um Ambiente Virtual

No Windows:

```powershell
python -m venv .venv
```

### 4. Instalar as Dependências

Instale as bibliotecas Python utilizadas pelo protótipo documentado:

```powershell
.venv\Scripts\python.exe -m pip install opencv-python numpy keyboard pyserial pyttsx3 matplotlib
```

Essas dependências ainda não estão organizadas em um ambiente de instalação verificado com versões fixadas.

### 5. Configurar a Aplicação

Antes de executar o programa, verifique as configurações da câmera e da comunicação serial.

A documentação existente apresenta os seguintes valores:

| Configuração | Valor Documentado | Descrição |
|---|---|---|
| Porta serial | `COM8` | Porta atribuída ao ESP32 |
| Taxa de transmissão | `9600` baud | Velocidade da comunicação serial |
| Índice da câmera | `1` | Dispositivo de câmera selecionado pelo OpenCV |

Essas configurações podem precisar de alterações dependendo do computador e dos dispositivos conectados.

### 6. Executar a Aplicação Python

No diretório que contém `leaf.py`, execute:

```powershell
.venv\Scripts\python.exe leaf.py
```

Se o arquivo `executar.bat` estiver disponível e seus caminhos corresponderem à estrutura de diretórios local, ele também poderá ser utilizado como inicializador no Windows.

### 7. Configurar o Firmware ESP32

Para realizar a integração com o hardware:

1. Localize o diretório do firmware `firmware_usb`.
2. Abra `firmware_usb.ino` utilizando a Arduino IDE.
3. Mantenha os demais arquivos `.ino` no mesmo diretório do projeto.
4. Selecione a placa ESP32 e a porta de comunicação corretas.
5. Verifique as configurações do firmware e as conexões elétricas.
6. Realize testes em condições controladas, inicialmente sem formulações agrícolas.

> [!CAUTION]
> Não conecte motores ou bombas diretamente aos pinos do microcontrolador sem os drivers e as proteções elétricas adequadas. Verifique a alimentação, a fiação e os procedimentos de desligamento de emergência antes de operar qualquer equipamento físico.

## 🌱 Pesquisa em Proteção Ecológica de Culturas

Além dos componentes de automação, o LEAF investiga ingredientes de origem natural e suas possíveis aplicações na agricultura.

Entre os ingredientes abordados nos materiais de pesquisa do projeto estão:

- Neem
- Própolis
- Alho
- Cebola
- Pimenta-malagueta
- Óleo de cravo
- Sabão potássico

Essas substâncias são objetos de investigação científica, e não formulações validadas ou recomendações de aplicação.

Sua possível eficácia depende de fatores como composição, concentração, organismos-alvo, espécie cultivada, método de aplicação e condições ambientais.

**A origem natural de uma substância não garante sua segurança, eficácia ou compatibilidade ambiental.**

Antes de qualquer aplicação agrícola, as formulações devem ser avaliadas quanto à fitotoxicidade, à exposição humana, aos efeitos sobre organismos não alvo e ao cumprimento das normas aplicáveis.

## 📊 Status do Projeto

**Situação atual: Pesquisa e desenvolvimento experimental.**

O LEAF é uma iniciativa acadêmica em desenvolvimento. Seus componentes documentados fornecem uma base para experimentação, mas o sistema completo ainda não foi estabelecido como uma solução agrícola pronta para utilização em campo.

### Prioridades de Pesquisa e Desenvolvimento

- [ ] Desenvolver um conjunto de imagens reproduzível para experimentos de classificação.
- [ ] Avaliar a precisão da classificação em diferentes condições de iluminação e cultivo.
- [ ] Investigar modelos treinados de aprendizado de máquina e compará-los com métodos heurísticos.
- [ ] Documentar a fiação, a pinagem e a montagem mecânica do ESP32.
- [ ] Validar a confiabilidade da comunicação serial e do controle dos componentes.
- [ ] Implementar e documentar procedimentos de segurança operacional.
- [ ] Medir a precisão das aplicações e o consumo de líquidos.
- [ ] Avaliar formulações agrícolas por meio de protocolos experimentais adequados.
- [ ] Publicar resultados de testes reproduzíveis e documentação técnica.

A lista representa prioridades de desenvolvimento, não compromissos ou prazos confirmados.

## 🔬 Pesquisa e Validação

Um dos objetivos centrais do LEAF é fornecer uma base para experimentação científica mensurável.

As futuras avaliações devem considerar:

| Área de Pesquisa | Avaliações Sugeridas |
|---|---|
| Visão Computacional | Acurácia, precisão, revocação e robustez diante de mudanças ambientais |
| Identificação de Culturas | Desempenho com diferentes espécies e estágios de crescimento |
| Automação | Confiabilidade do controle, repetibilidade do posicionamento e tempo de resposta |
| Pulverização | Consistência de aplicação, consumo de líquido e precisão de direcionamento |
| Formulações Agrícolas | Eficácia, fitotoxicidade e efeitos sobre organismos não alvo |
| Acessibilidade | Custos dos componentes, necessidades de manutenção e reprodutibilidade |

Nenhuma alegação quantitativa de desempenho deve ser considerada comprovada sem dados experimentais que a sustentem.

## 🤝 Como Contribuir

O LEAF está aberto a sugestões construtivas, relatos de problemas, melhorias na documentação e discussões relacionadas à pesquisa.

Se você deseja contribuir:

1. Explore o repositório e a documentação existente.
2. Abra uma [issue](https://github.com/henriquebrtocosta/leaf-cmjf/issues) descrevendo o problema ou a melhoria proposta.
3. Faça um fork do repositório e crie uma branch específica.
4. Implemente e documente suas alterações.
5. Envie um pull request explicando sua contribuição e os testes realizados.

Contribuições envolvendo controle de hardware ou aplicações agrícolas devem apresentar claramente os riscos associados e os requisitos de validação.

## 👥 Equipe do Projeto

O LEAF é desenvolvido como uma iniciativa interdisciplinar de pesquisa liderada por estudantes.

**Estudantes Pesquisadores e Desenvolvedores**

- **Henrique Barreto Costa**
- **Luiz Guilherme Caovilla**

**Professor Orientador**

- **Guilherme Marins Maciel**

## ⚖️ Uso Responsável

O LEAF é disponibilizado para fins educacionais, experimentais e de pesquisa.

Equipamentos agrícolas automatizados podem envolver riscos elétricos, mecânicos, químicos e ambientais. Os usuários são responsáveis por garantir procedimentos adequados de segurança, supervisão e conformidade legal.

O projeto não garante precisão na identificação de pragas, eficácia na proteção das culturas, redução do consumo de defensivos agrícolas ou adequação para utilização comercial.

## 📄 Licença

Este repositório é distribuído sob a **Licença MIT**.

Consulte o arquivo [LICENSE](LICENSE) para conhecer todos os termos da licença.

A licença de software não concede autorização regulatória para formulações agrícolas, aplicações de defensivos ou operação de equipamentos físicos.

## 🔗 Links Úteis

- 🌐 [Site Oficial do Projeto](https://henriquebrtocosta.github.io/leaf-cmjf/)
- 💻 [Repositório no GitHub](https://github.com/henriquebrtocosta/leaf-cmjf)
- 📁 [Materiais do Projeto](Files/)
- 🐛 [Issues e Sugestões](https://github.com/henriquebrtocosta/leaf-cmjf/issues)
- 🇺🇸 [English Documentation](README.md)

---

<div align="center">

### 🌿 Tecnologia e pesquisa para um futuro agrícola mais sustentável.

**LEAF — Low-Cost Ecological AgroCare Framework**

*Explorando a inovação acessível por meio da ciência, engenharia e responsabilidade ambiental.*

**[Voltar ao Início ↑](#-leaf)**

</div>
