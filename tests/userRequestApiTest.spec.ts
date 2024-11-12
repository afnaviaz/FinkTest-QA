// tests/api/userRequestApiTest.spec.ts
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { Actor } from '../../actors/Actor';
import { CallAnApi } from '../../abilities/CallAnApi';
import { SendUserRequest } from '../../tasks/SendUserRequest';

const apiUrl = 'https://msa-api-testing.back.finkargo.com';

// Función para generar el email aleatorio con dominio yopmail.com
function generateRandomEmail() {
  return `${faker.internet.username()}@yopmail.com`.toLowerCase();
}

// Función para generar el NIT modificado
function generateModifiedNit() {
  let randomCompanyNit = faker.number.int({ min: 1000000000, max: 9999999999 }).toString();
  let modifiedNit = randomCompanyNit.slice(0, 1) + randomCompanyNit.slice(2);
  return modifiedNit;
}

test('Create User Request - Should return 201 and correct data', async () => {
  const user_email_request = generateRandomEmail();
  const user_name = faker.person.firstName();
  const user_surname = faker.person.lastName();
  const nit = generateModifiedNit();
  const id_country = 49;

  const requestBody = {
    email: user_email_request,
    name: user_name,
    surname: user_surname,
    country: id_country,
    cellphone_number: "3178696749",
    country_indicative: id_country,
    country_company: id_country,
    identity_number_company: nit,
    password: "Sistemas123@",
    post: 1
  };

  const actor = Actor.named('API Tester').whoCan(CallAnApi.at(apiUrl));

  try {
    const response = await actor.attemptsTo(SendUserRequest.with(requestBody));

    // Imprimir la respuesta completa
    console.log('Respuesta completa:', JSON.stringify(response.data, null, 2));

    // Verificamos que el código de estado sea 201 (Creación exitosa)
    expect(response.status).toBe(201);

    // Verificamos que la respuesta contenga los campos esperados
    expect(response.data).toHaveProperty('email');
    expect(response.data).toHaveProperty('access_token');
    expect(response.data).toHaveProperty('refresh_token');
    expect(response.data).toHaveProperty('roles_tags');
    expect(response.data).toHaveProperty('groups_tags');

    // Validar los valores de los campos
    expect(response.data.email).toBe(user_email_request);
    expect(response.data.access_token).toMatch(/^[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/);
    expect(response.data.refresh_token).toMatch(/^[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/);
    expect(response.data.roles_tags).toContain('client_new');
    expect(response.data.groups_tags).toContain('client');

    // Imprimir mensaje de éxito si la prueba es exitosa
    console.log('Prueba exitosa: Usuario creado correctamente.');
  } catch (error: any) {
    // Mostrar detalles del error
    if (error.response) {
      console.error('Error en la petición POST:', error.response.status);
      console.error('Mensaje de error:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('Error desconocido:', error.message);
    }
    throw error;
  }
});