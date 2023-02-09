import { When, Then } from "@wdio/cucumber-framework";

When("I am clicking on the {int} product", async (product) => {
  const tableRow = await $(`#root table > tbody > tr:nth-child(${product})`);
  await tableRow.click();
});

Then("It should be modal with data on the screen", async () => {
  await expect($(`#root div.modal--bg > div.modal`)).toBeExisting();
});
