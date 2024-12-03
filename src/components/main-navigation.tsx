"use client";

import { CaretLeft, MusicNotes, X } from "@phosphor-icons/react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { ReactNode, useState } from "react";
import { SongList } from "./song-list";

interface MainNavigationProps {
  children: ReactNode;
}

export function MainNavigation({ children }: MainNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Header>
        <button
          onClick={toggleSidebar}
          name="Toggle songs drawer"
          className="sm:hidden flex items-center gap-1"
        >
          {isOpen ? (
            <X fill="regular" size={16} className="fill-slate-100" />
          ) : (
            <>
              <CaretLeft fill="regular" size={16} className="fill-slate-100" />
              <MusicNotes fill="regular" size={16} className="fill-slate-100" />
            </>
          )}
        </button>
      </Header>

      <div className="w-full h-[80vh] flex items-start relative">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
          <SongList onSongSelect={toggleSidebar} />
        </Sidebar>

        <div className="w-full h-full overflow-auto">{children}</div>
      </div>
    </>
  );
}
