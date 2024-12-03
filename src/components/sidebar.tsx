import { ReactNode, useRef, MouseEvent } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  children: ReactNode;
}

export function Sidebar({ isOpen, toggleSidebar, children }: SidebarProps) {
  const sideBarStyle = isOpen ? "left-0" : "-left-[100%]";
  const asideRef = useRef<HTMLElement | null>(null);

  function handleSidebarClick(e: MouseEvent) {
    if (!asideRef.current) return;
    if (e.target == asideRef.current) toggleSidebar();
  }

  return (
    <aside
      onClick={(e) => handleSidebarClick(e)}
      ref={asideRef}
      className={`z-10 w-full sm:w-1/3 h-full sm:static absolute top-0 ${sideBarStyle} bg-black/40 sm:bg-none`}
    >
      <nav
        className={`w-3/4 p-4 sm:w-full h-full bg-slate-900 border-r border-slate-800 overflow-y-auto`}
      >
        {children}
      </nav>
    </aside>
  );
}
