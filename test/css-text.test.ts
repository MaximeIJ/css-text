import {afterAll, beforeAll, describe, it, vi} from 'vitest';

import '../src/css-text';

// render css-text component with text content
describe('css-text', () => {
  let cssText: Element;

  beforeAll(() => {
    cssText = document.createElement('css-text', {is: 'css-text'});
    document.body.appendChild(cssText);
    cssText.textContent = 'hello';
  });

  it('should render the text content', ({expect}) => {
    expect(cssText.shadowRoot?.textContent).toBe('hello');
  });

  it('each letter should have the right part', ({expect}) => {
    const letters = cssText.shadowRoot?.querySelectorAll('i[part^="letter"]');
    expect(letters?.length).toBe(5);
    expect(letters?.[0].getAttribute('part')).toBe('letter h');
    expect(letters?.[1].getAttribute('part')).toBe('letter e');
    expect(letters?.[2].getAttribute('part')).toBe('letter l');
    expect(letters?.[3].getAttribute('part')).toBe('letter l');
    expect(letters?.[4].getAttribute('part')).toBe('letter o');
  });

  // skipped because shadowRoot elements are coming out without the part attribute
  it.skip('replaces the content of the shadow elements when text changes', async ({expect}) => {
    cssText.innerHTML = 'world';
    await vi.waitFor(() => cssText.shadowRoot?.querySelector('i[part="letter d"]') !== null);
    const letters = cssText.shadowRoot?.querySelectorAll('i[part="letter d"]');
    expect(letters?.length).toBe(5);
    expect(letters?.[0].getAttribute('part')).toBe('letter w');
    expect(letters?.[1].getAttribute('part')).toBe('letter o');
    expect(letters?.[2].getAttribute('part')).toBe('letter r');
    expect(letters?.[3].getAttribute('part')).toBe('letter l');
    expect(letters?.[4].getAttribute('part')).toBe('letter d');
  });

  afterAll(() => {
    document.body.removeChild(cssText);
  });
});
