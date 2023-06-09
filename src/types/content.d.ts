import { File } from "./strapi";

interface StrapiModel {
  id: number;
  // Fields are in ISO-8601 format
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export type Role =
  | "management"
  | "partyManagement"
  | "confidant"
  | "confidant"
  | "trainerYouth"
  | "trainerFromCadet"
  | "trainerGTeam"
  | "trainerJoggers";

export type TrainerRole = Extract<
  Role,
  "trainerYouth" | "trainerFromCadet" | "trainerGTeam" | "trainerJoggers"
>;

export interface Person extends StrapiModel {
  title: string;
  name: string;
  phoneMobile: string | null;
  phoneLandLine: string | null;
  email: string | null;
  profilePhoto: File | null;
  addressStreet: string | null;
  addressZip: string | null;
  addressPlace: string | null;
  roles: Role[];
}

export interface Article extends StrapiModel {
  title: string;
  content: string;
  location: string | null;
  coverPhoto: File | null;
}

export interface Sponsor extends StrapiModel {
  link: string;
  picture: File;
}

export interface UpcomingEvent extends StrapiModel {
  linkText: string;
  link: string;
  title: string;
  date: string;
  location: String;
  registrationFinalDate: string | null;
  registrationByClub: boolean;
}

export interface Contest extends StrapiModel {
  title: string;
  date: string;
  registrationLink: string | null;
  scheduleLink: string | null;
  websiteLink: string | null;
}

export interface Result extends StrapiModel {
  title: string;
  date: string;
  link: string;
}

export interface FooterLink extends StrapiModel {
  description: string;
  link: string | null;
  file: File | null;
  icon: string | null;
}

export interface FileLink extends StrapiModel {
  description: string;
  file: File;
}

export interface RegistrationPage extends StrapiModel {
  introText: string;
  privacyStatement: string;
  registrationSubmittedMessage: string;
  registrationSubmittedCloseButtonText: string;
}

export interface Training extends StrapiModel {
  day:
    | "Maandag"
    | "Dinsdag"
    | "Woensdag"
    | "Donderdag"
    | "Vrijdag"
    | "Zaterdag"
    | "Zondag";
  startTime: string;
  endTime: string;
  place: string;
  type: "youth" | "fromCadet" | "gTeam" | "joggers";
  comment: string | null;
}

export interface ClubRecord extends StrapiModel {
  category: string;
  type: "indoor" | "outdoor";
  ageBracket: "youth" | "fromCadet" | "master";
  file: File;
}

export type RegistrationCategory =
  | "Benjamins"
  | "Pupillen"
  | "Miniemen"
  | "Kadetten"
  | "Scholieren"
  | "Juniors"
  | "Seniors"
  | "Masters";

export interface Registration {
  event: string;
  name: string;
  email: string;
  gender: "male" | "female" | null;
  birthYear: string;
  category: RegistrationCategory | null;
  valNumber: string;
  discipline: string;
  bestPerformance: string;
  comment: string;
}
