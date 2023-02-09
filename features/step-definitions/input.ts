import { When, Then } from "@wdio/cucumber-framework";

// TODO : find out how to handle escape characters in steps

When("I am passing {int} of the product", async (ID) => {
  const input = await $(`<input />`);
  await input.addValue(ID);
});

Then("I am clicking on Search button", async () => {
  const seartchBtn = await $(`//*[@id="root"]/div/form/button[1]`);
  await seartchBtn.click();
});

Then("It should be product with passed {int}", async (ID) => {
  const productID = await $(`table > tbody > tr > td:nth-child(2)`);
  await expect(productID).toBeExisting();
  await expect(productID).toHaveTextContaining(ID);
});
