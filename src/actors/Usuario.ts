import { actorCalled } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { apiConfig } from '../utils/configuracionApi';

export const usuario = actorCalled('Usuario del sistema').whoCan(
    CallAnApi.at(apiConfig.endpoints.consultarGuia),
    CallAnApi.at(apiConfig.endpoints.crearGuia)
);
