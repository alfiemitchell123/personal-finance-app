# Personal Finance App


This is a solution to the [Personal finance app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/personal-finance-app-JfjtZgyMt1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
  

## Overview

  

### Key Features:

- **User Authentication:**
	- **Feature:** Secure login and signup using Firebase Authentication.
	- **Key Points:**
	    -   Users can create accounts, log in, and stay authenticated across sessions.
	    -   Ensures unauthorized users cannot access protected routes.
	    -   Integration with AuthProvider and React Context for managing user state.

- **Financial Data Management:**
	- **Feature:** Users can track their financial transactions, budgets, pots, and recurring bills.
	-  **Key Points:**
		- Dashboard provides a snapshot of overall financial health and progress toward goals.
	    -   Transactions include amounts, categories, and associated icons/images.
	    -   Budgets can be created, edited, and associated with specific spending limits and color-coded categories.
	    -   Pots serve as savings goals, where users can add or withdraw money with dynamic progress tracking.

- **Responsive Design:**

	- **Feature:** Fully responsive application built with Chakra UI.
	- **Key Points:**
	    -   Adjusts layout for various screen sizes using breakpoints.
	    -   Sidebar and other components adapt dynamically for mobile views.

### Demo Login Credentials:

To see a demo with pre-filled application data, use the credentials below to login:

- **Email:** `demo@finance.com`
- **Password:** `frontend`

Example transaction images have been added manually to reflect the Figma design. When adding new transactions, the images will update automatically based on the category.
  

### Links:

  

- Solution URL: [Frontend Mentor](https://your-solution-url.com)

- Live Site URL: [Personal Finance App](https://personal-finance-app-snowy.vercel.app/login)

- [App Screenshot](https://ibb.co/X36zft8)

  

## My process

  

### Built with:

- [Remix](https://remix.run/) - A React framework for production.

- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JavaScript.

- [Firebase](https://firebase.com/) - Backend platform for authentication, database and more.

- [Chakra UI](https://www.chakra-ui.com/) - A comprehensive library of accessible, reusable, and composable React components.


### In the future:

For my next project, I want to approach things more thoughtfully, starting with a solid plan and spending time on the application's architecture before jumping into the code. In this project, I ran into a lot of problems because I skipped over some fundamental issues early on. I was so excited to get to the "fun" parts that I ignored what seemed like small details at the time, but they snowballed into bigger problems later.

Here’s how I plan to improve my process for the next project:

- Docker
	- **Why:** To create a consistent environment for building and running the application.
	- By containerizing the app, I can make sure it works the same across different machines, which will help avoid "it works on my computer" issues. This should also make it easier to deploy without running into unexpected errors.

- Testing Frameworks (e.g., Cypress, Playwright, Vitest, Jest)
	- **Why:** To test as I go and catch issues early.
	- I’ll use tools like Jest or Vitest for unit tests to make sure individual components work as expected and Cypress or Playwright for end-to-end testing to check the overall user flow. Writing tests during development will help me avoid piling up bugs that are harder to fix later.

- GitHub Actions
	- **Why:** To automate repetitive tasks like running tests and deploying updates.
	- Setting up CI/CD pipelines with GitHub Actions will make the build and deployment process smoother and more reliable. It’ll also help catch problems early and save me time by automating tasks I’d otherwise have to do manually.

By focusing on planning and integrating tools like these from the start, I hope to spend less time fixing avoidable problems and more time building features. My goal is to make the next project more efficient and enjoyable while learning from the mistakes I made this time around.

 
### Useful resources:

- [Personal Finance App - Guney Unay](https://www.frontendmentor.io/solutions/fullstack-personal-finance-app-xi45ayqyMY) - Though I went for a different approach to this project, I used Guney's solution to help get an idea of how certain elements should be throughout.

- [Jacob Paris - Remix Hydration Errors](https://www.jacobparis.com/content/remix-hydration-errors) - I used this article to help fix hydration errors I had throughout the development of the application.

## Author


- Frontend Mentor - [@alfiemitchell123](https://www.frontendmentor.io/profile/alfiemitchell123)

- LinkedIn - [@alfie-mitchell-dev](www.linkedin.com/in/alfie-mitchell-dev)

  

## Acknowledgments

Thank you to Guney Unay for his [solution](https://www.frontendmentor.io/solutions/fullstack-personal-finance-app-xi45ayqyMY) on Frontend Mentor. It helped me get a good idea of how the application should work. His solution is spot on!

A huge thanks to [Ashik](https://www.fiverr.com/ashikjs/) too. I was attempting to deploy my finished project to Vercel for weeks, and was receiving an error: This Serverless Function has crashed. I had tried everything, asked every forum, used ChatGPT to the max, gone through every Vercel deployment log and still didn't have any luck. I reached out to Ashik and within two hours, he had found the bug and successfully deployed my project! It turned out that there was a small bug when importing Phosphor Icons. Instead of importing them using "@phosphor-react", they each had to be imported directly using "@phosphor-icons/react/dist/ssr/ExampleIcon". It was something so small, but incredibly hard to debug without any guidance. Thank you, Ashik!