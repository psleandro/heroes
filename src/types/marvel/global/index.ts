import { Character } from '../characters';
import { Comic } from '../comics';
import { Creator } from '../creators';
import { Event } from '../events';
import { Serie } from '../series';
import { Story } from '../stories';

export type MarvelApiEntity =
  | Comic
  | Event
  | Serie
  | Story
  | Character
  | Creator;
