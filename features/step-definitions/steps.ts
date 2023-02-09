import { Given } from "@wdio/cucumber-framework";

Given("I am on the main page", async () => {
  await browser.url(`https://fantastic-chaja-9b2209.netlify.app/`);
});
