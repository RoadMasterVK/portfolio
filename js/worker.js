function generatePasswords() {
    const passwordLengthInput = document.getElementById('passwordLength');
    const passwordLength = parseInt(passwordLengthInput.value);

    if (isNaN(passwordLength) || passwordLength < 1) {
      alert('Invalid password length');
      return;
    }

    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;
    const includeHexOnly = document.getElementById('includeHexOnly').checked;

    const passwordGeneratorWorker = new Worker('js/pgworker.js');
    passwordGeneratorWorker.onmessage = function(event) {
      const passwordList = document.getElementById('passwordList');
      passwordList.innerHTML = '';

      const passwords = event.data;
      passwords.forEach(function(password) {
        const listItem = document.createElement('li');
        listItem.textContent = password;
        passwordList.appendChild(listItem);
      });
    };

    const options = {
      length: passwordLength,
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase,
      includeNumbers: includeNumbers,
      includeSpecialChars: includeSpecialChars,
      includeHexOnly: includeHexOnly
    };

    passwordGeneratorWorker.postMessage(options);
  }