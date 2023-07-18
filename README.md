# HACK2SKILL - ASSIGNMENT

## Task - 1
- Frontend deployed link: https://fanciful-jalebi-c59cdf.netlify.app/
- Backend deployed link: https://hack2skill-task1-production.up.railway.app/

This is a web application that fetches and displays data from two MongoDB collections using joins. It provides a simple user interface to trigger the data retrieval and presents the fetched data in a tabular format.

## Features

- Fetches data from two MongoDB collections using join operation
- Presents the fetched data in a tabular manner
- Single action button to trigger data retrieval
- Simple and intuitive user interface

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (MongoDB ORM)
- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:

```
    git clone https://github.com/themanvendra00/hack2skill.git
```

2. Set up environment variables:
   - Create a .env file in the root folder.
     ```
     PORT:your_port
     MONGODB_URI=mongodb://username:password@your-mongodb-uri
     ```

3. Install the dependencies:

```
    cd hack2skill/task-1
    npm install
```

4. Start the server:

```
    npm run server
```

5. Open the application in your browser:
```
    http://localhost:8080/
```

## Usage
- Click the "Fetch Data" button to trigger the data retrieval.
- The fetched data will be displayed in the table.

## Task-2
- Frontend deployed link: https://elegant-sfogliatella-782c93.netlify.app/
- Backend deployed link: https://hack2skill-task2-production.up.railway.app/

This is a Node.js application that continuously fetches the latest videos from YouTube based on a search query and stores them in a MongoDB database. The application also provides APIs to retrieve paginated video data and perform basic searches.

## Features

- Fetches the latest videos from YouTube API based on a predefined search query at regular intervals.
- Stores video data (title, description, publishing datetime, thumbnails URLs) in a MongoDB database.
- Provides a GET API endpoint to retrieve stored video data in a paginated response sorted by published datetime in descending order.
- Implements a basic search API to search stored videos by title and description.

1. Clone the repository:

```
    git clone https://github.com/themanvendra00/hack2skill.git
```

2. Set up environment variables:
   - Create a .env file in the root folder.
     ```
     PORT:your_port
     YOUTUBE_API_KEY=key
     MONGODB_URI=mongodb://username:password@your-mongodb-uri
     ```

3. Install the dependencies:

```
    cd hack2skill/task-2
    npm install
```

4. Start the server:

```
    npm run server
```

5. Open the application in your browser:
```
    http://localhost:8080/
```

### APIs
- GET /api/videos: Get stored video data in a paginated response, sorted by published datetime in descending order. Use page and perPage query parameters for pagination (e.g., /api/videos?page=1&perPage=10).

- GET /api/search: Search stored videos using their title and description. Use the query query parameter to specify the search query (e.g., /api/search?query=example).

### Customization
Modify the YOUR_SEARCH_QUERY in app.js to specify your desired search query for fetching videos from YouTube.

### Docker
To run the application using Docker, use the following commands:

```
docker pull themanvendra/youtube-api.0.0.1.RELEASE
```
