import { feedbackGlobal } from "@feedbackGlobal";

interface FeedbackClienteFisico {
  createClienteFisicoOk: () => string;
}

const feedbackClienteFisico: FeedbackClienteFisico = {
  createClienteFisicoOk() {
    return `Usuario Fisico ${feedbackGlobal.createOk}`;
  },
};

export { feedbackClienteFisico };
