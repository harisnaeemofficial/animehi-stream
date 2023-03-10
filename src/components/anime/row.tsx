import { TitleType } from '@/src/../types/types';
import ColumnSection from '@/components/shared/column-section';
import { IAnimeInfo, IAnimeResult, ISearch } from '@consumet/extensions';
import React from 'react';

export type RowProps = {
  animeList?: ISearch<IAnimeResult | IAnimeInfo>;
  title: string;
  isLoading: boolean;
  season?: string;
};

const Row = ({ title, animeList, season, isLoading }: RowProps): JSX.Element =>
  !isLoading ? (
    <div className="w-full">
      <div className="md:space-between flex flex-col items-center space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex-1 bg-background-800 pt-4 w-full">
          <h2 className="mb-2 px-4 text-white text-base md:text-[20px] uppercase font-semibold">
            {title}
          </h2>
          <ul className="w-full">
            {animeList?.results?.map((anime, index) => (
              <ColumnSection
                animeId={anime.id}
                image={anime.image}
                title={anime.title as TitleType}
                type={anime.type}
                genres={anime.genres as string[]}
                status={anime.status}
                key={index}
                releaseDate={anime.releaseDate}
                color={anime.color as string}
              />
            ))}
            <li>
              <button className="bg-[#111] text-white w-full flex justify-center items-center py-3">
                View More
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <RowLoading />
  );

const ColumnLoading = () => (
  <div className="animate-pulse h-[88px] w-full odd:bg-[#0d0d0d] even:bg-[#111]"></div>
);

const RowLoading = () => {
  return (
    <div className="h-[520px] w-full flex flex-col">
      <div className="h-[30px] w-[200px] bg-[#111] rounded-lg mb-3"></div>
      {Array.from(Array(5), (_, i) => (
        <ColumnLoading key={i} />
      ))}
    </div>
  );
};

export default React.memo(Row);
