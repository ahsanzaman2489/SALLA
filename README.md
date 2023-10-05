## Salla Web Component Challenge

### Overview
This is an assignment project for talented Senior Front-End developers who are willing to join Salla development team.

You will be responsible for creating a reusable web component that showcases your skills in front-end development. Each component should be well-structured, efficient, adhere to best practices, and include state management.
You will create a mini checkout ([Check the UI here](https://www.figma.com/file/rnfEwxBmXacQnX2hEefI2S/FrontEndChallange?type=design&node-id=34%3A4212&mode=dev)) using this simple MockAPI with the following steps:
1. Cart Items web Component.
2. Shipping Companies web component.

The checkout will be in 2 versions React and Vue to ensure web component re-usability in any different framework.
use the following API for the project:

| URL                                       | Description                         |
|-------------------------------------------|-------------------------------------|
| Base URL                                  | https://checkout.free.beeceptor.com |
| Cart Items                                | `/items`                            |
| Shipping Companies                        | `/shipping`                         |
| Coupons                                   | `/coupons`                          |
| Cart Total: with coupon and shipping fees | `/totals?coupon=false&shipping=dhl` |
| Order submit                              | `/submit`                           |

### Key Requirements:
1. **Technology Stack:**  
   1. You must use [StencilJS](https://stenciljs.com/), a powerful toolchain for building web components.
   2. Your Code must be written using TypeScript.
   3. Use Tailwind CSS as your styling utility.
2. **Component Functionality:** The web component should serve its purpose, From the [UI](https://www.figma.com/file/rnfEwxBmXacQnX2hEefI2S/FrontEndChallange?type=design&node-id=34%3A4212&mode=dev) provided, each checkout step should be in a separate web component
and implement state management within the component to handle and update internal data.
3. **Re-Usability:** Develop the component to be reusable in different web applications. It should follow the principles of encapsulation and provide a clear API for interaction, use the web components in 2 versions of the checkout (Vue and React)
4. **Unit Tests:** Write comprehensive unit tests for your web component to verify its functionality, including state management. Use a testing framework of your choice (e.g., Jest, Jasmine).
5. **Performance:** Optimize the component for performance. Consider lazy loading and asynchronous loading if applicable. Aim for minimal impact on page load times.
6. **Documentation:** Provide clear and concise documentation on how to use your web component. Include usage examples and explanations of available props, methods, events, and how the state management works.

### Submission Guidelines:
* Make sure your code is well-organized and follows best practices for TypeScript, Stencil JS, and unit testing.
* Include a README.md file with instructions on how to run the unit tests locally.
* Create a demo or example HTML file that showcases the usage of your web component, including interactions that demonstrate the state management.
* When you're ready, submit a production ready link to your repository along with any additional notes you'd like to share about your implementation.

### Evaluation Criteria:
Your solution will be evaluated based on the following criteria:

* Functionality: Does the web component serve its purpose, and is it implemented correctly, including state management?
* Code Quality: Is the code well-structured, maintainable, and efficient?
* Re-Usability: Can the component be easily reused in different projects?
* Unit Tests: Are there comprehensive unit tests that verify the component's functionality, including state management?
* Documentation: Is the usage of the component and its state management well-documented?
* Performance: Does the component perform efficiently?

* Provide your solution **within 7 calendar days**.
If you need any clarification you can send an email with your questions.