import type { MDXComponents } from "mdx/types";
import React from "react";

function Step({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 my-5 p-5 bg-stone-900/40 border border-stone-800/60 rounded-2xl">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
        <span className="text-xs font-black text-amber-400">{num}</span>
      </div>
      <div className="flex-1 min-w-0 pt-0.5">
        <p className="text-sm font-bold text-white mb-1">{title}</p>
        <div className="text-sm text-stone-400 leading-relaxed m-0">
          {children}
        </div>
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 pl-4 py-4 pr-5 bg-amber-500/5 border-l-2 border-amber-400 rounded-r-xl">
      <div className="text-sm text-stone-300 leading-relaxed m-0">
        {children}
      </div>
    </div>
  );
}

function Compare({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
}: {
  leftTitle: string;
  rightTitle: string;
  leftItems: string[];
  rightItems: string[];
}) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3">
      <div className="p-4 bg-stone-900/30 border border-stone-800/50 rounded-xl">
        <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">
          {leftTitle}
        </p>
        <ul className="space-y-2">
          {leftItems.map((item, i) => (
            <li
              key={i}
              className="text-xs text-stone-400 flex items-start gap-2"
            >
              <span className="text-rose-400 mt-0.5">✗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
        <p className="text-xs font-bold text-amber-500/80 uppercase tracking-widest mb-3">
          {rightTitle}
        </p>
        <ul className="space-y-2">
          {rightItems.map((item, i) => (
            <li
              key={i}
              className="text-xs text-stone-300 flex items-start gap-2"
            >
              <span className="text-amber-400 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="inline-flex flex-col items-center px-6 py-4 bg-stone-900/40 border border-stone-800/60 rounded-2xl mx-1 my-2">
      <span className="text-2xl font-black text-amber-400">{value}</span>
      <span className="text-xs text-stone-500 font-semibold mt-1">{label}</span>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Step,
    Callout,
    Compare,
    Stat,
    h1: ({ children }) => (
      <h1 className="text-2xl font-extrabold text-white tracking-tight mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold text-white tracking-tight mt-10 mb-4 pb-3 border-b border-stone-800/60">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-bold text-stone-100 mt-7 mb-3">
        {children}
      </h3>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-amber-400 border-b border-amber-400/30 hover:border-amber-400 transition-colors duration-150 no-underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-stone-400">{children}</em>,
    ul: ({ children }) => (
      <ul className="my-4 space-y-2 pl-0 list-none">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 space-y-2 pl-0 list-none counter-reset-[item]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="flex items-start gap-3 text-[0.9375rem] text-stone-300 leading-relaxed">
        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-[0.6rem]" />
        <span>{children}</span>
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 pl-5 py-1 border-l-2 border-amber-400/50 bg-amber-500/4 rounded-r-lg italic text-stone-400">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-amber-500/8 text-amber-400 text-[0.82em] px-1.5 py-0.5 rounded-md font-mono">
        {children}
      </code>
    ),
    hr: () => <hr className="my-10 border-none border-t border-stone-800/60" />,

    ...components,
  };
}
