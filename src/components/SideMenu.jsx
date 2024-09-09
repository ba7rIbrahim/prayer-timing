// HOOKS
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import Link from "next/link";
// LIBRARIES
import { useTranslation } from "@/app/i18n/client";

export default function SideMenu({ showSideMenu, lng }) {
  let {t} = useTranslation(lng);
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <div
    dir={lng}
      className={`${showSideMenu ? (lng === 'en' ? 'left-0' : 'right-0') : (lng === 'en' ? '-left-80' : '-right-80')} ${mode} flex flex-col justify-between border-e top-0 duration-500 z-50 fixed h-screen`}
    >
      <div className="px-4 py-6">
        <span className={`${mode === 'dark' ? 'bg-slate-700' : 'bg-gray-100'} font-bold grid h-10 w-48 place-content-center rounded-lg text-xs`}>
          ATHAN
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="#"
              className={`${mode === 'dark' ? 'bg-slate-700' : 'bg-gray-100'} block rounded-lg px-4 py-2 text-sm font-medium`}
            >
              {t('General')}
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className={`${mode === 'dark' ? 'hover:bg-slate-700 bg-slate-800' : 'hover:bg-gray-100'} flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 `}>
                <span className="text-sm font-medium"> {t('Mode')} </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <button
                    onClick={() => {
                      setMode("dark");
                    }}
                    className={`${mode === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} block rounded-lg px-4 py-2 text-sm font-medium`}
                  >
                    {t("Dark Mode")}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setMode("light");
                    }}
                    className={`${mode === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} block rounded-lg px-4 py-2 text-sm font-medium`}
                  >
                    {t('Light Mode')}
                  </button>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className={`${mode === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} flex cursor-pointer items-center justify-between rounded-lg px-4 py-2`}>
                <span className="text-sm font-medium">{t('Language')}</span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <Link
                    href="/en"
                    className={`${mode === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} block rounded-lg px-4 py-2 text-sm font-medium`}
                  >
                    {t('English')}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/ar"
                    className={`${mode === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} block rounded-lg px-4 py-2 text-sm font-medium`}
                  >
                    {t('Arabic')}
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

    </div>
  );
}
