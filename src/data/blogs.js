import uuid from "react-uuid"
import { user } from "../utils/icons"
import blog2 from '../img/blogs/blog2.svg'
import CorazondeMalta from '../img/UX/CorazondeMalta.png'
import Monero from '../img/UX/Monero.png'
import Mascotas from '../img/UX/Mascotas.png'


export const blogs = [
    {
        id: uuid(),
        title: "Corazon de Malta",
        title2: "Una aplicacion para un bar local de la CDMX.",
        desc: "Realice entrevistas, cree personas y desarrolle mapas de empatía para lograr definir una imagen sobre los usuarios lo cual ayudó a identificar para quién estaba diseñando la aplicación.El primer grupo de usuarios se centró en un grupo mediano de personas mayores de edad,dividido en dos grupos, el primer grupo era de clientes que solo realizaban su consumo en el bar y el segundo se conformaba de usuarios frecuentes de aplicaciones de app de comida(Rappi, Didi, etc.).",
        desc2: "Gracias a la investigacion llevada acabo pude diseñar wireframes que pudieran llegar a resolver las necesidades de mis usuarios, posteriormente lleve acabo un estudio de usabilididad enfocado saber como llevaban el proceso de adquirir alimentos dentro de la aplicacion sin instruciones previas, gracias esto puede desarrollar un prototipo de alta fidelidad de mi aplicacion.",
        date: "Diciembre 2022",
        image1: blog2,
        image2: CorazondeMalta,
        link: "https://www.google.com",
        writer: "Luis Diaz",
        userIcon: user
    },
    {
        id: uuid(),
        title: "Mas que Mascotas",
        title2: "Una Aplicacon enfocada en brindar atencion medica a las mascotas.",
        desc: "Esta aplicacion tiene el objetivo de que los usuarios pueden encontrar las cosas que necesitan para sus mascotas por medio de un sitio web adaptable, fue un desafio en particular por que habie diferentes necesidades ppr parte de los usuarios debido a que cada uno sentia un nivel de aprecio o cariño distinto por su mascota, mas sin embargo todos tenian el deso de mantenerlos sanos ya que para ellos en definitiva eran mas que mascotas.",
        desc2: "Fue un desafio para mi debido a que era la primera ves que realizaba una aplicacion 100% en Adobe XD asi que fue emocionante plasmar los resultado de mi investigacion en un wirefrema y despues en un prototipo de baja fidelidad en el que conduje el primer estudio de usuabilidad para saber que pensaban los usuarios, posteriormente itere en los hallasgoz y cree mi primer prototipo de alta fidelidad en Adobe XD",
        date: "Febreo 2022",
        image1: blog2,
        image2: Mascotas,
        link: "https://www.google.com",
        writer: "Luis Diaz",
        userIcon: user
    },
    {
        id: uuid(),
        title: "Monero",
        title2: "Aplicacion Financiera enfoacad en brindar asesoramiento e informacion sobre temas Financieros",
        desc: "Monero es una aplicación enfocada en brindar información a personas de 18 a 45 años, ofreciéndoles asesoramiento, conectar sus cuentas bancarias, realizar inversiones y dar solución a sus dudas relacionadas con temas financiero. Realice entrevistas,cree personas y desarrolle mapas de empatía para lograr definir una imagen sobre los usuarios lo cual ayudó a identificar para quién estaba diseñando la aplicación. El primer grupo de usuarios se centró en personas mayores de edad, divididos en dos grupos, con conocimiento de actividades financieras y desconocimiento de Actividades financieras.",
        desc2: "Al terminar la primera ronde de los estudios de usabilidad comprendi que los usuarios ncesitaban mayor accesibilidad para localizar los temas que mas inseguridad les causaban asi que al momento de desarrollar el prototipo de alta fidelidad tome eso encuenta para agrear iconos y un buscador.",
        date: "Abril 2023",
        image1: blog2,
        image2: Monero,
        link: "https://www.google.com",
        writer: "Luis Diaz",
        userIcon: user
    },
]

export default blogs