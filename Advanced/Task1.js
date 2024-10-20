// Simulate Infinite Scroll Functionality in a Terminal

const loadMoreContent = () => {
    console.log('New content loaded');
};

const simulateInfiniteScroll = () => {
    console.log('Infinite scroll functionality is set up. Loading more content every 3 seconds');
    setInterval(() => {
        loadMoreContent();
    }, 30);
};

simulateInfiniteScroll();
