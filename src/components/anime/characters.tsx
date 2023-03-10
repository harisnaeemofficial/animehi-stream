import { CharactersType } from '@/src/../types/types';
import React from 'react';
import Image from '@/components/shared/image';
import { base64SolidImage } from '@/utils/image';

export type CharactersProps = {
  characters: CharactersType[];
  color: string;
};

const Characters = ({ characters, color }: CharactersProps): JSX.Element => (
  <div>
    <div className="relative grid grid-cols-fill-character lg:grid-cols-2 gap-2 w-full h-full">
      {characters.slice(0, 10)?.map((character, index) => {
        return (
          <div
            key={index}
            className="bg-[#100f0f] flex w-full h-[68px] rounded gap-4"
          >
            <div className="flex-1 grid grid-cols-[70px_auto] gap-3">
              <Image
                layout="fill"
                src={character?.image}
                objectFit="cover"
                alt={character?.name.full}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
                  color
                )}`}
                containerclassname="relative"
              />
              <div className="flex justify-evenly flex-col">
                <h3 className="text-xs md:text-sm text-white opacity-90">
                  {character?.name.full}
                </h3>
                <p className="text-[8px] md:text-[10px] text-slate-300">
                  {character?.role}
                </p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-[auto_70px] gap-3 text-right">
              <div className="flex justify-evenly flex-col items-end">
                <h3 className="text-xs md:text-sm text-white opacity-90">
                  {character?.voiceActors[0]?.name.full}
                </h3>
                <p className="text-[8px] md:text-[10px] text-slate-300">
                  {character?.voiceActors[0]?.language}
                </p>
              </div>
              <Image
                layout="fill"
                src={character?.voiceActors[0]?.image}
                objectFit="cover"
                alt={character?.voiceActors[0]?.name.full}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
                  color
                )}`}
                containerclassname="relative"
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default React.memo(Characters);
