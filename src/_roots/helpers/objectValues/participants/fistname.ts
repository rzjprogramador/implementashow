// import { minString, maxString } from "@replicasRemote";

// const setMinString = 2
// const setMaxString = 200

export const FirstName = async (stringTarget: string, setMinString = 2) => {
  if (stringTarget.length < setMinString) {
    throw new Error(`Ops o total de letras não pode ser menor que 2`)
  }
  return await stringTarget
}

/*
if (stringTarget.length < setMinString) {
    throw`Ops o total de letras não pode ser menor que 2`
  }
  return await stringTarget
*/