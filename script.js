const Dialog_Ref = document.getElementById("#DialogPhotoOverlay");

function openDialogPhotoOverlay(no_bubbling) {
    Dialog_Ref.showModal();
    no_bubbling.stopPropagation();
}

function closeDialogPhotoOverlay() {
    Dialog_Ref.close();
}
