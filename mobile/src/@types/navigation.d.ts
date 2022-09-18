export interface GameParams{
   id:string,
   title:string,
   bannerUrl:string
}

export declare global{
   namespace ReactNatigation{
      interface RootParamsList{
         home: undefined;
         game: {
            id:string,
            title:string,
            bannerUrl:string
         }
      }
   }
}