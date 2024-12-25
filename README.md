# Lifelearn

## **📖 Overview**

**Lifelearn** is a comprehensive academic study platform designed to support educators, students, and administrators. The platform offers a feature-rich website that includes an extensive online library, providing access to various educational resources, such as e-books, research materials, and multimedia learning content.

Additionally, **Lifelearn** features a high school management system tailored to streamline administrative tasks, including attendance tracking, grade management, scheduling, and communication between stakeholders. This system is a valuable tool for schools seeking to improve efficiency and enhance their educational offerings.

The high school management system is available for purchase directly through the Lifelearn website, making it accessible to institutions looking for an all-in-one solution to modernize their operations. Lifelearn aims to empower education through innovative tools and seamless integration of technology.

## 📝 Table of contents

|                                        Go direct to Headers                                        |
| :------------------------------------------------------------------------------------------------: |
|                             [Project Entry points](#project-entry-points)                             |
|                      [Project Configurations](#%EF%B8%8F-project-configurations)                      |
|                        [Project Dependencies](#%EF%B8%8F-project-dependencies)                        |
| [Project compiles and hot-reloads for development](#project-compiles-and-hot-reloads-for-development) |
|     [Project compiles and minifies for production](#project-compiles-and-minifies-for-production)     |

## **🎯Project Entry points**

In this part, we're going to talk about the folder structure in**src** folder. Let's dive in

* **`app`**: This folder is the entry point for the application and follows the **Next.js App Router** convention. It contains all the routes and pages, including layouts and components specific to a particular route.
* **`common`**: Houses reusable logic, utilities, or helpers shared across the application. Examples might include date formatters, validation logic, or constants used globally.
* **`components`**: Stores reusable UI components like buttons, modals, headers, and forms. These components are designed to be shared across multiple pages or features.
* **`constants`**: Contains static values or configuration constants used throughout the project. Examples include API endpoints, app settings, or enumerations.
* **`hooks`**: Includes custom React hooks to encapsulate and reuse stateful logic.
* **`i18n`**: Handles internationalization logic and settings for the application. It contain locale files, translation utilities, and configuration.
* **`lib`**: Stores utilities or libraries that are not React-specific. Examples: API clients, third-party integrations, or reusable services.
* **`messages`**: Contains translations or localized text files for different languages. These files are used in conjunction with the **`i18n`** folder to support internationalization.
* **`public`**: Static files that are served as-is by Next.js. Examples include images, fonts, and static assets like robots.txt or favicon.
* **`types`**: Stores TypeScript type definitions and interfaces to keep the project type-safe and well-structured. Examples: global types, API response schemas, or component props.

#### ⚙️ Project Configurations

###### .env

```bash
NEXT_APP_LOCALE=
NEXT_APP_LOCALE_FALLBACK=
NEXT_APP_TIMEZONE=
```

###### .env.local

```bash
NEXT_APP_API_URL=
NEXT_APP_URL=
NEXT_APP_API_PORT=
NEXT_APP_PORT=
```

#### ⚒️ Project Dependencies (node version 23.4.0)

```bash
npm install
```

#### 💥Project compiles and hot-reloads for development

```bash
npm run dev
```

#### 🚀 Project compiles and minifies for production

```bash
npm run build
```
