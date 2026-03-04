const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");
const FOLDER_LIST = document.getElementsByClassName("ImageContainerPhotoGallery");
let photos_thumbnail = "";
let photo_overlay = document.getElementById("#PhotoOverlay");

function openDialogPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    DIALOG_REF.showModal();

    photo_overlay.innerHTML = displayPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
}

// Warum schließt sich das Fenster, auch wenn ich auf den Header/Footer oder das Dialogfenster selbst klicke??
function closeDialogPhotoOverlay() {
    DIALOG_REF.close();
}

function initDisplayPhotoGallery() {

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
        
        photos_thumbnail.innerHTML += displayPhotoThumbnail(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
    }
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
        <section class="SectionPhotoOverlay">
            <figure>
                <img class="ImagePhotoOverlay"
                    src=${photo_src}
                    alt=${photo_alt}
                <figcaption>${photo_copyright}</figcaption>
            </figure>
        </section>
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
