export function add(numbers) {
  if (!numbers) return 0;  

  let delimiter = /,|\n/;  

   if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n(.*)/);
    if (match) {
      delimiter = new RegExp(match[1]);  
      numbers = match[2];  
    }
  }

  const numArray = numbers.split(delimiter).map((num) => Number(num.trim()));

   const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
