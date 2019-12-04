for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    if (i % 4 === 0) {
      process.stdout.write('\r|   ');
    } else if (i % 4 === 1) {
      process.stdout.write('\r/   ');
    } else if (i % 4 === 2) {
      process.stdout.write('\r-   ');
    } else if (i % 4 === 3) {
      process.stdout.write('\r\\   ');
    }
  }, 100 + (200 * i));
}