import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

// Take sanity CDN image url and parse them in the correct format
const builder = imageUrlBuilder(client);

function urlFor(source: any){
    return builder.image(source)
}

export default urlFor;
