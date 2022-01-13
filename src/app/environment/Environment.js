import local from './Local.environment';

const env = local;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...env
};
