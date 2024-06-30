import { toast } from "react-toastify";

const inDevelopmentFeature = () => {
    toast.info('Funcionalidade em desenvolvimento');
};
const apiError = () => {
    toast.error('Um erro ocorreu na sua requisição. Tente novamente.');
};

export { inDevelopmentFeature, apiError };