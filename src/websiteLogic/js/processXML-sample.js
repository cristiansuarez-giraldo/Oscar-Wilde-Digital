/**
 * This file is here for demo purposes only, it'll not be included in the final product
 *
 */

// TODO: Delete this when Rendering HTML has been completed succesfully
var fileText = `
<?xml version="1.0" encoding="UTF-8"?>

<document>
    <column1>
        <head>The Artist</head>
        <p>One evening there came into his soul the desire to fashion an image of <hi rend="italic">The Pleasure that Abideth for a Moment</hi>. And he went forth into the world to look for bronze. For he could think only in bronze.</p>

        <p rend="indent-first">But all the bronze of the whole world had disappeared, nor anywhere in the whole world was there any bronze to be found, save only the bronze of the image of <hi rend="italic">The Sorrow that Endureth for Ever</hi>.</p>

        <p rend="indent-first">Now this image he had himself, and with his own hands, fashioned, and had set it on the tomb of the one thing he had loved in life. On the tomb of the dead thing he had most loved had he set this image of his own fashioning, that it might serve as a sign of the love of man that dieth not, and a symbol of the sorrow of man that endureth for ever. And in the whole world there was no other bronze save the bronze of this image.</p>

        <p rend="indent-first">And he took the image he had fashioned, and set it in a great furnace, and gave it to the fire.</p>

        <p rend="indent-first">And out of the bronze of the image of <hi rend="italic">The Sorrow that Endureth for Ever</hi> he fashioned an image of <hi rend="italic">The Pleasure that Abideth for a Moment</hi>.</p>
    </column1>

    <column2>
        <head>El artista</head> 

        <p>Una noche entró a su alma el deseo de moldear la imagen de <hi rend="italic">El placer que se fija en un instante</hi>, y salió a recorrer el mundo buscando bronce. Porque solo en bronce podía pensar.</p> 

        <p rend="indent-first">Pero todo el bronce del mundo entero había desaparecido, y en ningún lugar en todo el mundo había ya bronce, salvo el bronce de la imagen de <hi rend="italic">La tristeza que dura para siempre</hi>.</p>

        <p rend="indent-first">Y él mismo había moldeado esta imagen con sus propias manos, para ponerla sobre la tumba de la única cosa que había amado. Sobre la tumba de aquello que más había amado y que ahora estaba muerto, él puso la imagen que él mismo había moldeado para que sirviera como testigo del amor del hombre, que no muere, y como símbolo del dolor del hombre, que dura para siempre. Y en todo el mundo no existía más bronce, salvo el de esta imagen.</p>

        <p rend="indent-first">Entonces tomó la imagen que había moldeado y, arrojándola a un gran horno, la ofreció al fuego.</p>

        <p rend="indent-first">Y con el bronce de la imagen de <hi rend="italic">La tristeza que dura para siempre</hi> moldeó la imagen de <hi rend="italic">El placer que se fija en un instante</hi>.</p>
    </column2>

    <column3>
        <head>O artista</head>

        <p rend="indent-first">Uma tarde veio-lhe á alma o desejo de talhar uma imagem do Prazer que dura um momento. E foi mundo fóra á procura de bronze. Porque não pensava senão por bronze.</p>  

        <p rend="indent-first">Mas todo o bronze de todo o mundo tinha desapparecido, nem em cualquer parte do mundo se encontrava bronze a não ser o bronze da imagem da <hi rend="italic">Tristeza que sempre dura</hi>.</p> 

        <p rend="indent-first">Ora esta imagem tinha-a elle proprio, e com sua proprias mãos, talhado, e tinha a posto sobre o tumulo da unica cousa que amára na vida. No tumulo da unica cousa que amára tinha posto esta imagem de seu talhar, para que servisse de typo do amor humano que não morre, e de symbolo da tristeza humana que sempre dura. E em todo o mundo não havia bronze a não ser o bronze d’esta imagem.</p>  

        <p rend="indent-first">E pegou na imagem que talhára e pôl-a n’uma fornalha e deu-a ao fogo.</p> 

        <p rend="indent-first">E do bronze da imagem da <hi rend="italic">Tristeza que sempre dura</hi> talhou elle uma imagem do Prazer que dura um momento.</p>   
    </column3>
    
    <column4>
        <head>El artista</head> 

        <p rend="indent-first">Una tarde le vino al alma el deseo de tallar una imagen del Placer que dura un momento. Y fue por el mundo fuera en busca de bronce. Porque no pensaba sino con bronce.</p>  

        <p rend="indent-first">Pero todo el bronce de todo el mundo había desaparecido, ni en cualquier parte del mundo se encontraba bronce a no ser el bronce de la imagen de la <hi rend="italic">Tristeza que siempre dura</hi>.</p> 

        <p rend="indent-first">Entonces a esta imagen la había él mismo, y con sus propias manos, tallado, y la había puesto sobre el túmulo de la única cosa que amara en la vida. En el túmulo de la única cosa que amara pusiera esta imagen de su tallar, para que sirviera de tipo del amor humano que no muere, y de símbolo de la tristeza humana que siempre dura. Y en todo el mundo no había bronce a no ser el bronce de esta imagen.</p>  

        <p rend="indent-first">Y tomó la imagen que tallara y la puso en una fragua y la dio al fuego. </p>
        <p rend="indent-first">Y del bronce de la imagen de la <hi rend="italic">Tristeza que siempre dura</hi> talló él una imagen del <hi rend="italic">Placer que dura un momento</hi>.</p> 
    </column4>
</document>
`

const matchTagsRegex = /<\/?.+?>/ig
const strippedText = fileText.replace(matchTagsRegex, '');

console.log(strippedText.trim())
