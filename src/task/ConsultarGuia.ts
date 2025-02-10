import { Task } from '@serenity-js/core';
import { Send, GetRequest } from '@serenity-js/rest';
import { Ensure, equals, property } from '@serenity-js/assertions';
import { LastResponse } from '@serenity-js/rest';
import { apiConfig } from '../utils/configuracionApi';

export const ConsultarGuia = {
    conId: (idGuia: string): Task =>
        Task.where(`#actor consulta la guía con ID ${idGuia}`,
            // Se envía la solicitud GET usando la URL definida en el endpoint + el id
            Send.a(
                GetRequest.to(`${apiConfig.endpoints.consultarGuia}${idGuia}`)
            ),
            // Validar el estado HTTP
            Ensure.that(LastResponse.status(), equals(200)),
            // Validar que no hubo error
            Ensure.that(LastResponse.body<any>(), 
                property('isError', equals(false))
            ),
            // Validar que el campo codigoRemision en los datos coincide con el id
            Ensure.that(LastResponse.body<any>(), 
                property('data.codigoRemision', equals(idGuia))
            ),
        ),
};
