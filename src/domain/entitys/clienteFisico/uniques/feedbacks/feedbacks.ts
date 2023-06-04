import { feedbacksGlobal } from "@global";

interface IFeedbackClienteFisico {
  createClienteFisicoOk: () => string;
}

const feedbackClienteFisico: IFeedbackClienteFisico = {
  createClienteFisicoOk() {
    return `Usuario Fisico ${feedbacksGlobal.createOk}`;
  },
};

export { feedbackClienteFisico };
