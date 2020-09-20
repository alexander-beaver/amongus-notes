export default class APIConnect{
    // This uses a CORS bypass system to a Google Cloud Storage system. Replace this with the server URL.
    static BASE_URL = "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/among-us-cdn/";

    static SCOUTING_GENERATION_SCHEMA = APIConnect.BASE_URL + "skeldconfig.json";

    static SCOUTING_ENDSTATES = APIConnect.BASE_URL + "endstates.json";

    static MATCH_CONFIG = APIConnect.BASE_URL + "matchConfig.json";
}