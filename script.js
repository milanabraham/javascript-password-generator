const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");

const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    const passwordLength = parseInt(lengthInput.value);
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
};

generateBtn.addEventListener("click", () => {
    const password = generatePassword();
    passwordInput.value = password;
});

copyBtn.addEventListener("click", () => {
    if (passwordInput.value) {
        passwordInput.select();
        document.execCommand("copy");
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
            copyBtn.innerText = "Copy";
        }, 1500);
    }
});
