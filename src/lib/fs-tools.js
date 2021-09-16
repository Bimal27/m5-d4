
import { join} from "path"



const publicFolderPath = join(process.cwd(), "./public/img/authors")

export const saveAuthorPicture = (name, contentAsBuffer) => writeFile(join(publicFolderPath, name), contentAsBuffer)