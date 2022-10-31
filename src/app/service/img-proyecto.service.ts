import { Injectable } from '@angular/core';
import { getDownloadURL, listAll , Storage, uploadBytes } from '@angular/fire/storage';
import { ref } from '@firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgProyectoService {

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `proyectos/proyecto_${new Date().getTime()}`);
    uploadBytes(imgRef, file)
      .then(response => { this.getImages() })
      .catch(error => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'proyectos');
    listAll(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La URL es: " + this.url);
        }
      })
      .catch(error => console.log(error));
  }
}