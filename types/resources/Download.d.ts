///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface Download {
    download_url: string;

    valid_till: number;

    mime_type?: string;
  }
}
