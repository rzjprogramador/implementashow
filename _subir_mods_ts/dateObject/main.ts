export interface IObjectDateLog {
  dia: string;
  mes: string;
  ano: string;
  horario: string;
}

export const objectDateLog = () => {
  const hoje = new Date();

  const log: IObjectDateLog = {
    dia: hoje.getDate().toString().padStart(2, "0"),
    mes: String(hoje.getMonth() + 1).padStart(2, "0"),
    ano: String(hoje.getFullYear()),
    horario: String(`${hoje.getHours()}:${hoje.getMinutes()}`),
  };
  return log;
};

// todo: add como opcional mileseconds 
