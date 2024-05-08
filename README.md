echo "# Simple Calculator CLI

Welcome to the Simple Calculator CLI repository! This repository contains the source code for a basic command-line calculator built using Node.js and TypeScript.

## Overview

This is a simple command-line calculator where you can perform basic arithmetic operations. It features a login system with username and password authentication, supports addition, subtraction, multiplication, division, modulus, and exponentiation. The calculator provides a clean and user-friendly CLI interface and handles division by zero error.

## Repository Structure

The repository is structured as follows:

- **main.ts**: The main TypeScript file containing the calculator logic.
- **index.js**: The compiled JavaScript file from the TypeScript source code.
- **README.md**: This README file providing an overview of the project.
- **LICENSE**: The license file for the project.

## Usage

To use the calculator, follow these steps:

1. Clone the repository:

\`\`\`bash
git clone https://github.com/your-username/simple-calculator.git
\`\`\`

2. Navigate to the project directory:

\`\`\`bash
cd simple-calculator
\`\`\`

3. Compile TypeScript file:

\`\`\`bash
tsc main.ts
\`\`\`

4. Run the calculator:

\`\`\`bash
node index.js
\`\`\`

5. Enter your username and password when prompted.
6. Input two numbers and select the arithmetic operation you'd like to perform from the provided options.
7. View the result and continue with more calculations or exit the calculator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to customize this README according to your preferences. Happy calculating! 🧮✨" > README.md
git init
git add README.md
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/simple-calculator.git
git push -u origin main
