// Carrega o vídeo do YouTube quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    const youtubeContainer = document.querySelector('.youtube-video-container');
    
    if (youtubeContainer) {
        const videoId = youtubeContainer.getAttribute('data-src');
        if (videoId) {
            youtubeContainer.innerHTML = `<iframe 
                src="${videoId}" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
        }
    }
});
