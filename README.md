# Google Books Searc (React app)

This app performs a volumes search by sending an HTTP GET request to the following URI:
https://www.googleapis.com/books/v1/volumes?q=search+terms


## App Features
This front-end application will have the following features:
1. Fetch and display a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers
2. Display book title, authors, and published date 
3. Present the fetched data in a table, including book title, authors, and published date.
4. Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description.
5. Encourage the candidates to showcase their creativity and add a personal touch to the application.
6. Include a README file explaining the app's features and the creative elements introduced. (use the template in the post course repo)

## App development plan
1. Create a React App with Vite (actioned)
2. Add fetch function to retrieve the list of books -> useEfect & axios
3. Display data as a table -> displayed with React Table Hook
4. create a card component for each book which gets open on click. Data with be fetched from https://www.googleapis.com/books/v1/volumes/${id}
5. display book details on a card on click
6. Add CSS styling

## Hooks used
React Table: https://www.npmjs.com/package/react-table
Axios: https://www.npmjs.com/package/axios

## Additional Features 
1. Sorting books by title, author, publish date
2. Book search
3. Add search history
4. Add favouriting books (could be done with redux)
5. Add books rating system (could be done with redux)
6. Add personal reviews to your books (could be done with redux)
7. Use google books API collections features
8. Get good reads links and displaying them on the page
9. Use Book form for submission for books you can't find in the API (react-hook-form)
