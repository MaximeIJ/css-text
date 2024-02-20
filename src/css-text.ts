import {getCharacterProperties} from './util';

export default class CSSText extends HTMLElement {
  private observer: MutationObserver;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // Initialize the MutationObserver
    this.observer = new MutationObserver(() => this.updateContent());
  }

  connectedCallback() {
    // Start observing changes in the content
    this.observer.observe(this, {childList: true, subtree: true});
    this.render();
  }

  disconnectedCallback() {
    // Disconnect the observer when the element is removed
    this.observer.disconnect();
  }

  private generateCharacterMarkup(character: string): string {
    const {display, className} = getCharacterProperties(character);
    return `<i part="letter ${className ?? character}">${display ?? character}</i>`;
  }

  private updateContent() {
    const sanitizedText = this.textContent || '';
    const newNodes = sanitizedText.split('').map(this.generateCharacterMarkup);

    if (this.shadowRoot) {
      // go through existing children and update them if they are different
      const oldChildren = [...this.shadowRoot.childNodes];
      const parser = new DOMParser();

      for (let i = 0; i < Math.max(oldChildren.length, newNodes.length); i++) {
        const oldChild = oldChildren[i] as HTMLElement;
        const newChild = newNodes[i];
        const newNode = newChild
          ? (parser.parseFromString(newChild, 'text/html').body.firstElementChild as HTMLElement)
          : null;
        if (!oldChild && newNode) {
          // create actual child element
          this.shadowRoot.appendChild(newNode);
        } else if (oldChild && newNode && oldChild.textContent !== newChild) {
          // update existing child
          oldChild.setAttribute('part', newNode.part?.toString());
          oldChild.innerText = newNode.innerText;
        } else if (!newNode && oldChild) {
          // remove old child
          this.shadowRoot.removeChild(oldChild);
        }
      }
    }
  }

  private render() {
    this.updateContent();
  }
}

customElements.define('css-text', CSSText);
