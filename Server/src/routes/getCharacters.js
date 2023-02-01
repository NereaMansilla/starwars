import { Router } from "express"
import { getCharacters, getCharacterByName } from "../controllers/controllerCharacters.js"
const route = Router()


route.get('/', getCharacters)
route.get('/:name', getCharacterByName)

export default route