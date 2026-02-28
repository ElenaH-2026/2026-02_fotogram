const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");

const PHOTOS_ELBA = document.getElementById("elba");
const PHOTOS_NZ_FIJI = document.getElementById("nz-fiji");
const PHOTOS_USA_HAWAII = document.getElementById("#usa-hawaii");
const PHOTOS_OTHERS = document.getElementById("#others");

function openDialogPhotoOverlay(no_bubbling) {
    DIALOG_REF.showModal();
    no_bubbling.stopPropagation();
}

function closeDialogPhotoOverlay() {
    DIALOG_REF.close();
}

function initDisplayPhotoGallery() {
    
    const REF_LIST = document.getElementsByClassName("ImageContainerPhotoGallery");

    for (let i = 0; i < REF_LIST.length; i++) {
        if (REF_LIST[i].id == "nz-fiji") {
            let constPhoto = PHOTOS_NZ_FIJI;
            displayPhotoGallery(REF_LIST[i].id, constPhoto);
        }
        
        
    }

}

function displayPhotoGallery(foldername, constPhoto) {
    const PHOTOS = All_Photos[foldername];
    let photo = constPhoto
    for (let i = 0; i < PHOTOS.length; i++) {
        let photo_filename = PHOTOS[i].filename;
        let photo_description = PHOTOS[i].description;
            
        photo.innerHTML += `
            <img  onclick="openDialogPhotoOverlay(event)"
                class="ImagePhotoGallery"
                src="./photos/${foldername}/${photo_filename}" 
                alt="Foto: ${photo_description}"/>`;
    }
}




// --- Variante mit ID ---

// function displayPhotoGallery(foldername) {
//     const PHOTOS = All_Photos[foldername];
//     let photo = document.getElementById("#elba");

//     for (let i = 0; i < PHOTOS.length; i++) {
//         let photo_filename = PHOTOS[i].filename;
//         let photo_description = PHOTOS[i].description;
            
//         photo.innerHTML += `
//             <img  onclick="openDialogPhotoOverlay(event)"
//                 class="ImagePhotoGallery"
//                 src="./photos/${foldername}/${photo_filename}" 
//                 alt="Foto: ${photo_description}"/>`;
//     }
// }

