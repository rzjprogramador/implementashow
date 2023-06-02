import { feedbacksGlobal } from "../../../../../global/deps.ts";

interface FeedbackClienteFisico {
  createClienteFisicoOk: () => string;
}

const feedbackClienteFisico: FeedbackClienteFisico = {
  createClienteFisicoOk() {
    return `Usuario Fisico ${feedbacksGlobal.createOk}`;
  },
};

export { feedbackClienteFisico };
