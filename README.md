

# Search Dropdown with Tailwind Design

A simple, interactive search component that fetches data from a remote API and displays results in a dropdown list. This project uses vanilla JavaScript, Tailwind CSS. To create a responsive and user-friendly search experience.


## Features

- **Live Search**: As you type, search results appear dynamically.
- **Debounced API Calls**: Minimizes the number of API requests using debouncing.
- **Tailwind-Inspired Design**: Clean and responsive design using Tailwind CSS.
- **Click-to-Select**: Allows users to select an item from the dropdown, which populates the search field.

## Technologies Used

- **HTML5** and **CSS3** with **Tailwind CSS** for styling.
- **JavaScript (ES6)** for handling search and dropdown logic.
- **Fetch API** for data retrieval from a dummy search API.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (for running a local server, if desired)
- A code editor like [VS Code](https://code.visualstudio.com/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/search-dropdown.git
   ```

2. Navigate into the project directory:

   ```bash
   cd search-dropdown
   ```

3. Install dependencies (if any; otherwise skip this step):

   ```bash
   npm install
   ```

4. Open `index.html` in your browser, or use a live server to run the project locally.

### Usage

1. Start typing in the search input to see live search results.
2. Click on a search result to populate it into the input field.
3. Results will display dynamically as you type, with no page reload needed.

### Customization

You can modify the styling in `style.css` or adjust the Tailwind classes in `index.html` for different colors, fonts, or layouts. If you want to change the API source, edit the `apicall` function in `script.js` to point to a different endpoint.

### Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom CSS (if needed)
├── js/
│   └── script.js       # JavaScript for search functionality
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Authors
- [@ydhiman20](https://www.github.com/ydhiman20)


Feel free to customize this README as per your requirements!

Thank you for checking out this project! If you find it useful, feel free to give it a ⭐️!

