# Movie Search App


## Description

This is a movie search web application that interacts with the OMDB API to allow users to search for movies, TV series, and episodes by title or keyword. The app includes several features such as filtering by movie type, pagination for large result sets, infinite scroll, and detailed views for individual movies. The app is built using React, Axios, Tailwind CSS, and React Router for client-side routing.

## Demo : [Click Here!!!](https://movies-searchappreact.netlify.app/)

## Features

- **Movie Search:** Users can search for movies, series, or episodes by entering a title or keyword.
  
- **Movie Type Filtering:** A dropdown filter allows users to narrow the search results by type (Movie, Series, Episode).
  
- **Infinite Scroll:** The app supports paginated search results or infinite scroll, allowing users to browse through large datasets.
  
- **Detailed Movie View:** Each movie or series has a detailed view showing a larger poster, title, release year, genre, plot summary, ratings, and cast.
  
- **Search State Preservation:** When viewing movie details, users can return to the same search results without losing their search term, filters, or current page.
  
- **Error Handling:** Displays user-friendly error messages for cases such as no results found, API request failures, etc.


## Technologies Used

- **React:** For building the user interface and managing components.
  
- **Axios:** For making HTTP requests to the OMDB API.
  
- **Tailwind CSS:** For styling the application with utility-first CSS classes.
  
- **React Router:** For handling client-side routing between search and movie detail pages.
  
- **OMDB API:** External API for fetching movie, series, and episode data.

## Usage
1. **Search for Movies :** Enter a movie title or keyword into the search bar and click "Search." Results will be displayed in a grid layout with posters, titles, and release years.
Use the dropdown filter to narrow results by Movie, Series, or Episode.

2. **Infinite Scroll :**  At the bottom of the search results, navigate through pages to see more movies.

3. **Movie Details :** Click on any movie to view its details. The details page displays the full poster, title, release year, genre, plot summary, cast, and ratings.
Return to the search results using the "Back to search results" button.

4. **Error Handling :**
If the search term yields no results or if the API request fails, a user-friendly error message will be displayed.


## File Structure

1. src
   
   - api
     - Services.jsx
       
    - components
      - MovieCard.jsx
        
    - pages
      - SearchPage.jsx  
      - MovieDetailPage.jsx
        
2. App.jsx
              
3. index.js
              
4. README.md

