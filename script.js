const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");
const FOLDER_LIST = document.getElementsByClassName("ImageContainerPhotoGallery");
let photos_thumbnail = "";
let photos_displayed = [];
let photo_overlay = document.getElementById("#PhotoOverlay");

function openDialogPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    DIALOG_REF.showModal();

    photo_overlay.innerHTML = displayPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
}

function closeDialogPhotoOverlay() {
    DIALOG_REF.close();
}

function initDisplayPhotoGallery() {
    getFolder();
    console.log(photos_thumbnail);
    
    console.log(photos_displayed);
    
}

function getFolder() {
    for (let i = 0; i < FOLDER_LIST.length; i++) {
        let folder = FOLDER_LIST[i].id;
        photos_thumbnail = document.getElementById(folder);
        getPhoto(folder);
    }
}

function getPhoto(foldername) {
    let photos_per_folder = All_PHOTOS[foldername];

    for (let i = 0; i < photos_per_folder.length; i++) {
        let photo_id = foldername + "-" + (i+1);
        let photo_src = "./photos/" + foldername + "/" + photos_per_folder[i].filename;
        let photo_alt = "Foto: " + photos_per_folder[i].description;
        let photo_description = photos_per_folder[i].description;
        let photo_copyright = "&#169 " + photos_per_folder[i].copyright;
        let photo_nr = photos_per_folder[i].folder + ":<br>" + (i+1) + " von " + photos_per_folder.length;
        
        let photo_value = new PhotoData(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
        
        let Photo = [{photoId:photo_value.photoId}, {photoSrc:photo_value.photoSrc}];
        // console.log(Photo);
        photos_displayed.push(Photo);

        photos_thumbnail.innerHTML += displayPhotoThumbnail(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
    }
    
    
}

function PhotoData(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    this.photoId = photo_id;
    this.photoSrc = photo_src;
    this.photoAlt = photo_alt;
    this.photoDescription = photo_description;
    this.photoCopyright = photo_copyright;
    this.photoNr = photo_nr;
}

function displayPhotoThumbnail(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    return `
        <img onclick="openDialogPhotoOverlay('${photo_src}', '${photo_alt}', '${photo_description}', '${photo_copyright}', '${photo_nr}')"
            class="ImagePhotoGallery"
            id=${photo_id}
            src=${photo_src}
            alt=${photo_alt}
        />`;
}

function displayPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    return `
        <header>
            <h3>${photo_description}</h3>
            <button onclick="closeDialogPhotoOverlay()">
                <img 
                    src="./img/icon-close-48-dark.svg" 
                    alt="X-Symbol zum Schließen des Dialogfensters"/>
            </button>
        </header>
        <figure>
            <img class="ImagePhotoOverlay"
                src=${photo_src}
                alt=${photo_alt}
            <figcaption><span class="figcaption">${photo_copyright}</span></figcaption>
        </figure>
        <footer>
            <button class="button-reverse">
                <img 
                    src="./img/icon-arrow-back-48-dark.svg" 
                    alt="Pfeil-Symbol nach links, um zum vorherigen Bild zu gelangen."/>
            </button>
            <span>${photo_nr}</span>
            <button>
                <img 
                    src="./img/icon-arrow-forward-48-dark.svg" 
                    alt="Pfeil-Symbol nach rechts, um zum nächsten Bild zu gelangen."/>
            </button>
        </footer>`;
}
