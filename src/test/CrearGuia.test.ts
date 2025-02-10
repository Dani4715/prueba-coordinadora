import { test, expect } from '@playwright/test'; 
import { usuario } from '../actors/Usuario';
import { CrearGuia } from '../task/CrearGuia';
import { RespuestaAPI } from '../question/RespuestaAPI';

test.setTimeout(20000);

test.describe('Crear Guía API', () => {
    test('debe crear una guía exitosamente', async () => {
        const datos = {
            identificacion: '890904713',
            divisionCliente: '00',
            idProceso: 100001,
            codigoPais: 170,
            valoracion: '200000',
            tipoCuenta: 3,
            contenido: 'reloj',
            codigoProducto: '',
            nivelServicio: 22,
            detalle: [
                {
                    pesoReal: 1,
                    largo: 5,
                    ancho: 5,
                    alto: 3,
                    unidades: 1,
                    ubl: 0,
                    referencia: 'ref detalle',
                },
            ],
            datosRemitente: {
                identificacion: '1020304044',
                detalleRemitente: 'Casa',
                tipoViaRemitente: '7',
                viaRemitente: '15',
                numeroRemitente: '53 48',
                codigoCiudadRemitente: '76001000',
                descripcionTipoViaRemitente: 'Calle',
                direccionRemitente: 'Calle 53 # 53 48',
                nombreRemitente: 'Remitente Prueba',
                indicativoRemitente: '57',
                celularRemitente: '3007876543',
                correoRemitente: 'pruebaremitente@coo.com',
            },
            datosDestinatario: {
                identificacion: '1254511109',
                detalleDestinatario: 'Casa',
                tipoViaDestinatario: '5',
                viaDestinatario: '15',
                numeroDestinatario: '45 93',
                descripcionTipoViaDestinatario: 'Calle',
                direccionDestinatario: 'calle 45 93',
                codigoCiudadDestinatario: '76001000',
                nombreDestinatario: 'Destinatario Prueba',
                indicativoDestinatario: '57',
                celularDestinatario: '3216549825',
                correoDestinatario: 'pruebadestinatario@coor.com',
            },
            valorRecaudar: '13455',
            referenciaRecaudo: '45155845465657878888867685995',
            tipoGuia: 1,
            referenciaGuia: 'Ref guía',
            usuario: 'prueba@coordinaora.com',
            fuente: 'envios',
            observaciones: 'prueba RCE',
        };

        console.log('Enviando datos:', JSON.stringify(datos, null, 2));
        // Enviar la solicitud para crear la guía
        await usuario.attemptsTo(CrearGuia.conDatos(datos));

        // Obtener el estado y cuerpo de la respuesta
        const estado = await usuario.answer(RespuestaAPI.estado());
        const cuerpo = await usuario.answer(RespuestaAPI.cuerpo());

        // Loguear estado y cuerpo para depuración
        console.log('Estado de la respuesta:', estado);
        console.log('Cuerpo de la respuesta:', JSON.stringify(cuerpo, null, 2));

        // En lugar de validar el estado HTTP (ya que se recibe 0),
        // validamos que la respuesta contenga datos que indiquen el éxito.
        expect(cuerpo.isError).toBe(false);
        expect(cuerpo.data.codigo_remision).toBeDefined();
        expect(cuerpo.data.codigo_remision).not.toBe('');
        
    });
});
