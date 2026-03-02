const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");


function openDialogPhotoOverlay(event_no_bubbling) {
    event_no_bubbling.stopPropagation();
    DIALOG_REF.showModal();   
}

// Warum schließt sich das Fenster, auch wenn ich auf den Header/Footer oder das Dialogfenster selbst klicke??
function closeDialogPhotoOverlay() {
    DIALOG_REF.close();
}

function initDisplayPhotoGallery() {
    const REF_LIST = document.getElementsByClassName("ImageContainerPhotoGallery");

    for (let i = 0; i < REF_LIST.length; i++) {
        displayPhotoGallery(REF_LIST[i].id);
        }   
    }

function displayPhotoGallery(foldername) {
    const PHOTOS = All_Photos[foldername];
    let photo = document.getElementById(foldername);
    let photo_overlay = document.getElementById("#PhotoOverlay");

    for (let i = 0; i < PHOTOS.length; i++) {
        let photo_src = "./photos/" + foldername + "/" + PHOTOS[i].filename;
        let photo_alt = "Foto: " + PHOTOS[i].description;
        let photo_description = PHOTOS[i].description;
        let photo_copyright = "&#169 " + PHOTOS[i].copyright;
            
        photo.innerHTML += getPhotoThumbnail(photo_src, photo_alt);
        photo_overlay.innerHTML = getPhotoOverlay(photo_description,photo_src, photo_alt, photo_copyright);
    }
}

function getPhotoThumbnail(photo_src, photo_alt) {
    return `
        <img  onclick="openDialogPhotoOverlay(event)"
            class="ImagePhotoGallery"
            src=${photo_src}
            alt=${photo_alt}
        />`;
}

function getPhotoOverlay(photo_description, photo_src, photo_alt, photo_copyright) {
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
