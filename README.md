# SauceDemo E2E Automation Suite 🧪

Professional End-to-End testing framework built with Cypress, implementing the Page Object Model (POM) design pattern to validate critical flows of the SauceDemo e-commerce platform.

## 🚀 Project Overview

This project demonstrates a scalable test architecture suitable for enterprise environments. Instead of simple linear scripts, I implemented a modular structure that separates test logic (Specs) from page interactions (Page Objects).

**Key Technical Highlights:**

- **Architecture:** Strict Page Object Model (POM) implementation for maintainability.
- **Clean Code:** Usage of Method Chaining for readable, fluent assertions.
- **Resilience:** Dynamic selectors avoiding brittle XPaths.
- **Coverage:** Happy path (Login/Checkout) and Edge cases (Invalid login, Empty fields).

## 🛠️ Tech Stack

- **Cypress (v15.x)** - E2E Testing Framework
- **JavaScript (ES6+)** - Programming Language
- **Node.js** - Runtime Environment
- **VS Code** - IDE

## 📂 Project Structure

```
cypress/
 ├── e2e/
 │   ├── login.cy.js        # Login Scenarios (Positive & Negative)
 │   └── compras.cy.js      # Full Checkout Flow & Sort Logic
 ├── support/
 │   └── pages/
 │       └── LoginPage.js   # Page Object Class (Encapsulated logic)
```

## ⚡ How to Run

**Install Dependencies:**

```bash
npm install
```

**Run Interactive Mode (Cypress App):**

```bash
npm run cy:open
```

**Run Headless (CI/CD Mode):**

```bash
npx cypress run
```

## 🧪 Scenarios Covered

| ID | Scenario | Type | Status |
|----|----------|------|--------|
| 01 | Login with valid credentials | Smoke | ✅ Passing |
| 02 | Block invalid login attempts | Regression | ✅ Passing |
| 03 | Validate required fields (Username/Password) | Negative | ✅ Passing |
| 04 | End-to-End Checkout Flow (Purchase) | Critical Path | ✅ Passing |
| 05 | Product Sorting (Low to High) | Functional | ✅ Passing |

---

**Author:** Gregory Oliveira Pina  
**QA Automation Engineer**
