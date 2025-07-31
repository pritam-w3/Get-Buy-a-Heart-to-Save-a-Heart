import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Buy a Heat to Save a Heart",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace:
                "andr1lttt2mkz22gyxepjuw56vgerne4zppneketmpwa98wxnkhwupcrqeyayv4",
            cw721: "andr1s736kgtlhgtvv0kk9zkuq38dgwgk5unhk84tkwms5a8xewr5vdwsn56vu4",
            name: "Oragan Contrubution",
            type: ICollectionType.MARKETPLACE,
            id: "embeddables-marketplace-1",
        }
    ],
};

export default CONFIG;
