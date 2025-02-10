import { test, expect } from '@playwright/test';
import axios from 'axios';
import { apiConfig } from '../utils/configuracionApi';

test.setTimeout(50000);

test.describe('Consultar Guía API', () => {
  test('debe consultar una guía existente exitosamente', async () => {
    const idGuia = '99020012725';

    // Construir la URL completa
    const url = `${apiConfig.endpoints.consultarGuia}${idGuia}`;
    console.log('Consultando la API con la URL:', url);  // Agregar log para depurar

    try {
      // Realiza la solicitud a la API directamente con Axios
      const response = await axios.get(url);
      console.log('Respuesta completa:', response.data);  // Log para depurar

      // Verifica que el código de estado de la respuesta sea 200
      expect(response.status).toBe(200);

      // Asegúrate de que la propiedad 'codigoRemision' existe en la respuesta
      expect(response.data.data.codigoRemision).toBe('99020012725');
      
      // Puedes imprimir el cuerpo completo de la respuesta para revisarlo si es necesario
      console.log('Cuerpo de la respuesta:', response.data);
    } catch (error) {
      console.error('Error al consultar la guía:', error);
      throw error;
    }
  });
});
