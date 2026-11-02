///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface PreferenceVariant {
    value: string;
    allow_override_in_interface?: boolean;
    allow_override_in_api?: boolean;
  }
}
