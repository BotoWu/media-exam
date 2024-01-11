var images = ["images/menu-left.png", "images/proposal.png", "images/lineup.png"];
var currentImageIndex = 0;

function changeImage(titleItem) {
    if (titleItem) {
        var imageSrc = "";
        switch (titleItem) {
            case 'quality':
                imageSrc = "images/menu-left.png";
                break;
            case 'proposal':
                imageSrc = "images/proposal.png";
                break;
            case 'lineup':
                imageSrc = "images/lineup.png";
                break;
        }
        document.getElementById('image-container').src = imageSrc;
    } else {
        document.getElementById('image-container').src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
}

setInterval(function() {
    changeImage();
}, 5000);
