

export interface IProduto {
  id: number;
  nome: string
  descricao: string;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto {

  Quantidade: number;
}

export const produtos: IProduto[] = [
  { id: 1, nome:"   Cortes de Cabelos ", descricao: "Cortes tradicionais e modernos, para adultos e crianças!", imagem:"./assets/corte-cabelo-masculino-trabalho-profissional-02.webp"},

  { id: 2 , nome:"Barba",descricao: "Fazemos barba também !", imagem: "./assets/fazendo barba.jpg"},


  { id: 3, nome:"Gel cola Fox",descricao: "Produto com ótima qualidade e máxima fixação.Fácil aplicaçãoProteção UV.Não contém álcool.Não deixa resíduos nos cabelos e proporciona aspecto saudável aos fios.O gel cola Fox For Men foi elaborado com matérias primas importadas.Sua fórmula é especial, não possui álcool e com o PH neutro, proporcionando melhor fixação, mais volume e brilho aos cabelos, além de não deixar resíduos. Contém filtro solar que protege e bloqueia a ação dos raios ultravioletas, evitando o ressecamento dos fios. Ideal para penteados, deixando todos os fios no lugar, sem se preocupar em arrumar a todo instante.", imagem: "./assets/gel-cola-fox.webp" },

  { id: 4, nome:"POMADA MODELADORA HAIR POMADE da FOX FOR MEN", descricao: " É feita à base de água para todos os tipos de cabelo. Com ela, você conseguirá modelar penteados e finalizar o visual de forma natural e sem deixar resíduos. Previne o ressecamento do cabelo e fortalece os fios, possuindo brilho natural e fixação média, excelente opção para um estilo de penteado mais casual.Possui vitaminas e propriedades em sua fórmula que estimulam e fortificam os fios e também uma fragrância única muito agradável.Não possui óleo, dessa forma pode ser aplicada em todos os tipos de cabelo.", imagem: "./assets/pomada-fox-laranja.jpg"},

  { id: 5, nome:"Gel Bozzano", descricao: " O Gel Fixador Bozzano Forte Fixação 3 Proteção Solar, com fórmula que auxilia na proteção dos cabelos contra ações dos raios solares, além de garantir fixação e brilho na medida certa e excelente controle do penteado.", imagem: "./assets/gel-bozano.jpg "},

  { id: 6, nome:"Gel Cola e Gel Cera Piery ", descricao: "Tem um alto poder de fixação, permitindo a criação de novos visuais. Possui também uma fórmula hidratante que condiciona os fios dos cabelos ao mesmo tempo que dá fixação.", imagem: "./assets/gel-cera-pierry.webp"},

  { id: 7, nome:"Mesa de Sinuca, Bilhar", descricao: "Para os clientes se divertirem enquanto esperam.Observação: É preciso pagar para usar", imagem: "./assets/mesa-bilhar.webp"},

  ]



