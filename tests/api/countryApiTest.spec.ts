// tests/api/countryApiTest.spec.ts
import { test, expect } from '@playwright/test';
import { getRequest } from '../utils/apiUtils';

const apiUrl = 'https://msa-api-testing.back.finkargo.com/v1/dictionaries/country';

test.describe('GET Country API Tests', () => {
  
  // Prueba 1: Verificar que la respuesta es exitosa y contiene el país 'COLOMBIA'
 test('Search for COLOMBIA - Should return 200 and correct data', async () => {
  const params = { search: 'COLOMBIA' };
  const response = await getRequest(apiUrl, params);

  expect(response.status).toBe(200);  // Código de estado debe ser 200

  console.log(response.data);  // Inspeccionar la estructura de la respuesta

  // Ajustar según la estructura real de response.data
  expect(response.data.data).toBeInstanceOf(Array);  // La respuesta debe ser un array
  expect(response.data.data.length).toBeGreaterThan(0);  // La respuesta no debe estar vacía

  const colombia = response.data.data.find((item: { name: string }) => item.name.toUpperCase() === 'COLOMBIA');
  expect(colombia).toBeDefined();
    // 'COLOMBIA' debe estar presente en los resultados
    if (response.status === 200) {
        console.log('Prueba exitosa: Estatus 200 obtenido.');
      }
    
  
});
  

});
