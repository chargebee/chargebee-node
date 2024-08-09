declare module 'Chargebee' {
  export namespace filter {
    export interface String {
      is?: string;
      is_not?: string;
      starts_with?: string;
      is_present?: boolean;
      in?: string[];
      not_in?: string[];
    }

    export interface Timestamp {
      on?: number;
      before?: number;
      after?: number;
      between?: [number, number];
      is_present?: boolean;
    }

    export interface Date {
      on?: number;
      before?: number;
      after?: number;
      between?: [number, number];
      is_present?: boolean;
    }

    export interface Number {
      gt?: number;
      lt?: number;
      gte?: number;
      lte?: number;
      between?: [number, number];
      is?: number;
      is_not?: number;
      is_present?: number;
    }

    export interface Boolean {
      is?: boolean;
      is_present?: boolean;
    }

    export interface Enum {
      is?: any;
      is_not?: any;
      is_present?: any;
      in?: any[];
      not_in?: any[];
    }
  }
}
