import { ObjSetRM } from "@remotes"

interface SetClienteFisico {
  objectValues: {
    firstname: ObjSetRM
  }
}

const setsClienteFisico: SetClienteFisico = {
  objectValues: {
    firstname: {
      setMin: 2,

      feedback: (minSet: number = 2) => {
        return `Ops... as letras não podem ser menor que ${minSet}`
      },
    } // firstname
  }, // objValues

}

export { setsClienteFisico }