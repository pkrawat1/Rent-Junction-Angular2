import { Pipe } from 'angular2/core';

@Pipe({ name: 'thumbnail' })
export class ThumbnailPipe {

  transform(imageUrl:string, modifiers:string){
    return imageUrl && imageUrl.replace('upload', 'upload/' + modifiers);
   }
}