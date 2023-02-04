import { Given, When, Then } from "@wdio/cucumber-framework";

Given("I am on the main page", async () => {
  await browser.url(`https://fantastic-chaja-9b2209.netlify.app/`);
});

When("I am clicking on the {int} product", async (product) => {
  const tableRow = await $(`#root table > tbody > tr:nth-child(${product})`);
  await tableRow.click();
});

Then("It should be modal with data on the screen", async () => {
  await expect($(`#root div.modal--bg > div.modal`)).toBeExisting();
});
