import { modMessagesFeedback } from "../../../mod_deps.ts";

// componentes partes para validacao:

const fieldMenor4Caracteres = (v: string) => {
  if (v.length < 4) {
    return new Error(modMessagesFeedback.primeiroNome_TamanhoCaracteresPadrao);
  }
  return v;
};

// final use

export const validPrimeiroNome = (v: string) => {
  return fieldMenor4Caracteres(v);
};
