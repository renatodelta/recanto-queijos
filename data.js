let storeData = {
    name: "Recanto Formoso",
    version: "1.1.0",
    phone: "5512996548322", // Número do WhatsApp
    address: "Recanto Formoso, S/N, Região de Formoso",
    hours: "Seg a Sáb: 05:00 às 20:00",
    openingHours: {
        start: 5,
        end: 20
    },
    status: "auto"
};

let categories = [
    { id: "laticinios", name: "🧀 Laticínios & Queijos" },
    { id: "doces", name: "🍬 Doces Artesanais" },
    { id: "biscoitos", name: "🍪 Biscoitos Caseiros" }
];

let products = [
    // LATICÍNIOS E QUEIJOS
    {
        id: 1,
        category: 'laticinios',
        name: 'Queijo Frescal Grande',
        price: 30.00,
        desc: 'Feito com o leite mais puro da nossa região, este queijo frescal traz o frescor da manhã em Formoso. Macio, leve e produzido com todo carinho artesanal.',
        image: 'imgs/frescal-grande.webp'
    },
    {
        id: 2,
        category: 'laticinios',
        name: 'Queijo Frescal Pequeno',
        price: 15.00,
        desc: 'A mesma qualidade e amor do nosso frescal grande, em uma porção perfeita para o seu café da manhã individual ou em casal.',
        image: 'imgs/frescal-pequeno.webp'
    },
    {
        id: 3,
        category: 'laticinios',
        name: 'Queijo Meia Cura',
        price: 37.00,
        desc: 'O equilíbrio perfeito entre o frescor e a maturação. Com sabor acentuado e textura única, é a alma da nossa produção artesanal em Formoso.',
        image: 'imgs/meiacura.webp'
    },
    {
        id: 4,
        category: 'laticinios',
        name: 'Queijo Meia Cura (Metade)',
        price: 18.50,
        desc: 'Para quem quer saborear a tradição do nosso meia cura em uma porção menor. Metade do tamanho, o mesmo amor envolvido.',
        image: 'imgs/meiacura.webp'
    },
    {
        id: 5,
        category: 'laticinios',
        name: 'Queijo Parmesão',
        price: 52.00,
        desc: 'Intenso, aromático e maturado com paciência. Nosso parmesão artesanal eleva qualquer receita ou tábua de queijos ao próximo nível.',
        image: 'imgs/parmesao.png'
    },
    {
        id: 6,
        category: 'laticinios',
        name: 'Queijo Parmesão (Metade)',
        price: 26.00,
        desc: 'A intensidade do nosso parmesão artesanal em uma porção prática para o dia a dia.',
        image: 'imgs/parmesao.png'
    },
    {
        id: 7,
        category: 'laticinios',
        name: 'Mussarela (kg)',
        price: 40.00,
        desc: 'Derrete na boca e no coração. Uma mussarela produzida com leite selecionado, ideal para pizzas, sanduíches ou puro deleite.',
        image: 'imgs/nozinho.png'
    },
    {
        id: 8,
        category: 'laticinios',
        name: 'Mussarela de Búfala (kg)',
        price: 48.00,
        desc: 'Extremamente cremosa e delicada. Nossa mussarela de búfala é um toque de sofisticação artesanal vindo diretamente de nossos pastos.',
        image: 'imgs/mussarela_bufala.png'
    },
    {
        id: 9,
        category: 'laticinios',
        name: 'Queijo Frescal de Búfala',
        price: 18.00,
        desc: 'Uma variação leve e nutritiva do nosso tradicional frescal, com toda a cremosidade única do leite de búfala.',
        image: 'imgs/mussarela_bufala.png'
    },
    {
        id: 10,
        category: 'laticinios',
        name: 'Nozinho',
        price: 22.00,
        desc: 'O petisco favorito! Feito à mão com muito carinho, cada nozinho carrega o sabor da nossa tradição queijeira.',
        image: 'imgs/nozinho.png'
    },
    {
        id: 11,
        category: 'laticinios',
        name: 'Nozinho de Búfala (250g)',
        price: 13.00,
        desc: 'Pequenas porções de puro prazer. Macios e suculentos, feitos com leite de búfala selecionado.',
        image: 'imgs/nozinho.png'
    },
    {
        id: 12,
        category: 'laticinios',
        name: 'Ricota Temperada (pote 250g)',
        price: 10.00,
        desc: 'Leveza com um toque especial de ervas. Nossa ricota artesanal é perfeita para torradas e lanches saudáveis.',
        image: 'imgs/ricota.png'
    },
    {
        id: 13,
        category: 'laticinios',
        name: 'Requeijão (pote 250g)',
        price: 9.00,
        desc: 'A cremosidade que você já conhece com o sabor autêntico da fazenda. Sem conservantes, apenas leite e amor.',
        image: 'imgs/requeijao.webp'
    },
    {
        id: 14,
        category: 'laticinios',
        name: 'Manteiga',
        price: 11.00,
        desc: 'Feita do creme de leite batido aqui mesmo. Sabor de verdade que derrete no pão quentinho.',
        image: 'imgs/manteiga.webp'
    },

    // DOCES
    {
        id: 15,
        category: 'doces',
        name: 'Bananada Artesanal',
        price: 22.00,
        desc: 'O doce da fruta concentrado com o carinho do tacho de cobre. Uma explosão de sabor natural de Formoso.',
        image: 'imgs/bananada.png'
    },
    {
        id: 16,
        category: 'doces',
        name: 'Goiabada Cascão',
        price: 22.00,
        desc: 'Pedaços da fruta e a textura perfeita da tradição mineira. O par perfeito para o nosso queijo meia cura.',
        image: 'imgs/goiabada.png'
    },
    {
        id: 17,
        category: 'doces',
        name: 'Doce de Leite (Pote)',
        price: 10.00,
        desc: 'Cozinhado lentamente até atingir a cor e o ponto perfeitos. Cremoso, doce na medida e inesquecível.',
        image: 'imgs/docedeleite.png'
    },
    {
        id: 18,
        category: 'doces',
        name: 'Doce de Leite Talhado',
        price: 10.00,
        desc: 'O famoso doce de "caroço" que remete à infância na roça. Textura rústica e sabor nostálgico.',
        image: 'imgs/docedeleite.png'
    },
    {
        id: 19,
        category: 'doces',
        name: 'Doce de Leite em Tabletes',
        price: 4.50,
        desc: 'A praticidade do tablete com o sabor artesanal. Perfeito para adoçar o dia a qualquer momento.',
        image: 'imgs/docedeleite.png'
    },
    {
        id: 20,
        category: 'doces',
        name: 'Doce de Mamão',
        price: 10.00,
        desc: 'Feito com frutas colhidas no ponto, este doce cristalizado traz a doçura do pomar de Formoso para sua mesa.',
        image: 'imgs/bananada.png'
    },
    {
        id: 21,
        category: 'doces',
        name: 'Doce de Abóbora',
        price: 10.00,
        desc: 'Clássico das fazendas, nossa receita de família garante um doce macio e muito aromático.',
        image: 'imgs/bananada.png'
    },

    // BISCOITOS
    {
        id: 22,
        category: 'biscoitos',
        name: 'Goiabinha (500g)',
        price: 17.00,
        desc: 'Massa amanteigada que derrete na boca com um recheio generoso de goiabada artesanal.',
        image: 'imgs/biscoitos.png'
    },
    {
        id: 23,
        category: 'biscoitos',
        name: 'Casadinho (500g)',
        price: 17.00,
        desc: 'O encontro perfeito de duas massas leves unidas por um recheio de doce de leite caseiro.',
        image: 'imgs/biscoitos.png'
    },
    {
        id: 24,
        category: 'biscoitos',
        name: 'Biscoito de Nata (500g)',
        price: 17.00,
        desc: 'O verdadeiro sabor da fazenda. Feito com nata fresquinha, crocante e irresistível.',
        image: 'imgs/biscoitos.png'
    },
    {
        id: 25,
        category: 'biscoitos',
        name: 'Biscoito de Aveia (300g)',
        price: 13.00,
        desc: 'Uma opção nutritiva e deliciosa, feita com aveia selecionada e o toque artesanal do Recanto.',
        image: 'imgs/biscoitos.png'
    }
];
