"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Image_1 = require("./Image");
const Search = require("azure-cognitiveservices-imagesearch");
const ms_rest_azure_1 = require("ms-rest-azure");
class ImageSearchService {
    routes(app) {
        app.route('/images')
            .get((req, res) => {
            this.imageSearch(req.query.q).then(imageResults => {
                if (imageResults == null) {
                    res.status(200).send("No image results were found.");
                }
                else {
                    let result = imageResults.value.map(a => new Image_1.Image(a.contentUrl, a.thumbnailUrl));
                    res.status(200).send(result);
                }
            });
        });
    }
    imageSearch(searchTerm) {
        const serviceKey = "05e081dedb1f45b49cacb2376293756f";
        //instantiate the image search client
        let credentials = new ms_rest_azure_1.CognitiveServicesCredentials(serviceKey);
        let imageSearchApiClient = new Search.ImageSearchClient(credentials);
        return imageSearchApiClient.imagesOperations.search(searchTerm);
    }
}
exports.ImageSearchService = ImageSearchService;
//# sourceMappingURL=ImageSearchService.js.map