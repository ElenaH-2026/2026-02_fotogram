const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");


function openDialogPhotoOverlay(no_bubbling) {
    no_bubbling.stopPropagation();
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

    for (let i = 0; i < PHOTOS.length; i++) {
        let photo_filename = PHOTOS[i].filename;
        let photo_description = PHOTOS[i].description;
            
        photo.innerHTML += getImage(foldername, photo_filename, photo_description);
    }
}

function getImage(foldername, photo_filename, photo_description) {
    return `
        <img  onclick="openDialogPhotoOverlay(event)"
            class="ImagePhotoGallery"
            src="./photos/${foldername}/${photo_filename}" 
            alt="Foto: ${photo_description}"/>`;
}
