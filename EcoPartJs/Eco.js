function changePictures(category) {
    const images = document.querySelectorAll('.se2img img');

    switch (category) {
        case 'vegetables':
            images.forEach((image, index) => {
                switch (index) {
                    case 0:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/Icontomato4733.jpg';
                        break;
                    case 1:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/IconBasilica2159.jpg';
                        break;
                    case 2:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/IconGarlic460.jpg';
                        break;
                    case 3:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/IconDill152.jpg';
                        break;
                }
            });
            break;
        case 'fruits':
            images.forEach((image, index) => {
                switch (index) {
                    case 0:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/rich%20may%20peach%20.png';
                        break;
                    case 1:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/summer%20sweet%20peach.png';
                        break;
                    case 2:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/white-peach%20.png';
                        break;
                    case 3:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/peach%20flat.png';
                        break;
                }
            });
            break;
        case 'driedvegetables':
            images.forEach((image, index) => {
                switch (index) {
                    case 0:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/Icondried%20spinach3521.jpg';
                        break;
                    case 1:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/Icondried%20dill2726.jpg';
                        break;
                    case 2:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/Icondried%20mint324.jpg';
                        break;
                    case 3:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/Icondried%20parsley2843.jpg';
                        break;
                }
            });
            break;
        case 'driedfruits':
            images.forEach((image, index) => {
                switch (index) {
                    case 0:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/IconDried%20apricot218.jpg';
                        break;
                    case 1:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/IconNutt2432.jpg';
                        break;
                    case 2:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/IconWalnut2552.jpg';
                        break;
                    case 3:
                        image.src = 'http://ecoharvest.farm/img/NewCategory/Icondried%20apple3124.jpg';
                        break;
                }
            });
            break;
        default:
            break;
    }
}