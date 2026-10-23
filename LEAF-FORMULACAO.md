# Formulação do assistente LEAF

## Fontes do próprio projeto

Revisão em 23/10/2026 da pasta `Files/` do repositório `henriquebrtocosta/leaf-cmjf`.

1. [Artigo 1 - Feira 2025.docx](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Artigos/Artigo%201%20-%20Feira%202025.docx): tabela **Preparação do agrotóxico (1L)**, tabela **Função dos Componentes**, seção **Modo de preparo** e seção **Onde encontrar / como fazer os ingredientes da receita**. É a fonte quantitativa da composição disponível.
2. [Artigo LEAF.docx](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Artigos/Artigo%20LEAF.docx): materiais e métodos, resultados e discussão. Relaciona T0 (água), T1 (sabão), T2 (mistura sem própolis) e T3 (mistura com própolis).
3. [Dados do Projeto - LEAF.docx](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Artigos/Dados%20do%20Projeto%20-%20LEAF.docx): metodologia e resultados dos tratamentos.
4. [Artigo_LEAF_FEBRACE_FINAL (1).pdf](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Artigos/Artigo_LEAF_FEBRACE_FINAL%20%281%29.pdf), 6 páginas, e [Artigo LEAF Febrace.pdf](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Artigos/Artigo%20LEAF%20Febrace.pdf), 6 páginas: descrição da composição e dos ensaios; não contêm outra tabela quantitativa de formulação.
5. [Anotações dos Experimentos para o Diário de Bordo.pdf](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Artigos/Anota%C3%A7%C3%B5es%20dos%20Experimentos%20para%20o%20Di%C3%A1rio%20de%20Bordo.pdf), 41 páginas: composição dos tratamentos e registros de frutos, fungos e bactérias. Os contextos de laboratório e pós-colheita são preservados, sem convertê-los em instruções para tratar alimentos destinados ao consumo.
6. [Roteiro DGC v1.docx](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Roteiros%20de%20Apresenta%C3%A7%C3%A3o/Roteiro%20DGC%20v1.docx): identifica a preparação como **produto concentrado** e relata ensaios em alface/pulgões. O custo da mistura diluída não estabelece, por si, uma dose agronômica.
7. [Folder LEAF atualizado.pdf](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Visuais%20-%20Banner%2C%20folder/Folder%20LEAF%20atualizado.pdf), 2 páginas, e [Planejamento da feira.docx](https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/Files/Outros/Planejamento%20da%20feira.docx): apresentação da proposta e dos ingredientes.

## Dados reproduzidos

| Ingrediente na tabela original | Volume por lote de referência de 1 L |
| --- | ---: |
| Extrato de nim já preparado | 300 mL |
| Extrato de própolis | 180 mL |
| Óleo essencial de cravo-da-índia | 30 mL |
| Extrato de alho e cebola, juntos | 300 mL |
| Extrato de pimenta-malagueta | 120 mL |
| Sabão potássico líquido | 70 mL |

Soma dos volumes nominais: 1.000 mL. O cálculo preserva exatamente a proporção da tabela, sem acrescentar água extra à receita do concentrado nem supor igualdade entre volume de concentrado e volume de pulverização. A soma nominal não substitui medição do rendimento real.

O preparo no artigo também manda adicionar água sem indicar o volume. A lista do extrato de nim traz 30 mL de óleo, 9 mL de sabão e 261 mL de água (300 mL), enquanto seu texto de preparo usa 6–9 mL de sabão e 264 mL de água. Por isso, a interface exige **extratos já preparados e equivalentes aos usados no projeto**, sem calcular novas extrações a partir de óleo puro, pós ou extratos comerciais de concentrações desconhecidas.

T2 é descrito qualitativamente como a mistura sem própolis. Não está documentado o que substitui os 180 mL de própolis, nem uma nova proporção para um litro final. O assistente não cria essa proporção, não normaliza os 820 mL restantes e não troca própolis por água automaticamente.

## Personalização

O assistente ajusta as seis medidas à quantidade de concentrado escolhida. Adapta a explicação dos componentes, observações, prioridade e cuidados à planta, ao sinal observado, à extensão do problema e à fase de crescimento. A intensidade não altera sozinha a composição ou a dose: não há matriz quantitativa desse ajuste nos documentos consultados.

Há um cálculo separado para diluir concentrado quando o agricultor já recebeu uma orientação numérica. A dose é identificada como informada pelo usuário; não é apresentada como dose pesquisada, confirmada ou recomendada pelo LEAF. Não há valor predefinido. A unidade é mL de concentrado **por litro de mistura final**, evitando ambiguidades de “1:20” e “um litro de água”.

## Pesquisa externa complementar

[Meyer et al. (2008), USDA/ARS, Phytotoxicity of Clove Oil to Vegetable Crop Seedlings and Nematotoxicity to Root-knot Nematodes](https://www.ars.usda.gov/ARSUserFiles/3830/Meyeretal,CloveOilPhytotoxicityandNematotoxicity,18(4)631,HortTechnology.pdf): ensaio primário que mostra que espécie, concentração e modo de aplicação importam para danos às plantas. Estudou outra formulação e aplicação ao solo; suas doses não foram transferidas para a mistura LEAF.

[Disentangling the ecotoxicological selectivity of clove essential oil against aphids and non-target ladybeetles (2020)](https://pubmed.ncbi.nlm.nih.gov/32325622/): pesquisa de seletividade com organismos específicos; não comprova ausência geral de efeitos em organismos benéficos e não fornece diluição para os sete componentes do LEAF.

As fontes externas complementam os cuidados, sem substituir a fórmula do projeto. Não há uso das antigas caldas independentes de sabão neutro e cebola nem de seus intervalos de colheita.

## Regras de conteúdo

- Não atribuir à equipe doses que não constam dos documentos nem foram fornecidas numericamente.
- Não sugerir diluição por analogia com “agrotóxico comum”, por custo, por área estimada ou pela dose isolada de um ingrediente.
- Não aumentar concentração automaticamente por intensidade da infestação.
- Não chamar mistura concentrada de produto pronto para aplicar.
- Não assumir que os extratos usados na pesquisa são intercambiáveis com quaisquer produtos vendidos sob o mesmo nome.
- Não gerar prazo de colheita, repetição ou validade universal a partir dos ensaios de laboratório.
- Exibir as explicações essenciais em linguagem cotidiana, com detalhes das fontes em seção própria.
