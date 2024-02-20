export function getCharacterProperties(character: string): {display?: string; className?: string} {
  let display, className;
  switch (character) {
    case ' ':
      className = 'space';
      display = '&nbsp;';
      break;
    case '\n':
      className = 'newline';
      display = '<br />';
      break;
    // punctuation
    case ',':
      className = 'comma';
      break;
    case '.':
      className = 'period';
      break;
    case '!':
      className = 'exclamation';
      break;
    case '?':
      className = 'question';
      break;
    case ':':
      className = 'colon';
      break;
    case ';':
      className = 'semicolon';
      break;
    case '-':
      className = 'hyphen';
      break;
    case '"':
      className = 'quote';
      break;
    case "'":
      className = 'apostrophe';
      break;
    case '(':
      className = 'parenthesis';
      break;
    case ')':
      className = 'parenthesis';
      break;
    case '[':
      className = 'bracket';
      break;
    case ']':
      className = 'bracket';
      break;
    case '<':
      className = 'angle';
      break;
    case '>':
      className = 'angle';
      break;
    case '/':
      className = 'slash';
      break;
    case '\\':
      className = 'backslash';
      break;
    case '|':
      className = 'pipe';
      break;
    case '_':
      className = 'underscore';
      break;
    case '=':
      className = 'equals';
      break;
    case '+':
      className = 'plus';
      break;

    default:
      break;
  }

  return {display, className};
}
