import { expect, test } from "@playwright/test";
import request from "node:test";

test('Api get', async({request})=>{
    const response= await request.get("https://parabank.parasoft.com/parabank/images/logo.gif");
await expect(response.status()).toBe(200);
await expect (response.ok()).toBeTruthy();
})