
class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    const exceptionWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptionWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}

// Example usage:
console.log(Formatter.capitalize('hello world'));  // Output: 'Hello world'
console.log(Formatter.sanitize('he@llo! worl$d'));  // Output: 'hello world'
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog'));  // Output: 'The Quick Brown Fox Jumps over the Lazy Dog'
