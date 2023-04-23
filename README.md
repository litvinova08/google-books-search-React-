# Google Books Search (React app)

This app performs a volumes search by sending an HTTP GET request to the following URI:
https://www.googleapis.com/books/v1/volumes?q=search+terms

## Related Project
Google Book Search (JavaScript): https://github.com/litvinova08/google-books-search 

## App Features
This front-end application have the following features:
1. Fetch and display a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers
2. Display book title, authors, and published date 
3. Present the fetched data in a table, including book title, authors, and published date.
4. Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description.
5. Enable users to sort books by title, author, publish date. 

## App development steps
1. Created a React App with Vite 
2. Added a fetch function to retrieve the list of books.Dat ais fetched with axios in App.jsx
3. Data is getting displayed as a table with React Table Hook. Columns.jsx defines headers and accessors for table columns. 
4. A card component with additional information about each book gets open on click "More Info". Data is being fetched from https://www.googleapis.com/books/v1/volumes/${id}
5. Additional book details displayed on click include book title, book authors, image (if applicable) and description. Description is rendered using dangerouslySetInnerHTML command.
6. Added a functionality to allow sorting books by title, author, publish date using useSortBy hook from react-table. 

## Hooks used and features documentation
1. React Table: https://www.npmjs.com/package/react-table
2. Axios: https://www.npmjs.com/package/axios
3. dangerouslySetInnerHTML https://legacy.reactjs.org/docs/dom-elements.html

## Additional fatures planned to be implemented
1. Book search
2. Add navigation menu with a Home page
3. if image not available display a default image
4. Add CSS styling
5. Add search history
6. Add favouriting books (could be done with redux)
7. Add books rating system (could be done with redux)
8. Add personal reviews to your books (could be done with redux)
9. Use google books API collections features
10. Get good reads links and displaying them on the page
11. Use Book form for submission for books you can't find in the API (react-hook-form)
