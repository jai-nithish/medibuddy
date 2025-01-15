# React Dynamic API Renderer

This is a React project that fetches data dynamically from the following API:  
`https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config`.  

The data is then rendered and displayed on a website, including various sections and components such as health check-up packages, banners, and service cards.

---

## Features

- **Dynamic Data Fetching**: The application fetches data from a mock API and renders it dynamically on the website.
- **Modular Components**: Each section, like banners, health checkups, and service cards, is built as a reusable component with its own CSS file.
- **Responsive Design**: Styled for various screen sizes for a seamless user experience.
- **API Integration**: Utilizes asynchronous functions to retrieve data from the provided API endpoint.

---

## Project Structure

The project directory includes the following key files and folders:

### **Source Folder (`src`)**

- **`App.js`**: Entry point for the app, which integrates all components.
- **Components**:
  - `DynamicBannerRenderer.js`: Renders dynamic banners.
  - `FeaturedHealthCheckupRenderer.js`: Displays featured health check-up packages.
  - `ServiceCards.js`: Renders service cards dynamically.
- **CSS Files**:
  - `App.css`: Global styles.
  - `ServiceCard.css`: Styles for the service card component.
  - Individual component styles for each renderer (e.g., `DynamicBannerRenderer.css`).

### **API Integration**
- **`api.js`**: Contains the logic for fetching data from the API.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js**: Version 14 or higher.
- **npm**: Comes with Node.js, used to install dependencies.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Details

The app fetches data from the following endpoint:  
**API URL**: `https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config`

The API provides JSON data, which includes configurations for various sections on the website. These sections are dynamically rendered using React components.

---

## Deployment

This app can be deployed on any hosting platform. Below are deployment steps for Netlify:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**:
   - Drag and drop the `build` folder into the Netlify dashboard.
   - Alternatively, connect your GitHub repository and set the build command to `npm run build` with a publish directory of `build`.

2. **Deployed Site**:
   - Using Netlify deployed it onto the master branch
    https://medibuddyhealth.netlify.app/
---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## License

This project is open-source and available under the MIT License.
