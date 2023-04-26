import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "@/styles.scss";

@customElement("axa-custom")
export class AxaCustom extends LitElement {
  static override styles = css`
    ${styles}
  `;

  @property({ type: String })
  name: string = "You";

  override render() {
    return html` <div class="container">Hello, ${this.name}</div> `;
  }
}
