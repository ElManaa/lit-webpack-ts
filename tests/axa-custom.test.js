import { AxaCustom } from "../src/component/component";

import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";

suite("card-small", () => {
  test("is defined", () => {
    const el = document.createElement("axa-card");
    assert.instanceOf(el, AxaCustom);
  });

  test("renders with sm default values", async () => {
    const el = await fixture(html` <axa-custom></axa-custom>`);
    assert.shadowDom.equal(
      el,
      ` <div class="container">Hello, You</div>
    `
    );
  });
});
