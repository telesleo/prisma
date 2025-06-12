import { LitElement, html, css } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import CommandCore from "../libs/command-core";
import { processStamps } from "../libs/terminal";
import type Storage from "../libs/storage";

@customElement("prisma-terminal")
export default class Terminal extends LitElement {
  commandCore: CommandCore = new CommandCore();

  @query("#input")
  inputElement!: HTMLElement;

  @state()
  logs: string = "";
  @state()
  input: string = "";

  @property({ type: Object })
  storage!: Storage;

  write(log: string, input: boolean = false) {
    log = input ? `<span class="input">${log}</span>` : log;
    this.logs = this.logs ? this.logs + "\n" + log : log;
    this.logs = processStamps(this.logs);
  }

  runCommand() {
    this.write(`> ${this.input}`, true);
    this.commandCore.execute(this.input, this.write.bind(this), this.storage);
    this.input = "";
  }

  onClick() {
    this.inputElement.focus();
  }

  onInput(event: { target: HTMLInputElement }) {
    this.input = event.target.value;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.runCommand();
    }
  }

  render() {
    return html`<div
      id="terminal"
      @click=${this.onClick}
      @keydown=${this.onKeyDown}
    >
      <p id="logs" .innerHTML=${this.logs}></p>
      <div id="query-and-input">
        <p id="query">${"> "}</p>
        <input
          id="input"
          autocomplete="off"
          .value=${this.input}
          @input=${this.onInput}
        />
      </div>
    </div>`;
  }

  static styles = css`
    #terminal {
      box-sizing: border-box;
      min-width: 100%;
      min-height: 100%;
      height: fit-content;
      padding: var(--padding);
    }

    #logs {
      margin: 0;
      white-space: pre-wrap;
      color: var(--gray);
    }

    #logs .input {
      color: var(--white);
    }

    #query-and-input {
      display: flex;
      direction: row;
    }

    #query {
      margin: 0;
      white-space: pre-wrap;
    }

    #input {
      width: 100%;
      padding: 0;
      outline: 0;
      border: 0;
    }

    #terminal,
    #input {
      color: var(--white);
      background-color: var(--black);
      font-family: var(--font-family);
      font-size: var(--font-size);
    }
  `;
}
