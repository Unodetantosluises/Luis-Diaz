import uuid from "react-uuid"
import { eye, git } from "../utils/icons"
import figma from '../img/portImages/figma.png'

export const portfolios = [
    {
        id: uuid(),
        category: "UI/UX Design",
        title: "Corazon de Malta",
        image: figma,
        link1: "https://github.com/Unodetantosluises",
        link2: "https://www.figma.com/proto/oZhc69j3h1ihCOdsT0BSpp/Corazon-de-Malta?type=design&node-id=43-2&scaling=min-zoom&page-id=106%3A2&starting-point-node-id=43%3A2",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "UI/UX Design",
        title: "Más que Mascotas",
        image: figma,
        link1: "https://github.com/Unodetantosluises",
        link2: "https://xd.adobe.com/view/69bbc325-9e3b-46b3-ab1d-93a30344364c-3ce8/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "UI/UX Design",
        title: "Monero",
        image: figma,
        link1: "https://github.com/Unodetantosluises",
        link2: "https://www.figma.com/proto/NSu9oBLnk6YYl8i7UzublZ/Monero?type=design&node-id=2-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2",
        icon1: git,
        icon2: eye,
    },
]