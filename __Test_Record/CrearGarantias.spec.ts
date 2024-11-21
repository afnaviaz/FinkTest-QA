import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-staging.finkargo.com.co/auth/login');
  await page.locator('label').filter({ hasText: 'Usuario *' }).click();
  await page.getByLabel('Usuario *').fill('finkargo-admin');
  await page.locator('label').filter({ hasText: 'Contraseña *' }).click();
  await page.getByLabel('Contraseña *').fill('finkargo');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.goto('https://app-staging.finkargo.com.co/analyst/home');
  await page.getByRole('button', { name: 'Garantías' }).click();
  await page.locator('#view-deatils-1126-button').click();
  await page.getByText('Detalle del cliente').click();
  await page.getByRole('button', { name: 'Agregar una nueva garantía' }).click();
  await page.getByLabel('Tipo de garantía *').click();
  await page.getByRole('option', { name: 'Producción' }).click();
  await page.getByLabel('Si').check();
  await page.getByLabel('Selecciona la operación').click();
  await page.getByRole('option', { name: 'CO:900674991:1:' }).click();
  await page.getByRole('heading', { name: 'Documentos de soporte' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('heading', { name: 'Detalles de la mercancía' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('heading', { name: 'Datos del proveedor' }).click();
  await page.getByLabel('Nombre del Agente de carga *').click();
  await page.getByRole('combobox', { name: 'Nombre del Agente de carga *' }).fill('ec41');
  await page.getByRole('option', { name: '87e84a81d3df7345b24aff21edf3ec41' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByLabel('Elige la fecha, la fecha').click();
  await page.getByRole('button', { name: '2024', exact: true }).click();
  await page.getByRole('button', { name: 'nov' }).click();
  await page.getByRole('gridcell', { name: '23' }).click();
  await page.getByRole('gridcell', { name: '21' }).click();
  await page.getByLabel('Elige la fecha, la fecha').click();
  await page.getByRole('button', { name: 'Cancelar' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
});