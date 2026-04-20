import Link from 'next/link';

export default function JustWatchLink({url}: {url: string}) {
  return (
    <div className="flex items-center justify-between p-2">
        
      {/* Link do JustWatch */}
      <a 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-gray-500 hover:text-blue-500 transition-colors text-[12px]
        tracking-wider font-bold"
      >
        {/* Ícone simplificado do JustWatch (Play) */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-4 h-4"
        >
          <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
        </svg>
        JustWatch
      </a>
    </div>
  );
}