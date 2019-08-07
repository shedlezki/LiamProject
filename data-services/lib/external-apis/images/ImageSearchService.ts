import {Request, Response} from "express";
import {Image} from "./Image";
import {Images} from "azure-cognitiveservices-imagesearch/lib/models";
import * as Search from 'azure-cognitiveservices-imagesearch';
import {CognitiveServicesCredentials} from 'ms-rest-azure';
export class ImageSearchService {
    public routes(app): void {
        app.route('/images')
            .get((req: Request, res: Response) => {
               this.imageSearch(req.query.q).then(imageResults=>{
                    if (imageResults == null) {
                        res.status(200).send("No image results were found.");
                    }
                    else {
                        let result = imageResults.value.map(a =>  new Image(a.contentUrl, a.thumbnailUrl));
                        res.status(200).send(result);
                    }
                });
            })

    }
    private imageSearch(searchTerm: string): Promise<Images>{
        const serviceKey: string = "05e081dedb1f45b49cacb2376293756f";
        //instantiate the image search client
        let credentials = new CognitiveServicesCredentials(serviceKey);
        let imageSearchApiClient = new Search.ImageSearchClient(credentials);
        return imageSearchApiClient.imagesOperations.search(searchTerm);
    }
}