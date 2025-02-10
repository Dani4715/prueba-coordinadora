import { Task } from '@serenity-js/core';
import { Send, PostRequest } from '@serenity-js/rest';
import { apiConfig } from '../utils/configuracionApi';


export const CrearGuia = {
    conDatos: (datos: object): Task =>
        Task.where(`#actor envía una solicitud POST para crear una guía`,
            Send.a(
                PostRequest.to(apiConfig.endpoints.crearGuia).
                with(datos)
                .using({
                    headers: apiConfig.headers,
                })
            ),
        ),
};
