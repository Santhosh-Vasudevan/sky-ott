# Sky View App

A responsive OTT-style web application that displays a rich catalog of movies with interactive search and data visualization. Users can explore movies, view detailed information, and analyze streaming activity trends over time.

## 📌 About the App

Sky View mimics a simplified OTT platform interface inspired by services like Netflix or Disney+. It offers:

- A home page with featured movie banners and categorized movie rows.
- Search and filter functionality for quick movie discovery.
- A detailed view for each movie.
- A dashboard showing time-based streaming activity (timeseries chart).

## ⚙️ Install & Run Locally

```bash
# 1. Clone the repository
git clone <HTTPS | SSH>
cd sky-view

# 2. Install dependencies
nvm use
npm install

# 3. Run the development server
npm start
```

Preview: `http://localhost:3000`

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 🧱 Tech Stack Used

| Category         | Tools / Libraries                       |
| ---------------- | --------------------------------------- |
| Frontend         | React, TypeScript                       |
| Routing          | React Router DOM                        |
| State Management | React Hooks (useState, useEffect)       |
| Data Fetch       | Fetch API                               |
| Styling          | Styled Components                       |
| Chart Library    | Recharts (for timeseries visualization) |
| Icons            | React Icons                             |
| Loading UI       | Custom Loader Component                 |

## ✨ Features Implemented

### Home Page

- Dynamic **hero banner** (random movie per render).
- Scrollable rows for **Sky Disney** and **Sky Cinema** content.
- Responsive poster cards with hover effects.
- **Navigation** to movie details on click.

### Movies Page

- **Search bar** to find movies by name (live filtering).
- **Genre filter dropdown** to refine results.
- Clickable movie cards to view **detailed info**.
- Responsive design with lazy-loaded images for performance.

### Movie Details Page

- Detailed movie information including:
  - Description, views, provider, duration, genres.
  - Styled layout and **back navigation**.

### Timeseries Dashboard

- Interactive **line chart** showing streaming activity over time.
- Explanation of how timeseries relates to OTT platform usage.
- Navigation back to Movies Page.

## ✅ Future Enhancements (Optional Ideas)

- Sort movies by popularity or views.
- Show related movies on the details page.
- Add pagination or infinite scroll.
- Deploy with Vercel/Netlify for live demo.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/)
