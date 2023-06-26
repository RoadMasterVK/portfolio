onmessage = function(event) {
  const options = event.data;
  const passwords = generatePasswords(options);
  postMessage(passwords);
};

function generatePasswords(options) {
  const { length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars, includeHexOnly } = options;
  const passwords = [];

  for (let i = 0; i < 5; i++) {
    const password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars, includeHexOnly);
    passwords.push(password);
  }

  return passwords;
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars, includeHexOnly) {
  let characters = '';

  if (includeLowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (includeUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeNumbers) {
    characters += '0123456789';
  }

  if (includeSpecialChars) {
    characters += '!@#$%^&*()';
  }

  if (includeHexOnly) {
    characters += 'ABCDEFabcdef0123456789';
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}
