"use client";

import { CaretDown } from "@phosphor-icons/react";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface SongData {
  id: string;
  name: string;
  slug: string;
}

export interface Saga {
  index: number;
  id: string;
  name: string;
  songs: SongData[];
}

export interface SongListProps {
  onSongSelect: () => void;
}

const textColors: Record<string, Record<string, string>> = {
  "Troy Saga": { text: "text-red-400", fill: "fill-red-400" },
  "Polyphemus Saga": { text: "text-orange-400", fill: "fill-orange-400" },
  "Ocean Saga": { text: "text-blue-400", fill: "fill-blue-400" },
  "Circe Saga": { text: "text-fuchsia-400", fill: "fill-fuchsia-400" },
  "Underworld Saga": { text: "text-gray-400", fill: "fill-gray-400" },
  "Thunder Saga": { text: "text-yellow-400", fill: "fill-yellow-400" },
  "Wisdom Saga": { text: "text-violet-400", fill: "fill-violet-400" },
  "Vengeance Saga": { text: "text-cyan-600", fill: "fill-cyan-600" },
  "Ithaca Saga": { text: "text-red-600", fill: "fill-red-600" },
};

export function SongList({ onSongSelect }: SongListProps) {
  const [sagas, setSagas] = useState<Saga[]>([]);

  useEffect(() => {
    function getSagas() {
      const json: Promise<{ sagas: Saga[] }> = fetch("/api/songs").then(
        (res) => res.json() as Promise<{ sagas: Saga[] }>
      );
      return json;
    }
    getSagas()
      .then((json) => setSagas(json.sagas))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Accordion.Root className="flex flex-col items-start gap-4" type="multiple">
        {sagas.map((saga) => (
          <Accordion.Item key={saga.id} value={saga.name}>
            <Accordion.Trigger
              className={`${
                textColors[saga.name]["text"]
              } font-medium text-opacity-50 hover:text-opacity-100 flex items-center gap-4 [&[data-state=open]>.CaretDown]:rotate-180`}
            >
              {saga.name}

              <CaretDown
                fill="regular"
                size={16}
                className={`CaretDown ${textColors[saga.name]["fill"]}`}
              />
            </Accordion.Trigger>

            <Accordion.AccordionContent>
              <ul className="ml-4">
                {saga.songs.map((song) => (
                  <li
                    key={song.id}
                    className={`${
                      textColors[saga.name]["text"]
                    } text-opacity-50 hover:text-opacity-100`}
                  >
                    <Link href={`/songs/${song.slug}`} onClick={onSongSelect}>
                      <span>{song.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion.AccordionContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
