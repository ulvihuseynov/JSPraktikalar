function generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumber,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumber ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  // console.log(allowedChars)

  if (passwordLength <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(at least 1 set of character needs to be selected)`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumber,
  includeSymbols
);
console.log(`Generate Password ${password}`);
