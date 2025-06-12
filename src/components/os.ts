import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./terminal";
import Storage from "../libs/storage";

@customElement("prisma-os")
export default class OS extends LitElement {
  @state()
  storage: Storage = new Storage();

  render() {
    return html`<prisma-terminal .storage=${this.storage}></prisma-terminal>`;
  }
}
