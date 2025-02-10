import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export const RespuestaAPI = {
    estado: (): Question<Promise<number>> =>
        Question.about('el estado de la respuesta', async (actor) => {
            const response = await actor.answer(LastResponse.body());
            return response.statusCode || response.status || 0;
        }),
    cuerpo: (): Question<Promise<any>> =>
        Question.about('el cuerpo de la respuesta', async (actor) => {
            return await LastResponse.body().answeredBy(actor);
        }),
};
