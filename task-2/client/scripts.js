const videosContainer = document.getElementById('videos-container');
const searchInput = document.getElementById('searchInput');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPage = 1;
const videosPerPage = 12;

// Function to fetch videos
async function fetchVideos(page, perPage) {
  try {
    const response = await fetch(`http://localhost:8080/api/videos?page=${page}&perPage=${perPage}`);
    const data = await response.json();

    const videos = data.videos;

    videosContainer.innerHTML = '';

    videos.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.classList.add('video-item');
      videoItem.innerHTML = `
        <img src="${video.thumbnails.default.url}" alt="${video.title}">
        <h2>${video.title}</h2>
        <p>${video.description}</p>
      `;
      videosContainer.appendChild(videoItem);
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === data.totalPages;
  } catch (error) {
    console.error('Error while fetching videos:', error);
  }
}

async function searchVideos() {
    const searchQuery = searchInput.value.trim();
  
    if (searchQuery === '') {
      currentPage = 1;
      fetchVideos(currentPage, videosPerPage);
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/api/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
  
      const videos = data.videos;
  
      videosContainer.innerHTML = '';
  
      // Display video data
      videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
          <img src="${video.thumbnails.default.url}" alt="${video.title}">
          <h2>${video.title}</h2>
          <p>${video.description}</p>
        `;
        videosContainer.appendChild(videoItem);
      });
  
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } catch (error) {
      console.error('Error while searching videos:', error);
    }
  }

function changePage(step) {
  currentPage += step;
  fetchVideos(currentPage, videosPerPage);
}


fetchVideos(currentPage, videosPerPage);
