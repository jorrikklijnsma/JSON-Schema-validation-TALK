/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IsMatch {
  dates: SinlgeDate[];
}
export interface SinlgeDate {
  what?: 'Restaurant' | 'Coffee';
  when?: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  how?: {
    [k: string]: unknown;
  };
}
export interface HowToKeepItGoing {
  dinner_together: number;
  seat: 'UP' | 'DOWN';
  cubes_stored: boolean;
  speed_cube_tournament_unix?: number;
  new_date?: SinlgeDate;
}
