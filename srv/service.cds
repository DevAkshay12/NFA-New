using { proj_schema as my } from '../db/schema';

service CatalogService {
     @odata.draft.enabled
 entity tab1 as projection on my.PAN_Details;
 entity tab2 as projection on my.PAN_WEB_EVENT;
}