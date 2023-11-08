const Data = [
  {
    name: `Sukuna Ryomen`,
    nickname: `Fraudekuna`,
    picture: "../src/assets/img/Sukuna.jpg",
    category: `Catégorie : Vilain`,
    power: `Puissance : 90`,
    bio: `Fléau de haut-niveau, incontestablement considéré comme le roi des fléaux à cause de sa puissance et de sa malveillance. Selon la légende, Sukuna était un démon à quatre bras ressemblant à un humain, apparu à l'époque de la sorcellerie. Les sorciers de l’époque étaient incapables de l'exorciser, ils stockèrent alors ses 20 doigts comme des charmes maudits, espérant qu'un jour ceux-ci seraient détruits.`,
    isFavorite: false,
  },

  {
    name: `Megumi Fushiguro`,
    nickname: `Tête d'oursin`,
    picture: "../src/assets/img/Megumi.png",
    category: `Catégorie : Héros`,
    power: `Puissance : 65`,
    bio: `Jeune exorciste en classe de seconde à l’École d’exorcisme de Tokyo sous la tutelle de Satoru Gojō. Il rencontre Yūji lorsqu'il tente de localiser une relique de classe S, un des doigts de Sukuna, dans son lycée. C'est lui qui convainc Satoru d'essayer de sauver Yūji de son exécution après sa possession par Sukuna. Il utilise son pouvoir maudit pour créer des esprits à partir de ses propres ombres, pour exorciser les fléaux`,
    isFavorite: false,
  },

  {
    name: `Yuji Itadori`,
    nickname: `Yu`,
    picture: "../src/assets/img/Yuji.jpg",
    category: `Catégorie : Héros`,
    power: `Puissance : 70`,
    bio: `Adolescent extrêmement doué en sport ayant rejoint le club de spiritisme de son lycée pour pouvoir quitter l'école plus tôt. Après que les deux autres membres du club aient trouvé et ouvert une boîte contenant une relique maudite ressemblant à un doigt momifié, son lycée est attaqué par des créatures connues sous le nom de "fléaux". Afin de protéger ses amis, Yuji avale le doigt et se retrouve alors possédé par le fléau nommé Sukuna.`,
    isFavorite: false,
  },

  {
    name: `Gojo Satoru`,
    nickname: `Le GOAT Ultime`,
    picture: "../src/assets/img/Gojo.jpg",
    category: `Catégorie : Héros`,
    power: `Puissance : 100`,
    bio: ` Il est un exorciste de classe S, connu comme le plus fort d'entre eux, enseignant à l'école d'exorcisme de Tokyo et est en charge des élèves de secondes. Il est le professeur principal de Yuji Itadori, Megumi Fushiguro et Nobara Kugisaki. Il est l'héritier de l'Infini et du Sixième Œil et utilise son pouvoir maudit pour contrôler l'espace autour de lui d'innombrables façons. Technique spéciale : Kyoshiki Murasaki !`,
    isFavorite: true,
  },

  {
    name: `Yuta Okkotsu`,
    nickname: `Fujiwara`,
    picture: "../src/assets/img/Yuta.jpg",
    category: `Catégorie : Héros`,
    power: `Puissance : 85`,
    bio: `Yuta était initialement une victime maudite d'un fléau de haut rang, il fut hanté par l'esprit de son amie d'enfance, Rika Orimoto. Satoru Gojo a pris en charge son cas et l'a inscrit à l'école d'exorcisme de Tokyo, où il s'est lié d'amitié avec Maki Zen'in, Toge Inumaki et Panda. Après s'être entraîné avec Gojo et les autres élevés, Yuta a appris à contrôler son énergie occulte et devient un épéiste qualifié. Même après avoir la levée de la malédiction de Rika, Yuta conserve son pouvoir spécial, à tel point qu'il peut battre Suguru Geto, et Gojo a déclaré que Yuta avait un potentiel pour le vaincre.`,
    isFavorite: false,
  },

  {
    name: `Mahito`,
    nickname: `Le Rapiécé`,
    picture: ".CSS_IN_REACT/src/assets/img/Mahito.jpg",
    category: `Catégorie : Vilain`,
    power: `Puissance : 80`,
    bio: `Fléau de haut-niveau né de la haine des humains, il est capable de prendre forme humaine, son but est l'extermination de l'humanité. Il est sadique, immature et aime jouer avec les émotions humaines, même lorsque sa vie est en danger. Il croit que la vie n'a aucune valeur ni de sens et donc chacun devrait en faire ce qu'il veut. Cette mentalité semble lui provenir de sa capacité à percevoir et à manipuler les âmes, ce qui lui fait voir cette dernière (et par extension le cœur) comme rien de plus qu'un objet. Son pouvoir occulte lui permet de manipuler son âme et celles des autres en changeant la forme de son corps et celui des autres.`,
    isFavorite: false,
  },

  {
    name: `Geto Suguru`,
    nickname: `Saiaku no Juso-shi`,
    picture: "CSS_IN_REACT/src/assets/img/Geto.jpg",
    category: `Catégorie : Vilain`,
    power: `Puissance : 85`,
    bio: `Un exorciste de classe spécial et un ancien camarade de classe de Satoru et Shoko, et donc un ancien élève de Yaga. Après qu'il ait estimé qu'aider les non-exorcistes n'était plus une option viable suite à divers événements, les idéaux de Suguru ont radicalement changés et ce dernier a quitté l'institut d'exorcisme après avoir massacré une centaine de civils en une seule nuit y compris ses parents. Il est alors devenu un maître des fléaux poursuivant l'objectif de créer un monde sans non-exorcistes. Son pouvoir occulte lui permet d'absorber et de contrôler les fléaux et de les utiliser pour le combat.`,
    isFavorite: false,
  },

  {
    name: `Nanami Kento`,
    nickname: `Kentounet`,
    picture: "./src/assets/img/Nanami.jpg",
    category: `Catégorie : Héros`,
    power: `Puissance : 79`,
    bio: `Un exorciste de classe 1, c'est un ancien élève de l’École d’exorcisme de Tokyo et un des mentors de Yuji. Sa personnalité est en totale opposition avec celle de Satoru, étant stoïque et sérieux alors que ce dernier est plus facile à vivre. Sous son aspect dur, Kento est un homme bon avec des valeurs morales. Il traite Yuji comme un enfant car il ne veut pas le voir abandonner sa jeunesse juste pour devenir un exorciste.Son pouvoir occulte lui permet de créer des points faibles sur ces cibles avec son arme, une épée émoussée enveloppée de tissu.`,
    isFavorite: false,
  },

  {
    name: `Inumaki Toge`,
    nickname: `Bouffe Bouffe`,
    picture: "./src/assets/img/Inumaki.jpg",
    category: `Catégorie : Héros`,
    power: `Puissance : 70`,
    bio: `Jeune exorciste en classe de première à l’École d’exorcisme de Tokyo qui participe au tournoi contre l'école jumelle de Kyoto aux côtés de Maki et Panda. Sa bouche est couverte et il ne parle qu'en utilisant des mots venant du vocabulaire des fruits de mer. Cela est dû à son pouvoir occulte qui est concentré dans sa voix, créant divers effets contre les fléaux en fonction de la façon dont il parle et utilise ses mots.`,
    isFavorite: false,
  },

  {
    name: `Toji Fushiguro`,
    nickname: `Le tueur d'Exorcistes`,
    picture: "./src/assets/img/Toji.png",
    category: `Catégorie : Vilain`,
    power: `Puissance : 82`,
    bio: `C'est un ancien membre du clan Zen'in, devenu un tueur à gages connu et sous le nom de Tueur d'Exorcistes. Il a notamment travaillé pour le Culte Astral. Toji est un homme froid, calme et confiant qui aime s'amuser et gagner de l'argent. Il semble apprécier discuter intelligemment avec les autres tant que la conversation le concerne et peut échanger des plaisanteries spirituelles très sarcastiquement. Il est aussi une personne assez tête en l'air, n'étant pas doué pour se souvenir des personnes qu'il rencontre, allant même jusqu'à oublier son propre fils (Megumi).`,
    isFavorite: false,
  },
];

export default Data;
