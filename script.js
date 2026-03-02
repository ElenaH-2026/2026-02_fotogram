const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");
const FOLDER_LIST = document.getElementsByClassName("ImageContainerPhotoGallery");
let folder = "";
let photos_per_folder = All_PHOTOS[folder];
let photo = "";
let photo_overlay = document.getElementById("#PhotoOverlay");

function openDialogPhotoOverlay(event_no_bubbling) {
    event_no_bubbling.stopPropagation();
    DIALOG_REF.showModal();   
}

// Warum schließt sich das Fenster, auch wenn ich auf den Header/Footer oder das Dialogfenster selbst klicke??
function closeDialogPhotoOverlay() {
    DIALOG_REF.close();
}

function initDisplayPhotoGallery() {

    for (let i = 0; i < FOLDER_LIST.length; i++) {
        folder = FOLDER_LIST[i].id;
        photo = document.getElementById(folder);
        getPhoto(folder);
        }   
    }

function getPhoto(foldername) {
    photos_per_folder = All_PHOTOS[foldername];

    for (let i = 0; i < photos_per_folder.length; i++) {
        let photo_src = "./photos/" + foldername + "/" + photos_per_folder[i].filename;
        let photo_alt = "Foto: " + photos_per_folder[i].description;
        let photo_description = photos_per_folder[i].description;
        let photo_copyright = "&#169 " + photos_per_folder[i].copyright;
            
        photo.innerHTML += displayPhotoThumbnail(photo_src, photo_alt);
        photo_overlay.innerHTML = displayPhotoOverlay(photo_description,photo_src, photo_alt, photo_copyright);
    }
}

function displayPhotoThumbnail(photo_src, photo_alt) {
    return `
        <img onclick="openDialogPhotoOverlay(event)"
            class="ImagePhotoGallery"
            src=${photo_src}
            alt=${photo_alt}
        />`;
}

function displayPhotoOverlay(photo_description, photo_src, photo_alt, photo_copyright) {
    return `
        <header>
            <h3>${photo_description}</h3>
            <button onclick="closeDialogPhotoOverlay()">x</button>
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
            <button>(<=)</button>
            <span>y/x</span>
            <button>(=>)</button>
        </footer>`;
}
