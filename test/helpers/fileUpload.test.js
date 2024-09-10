import {v2 as cloudinary} from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name:'vtorero-react',
    api_key:'132581341988128',
    api_secret:'ubur0iI5hyw3p-1hbBcypItX5zw',
    secure:true
})


describe('Pruebas en FileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob],'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
        const segments = url.split('/');
        const  imageId =segments[segments.length-1].replace('.png','');
       console.log('/journal/'+imageId)

        const cloudResp = await cloudinary.api.delete_resources(['journal/'+imageId ],{
            resource_type:'image'
        });
        console.log(cloudResp);
     })

     test('debe de retornar null', async() => {

        const file = new File([],'foto.jpg')
        const url = await fileUpload(file);
        expect(url).toBe(null)
      })
 })